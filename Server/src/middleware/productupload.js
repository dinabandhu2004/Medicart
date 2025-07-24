const multer = require('multer')
const upload = multer({ dest: 'productuploads/' })
module.exports = upload;