const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
},
{
    timestamps:true
}
)
const User = mongoose.model("User",userSchema)
module.exports = User;