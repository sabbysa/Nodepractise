// const fs= require('fs')

// fs.writeFile("happy1.txt","hello",(err,data)=>{
//     if(err){
//         console.log("error")
//     }
//     else{
//         console.log("success")
//     }
// })

//server
const http= require('http')
const url = require('url')
http.createServer((req,res)=>{
  const page = url.parse(req.url).pathname
  if(page == '/about'){
      res.write("this is about page")
  }
  else if(page == '/products'){
      res.write("this is products page")
  }
  res.end()
}).listen(5900)