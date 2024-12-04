"use strict";


const mongoose = require("mongoose")

const {CustomError } = require("../errors/customError")

const dbConnection = async () => {
    if (!process.env.MONGODB_URI){
        throw new CustomError("Bağlanmayacaksın bir şeye körü körüne!!!!!")
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connection is succesfull");
      } catch (error) {
        console.log("Database connection error");
        throw new CustomError("Failed to connect to the database", 500);
      }
}



module.exports = dbConnection;


