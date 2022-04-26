const {Doctor} = require("../models")

class doctorController{
    static async get(req, res){
        try {
            const response = await Doctor.findAll()
            return res.status(200).json(response)

        } catch (error) {
            return res.status(500).json(response)
        }
    }
    static async getById(req, res){
        try {
            const id = +req.params.id
            const response = await Doctor.findOne({
                where:{
                    id
                }
            })
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(response)
        }
    }
    static async update(req, res){
        try {
            const id = +req.params.id
            let payload = {
                name: req.body.name,
                birthDate: req.body.birthDate,
                birthPlace: req.body.birthPlace
            }
            const response = await Doctor.update(payload,{
                where:{
                    id
                }
            })
            return res.status(201).json({
                response,
                message : "Update Success"
            })
        } catch (error) {
            return res.status(500).json(response)
        }
    }
}

module.exports = doctorController