import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
    }
});

export const User = mongoose?.models.User || mongoose.model("User",userSchema);