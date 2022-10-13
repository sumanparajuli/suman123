const express = require('express')
require("../src/db/conn")
const app = express()
app.use(express.json())
const MensRanking = require("../src/models/mans")

const port = process.env.PORT || 3000;

app.post('/mens', async(req, res)=>{
    try {
        const addingMensRecord = new MensRanking(req.body)
        console.log(req.body)
    } catch (error) {
        res.send(error)
    }
})

app.listen(port, ()=>{
    console.log('Connection is live at port ', port)
})