import mongoose from "mongoose"

export default function DbConnect() {
    try{
        mongoose.connect("mongodb://localhost:27017/shopper");
        console.log("Connected to Mongoose");

    }
    catch(error){
        console.error("faild to connect to mangoose",error);
    }
}