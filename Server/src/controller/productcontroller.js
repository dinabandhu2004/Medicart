//curd using rest API
const product = require('../model/product');

const addData = async(req,res)=>{
    try {
        if(req.body){
            const{pname, price}= req.body
            const image = req.file.filename
            const myproduct = new product({pname,price,image})
            await myproduct.save()
            return res.status(201).json({'msg':'Product added sucessfully'});
        }
    } catch (error) {
        return res.status(500).json({'msg':'Product added failed'});
    }

}

const getData = async(req,res)=>{
    try {
        if(req){
            const productData = await product.find()
            return res.status(201).json({'msg':'Product Data.',success:true,productData});
        }
    } catch (error) {
        return res.status(500).json({'msg':'Data fetched faild'})
    }

    
}

const updateData = async(req,res)=>{

    try {
        if(req.body && req.params.id){
            const updateProduct = await product.findByIdAndUpdate(req.params.id,req.body,{new:true})
            return res.status(200).json({'msg':'Data Updated Succesfully'});
        }
    } catch (error) {
        return res.status(500).json({'msg':'Data Updated Succesfully'});
    }

}
const deleteData = async(req,res)=>{
    try {
        if(req.params.id)
        {
            const deleteData = await product.findByIdAndDelete(req.params.id)
            return res.status(200).json({msg:'Product Delete Successfully'})
        }
    } catch (error) {
        return res.status(500).json({msg:'Product Delete failed'})
    }
}

module.exports = {addData, getData,updateData,deleteData}