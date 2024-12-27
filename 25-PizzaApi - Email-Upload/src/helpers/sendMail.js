"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

// sendMail(to, title, message)

//* EMAIL - NODEMAILER
// nmp i nodemailer
// https://www.nodemailer.com/

const nodemailer = require("nodemailer");

module.exports = function (to, title, message) {
  // Create a new Test Account (fake mail)
  // nodemailer.createTestAccount().then((data => console.log(data)))

  /*
    {
    user: 'dmrnbudxpsaxht6l@ethereal.email',
    pass: 'rprDNQDE8VSVcexf8U',
    smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
    imap: { host: 'imap.ethereal.email', port: 993, secure: true },
    pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
    web: 'https://ethereal.email',
    mxEnabled: false
    }
    */

  // Connection to MailServer/SMTP:
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
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yavuzyolcu82@gmail.com",
      pass: "arla gpte akoz fcvj",
    },
  });
  //& gönderen mail adresi yanlışsa mail spam kutusuna düşer

  //^ YandexMail (yandex)
  // const transporter = nodemailer.createTransport({
  //     service: 'yandex',
  //     auth: {
  //         user: 'test@yandex.com',
  //         pass: '11' // your email-password
  //     }
  // })

  transporter.sendMail(
    {
      from: "yavuzyolcu@gmail.com", // tavsiye: gönderen mail adresinin from içinde belirtilmesidir. from uyumaşza mail spam kutusuna düşer
      to: "to", // 'abc@xyz.com, def@xyz.com
      subject: "title", // Mail başlığı
      text: "message", // Mail içeriği (düz metin)
      html: "message", // Mail içeriği (html ile)
      
    },function (error, success) {
      // mail gönderme işlemi başarısızsa error dolu gelir succes boş gelir,başarılıysa error boş success dolu gelir

      success ? console.log("SUCCESS:", success) : console.log("ERROR:", error);
    }
  );
};
