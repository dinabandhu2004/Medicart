const {addData, getData,updateData,deleteData} = require('../controller/productcontroller')
const router = require('express').Router()
const upload = require('../middleware/productupload')

router.post('/add',upload.single("image"),addData);
router.get('/getdata',getData);
module.exports = router