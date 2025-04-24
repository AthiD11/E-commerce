const express = require('express')
const mongoose=require('mongoose')
const ProductRoutes=require('./Routes/Route')
const cors=require('cors')
const UserRoutes = require('./Routes/User.route')
require('dotenv').config();

const app=express();
// const PORT=3001;

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to Database");
})
.catch((error)=>{
    console.error("Error Connecting to Database",error);
})    

app.use(cors({
    origin:['https://client-mu-indol.vercel.app'],
    credentials:true
}));
app.use(express.json());
app.use('/api/products',ProductRoutes)
app.use('/api/auth',UserRoutes)

// app.listen(PORT,()=>{
//     console.log(`Server Running on PORT ${PORT}`)
// })

app.get('/',(req,res)=>{
    res.send("Backend API is Running")
})

module.exports=app;