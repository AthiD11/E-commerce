const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const User=require('../Models/User.model')

const userRegister= async (req,res)=>{
    try{
       const { username, email, password }=req.body;
       const existingUser= await User.findOne({ username })
       if(existingUser){
        return res.status(400).json({error:"username already exists"})
       }
       const existingEmail= await User.findOne({ email })
       if(existingEmail){
        return res.status(400).json({error:"email already exists"})
       }
       const salt= await bcrypt.genSalt(10);
       const hashedPassword= await bcrypt.hash(password,salt);
       const user=new User({ username, email, password:hashedPassword });
       const savedUser= await user.save();
       res.json({
        message:"User registered successfully",
        userId:savedUser._id
       })
    }
    catch(error){
        res.status(500).json({error:"Internal server error"})
    }
}

const userLogin= async (req,res)=>{
    const { username, password } =req.body;
    const user= await User.findOne({$or:[{username},{email:username}]});
    if(!user){
        return res.status(400).send("invalid username or email")
    }
    const validPassword= await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.status(400).send("invalid password")
    }
    const role=user.role
    const token=jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:'1h'})
    res.send({ token, role })
}

module.exports={ userRegister,userLogin };