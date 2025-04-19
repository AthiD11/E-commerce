// const Product = require('../Models/Product.models')
const Product=require('../Models/Product.models')


const createProduct=async(req,res)=>{
    try{
        const product=await Product.create(req.body)
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getProducts=async(req,res)=>{
    try{
        const products=await Product.find({})
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getProduct=async(req,res)=>{
    try{ 
        const { id } = req.params;
        const product=await Product.findbyId(id)
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports={createProduct,getProduct,getProducts}
