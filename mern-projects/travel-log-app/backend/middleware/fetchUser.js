const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()


const fetchUser = (req, res, next)=>{

    const token = req.header("auth-token")

    if(!token){
        res.status(401).send({error: 'Please provide auth token'})
    }

    const data = jwt.verify(token, dotenv.parsed.JWT_SECRET)

    req.user = data.user

    next()
}



module.exports = fetchUser