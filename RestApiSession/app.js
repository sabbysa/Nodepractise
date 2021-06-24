const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', (req,res)=>{
    res.send("we are now connected")
})
app.post('/login', (req,res)=>{
    
})
mongoose.connect('mongodb+srv://sabby:sabby12@cluster0.vswwm.mongodb.net/Api1prep?retryWrites=true&w=majority', {
    userNewUrlParsetr:true},()=>{
        console.log("connected to DB")
    }
})

app.listen(3000)