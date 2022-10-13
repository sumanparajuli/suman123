const User = require('../models/UserSchema')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')

// login endpoint 
const loginUser = async (req, res) => {

    try {
        const user = await User.findOne({
            email: req.body.email,
        })


        if (user && (await bcrypt.compare(req.body.password, user.password))) {

            const payload = {
                user: {
                    id: user._id
                }
            }

            const jwtData = jwt.sign(payload, dotenv.parsed.JWT_SECRET)

            return res.status(200).json({ status: 'ok you can login', jwtData })
        } else {

            return res.status(401).json({ status: 'bad', message: "provide valid credentials" })
        }

    } catch (error) {
        res.status(500).json({ error: 'server error' })
    }

    res.send("success")

}

// signup endpoint
const createUser = async (req, res) => {
    const isUserExists = await User.findOne({
        email: req.body.email
    })
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
    try {
        if (!isUserExists) {

            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            })
            
            const data = {
                user: {
                    id: user._id
                }
            }
            
            const jwtData = jwt.sign(data, dotenv.parsed.JWT_SECRET)
            
            console.log(jwtData)

            return res.status(201).json({
                token: jwtData
            })

        } else {
            return res.status(401).json({ message: 'user with the same email already exists.' })
        }

    } catch (error) {

        return res.json(500).json({ message: 'server error' })
    }
}


module.exports = {
    loginUser,
    createUser
}