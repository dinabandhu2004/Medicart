const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pname:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},
    {
        Timestamp:true
    }
)

const product = mongoose.model('product',productSchema)
module.exports = product