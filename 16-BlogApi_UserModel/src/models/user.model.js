"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");
const paswordEncypt = require("../helpers/passwordEncrypt");

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

// User Schema:
const UserSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            trim: true,
            unique: true,
            // required:true 
            required:[true, "Email is required"], //hata mesajıyla yazma
            //! 2. Yöntem
            // validation:(email) => {
            //   return email.includes("@") && email.includes(".")
            // } 
            //! 3. Yöntenm  
            // validation:[(email) => {
            //   return email.includes("@") && email.includes(".")
            // }, "Email format is incorrect"]
            //! 4. Yöntem
            // validation:{
            //   validator:(email) => {
            //     return email.includes("@") && email.includes(".")
            //   }, message: "Email format is incorrect"
            // } 
        },
        password:{
            type: String,
            trim: true,
            required: [true, "Email is required"], //hata mesajıyla yazma
            set: (password) => paswordEncypt(password)
            //set:paswordEncypt
        },
        firstname: String,
        lastname: String,
    },
    {
      collection: "users",
      timestamps: true,
    }
  );
  
  module.exports = {
    User: mongoose.model("User", UserSchema),
  };
  