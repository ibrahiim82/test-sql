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

// app.all('/', (req, res)=> {

//     res.send({
//         message: "run all"
//     })

// }) //all yazdığımızda hepsi(get,put,post,delete) kullanılıyor TERCİH EDİLMEZ!!

//^ app.route()
// app.route('/route')
//     .get((req,res) => {res.send({ message:'get'})})
//     .post((req,res) => {res.send({ message:'post'})})
//     .put((req,res) => {res.send({ message:'put'})})
//     .delete((req,res) => {res.send({ message:'delete'})})

/* ------------------------------------------------------- */
//^ URL (path) options:

//app.get('/', (req,res) => res.send('/ =  root {home}')) //anasayfa için / yeterlidir
//app.get('/path', (req,res) => res.send('/path = path')) // sonraki slash (/) önemsizdir
//& express-url supported JokerChars:
//app.get('/abc(x)?123', (req,res) => res.send('/abc(x)?123')) //abc123 ve abcx123 her ikiside çalışır. "?" olsada olur olmasada olur demek
//app.get('/abc(x)+123', (req,res) => res.send('/abc(x)+123')) //abcx123 or abc....x123 x'ten (en az) bir veya daha fazla olacak tane olacak
//app.get('/abc*123', (req,res) => res.send('/abc*123')) // abc123 or abc(ANY)123 yıldız işareti yerine herhangi birşeyi yazabiliriz hata vermez
//& express-url supported RegExp: (RegularExpression)
// app.get(/xyz/, (req,res) => res.send('/xyz/')) // içinde xyz olan path
// app.get(/xyz$/, (req,res) => res.send('/xyz/')) // xyz ile biten path
app.get(/^\/xyz/, (req,res) => res.send('/xyz/')) // xyz ile başlayan path. şapka işaretinden sonra slash koymak gerekir fakat slash bir özel karakter olduğu için kaçış operatörü (ters slash) da kullanmak gerekir.


/* ------------------------------------------------------- */
//^ URL Parameters (req.params)

// app.get('/users/:userId/profile', (req,res) => {
//     console.log(req.params)
//     res.send({
//         userId: req.params.userId
//     })
// } )

// app.get('/users/:userId/profile/update/:userData', (req,res) => {
//     console.log(req.params)
//     res.send({
//         userId: req.params.userId,
//         updating: req.params.userData,
//         url: {
//             protocol: req.protocol,
//             subdomains: req.subdomains,
//             hostname: req.hostname,
//             baseUrl: req.baseUrl,
//             params: req.params,
//             query: req.query,
//             path: req.path,
//             originalUrl: req.originalUrl,
//             Url: req.url
//         }
//     })
// } )

// app.get('/users/:userId/profile/update/:userData', (req,res) => {
//     console.log(req.params)
//     res.send({
//         userId: req.params.userId,
//         updating: req.params.userData,
//         url: {
//             protocol: req.protocol,
//             subdomains: req.subdomains,
//             hostname: req.hostname,
//             baseUrl: req.baseUrl,
//             params: req.params,
//             query: req.query,
//             path: req.path,
//             originalUrl: req.originalUrl,
//             Url: req.url
//         }
//     })
// } )

// userId --> only number
app.get('/users/:userId([0-9]+)', (req,res) => {
    console.log(req.params)
    res.send({
        userId: req.params.userId,
    })
} )

/* ------------------------------------------------------- */

// app.listen(PORT,()=> {console.log(`Running: http://127.0.0.1:8000`)})
// app.listen(PORT,HOST,()=> {console.log(`Running: http://${HOST}:${PORT}`)}) tavsiye edilmez (HOST göndermek tavsiye edilmez)
app.listen(PORT,()=> {console.log(`Running: http://${HOST}:${PORT}`)})



/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */