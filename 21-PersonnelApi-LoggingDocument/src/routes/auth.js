"use strict"

const router = require("express").Router()

// {
//    " username": "testF16",
//     "password": "1234"
// }

const auth = require("../controllers/auth")
router.post("/login", auth.login)
router.get("/logout", auth.logout)

module.exports = router;