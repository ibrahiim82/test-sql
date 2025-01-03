"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logger"));

//! Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
//* EMAIL - NODEMAILER
// nmp i nodemailer
// https://www.nodemailer.com/

// const nodemailer = require('nodemailer')

// Create a new Test Account (fake mail)
// nodemailer.createTestAccount().then((data => console.log(data)))

/*
{
  {
    user: 'dmrnbudxpsaxht6l@ethereal.email',
    pass: 'rprDNQDE8VSVcexf8U',
    smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
    imap: { host: 'imap.ethereal.email', port: 993, secure: true },
    pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
    web: 'https://ethereal.email',
    mxEnabled: false
  }
}
*/

// /  Connection to MailServer/SMTP:
// const transporter = nodemailer.createTransport({
//   / SMTP:
//   host: 'smtp.ethereal.email',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'dmrnbudxpsaxht6l@ethereal.email',
//     pass: 'rprDNQDE8VSVcexf8U'
//   }
// })
// / console.log(transporter);

// / SendMail:
// transporter.sendMail({

//   from: "dmrnbudxpsaxht6l@ethereal.email", // from yazılması mecburi değil
//   to: 'qadir@clarusway.com', // 'abc@xyz.com, def@xyz.com
//   subject: 'Hello', // Mail başlığı
//   text: 'Hello there. How are you?', // Mail içeriği (düz metin)
//   html: '<h2>Hello there.</h2> <p>How are you?</p>' // Mail içeriği (html ile)

// }, function(error, success) {// mail gönderme işlemi başarısızsa error dolu gelir succes boş gelir,başarılıysa error boş success dolu gelir

//   success ? console.log('SUCCESS:', success) : console.log('ERROR:', error)

// }) 

//^ GoogleMail (gmail.com)
//Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'yavuzyolcu82@gmail.com',
//     pass: 'arla gpte akoz fcvj'
//   }
// })
//& gönderen mail adresi yanlışsa mail spam kutusuna düşer
// transporter.sendMail({
//   from: 'yavuzyolcu@gmail.com', // tavsiye: gönderen mail adresinin from içinde belirtilmesi
//   to: 'yavuzyolcu82@gmail.com', // 'abc@xyz.com, def@xyz.com
//   subject: 'Hello', // Mail başlığı
//   text: 'Hello there. How are you?', // Mail içeriği (düz metin)
//   html: '<h2>Hello there.</h2> <p>How are you?</p>' // Mail içeriği (html ile)

// }, function(error, success) {// mail gönderme işlemi başarısızsa error dolu gelir succes boş gelir,başarılıysa error boş success dolu gelir

//   success ? console.log('SUCCESS:', success) : console.log('ERROR:', error)

// }) 

//^ YandexMail (yandex)
// const transporter = nodemailer.createTransport({
//     service: 'yandex',
//     auth: {
//         user: 'test@yandex.com',
//         pass: '11' // your email-password
//     }
// })

// transporter.sendMail({

//   from: 'yavuzyolcu@gmail.com', // tavsiye: gönderen mail adresinin from içinde belirtilmesi
//   to: 'yavuzyolcu82@gmail.com', // 'abc@xyz.com, def@xyz.com
//   subject: 'Hello', // Mail başlığı
//   text: 'Hello there. How are you?', // Mail içeriği (düz metin)
//   html: '<h2>Hello there.</h2> <p>How are you?</p>' // Mail içeriği (html ile)

// }, function(error, success) {// mail gönderme işlemi başarısızsa error dolu gelir succes boş gelir,başarılıysa error boş success dolu gelir

//   success ? console.log('SUCCESS:', success) : console.log('ERROR:', error)

// }) 

/* ------------------------------------------------------- */

//* Routes:

//! STATIC FILES:
// upload dosyalarını tarayıcıda görüntüleyebilmek için statik olarak kullanmalıyız
// app.use('/url', express.static('./folder'))
app.use('/upload', express.static('./upload'))

//! routes/index.js:
app.use("/", require("./src/routes/"));

/* ------------------------------------------------------- *

// auth:
app.use("/auth", require("./src/routes/auth"));
// user:
app.use("/user", require("./src/routes/user"));
// token:
app.use("/token", require("./src/routes/token"));

// order:
app.use("/order", require("./src/routes/order"));
// pizza:
app.use("/pizza", require("./src/routes/pizza"));
// topping:
app.use("/topping", require("./src/routes/topping"));

// document:
app.use("/documents", require("./src/routes/document"));
/* ------------------------------------------------------- */

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// !!! It clear database.
// require("./src/helpers/sync")();
