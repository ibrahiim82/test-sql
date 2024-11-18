"use-strict";

// console.log('nodejs server');

const http = require("node:http");

// http.createServer((request,response)=>{

// })

// server oluştur
// http.createServer((req,res)=>{
//     console.log('server içerisindesin');

//     res.end('hello Node')
// })

// gelen istekleri dinlemeye başla
// const app = http.createServer((req,res)=>{
//     console.log('server içerisindesin');

//     res.end('<h1> hello Node </h1>')
// })
// app.listen(8000,'127.0.0.1')

// const app = http.createServer((req,res)=>{
//     console.log('server içerisindesin');

//     res.end('<h1> hello Node </h1>')
// }).listen(8000,'127.0.0.1')
//app.listen veya direkt listen diyebiliriz

// const app = http.createServer((req, res) => {
//     res.end("<h1> hello Node </h1>");
//     console.log("server içerisindesin");
//   }).listen(8000, "127.0.0.1",()=> console.log('server Runned http://127.0.0.1:8000'));

require('dotenv').config()
const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || `127.0.0.1`

// const app = http.createServer((req, res) => {

//     if (req.url=='/')
//         if(req.method=='GET') 
//             res.end('<h1> Home page </h1>')
//         else
//             res.end('<h1> You can not POST </h1>')   
//     else if(req.url=='/user')
//         res.end('<h1> Home page </h1>')
//     else
//         res.end('<h1> Home page </h1>')
    
// }).listen(PORT,() =>console.log(`server Runned http://${HOST}:${PORT}`));


const app = http.createServer((req, res) => {

    
    
}).listen(PORT,() =>console.log(`server Runned http://${HOST}:${PORT}`));






