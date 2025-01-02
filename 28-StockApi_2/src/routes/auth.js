"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
const {login} = require('../controllers/auth')
/* ------------------------------------------------------- */

// URL: /auth

router.post('/login', login)

module.exports = router