"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();
const { blogPost } = require("..controllers/blogPost.controller");
// Call Controllers:

/* ------------------------------------------------------- */

// URL: /blog ->
// /blog/post
// BlogPost

router.route("/post").get(blogCategory.list).post(blogCategory.create);

// router.get("/post",blogCategory.list)
// router.post("/post",blogCategory.create)
router
  .route("/post/:postId")
  .get(blogPost.read)
  .put(blogPost.update)
  .patch(blogPost.update)
  .delete(blogPost.delete);

  module.exports=router

/* ------------------------------------------------------- */
