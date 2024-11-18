"use-strict";

// console.log('nodejs server');

const http = require('node:http')

// http.createServer((request,response)=>{

// })

// server oluştur
// http.createServer((req,res)=>{
//     console.log('server içerisindesin');

//     res.end('hello Node')
// })

// gelen istekleri dinlemeye başla
const app = http.createServer((req,res)=>{
    console.log('server içerisindesin');

    res.end('hello Node')
})
app.listen(8000,'127.0.0.1')



