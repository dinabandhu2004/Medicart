const User = require('../model/user')
const jwt = require('jsonwebtoken')


const registration = async(req,res)=>{
    try {
        if(req.body){
            const{name,email,password} = req.body
            const isUser = await User.findOne({email})
            if(isUser){
                return res.status(400).json({msg:"User already exists.", success:false})
            }
            
            const user = new User(req.body)
            user.save()
            return res.status(200).json({msg:"Registration Successful",success:true})

        }
    } catch (error) {
        return res.status(500).json({msg:"Somthing went wrong",success:false})
    }
}
const login = async(req,res)=>{
    try {
        if(req.body){
            const{email,password}=req.body;
            const isUser = await User.findOne({email:email})
            if(!isUser){
                return res.status(400).json({msg:"invalid crediantial.",success:false})
            }
            if(isUser.password==password){
                const token = await jwt.sign({email:isUser.email,name:isUser.name},process.env.SECRET_code,{expiresIn:'1h'})
                return res.status(200).json({msg:"Login Succesful",success:true,token})
            }
            else{
                return res.status(400).json({msg:"invalid crediantial.",success:false})
            }
        }
    } catch (error) {
        return res.status(500).json({msg:"invalid crediantial.",success:false})
    }
}
const home = async(req,res)=>{
    try {
        if(req.params){
        const {email} = req.user;
        const isUser = await User.findOne({email:email})
        if(!isUser){
            return res.status(400).json({msg:"invalid crediantial.",success:false})
        }
        return res.status(200).json({msg:"profile succesful.",data:isUser,success:true})
    }
    } catch (error) {
        return res.status(400).json({msg:"something went wrong.",success:false})
    }
} 


module.exports = {registration,login,home};