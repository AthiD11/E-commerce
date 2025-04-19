const express= require('express')
const router=express.Router(); 
const{ createProduct, getProducts, getProduct,  }=require('../Controllers/Product.controllers')

router.post('/',createProduct);

router.get('/',getProducts);

router.get('/:id',getProduct);

module.exports=router;