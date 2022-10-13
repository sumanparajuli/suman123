const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/olympics'
mongoose.connect(uri, ()=>{
    console.log('connected to mongodb succcessfully')
})