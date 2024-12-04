"use strict"

const Car  = require("../models/car")

module.exports = {
    list: async (req,res) => {
        const data = await Car.find()
        res.status(200).send({
            error: false,
            data
        })
    },
    create: async (req,res) => {
        const data = await Car.create(req.body)
        res.status(201).send({
            error: false,
            data
        })
    },
    read: async (req,res) => {
        const data = await Car.findOne({_id:req.params.id})
        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req,res) => {
        const data = await Car.updateOne({_id:req.params.id},req.body,{runValidators:true})//updateOne metodu güncelleme işleminin başarıyla olup olmadığını ve kaç verinin değiştini gösterir, verinin kendisini göstermez
        res.status(200).send({
            error: false,
            data,
            new: await Car.findOne({_id:req.params.id})
        })
    },
    delete: async (req,res) => {
        const data = await Car.deleteOne({_id:req.params.id})
        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            message: "Silindi!!",
            data
        })
    }
}