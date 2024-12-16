"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// Pizza Model:

const PizzaSchema = new mongoose.Schema(
  {},

  {
    collection: "pizzas",
    timestamps: true,
  }
);

// Model:
module.exports = mongoose.model("Pizza", PizzaSchema);
