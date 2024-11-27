"use strict";

//?    EXPRESSJS - TODO Project with Sequelize

//* SEQUELIZE
//npm i sequelize sqlite3

const { Sequelize, DataTypes } = require('sequelize')

//^ DB Connection Settings:
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)
// const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

//* Postgresql
// npm i pg pg-hstore
// Local IP: 127.0.0.1 - Local Host: localhost
const sequelize = new Sequelize('postgres://user-ch17:user-ch17@127.0.0.1:5432/test-ch17')

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
        // type: DataTypes.TINYINT, // postgresql desteklemedi.
        type: DataTypes.INTEGER,
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

    module.exports = Todo

/* ------------------------------------------------------- */