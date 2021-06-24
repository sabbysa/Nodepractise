const express = require ("express")
const jwt = require('jsonwebtoken')
const app = express()


app.get('/api', (req, res)=>{
    res.json({
        message: 'welcome to api'
    })
})

app.post('/api/posts', verifyToken, (req, res)=>{
jwt.verify(req.token, 'secretkey', (err, authData)=>{
    if(err){
        res.sendStatus(403)
    }
    else{
        res.json({
            message: 'this is posts page created',
            authData
        })
    }
})
     
}) 


app.post('/api/login', (req, res)=>{

    //user
    const user = {
        id:1,
        username:"bill",
        email:"bill@gmail.com"
    }
    jwt.sign({user},'secretkey', (err,token)=>{
res.json({
    token
})
    })
}) 


function verifyToken(req,res,next){
    //get auth header avlue
    const bearerHeader = req.headers['authorization']
    //check for undefined
    if(typeof bearerHeader !== 'undefined'){
const bearer = bearerHeader.split(' ')
const bearerToken = bearer[1]
req.token = bearerToken
    
    next() 
    }
    else{
        res.sendStatus(403)
    }
}
app.listen(5000,()=>console.log("success"))








