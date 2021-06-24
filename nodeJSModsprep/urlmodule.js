 //const url = require('url')
// const add = 'http://whiteboxqa.com/demos.php'

// const q = url.parse(add)
// console.log(q.host)

// http

// const http = require('http')
// http.createServer((req,res)=>{
//   res.write("hi how r u !!!")
//   res.end()
// }).listen(8080)
//http requs

const http = require('http')
http.createServer((req,res)=>{
   
  res.writeHead(200,{'Content-Type':'text/html'})
res.write("hi welcome to page 8080")
  res.end()
}).listen(8080)
//https with /about /products cutomize
// const http = require('http')
// const url = require('url')

// http.createServer((req,res)=>{
//     const page = url.parse(req.url).pathname
//   res.writeHead(200,{'Content-Type':'text/html'})
// if(page =='/'){
//     res.write("hi hello")
// }
// else if(page =='/about'){
//     res.write("welcome to about")
// }
// else if(page =='/products'){
//     res.write("products page")
// }
//   res.end()
// }).listen(8080)