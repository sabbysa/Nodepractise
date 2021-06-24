const express = require("express")
const app = express();
const mongoose = require('mongoose')
 require('dotenv/config')
 const bodyParser = require('body-parser');
app.use(bodyParser.json())
// //import routes
 const postsRoute = require('./routes/posts')
 app.use('/posts', postsRoute)

//middleware
// app.use('/posts', ()=>{
//     console.log("this is a middlewre")
// })
// routes
app.get('/', (req,res)=>{
    res.send("we are now on home")
})
//connect db
 mongoose.set('useUnifiedTopology', true)
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{   
 console.log("connected to db")
 })
app.listen(3000) 