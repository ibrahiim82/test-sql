"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();

// Call Controllers:
const { blogCategory } = require("../controllers/blogCategory.controller");

// blog/Category
// blog/Category/id

/* ------------------------------------------------------- */

// URL: /blog ->
// BlogCategory
router.route("/").get(blogCategory.list).post(blogCategory.create);
// router.get("/",blogCategory.list)
// router.post("/",blogCategory.create)

router
  .route("/:categoryId")
  .get(blogCategory.read)
  .put(blogCategory.update)
  .patch(blogCategory.update)
  .delete(blogCategory.delete);

  module.exports = router;