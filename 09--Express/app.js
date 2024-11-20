"use strict"

//?    EXPRESSJS

// npm init -y
//npm i express dotenv
/* ------------------------------------------------------- */

const express = require('express') //express assigned (bildirildi)
const app = express() // express started

// dotenv
require('dotenv').config() // .env içindeki değişkenler process.env'ye atandı.
const HOST = process.env.HOST || '127.0.0.1' //host string ile yazılmak zorunda (local IP: '127.0.0.1)
const PORT = process.env.PORT || 8000

/* ------------------------------------------------------- */

//^HTTP_METHODS & URLs: 
// app.get('/', (request, response)=> {})
// app.get('/', (req, res)=> {

//     //run res.send() for print-out:
//     //res.send('Welcome to express')
//     res.send({
//         message: "Welcome to express"
//     })

// })

// app.post('/', (req, res)=> {

//     res.send({
//         message: "run post"
//     })

// })

// app.put('/', (req, res)=> {

//     res.send({
//         message: "run put"
//     })

// })

// app.delete('/', (req, res)=> {

//     res.send({
//         message: "run delete"
//     })

// })
//& bütün bunlara routing deniyor

app.all('/', (req, res)=> {

    res.send({
        message: "run all"
    })

}) //all yazdığımızda hepsi(get,put,post,delete) kullanılıryor TERCİH EDİLMEZ!!

/* ------------------------------------------------------- */

// app.listen(PORT,()=> {console.log(`Running: http://127.0.0.1:8000`)})
// app.listen(PORT,HOST,()=> {console.log(`Running: http://${HOST}:${PORT}`)}) tavsiye edilmez (HOST göndermek tavsiye edilmez)
app.listen(PORT,()=> {console.log(`Running: http://${HOST}:${PORT}`)})



/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */