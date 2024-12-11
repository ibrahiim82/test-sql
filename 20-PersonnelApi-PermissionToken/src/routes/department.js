"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const department = require("../controllers/department");
const {isAdminorLead,isLogin,isAdmin} = require("../middlewares/permissions")
/* ------------------------------------------------------- */
router.route("/").get(isAdminorLead,department.list).post(isAdmin,department.create);

router
  .route("/:id")
  .get(isLogin,department.read)
  .put(isAdmin,department.update)
  .patch(isAdmin,department.update)
  .delete(isAdmin,department.delete);

//! /department/:id/personnel

router.get("/:id/personnel",department.personnels)
module.exports = router;
