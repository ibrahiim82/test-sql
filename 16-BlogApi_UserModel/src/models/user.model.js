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
            required:[true, "Email is required"] //hata mesajıyla yazma
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
  