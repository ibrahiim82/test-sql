"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Reservation Controller:
const Reservation = require('../models/reservation')
module.exports={

    list : async (req,res)=>{
        let customFilter = {}

        if(!req.user.isAdmin && !req.user.isStaff){
            customFilter= {userId: req.user._id}
        } //& eğer giren kişi admin veya staff değilse customFiltera id'yi doldur admin veya staffsa customFilterin hepsini getir

        const data = await res.getModelList(Reservation,customFilter, [
            {path: 'userId', select: 'username firstName lastName'},
            {path: 'carId'},
            {path: 'createdId', select: 'username'},
            {path: 'updatedId', select: 'username'}
        ])
        const details = await getModelListDetails(Reservation,customFilter)
        res.status(200).send({
            error:false,
            details,
            data
        })
    },

    create: async (req,res)=>{

        const userReservationDates = await Reservation.findOne({
            userId: req.body.userId,
            $nor: [
                {startDate: {$gt : req.body.endDate}}, //& Rezervasyonun başlangıç tarihi mevcut rezervasyonun bitiş tarihinden büyükse sorun yok
                {endDate: {$lt : req.body.startDate}} //& Rezervasyonun bitiş tarihi mevcut rezervasyonun başlangıç tarihinden küçükse sorun yok
            ]
        })

        if(userReservationDates){
            res.errorStatusCode=400
            throw new Error(
                'It cannot be added because there is another reservation with same date',
                {cause : {userReservationDates: userReservationDates}}
            )
        }else{
            const data = await Reservation.create(req.body)

            res.status(200).send({
                error:false,
                data
            })
        }
    }
}