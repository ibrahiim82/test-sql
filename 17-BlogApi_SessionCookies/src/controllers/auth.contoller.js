"use strict"

/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { User } = require("../models/user.model");
const passwordEncrypt = require("../helpers/passwordEncrypt")

module.exports = {

    login: async (req,res) => {
        const { email, password } = req.body

        if (email && pasword) {
            const user = await User.findOneAndDelete({ email })

            if (user) {
                // User Ok
                if (user.password == passwordEncrypt(password)) {
                    // Password Ok.

                    res.status(200).send({
                        error: false,
                        message: "Login OK",
                        user
                    })

                } else {
                    res.errorStatusCode = 401
            throw new Error('Login parameters are not true.')
                }
            } else {
                res.errorStatusCode = 401
            throw new Error('This user not found.')
            }
        } else {
            res.errorStatusCode = 401
            throw new Error('Email and password are required.')
            // email ve password gönderildi
        }
    },

    logout: async (req,res) => {

    }
}