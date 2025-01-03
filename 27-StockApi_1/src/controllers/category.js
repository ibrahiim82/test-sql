"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Category = require('../models/category')

module.exports = {
    list: async (req,res) => {
        
        /* 
            #swagger.tags = ["Categories"]
            #swagger.summary = "List Categories"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Category)
        
        res.status(200).send({
            error:false,
            details: await res.getModelListDetails(Category),
            data
        })
    },

    //! CRUD
    create: async (req,res) => {

        /* 
            #swagger.tags = ["Categories"]
            #swagger.summary = "Create Categories"
            #swagger.parameters['body'] = {
                in:'body',
                required: true,
                schema: {
                    $ref"#/definitions/Category"
                }
            }
        */

        const data = await Category.create(req.body)

        res.status(201).send({
            error:false
        })
    },


    read: async (req,res) => {

        /* 
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Get Single Category"
            
        */

        const data = await Category.findOne({_id: req.params.id})

        res.status(200).send({
            error:false,
            data
        })
    },


    update: async (req,res) => {

        /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Update Categories"
            #swagger.parameters['body'] = {
                in:'body',
                required: true,
                schema: {
                    $ref"#/definitions/Category"
                }
            }
        */

        const data = await Category.updateOne({_id: req.params.id}, req.body, {runValidators:true})
        //& req.body 'den gelen veri zaten obje halinde geldiği için 'req.body' obje içinde yazılmaz.

        res.status(202).send({
            error:false,
            data,
            new: await Category.findOne({_id: req.params.id})
        })
    },


    deletee: async (req,res) => {

        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Delete Single Category"
        */

        const data = await Category.deleteOne({_id: req.params.id})
        
        res.status(data.deletedCount ? 204 : 404).send({
            error:true,
            message: 'Something went wrong, data might be deleted already'
        })
    }

    //todo multidelete controller
}