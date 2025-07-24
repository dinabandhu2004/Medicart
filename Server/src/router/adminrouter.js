const express = require('express')
//call all user controller

const {registration,login,admindashboard} = require('../controller/admincontrol')
const adminauthjwt = require('../middleware/adminauthjwt')

const router = express.Router()
router.post('/adminRegister',registration)
router.post('/adminlogin',login)
router.get('/adminDashboard',adminauthjwt,admindashboard)

module.exports = router