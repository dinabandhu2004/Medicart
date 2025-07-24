require("dotenv").config()
const cors = require('cors')
const express = require('express');
const dbconnect = require("./src/config/db");
const userRouter = require('./src/router/userRouter')
const doctorroute = require('./src/router/doctorroute')
const adminrouter = require('./src/router/adminrouter')
const productrouter =require('./src/router/productrouter')
const app = express()

app.use(express.json())
app.use(cors());
app.use(userRouter)
app.use(doctorroute)
app.use(adminrouter)
app.use('/productuploads',express.static('productuploads'))
app.use(productrouter)

dbconnect().then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://127.0.0.1:${process.env.PORT}`)
});
});