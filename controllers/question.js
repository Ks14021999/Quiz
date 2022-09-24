const Question = require('../models/Question')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.readQues = (req, res) => {
    return res.json(req.ques)
}

exports.createQuestion = (req, res) => {
    const ques = new Question(req.body);
    ques.save((err, data) => {

        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }

        res.json({ data })
    })
}

exports.getAllQues = (req, res) => {
    Question.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.quesById = (req, res, next, id) => {
    Question.findById(id).exec((err, ques) => {
        if (err || !ques) {
            return res.status(400).json({
                error: "Question does not exist!"
            })
        }
        req.ques = ques
        next()
    })
}

exports.updateQues = (req, res) => {
    const question = req.ques
    question.ques = req.body.ques
    question.answer = req.body.answer
    question.options = req.body.options

    question.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.deleteQues = (req, res) => {
    const question = req.ques

    question.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "question deleted"
        })
    })
}

exports.findQuestions = (req, res) => {
    Question.aggregate([{ $sample: { size: 6 } }], (err, questions) => {
        if (err) {
            return res.status(400).json({
                error: "Questions not Found!"
            })
        }

        res.json(questions)
    })
}