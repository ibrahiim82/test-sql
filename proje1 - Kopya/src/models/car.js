"use strict";

const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!!"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      default: []
    },
  },
  {
    collection: "car", //mongodb collection isimlerini herzaman küçüğe çevirir
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", CarSchema)

