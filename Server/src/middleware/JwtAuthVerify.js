const jwt = require('jsonwebtoken')
 
const JwtAuthVerify=(req,res,next)=>{
    const token = req.header('Authorization').split(' ')[1];
    if(!token){
        return res.status(401).send({msg:'Access Denied.' ,success:false})
    }
    try {
        const verified = jwt.verify(token,process.env.SECRET_code)
        req.user = verified
        next()
    } catch (error) {
        return res.status(401).send({msg:'Invalid token.' ,success:false})
    }
}
module.exports = JwtAuthVerify;