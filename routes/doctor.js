const router = require('express').Router()

const doctorController = require('../controllers/doctorController')

router.get('/doctors', doctorController.get)

module.exports = router