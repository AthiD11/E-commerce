const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const validator=require('validator')

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate:{
            validator:validator.isEmail,
            message:'Invalid Email Address'
        }
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
})

UserSchema.methods.verifyPassword= async function (password){
    const user=this;
    const isMath= await bcrypt.compare(password,user.password);
    return isMath;
}

const User=mongoose.model("User",UserSchema)
module.exports=User;