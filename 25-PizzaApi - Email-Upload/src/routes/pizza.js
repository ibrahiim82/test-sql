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
// https://expressjs.com/en/resources/middleware/multer.html

const multer = require('multer')

// upload middleware:
const upload = multer({
    // dest: './upload',
    storage: multer.diskStorage({
        destination: './upload',
        filename: function(req, file, returnCallback) {
            console.log(file);
            // returnCallback(error, fileName)
            // returnCallback(null, 'ornek.jpeg')
            returnCallback(null, Date.now() + '_' + file.originalname)
        }
    })// returnCallback: benden dönmesi beklenen fonksiyon
})
//& multer.diskstorage kullanmak sadece multer kullanmaktan daha kullanışlıdır örneğin oluşan dosyanın adı değiştirelebilir

/* ------------------------------------------------------- */
// URL: /pizzas

router.route('/')
    .get(pizza.list)
    // .post(pizza.create)
    // .post(upload.single('image'),pizza.create)  // tek dosya izin ver
    .post(upload.array('image'),pizza.create) // çok dosya izin ver. tavsiye edilen.
    // .post(upload.any(),pizza.create) // çok dosya izin ver, fieldname önemsiz

router.route('/:id')
    .get(pizza.read)
    .put(pizza.update)
    .patch(pizza.update)
    .delete(pizza.delete)

/* ------------------------------------------------------- */
module.exports = router