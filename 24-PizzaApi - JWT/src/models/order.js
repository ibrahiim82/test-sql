"use strict";
const { trusted } = require("mongoose");
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// Order Model:
// {
//   small:"Small"
// }
// Object.values ("obje ismi").length===0 // obje değeri boş mu dolumu kontrolü yapılır
const OrderSchema = new mongoose.Schema(
  {
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    pizzaId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pizza",
    },
    size: {
      type: String,
      trim: true,
      required: true,
      enum: ["Small", "Medium", "Large", "XLarge"] //& enum ile sadece bu dizideki değerlerden birisi olmak zorunda olduğunu belirttik
    },
    quantity: {
      type: Number,
      default: 1  //required yazmasak bile false değerdeyken default:1 yazıp en az 1 sipariş olduğunu belirtiyoruz
    },
    price: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      //create
      default: function () {
        return this.quantity * this.price;
      },
      //update
      transform: function () {
        return this.quantity * this.price;
      },
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

// Model:
module.exports = mongoose.model("Order", OrderSchema);
