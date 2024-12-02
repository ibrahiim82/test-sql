"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();
const { blogCategory } = require("..controllers/blogCategory.controller");
// Call Controllers:

// blog/Category
// blog/Category/id

/* ------------------------------------------------------- */

// URL: /blog ->
// BlogCategory
router.route("/category").get(blogCategory.list).post(blogCategory.create);

// router.get("/category",blogCategory.list)
// router.post("/category",blogCategory.create)
router
  .route("/category/:categoryId")
  .get(blogCategory.read)
  .put(blogCategory.update)
  .patch(blogCategory.update)
  .delete(blogCategory.delete);

  module.exports=router