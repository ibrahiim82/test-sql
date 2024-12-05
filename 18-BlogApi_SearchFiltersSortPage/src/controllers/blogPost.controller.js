"use strict";

/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const { BlogPost } = require("../models/blogPost.model");
const { NotFoundError } = require("../errors/customError");
/* ------------------------------------------------------- */

module.exports.blogPost = {

  list: async (req, res) => {

    //* FILTERING - SEARCHING - SORTING - PAGINATION

    //FILTERING:
    // URL?filter(fieldName1)=value1&filter(fieldName2)=value2
    const filter = req.query?.filter || {};
    // console.log(filter)
    // { userId: '6751e0e727ae5347fc01afd7', title: 'test 5 title' }

    // SEARCHING:
    // URL?search[fieldName1]=value1&search[fieldName2]=value2
    const search = req.query?.search || {};
    console.log(search);
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    // { userId: { $regex: "6751e0e727ae5347fc01afd7", $options: "i" } }  // 'i' = büyük,küçük harf duyarsız olması için options'a i yazarız.

    const data = await BlogPost.find().populate("categoryId");

    res.send({
      result: data,
    });
  },

  // CRUD ->

  create: async (req, res) => {
    // eğer login olmuşsa, userId'yi req.user'dan alalım. (session)
    if (req.user) req.body.userId = req.user._id;

    const result = await BlogPost.create(req.body);

    res.send({
      result,
    });
  },

  read: async (req, res) => {
    const result = await BlogPost.findOne({ _id: req.params.postId });
    if (!result) {
      throw new NotFoundError("No matching documents found");
    }
    res.send({
      isError: false,
      result,
    });
  },

  update: async (req, res) => {
    const result = await BlogPost.updateOne(
      { _id: req.params.postId },
      req.body
    );

    //matchedCount:0,1,2   modifiedCount=0,1  durumu
    // matchedCount: Eşleşen belge sayısını belirtir.
    // modifiedCount: Gerçekten değiştirilen belge sayısını belirtir.

    //!güncellenmek istenen veri yoksa
    // if (result.matchedCount === 0) {
    //   throw new NotFoundError("No matching documents found");
    //   / return res.status(404).send("No matching documents found");
    // }
    // //! güncellenmek istenen veri ama ama güncelleme yapılmadı
    // if (result.matchedCount > 0 && result.modifiedCount === 0) {
    //   return res.status(200).send({ message: "Document already up-to-date." });
    // }
    res.status(202).send({
      isError: false,
      result,
      new: await BlogPost.findOne({ _id: req.params.postId }),
    });
  },

  delete: async (req, res) => {
    const result = await BlogPost.deleteOne({ _id: req.params.postId });
    console.log(result);
    //deletedCount
    if (result.deletedCount === 0) {
      throw new NotFoundError("No matching documents found");
      // return res.status(404).send("No matching documents found");
    }
    //! 204 ile veri gönderilmez No_Content
    res.status(204).send({
      result,
    });
  },
};

/* ------------------------------------------------------- */
