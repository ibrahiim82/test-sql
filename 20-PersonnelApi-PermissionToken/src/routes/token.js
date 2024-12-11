"use strict"

const {isAdmin} = require("../middlewares/permissions")
const router = require("express").Router()
const token = require("../controllers/token")
const {list,read,update,delete: deleteToken } = require("../controllers/token")
router.use(isAdmin)

router.route("/")
.get(token.list)
.post(token.create)

router.route("/:id")
.get(read)
.put(update)
.patch(update)
.delete(deleteToken)

module.exports = router