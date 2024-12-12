"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const express = require("express");
const { dbConnection, mongoose } = require("./src/configs/dbConnection");
const app = express();

/* ------------------------------------------------------- */

// continue from here...
// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
//* LOGGER
// npm i morgan
// https://expressjs.com/en/resources/middleware/morgan.html

const morgan = require("morgan")

// Morgan bir middleware'dir
// app.use(morgan("tiny"))
// app.use(morgan("short"))
// app.use(morgan("dev"))
// app.use(morgan("common"))
// app.use(morgan("combined"))

// Custom Logs:
// app.use(morgan('TIME=":date[iso]" - URL=":url" - Method=":method" - IP=":remote-addr" - Ref=":referrer" - Status=":status" - Sign=":user-agent" (:response-time[digits] ms)'))

// Write to file - log kayıtlarını dosyaya yazır
// https://nodejs.org/api/fs.html#file-system-flags
// const fs = require('node:fs') //& iki nokta üst üste varsa npm i yapmaya gerek yok çünkü node'un içinde var olan paket demektir.

// app.use(morgan("combined", {
//   stream: fs.createWriteStream('./access.log', { flags: "a+" })
// })) // kayıtları access.log isimli dosyaya sakla. // flags: dosyayı açma ve yazma modunu belirtir.

//Write to file day-by-day:
// const fs = require("node:fs")
// const now = new Date()
// console.log(now, typeof now);
// const today = now.toISOString().split('T')[0]
// console.log(today);
// app.use(morgan("combined", {
//   stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
// }))

// Moved to file:
// app.use(require('./src/middlewares/logger'))

/* ------------------------------------------------------- */

//* SWAGGER
const swaggerUi = require('swagger-ui-express')
const swaggerJson = require('./swagger.json')

app.use('/documents/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson, { swaggerOptions: { persistAuthorization: true } }))

/* ------------------------------------------------------- */
//db connection
dbConnection();

//body parser
app.use(express.json());

// cookie: httpOnly:true XSS Cross Site Scripting, secure:https
const session = require("cookie-session");

// Run with general settings:
app.use(
  session({
    secret: process.env.SECRET_KEY,
    httpOnly: false,
  })
);

// res.getModelList():
app.use(require("./src/middlewares/queryHandler"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PERSONNEL API",
    session: req.session,
  });
});

app.use(require("./src/routes/index"))

//not found routes
app.all("*", async (req, res) => {
  res.status(404).send({
    error: true,
    message: "Route not available",
  });
});

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
require('./src/helpers/sync')()

if (process.env.NODE_ENV == "development") {
  return;
  require("./src/helpers/dataCreate")()
    .then((res) => console.log("Data synched"))
    .catch((err) => console.error("Data could not synched"));
}
