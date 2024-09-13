import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
    cat_title:{
        type:String,
        required:true
    },
    cat_description:{
         type:String,
         required:true
    },
},{timestamps:true})

export default mongoose.models.Category || mongoose.model("Category",CategorySchema)