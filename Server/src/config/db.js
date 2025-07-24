const mongoose = require('mongoose')

const dbconnect= async()=>{
    try {
        await mongoose.connect(process.env.URL);
        console.log('Database connected sucessfully.');
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbconnect;