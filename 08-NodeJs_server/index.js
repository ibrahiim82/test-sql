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

const app = http
  .createServer((req, res) => {
    res.end("<h1> hello Node </h1>");
    console.log("server içerisindesin");
  })
  .listen(8000, "127.0.0.1");
