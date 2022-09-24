const User = require('../models/User')


exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "user not found"
            })
        }
        req.profile = user
        next()
    })
}

exports.readUserProfile = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

exports.updateUserProfile = (req, res) => {
    User.findOneAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true }, (err, user) => {

        if (err || !user) {
            return res.status(400).json({
                error: "You are not authorized to perform this action!"
            })
        }
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    })

}

exports.topTenUsers = (req, res) => {
    let order = req.query.order ? req.query.order : "desc"
    let sortBy = req.query.sortBy ? req.query.sortBy : "score"
    let limit = req.query.limit ? parseInt(req.query.limit) : 10

    User.find()
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, users) => {
            if (err) {
                return res.status(400).json({
                    error: "Users not found!"
                })
            }
            res.json(users)
        })
}
