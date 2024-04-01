import mongoose from "mongoose";

const connection = {};

export const connectToDb = async ()=>{
    try{
        if(connection.isConnected){
            console.log("Using existing connection");
            return;
        }
        const options = {
            dbName:"job-application"
        }

        await mongoose.connect(process.env.MONGODB,options);
        //connection.isConnected = mongoose.connection[0].readyState;

        mongoose.connection.on("connected",()=>{
            console.log("Connected to mongodb");
        });


        mongoose.connection.on("error",()=>{
            console.log("Mongodb connection error");
        });

        mongoose.connection.on("disconnected",()=>{
            console.log("Disconnected from mongodb");
        });

    }catch(error){
        console.log("Error connecting to mongodb", error.message);
        throw new Error(error.message);
    }
}