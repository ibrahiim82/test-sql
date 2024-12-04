"use strict"

const express = require("express")
const app = express()

require("dotenv").config()
app.use(express.json())

require("./src/configs/dbConnection")();
app.use("/car",require("./src/routes/car"))



app.all("/", ( req, res )=>{
    res.send({
        error:false,
        message: "Welcome Car Store!"
    })
})










require("express-async-errors");

app.listen(process.env.PORT,()=> console.log(`running:http://${process.env.HOST}:`+process.env.PORT))