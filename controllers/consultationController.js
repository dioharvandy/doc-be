const {Consultation, Doctor, Patient} = require("../models")

class consultationController{
    static async get(req, res){
        try {
            let response = null
            if(req.params.user == "doctor"){
                    const doctor = await Doctor.findOne({
                        where:{
                            userId: req.params.id
                        }
                    })
                    response = await Consultation.findAll({
                    where:{
                        doctorId: doctor.id
                    }
                })
            }else if(req.params.user == "patient"){

                    const patient = await Patient.findOne({
                        where:{
                            userId: req.params.id
                        }
                })
                    response = await Consultation.findAll({
                    where:{
                        patientId: patient.id
                    }
                })
            }
            else if(req.params.user == "admin"){
                response = await Consultation.findAll()
        }
            return res.status(200).json(response)

        } catch (error) {
            return res.status(500).json(error)
        }
    }
    static async create(req, res){
        try {



        } catch (error) {
            return res.status(500).json(response)
        }
    }
    static async getById(req, res){
        try {
            const id = +req.params.id
            const response = await Consultation.findOne({
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
            
        } catch (error) {
            return res.status(500).json(response)
        }
    }
    static async delete(req, res){
        try {
            const id = +req.params.id
            
            const response = await Consultation.destroy({
                where:{
                    id
                }
            })
            return res.status(200).json({
                response,
                message : "Delete Success !!!"
            })
        } catch (error) {
            return res.status(500).json(response)
        }
    }
}

module.exports = consultationController