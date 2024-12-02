
"use strict";

/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Call Models:
const { User } = require("../models/user.model");
const { NotFoundError } = require("../errors/customError");

/* ------------------------------------------------------- */

module.exports.user = {
  list: async (req, res) => {
    
    const data = await User.find();

    res.send({
      result: data,
    });
  },

  // CRUD ->

  create: async (req, res) => {
    const result = await User.create(req.body);

    res.send({
      result,
    });
  },

  read: async (req, res) => {
    
    const result = await User.findOne(
      { _id: req.params.userId },
    );
    if (!result) {
      throw new NotFoundError("No matching documents found");
    }
    res.send({
      isError: false,
      result,
    });
  },

  update: async (req, res) => {
    const result = User.updateOne(
      { _id: req.params.userIdd },
      req.body
    );

    //matchedCount:0,1,2   modifiedCount=0,1  durumu
    //!güncellenmek istenen veri yoksa
    if (result.matchedCount === 0) {
      throw new NotFoundError("No matching documents found");
      // return res.status(404).send("No matching documents found");
    }
    //! güncellenmek istenen veri ama ama güncelleme yapılmadı
    if (result.matchedCount > 0 && result.modifiedCount === 0) {
      return res.status(200).send({ message: "Document already up-to-date." });
    }
    res.status(202).send({
      isError: false,
      result,
      updated: await User.findOne({ _id: req.params.userId }),
    });
  },

  delete: async (req, res) => {
    const result = await User.deleteOne({ _id: req.params.userId });
    console.log(result);
    //deletedCount
    if (result.deletedCount === 0) {
      throw new NotFoundError("No matching documents found");
      // return res.status(404).send("No matching documents found");
    }
    //! 204 ile veri gönderilmez
    res.status(204).send({
      result,
    });
  },
};

/* ------------------------------------------------------- */
