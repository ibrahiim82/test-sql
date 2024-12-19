"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require('../controllers/pizza')

/* ------------------------------------------------------- */
//* UPLOADING - MULTER
// npm i multer

const multer = require('multer')

const upload = multer({
    // dest: './upload',
    storage: multer.diskStorage({
        destination: './upload',
        // filename:
    })
})
//& multer.diskstorage kullanmak sadece multer kullanmaktan daha kullanışlıdır örneğin oluşan dosyanın adı değiştirelebilir

/* ------------------------------------------------------- */
// URL: /pizzas

router.route('/')
    .get(pizza.list)
    // .post(pizza.create)
    .post(upload.single('fieldName'),pizza.create)
    // .post(upload.array('fieldName'),pizza.create)
    // .post(upload.any('fieldName'),pizza.create)

router.route('/:id')
    .get(pizza.read)
    .put(pizza.update)
    .patch(pizza.update)
    .delete(pizza.delete)

/* ------------------------------------------------------- */
module.exports = router