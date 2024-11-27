"use strict";

//?    EXPRESSJS - TODO Project with Sequelize

 //* ROUTERS:

 // const router = express.Router()
 const router = require('express').Router()

 const Todo = require('../models/todo.model')

 //^ https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

 //^ LIST TODOS:

 router.get('/', async (req, res) => {

     // const data = await Todo.findAll()
     const data = await Todo.findAndCountAll()   // count(adet) ekler
     // const data = await Todo.findAll({
     //     attributes: ['title', 'description', 'priority'], // Select Filelds. Sadece title,description ve priority döndürür.
     //     where: { priority: -1 } // Filters   Priority: -1 olan objeleri döndürür.
     // })

     res.status(200).send({
         error: false,
         result: data
     })
 })

//^ CRUD -->

 //* CREATE TODO:
 router.post('/', async (req, res) => {

     // const receivedData = req.body
     // console.log(receivedData);

     // const data = await Todo.create({
     //     title: receivedData.title,
     //     description: receivedData.description,
     //     priority: receivedData.priority,
     //     isDone: receivedData.isDone,
     // })

     const data = await Todo.create(req.body)

     
     res.status(201).send({
         error: false,
         result: data
     })
 })

 //* READ TODO:
 router.get('/:id', async (req,res) => {

     //& id nin sadece rakam olmasını istiyorsak [0-9] veya (\\d+) yazmalıyız --> router.get('/:id(\\d+)', async (req,res)

     // console.log(req.params.id);

     // const data = await Todo.findOne({where: {id: req.params.id}})
     const data = await Todo.findByPk({where: {id: req.params.id}})

     res.status(200).send({
         error: false,
         result: data
     })
 })




 //* UPDATE TODO:
 router.put('/:id', async (req,res) => {
     //const data = await Todo.update({ ...newData }, {...where})
     const data = await Todo.update(req.body, { where: { id: req.params.id }})
 //& req.body kendisi obje olduğu için obje içinde yazmaya gerek yok.
     // upsert: kayıt varsa güncelle, yoksa ekle

     res.status(202).send({
         error: false,
        //  result: data, // update ve delete'de kaç adet güncellendi bilgisi döner.
         message: 'Updated!',
         result: await Todo.findByPk(req.params.id),
         count: data
     })
 })

 //* DELETE TODO:
 router.delete('/:id', async (req,res) => {
     // const data = await Todo.destroy({ ...where })
     const data = await Todo.destroy({ where: {id: req.params.id}  })

     // 204: No Content -> içerik vermeyebilir
     // res.status(200).send({
     //     error: false,
     //     message: 'Deleted!',
     //     count: data
     // })

     if (data > 0) { // kayıt silindiyse ...

         res.sendStatus(204)
         //& eğer status'ten sonra send yoksa status yerine sendStatus yazılır çünkü status send bekler.

     } else { // silinmediyse...

         //  res.status(200).send({
         //     error: false,
         //     message: 'Can not Deleted. (Maybe Already deleted)',
         // })
         
         //& hata mesajı döndürdüğümüz için bu işlemi errorHandler ile de yapabiliriz
         // send to ErrorHandler:
         res.errorStatusCode = 404
         throw new Error('Can not Deleted. (Maybe Already deleted)')
     }
 })



 module.exports = router

/* ------------------------------------------------------- */