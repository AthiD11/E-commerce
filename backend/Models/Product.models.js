const mongoose=require('mongoose')

const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['Camping','Hiking','Sports','Fishing','Travel','Other'],
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountprice:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    images:{
        type:[String],
        required:true,
        default:[]
    },
    description:{
        type:String,
        required:true
    },
})

const Product=mongoose.model("products",ProductSchema)

module.exports=Product;