const express = require('express')
//call all user controller

const usercotroller = require('../controller/usercontroller')
const jwtverify = require('../middleware/JwtAuthVerify')

const router = express.Router()
router.post('/',usercotroller.registration)
router.post('/login',usercotroller.login)
router.get('/home',jwtverify,usercotroller.home)

module.exports = router