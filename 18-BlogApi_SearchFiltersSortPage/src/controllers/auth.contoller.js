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
            // Email ve Password gönderildi

            const user = await User.findOneAndDelete({ email })

            if (user) {
                // User Ok
                if (user.password == passwordEncrypt(password)) {
                    // Password Ok.

                    /* SESSION */
                    // req.session = {
                    //     email: user.email,
                    //     password: user.password,
                    // }
                    // req.session.email = user.email
                    req.session._id = user._id
                    req.session.password = user.password
                    /* SESSION */

                    /* COOKIES */
                    // Beni Hatırla gönderildiyse:
                    if (req.body?.remindMe) {
                        req.session.remindMe = true,
                        // Set maxAge to 3 days:
                        req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3
                    }
                    /* COOKIES */

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

    // session'a data ekleme login ile data silme logout ile yapılır
    logout: async (req,res) => {
        // Session/Cookie verilerini silmek için null yapmak yeterli
        req.session = null   // session'daki dataları silme

        res.status(200).send({
            error: false,
            message: "Logout OK"
        })
    }
}