const express = require('express')
const router = express.Router()

//import middleware to ensure question only accessed by admin
const { isAdmin, isAuth, requireSignIn } = require('../controllers/auth')
const { createQuestion, quesById, getAllQues, readQues, updateQues, deleteQues, findQuestions } = require('../controllers/question')
const { userById } = require('../controllers/user')


router.post('/ques/create/:userId', requireSignIn, isAuth, isAdmin, createQuestion)
router.put('/ques/:quesId/:userId', requireSignIn, isAuth, isAdmin, updateQues)
router.delete('/ques/:quesId/:userId', requireSignIn, isAuth, isAdmin, deleteQues)
router.get('/questions', requireSignIn, getAllQues)
router.get('/ques/:quesId', requireSignIn, readQues)
router.get('/ques/find/:userId', requireSignIn, isAuth, findQuestions)

router.param('quesId', quesById)
router.param('userId', userById)

module.exports = router 