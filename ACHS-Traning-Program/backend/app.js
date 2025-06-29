const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (reg, res, next) =>{
    res.status(200).json({message:'Hello'})
})

app.post('/', (reg, res, next) =>{
    res.status(201).json ({data:'data'})
})

app.listen(8080, () => {
    console.log('Listening at port number 8080')
})