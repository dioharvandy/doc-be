const {Patient, User} = require("../models")

class patientController{
    static async get(req, res){
        try {
            const response = await Patient.findAll()
            return res.status(200).json(response)

        } catch (error) {
            return res.status(500).json(response)
        }
    }
    static async getById(req, res){
        try {
            const id = +req.params.id
            const response = await Patient.findOne({
                where:{
                    id
                }
            })
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    static async getByUser(req, res){
        try {
            const id = +req.params.id
            const response = await Doctor.findOne({
                where:{
                    userId: id
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
            let response = null
            if(req.params.user){

                const payloadUser = {
                    username: req.body.username,
                    password: req.body.password
                }

                const patient = await Patient.findOne({
                    where:{
                        id
                    }
                }) 

                const user = await User.update(payloadUser,{
                    where:{
                        id: patient.userId
                    },
                    individualHooks: true
                })

                response = res.status(201).json({
                    user,
                    message : "Update Success !!!"
                })

            }else{

                const payloadPatient = {
                    name: req.body.name,
                    birthDate: req.body.birthDate,
                    birthPlace: req.body.birthPlace
                }
                const patient = await Patient.update(payloadPatient,{
                    where:{
                        id
                    }
                })

                response = res.status(201).json({
                    patient,
                    message : "Update Success !!!"
                })

            }

            return response
            
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    static async delete(req, res){
        try {
            const id = +req.params.id
            
            const response = await Patient.destroy({
                where:{
                    id
                }
            })
            return res.status(200).json({
                response,
                message : "Delete Success"
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = patientController