"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();
const { user } = require("..controllers/user.controller");
// Call Controllers:

/* ------------------------------------------------------- */

// URL: /blog ->
// /blog/post
// /user

router.route("/").get(user.list).post(user.create);

// router.get("/",user.list)
// router.post("/",user.create)
router
  .route("/:userId")
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.delete);

  module.exports=router

/* ------------------------------------------------------- */
