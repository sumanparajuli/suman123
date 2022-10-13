const express = require('express')
const app = express()

app.use(express.json())

const favLangs = ['html', 'css', 'javascript', 'python']

app.get('/api/get-records', (req, res)=>{
    res.json({lang: favLangs})
})

app.post('/api/create-record', (req, res)=>{
    const record = req.body.record
    favLangs.push(record)
    res.json({status: 'ok'})
})

app.listen(5000, ()=>{
    console.log('app started at port 5000')
})