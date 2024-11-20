"use strict"

//?    EXPRESSJS

// npm init -y
//npm i express dotenv
/* ------------------------------------------------------- */

const express = require('express') //express assigned (bildirildi)
const app = express() // express started

// dotenv
require('dotenv').config() // .env içindeki değişkenler process.env'ye atandı.
const HOST = process.env.PORT || '127.0.0.1' //host string ile yazılmak zorunda (local IP: '127.0.0.1)
const PORT = process.env.PORT || 8000


// app.listen(PORT,()=> {console.log(`Running: http://127.0.0.1:8000`)})
// app.listen(PORT,HOST,()=> {console.log(`Running: http://${HOST}:${PORT}`)}) tavsiye edilmez (HOST göndermek tavsiye edilmez)
app.listen(PORT,()=> {console.log(`Running: http://${HOST}:${PORT}`)})



/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */