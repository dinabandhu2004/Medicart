const express = require('express');
const { registration, login, doctordashboard } = require('../controller/doctorsverify');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/Doctorsregistraion', registration);
router.post('/Doctorslogin', login);
router.get('/DoctorPannel', authMiddleware, doctordashboard);

module.exports = router;
