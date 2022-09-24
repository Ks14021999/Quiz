const mongoose = require('mongoose')
const random = require('mongoose-simple-random')

const quesSchema = new mongoose.Schema({
    ques: {
        type: String,
        required: true,
        trim: true
    },
    options: [String],
    answer: {
        type: Number,
        required: true
    }
})

quesSchema.plugin(random)

module.exports = mongoose.model('Question', quesSchema)