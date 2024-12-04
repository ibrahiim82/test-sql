"use strict"

const router = require("express").Router()

const {list,read,create,update,delete:deleteCar} = require("../controllers/car")

router.route("/").get(list).post(create)

router.route("/:id").get(read).put(update).patch(update).delete(deleteCar)

module.exports = router;
