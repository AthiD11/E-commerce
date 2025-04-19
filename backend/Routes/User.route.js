const express=require('express')
const router=express.Router();

const{userRegister,userLogin}=require('../Controllers/User.controller')

router.post('/register',userRegister)

router.post('/login',userLogin)

module.exports=router;