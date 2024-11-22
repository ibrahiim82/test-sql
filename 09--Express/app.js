"use strict"

//?    EXPRESSJS

// npm init -y
//npm i express dotenv
/* ------------------------------------------------------- */

const express = require('express') //express assigned (bildirildi)
const app = express() // express started

// dotenv
require('dotenv').config() // .env içindeki değişkenler process.env'ye atandı.
const HOST = process.env.HOST || '127.0.0.1' //host string ile yazılmak zorunda (local IP: '127.0.0.1')
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
//* express-url supported JokerChars:
//app.get('/abc(x)?123', (req,res) => res.send('/abc(x)?123')) //abc123 ve abcx123 her ikiside çalışır. "?" olsada olur olmasada olur demek
//app.get('/abc(x)+123', (req,res) => res.send('/abc(x)+123')) //abcx123 or abc....x123 x'ten (en az) bir veya daha fazla olacak tane olacak
//app.get('/abc*123', (req,res) => res.send('/abc*123')) // abc123 or abc(ANY)123 yıldız işareti yerine herhangi birşeyi yazabiliriz hata vermez
//* express-url supported RegExp: (RegularExpression)
// app.get(/xyz/, (req,res) => res.send('/xyz/')) // içinde xyz olan path
// app.get(/xyz$/, (req,res) => res.send('/xyz/')) // xyz ile biten path
// app.get(/^\/xyz/, (req,res) => res.send('/xyz/')) // xyz ile başlayan path. şapka işaretinden sonra slash koymak gerekir fakat slash bir özel karakter olduğu için kaçış operatörü (ters slash) da kullanmak gerekir.


/* ------------------------------------------------------- */
//^ URL Parameters (req.params)

// app.get('/users/:userId/profile', (req,res) => {
//     console.log(req.params)
//     res.send({
//         userId: req.params.userId
//     })
// } )

// /users/(ANY)/profile/update/(ANY)'
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
//             url: req.url
//         }
//     })
// } )

// / userId --> only number
// app.get('/users/:userId([0-9]+)', (req,res) => {
//     console.log(req.params)
//     res.send({
//         userId: req.params.userId,
//     })
// } )

// : ifadesi, / sonrası kullanımı zorunlu değildir. (tavsiye edilmez)
// /users/123-qadir
// app.get('/users/:userId([0-9]+)-:username([a-z]+)', (req, res) => {
//     res.send({
//         userId: req.params.userId,
//         username: req.params.username,
//     })
// })

/* ------------------------------------------------------- */
//^ Response Methods:

//* SendStatus:
// app.get('/', (req, res) => res.sendStatus(404))
//* Status:
// app.get('/', (req, res) => res.status(200).send({ message: 'OK' }))
// app.post('/', (req, res) => res.status(201).send({ message: 'Created' }))
// app.put('/', (req, res) => res.status(202).send({ message: 'Accepted' }))
// app.delete('/', (req, res) => res.status(204).send({ message: 'No Content' }))
//* JSON (.send() method already does this converting.)
// app.get('/', (req, res) => res.json([{ key: 'value' }]))
//* Download File (Download at browser):
// app.get('/download', (req, res) => res.download('./app.js', 'changedName.js'))
//* SendFile Content:
// console.log( __dirname )
// app.get('/file', (req, res) => res.sendFile(__dirname + '/app.js')) // FilePath must be realPath
//* Redirect:
// app.get('/google', (req, res) => res.redirect(301, 'https://www.google.com')) // 301 or 302
// app.get('/redirect', (req, res) => res.redirect(302, '/thisPath'))


/* ------------------------------------------------------- */


// app.listen(PORT,()=> {console.log(`Running: http://127.0.0.1:8000`)})
// app.listen(PORT,HOST,()=> {console.log(`Running: http://${HOST}:${PORT}`)}) tavsiye edilmez (HOST göndermek tavsiye edilmez)
app.listen(PORT,()=> console.log(`Running: http://${HOST}:${PORT}`))




/* ------------------------------------------------------- */