"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const User = require('../models/user')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    login: async (req,res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                }
            }
        */

        const {username, email, password} = req.body

        if(!((username || email) && password)) {
            res.errorStatusCode = 401
            throw new Error('Please enter username/email and password')
        }

        const user = await User.findOne({ $or: [{email}, {username}] })

        if((!user && user.password !== passwordEncrypt(password))){
            res.errorStatusCode = 401
            throw new Error('Wrong username/email or password')
        }

        if(!user.isActive) {
            res.errorStatusCode = 401
            throw new Error('This account is not active')
        }

        /* Simple Token */
        let tokenData = await Token.findOne()

        res.status(200).send({
            error:false
        })

    },

    refresh: async () => {

    },

    logout: async () => {

    }
}