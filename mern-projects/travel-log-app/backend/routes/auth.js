const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const {createUser, loginUser} = require('../controllers/auth')

// Route 1 : Signup and login endpoint
router.route('/signup').post(createUser)
router.route('/login').post(loginUser)

module.exports = router