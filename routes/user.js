const express = require('express')
const router = express.Router()

const { requireSignIn, isAuth } = require('../controllers/auth')
const { userById, readUserProfile, updateUserProfile, topTenUsers } = require('../controllers/user')


router.get("/user/:userId", requireSignIn, isAuth, readUserProfile)
router.put("/user/:userId", requireSignIn, isAuth, updateUserProfile)
router.get("/user/leaderboard/:userId", requireSignIn, isAuth, topTenUsers)


router.param("userId", userById)

module.exports = router