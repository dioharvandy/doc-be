const router = require('express').Router()

const consultationController = require('../controllers/consultationController')

router.get('/consultations/:user/:id', consultationController.get)

module.exports = router