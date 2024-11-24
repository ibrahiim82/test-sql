"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
require("express-async-errors");
const express = require("express");
const { StatusCodes } = require("http-status-codes");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;
/* ------------------------------------------------------- */
//!olması gereken
app.get("/user/:id?", function (req, res) {
  res.status(200).send({ userId: 1, userName: "John" });
});
/* ------------------------------------------------------- */
//! iki farklı send
app.get("/user/:id?", function (req, res) {
  res.status(200).send({ userId: 1, userName: "John" });
  res.status(200).send({ userId: 2, userName: "John" });
});
/* ------------------------------------------------------- */
//! default hata çıktısı
app.get("/user/:id?", function (req, res) {
  req.params.id.toString();
  res.send({ userId: 2, userName: "John" });
});

/* ------------------------------------------------------- */
//! throw Error()
app.get("/user/:id?", function (req, res) {
  throw Error("Hata oluştu");
  res.send({ userId: 2, userName: "John" });
});
/* ------------------------------------------------------- */
app.get("/user/:id?", function (req, res) {
  try {
    req.params.id.toString();
    res.send({ userId: 2, userName: "John" });
  } catch (error) {
    // throw Error("id must be string");
    // res.status(400).send("id must be string");
    res.status(400).send({ isError: true, message: "id must be string" });
  }
});
/* ------------------------------------------------------- */
app.get("/user/:id?", function (req, res, next) {
  // req.statusCode = 400;
  res.statusCode = 400;
  throw new Error("Hata oluştu");
  // const error = new Error("Hata oluştu");
  // error.statusCode = 400;
  // throw error;
  res.send({ userId: 2, userName: "John" });
});

/* ------------------------------------------------------- */ 
app.get("/user/:id?", function (req, res, next) {
  // res.statusCode = 400;
  try {
    req.params.id.toString();

    res.send({ userId: 2, userName: "John" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
});
/* ------------------------------------------------------- */
class CustomError extends Error {
  name = "Custom Error";
  statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  constructor(message, status) {
    super(message);
    this.statusCode = status;
  }
}
class BadRequestError extends Error {
  name = "BadRequest Error";
  statusCode = StatusCodes.BAD_REQUEST;
  constructor(message) {
    super(message);
  }
}

/* ------------------------------------------------------- */
function asyncSample() {
  return new Promise((resolve, reject) => {
    reject(new CustomError("Asenkron işlem sırasında bir hata oluştu", 400));
  });
}
/* ------------------------------------------------------- */
//! error handler async hataları doğrudan yakalamaz
app.get("/user/:id?", async function (req, res) {
  await asyncSample();

  res.send({ userId: 2, userName: "John" });
});
/* ------------------------------------------------------- 
app.get("/user/:id?", async function (req, res, next) {
  try {
    await asyncSample();
    res.send({ userId: 2, userName: "John" });
  } catch (error) {
    next(error);
  }
});
/* ------------------------------------------------------- */
//! express-async-error sayesinde error handler artık async hataları yakalayabilir
app.get("/user/:id?", async function (req, res) {
  await asyncSample();

  res.send({ userId: 2, userName: "John" });
});
/* ------------------------------------------------------- */
//! 21 console sınıfının methodları
console.log();
console.info();
console.error();
console.warn();
console.debug();

const users = [
  { id: 1, name: "John", role: "admin" },
  { id: 2, name: "Jane", role: "user" },
];
console.table(users);

console.group("Kullanıcı Bilgileri");
console.log("Ad: John");
console.log("Yaş: 30");
console.groupEnd();

console.time("Zamanlayıcı");
for (let i = 0; i < 1000000; i++) {} // Yoğun işlem
console.timeEnd("Zamanlayıcı"); //! 21 console sınıfının methodları

/* ------------------------------------------------------- */
app.use("*", function (req, res) {
  res.status(404).send("The route is not found");
});
const errorHandlerFunction = (err, req, res, next) => {
  // console.log(req.statusCode);
  // console.log(res.statusCode);
  // console.log(err.statusCode);

  const statusCode1 = err instanceof TypeError && 400;
  const statusCode = err.statusCode || statusCode1 || res.statusCode || 500;
  res.status(statusCode).send({
    isError: true,
    message: err.message,
    stack: err.stack,
    cause: err.cause,
  });
};
app.use(errorHandlerFunction);
/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
