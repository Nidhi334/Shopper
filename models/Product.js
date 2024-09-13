import mongoose from "mongoose"
import Category from "./Category"

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String, required:true
    },
    category:{
         type:mongoose.Schema.Types.ObjectId,
         required:false, default:null,ref:Category
    },
    price:{
        type:Number, default:null
    },
    discount_price:{
        type:Number, default:null
    },
    stock:{
        type:Number, default:null,min:0
    },
    description:{
        type:String, default:null
    },
    barcode:{
        type:String, default:null
    },
    image:{
        type:String, default:null
    },
    brand:{
        type:String, default:null
    },
    
})
//delete mongoose.models.Product;

export default mongoose.models.Product || mongoose.model("Product",ProductSchema)