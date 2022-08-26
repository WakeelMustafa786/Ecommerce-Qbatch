const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors=require("cors");
const { Product } = require("./model/product");
const {Cart}= require("./model/cart")

const app=express();
app.use(express.json())
app.use(cors());

mongoose.connect ('mongodb://localhost:27017/wakeel',{

    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>console.log("MONGODB Connected"))
.catch((err)=>console.error(err))

app.post('/add', async (req,res)=>{
    const data=await Product.insertMany(req.body);
    res.send(data)

})
app.get('/hello' , async (req, res)=>{
    try {
        const p=await Product.find()
        res.send(p)
    } catch (error) {
        res.send("SOME EROR" , error)
    }
  

})

app.listen(5000,()=>{
    console.log(`Hello http://localhost:5000`);
})