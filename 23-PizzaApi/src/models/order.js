"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// Order Model:

const OrderSchema = new mongoose.Schema(
  {},
  {
    collection: "orders",
    timestamps: true,
  }
);

// Model:
module.exports = mongoose.model("Order", OrderSchema);
