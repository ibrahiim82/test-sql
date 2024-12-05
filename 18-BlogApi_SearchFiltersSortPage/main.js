"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
// Catch error from async:
require("express-async-errors");
const app = express(); //singleton

require("dotenv").config();
const PORT = process.env.PORT || 8000;

// Accept JSON:
app.use(express.json());
// DB CONNECTION with normal function
require("./src/config/dbConnection")();
// DB CONNECTION with with class
//require("./src/config/dbConnection");

/* ------------------------------------------------------- */
//* SESSIONS & COOKIES
// npm i cookie-session
// https://expressjs.com/en/resources/middleware/cookie-session.html

const session = require("cookie-session");

// Run with general settings:
app.use(session({
    secret: process.env.SECRET_KEY, // Cookie datasını şifreleme anahtarı
    // maxAge: 1000 * 60 * 60 * 24 * 3  //3 gün  // birimi milisaniyedir
}));

/* ------------------------------------------------------- */
//^ Check user-data from session:

// Moved to userControl.js file:
app.use(require("./src/middlewares/userControl"))

/* ------------------------------------------------------- */

// Middleware: Filter Search Sort Pagination

app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */
app.use("/blog/category", require("./src/routes/blogCategory.router"));
app.use("/blog/post", require("./src/routes/blogPost.router"));
app.use("/user", require("./src/routes/user.router"));
app.use("/auth", require("./src/routes/auth.router")); //authontication işlemleri: login,logout
app.all("/", (req, res) => {
  // res.send("WELCOME TO BLOG API");
  // console.log("session:", req.session);
  res.send({
    message: "WELCOME TO BLOG API",
    user: req.user,  // Logined user data
    session: req.session,
  });
});

/* ------------------------------------------------------- */
// Routes:

/* ------------------------------------------------------- */
app.use("*", (req, res) => {
  res.status(404).send({ isError: true, message: "The route is NOT FOUND" });
});

// Catch Errors:
app.use(require("./src/middlewares/errorHandler"));

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */

// test verisi içindir. Bir kez çalıştır. ( sonra yorum satırına al)
// require("./sync")()


