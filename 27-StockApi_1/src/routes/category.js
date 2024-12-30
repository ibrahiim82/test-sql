"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const {list, create, read, update, deleteUser} = require("../controllers/category")

// URL:  /categories

router.route('/').get(list).post(create)

router.route('/:id').get(read).post(update).patch(update).delete(deleteUser)

/* ------------------------------------------------------- */
module.exports = router;