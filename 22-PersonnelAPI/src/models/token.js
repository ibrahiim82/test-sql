"use strict"

const {mongoose} = require("../configs/dbConnection")
// {
//     "userId":"33320a660g9656k2"
//     "token":"...tokenKey..."
// }

const TokenSchema = new mongoose.Schema(
    {
        userId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Personnel",
            required:true,
            index:true,
            unique:true
        },
        token : {
            type:String,
            trim:true,
            required:true,
            index:true,
            unique:true
        }
    },
    {
        collection: "tokens",
        timestamps:true   //&  timestamps, her belgeye (document) otomatik olarak createdAt ve updatedAt adında iki tarih alanı eklenmesini sağlar.createdAt: Belge oluşturulduğu anda otomatik olarak set edilir. updatedAt: Belge her güncellendiğinde otomatik olarak güncellenir.
    }
)
module.exports = mongoose.model("Token",TokenSchema)