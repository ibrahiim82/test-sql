"use strict";

//?    EXPRESSJS - TODO Project with Sequelize


// $ npm init -y
// $ npm i express dotenv express-async-errors
// $ echo PORT=8000 > .env
// $ npm i sequelize sqlite3


const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert to object for (API):
app.use(express.json())
// Accept FORM data and convert to object (for template)
app.use(express.urlencoded())

// express-async-errors: catch async-errors and send to errorHandler:
require('express-async-errors')

// app.all('/', (req, res) => {
//     res.send('WELCOME TO TODO API')
// })


/* ------------------------------------------------------- */

//*     SEQUELIZE
//npm i sequelize sqlite3

const { Sequelize, DataTypes } = require('sequelize')

//^ DB Connection Settings:
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))


//* Model:
// her model veritabanında bir tabloya karşılık gelir.
// sequelize.define('tableName', {tableDetails} )

//^ Model isimleri PascalCase: (model tanımlama):
const Todo = sequelize.define('todos', {

    // sequelize'de id tanımlamaya gerek yoktur. otomatik tanımlanır.
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,  //default: true (boş olabilir mi demek.)
    //     unique: true,      //default: false
    //     comment:'description',
    //     primaryKey: true, //default: false
    //     autoIncrement: true, //default: false
    //     field: 'custom_name',
    //     defaultValue: 0     // default: null
    // },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // description: {
    //     type: DataTypes.TEXT,
    //    allowNull: true,
    // allownull true olanları yazmaya gerek yok çünkü default hali true
    // },

    description: DataTypes.TEXT, // ShortHand
    // tek bir tane tanımlıyorsak obje açmaya gerek yok

    priority: {    // -1: Low , 0: normal , 1: Yüksek
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },

    // createdAt:{},
    // updatedAt: {},
    // createdAt ve updatedAt tanımlamaya gerek yoktur. Sequelize otomatik yönetir.
})

    //^ Syncronization:
    //* Model'i veritabanına uygula:
    // sync() methodu 1 kere uygulanır (modelde değişiklik var ise tekrar uygulanır)
    // sequelize.sync() // CREATE TABLE (Model, veritabanına uygulanmamışsa çalıştırılır)
    // sequelize.sync({ force: true }) // table oluşturduktan sonraki değişikliklerin çalışması için force: ture yazılır
    // yani force: true tabloyu siler tekrar baştan oluşturur DROP TABLE & CREATE TABLE (DİKKAT!! data var ise silinir.)
    // sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP
    //! sync() methodu 1 kere uygulanır (modelde değişiklik var ise tekrar uygulanır) yani işimiz bittikten sonra sync'yi kapatmak/yorum satırına almak gerekir.


    //^ CONNECT TO DB:
    sequelize.authenticate()
    .then(() => console.log('* DB Connected * '))
    .catch(() => console.log('* DB Not Connected * '))

/* ------------------------------------------------------- */

    //* ROUTERS:

    const router = express.Router()

    //^ https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

    // LIST TODOS:

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

    // CREATE TODO:
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

    // READ TODO:
    // UPDATE TODO:
    // DELETE TODO:

app.use(router)

/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));