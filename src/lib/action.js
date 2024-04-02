
import { User } from "./model";
import { connectToDb } from "./utils";
import { reDitectToFirstPage } from "./allFunc";
import { val } from "./allFunc";

export const registerFunc = async (formData)=>{
    "use server"
    const {name,email,phone,password,confirmRepeat} = Object.fromEntries(formData);
    console.log(name,email,phone,password,confirmRepeat);
    
    if(password !== confirmRepeat){
        return "Passwod dose not match"
    }

    try{
        connectToDb();

        const user = await User.findOne({email});

        if(user){
            return "user already exist";
        }

        const newUser = new User({
            name,
            email,
            phone,
            password,
        });

        await newUser.save();
    }
    catch(err){
        console.log(err);
        return {error:"somthing went wrong!"};
    }
}

export const loginFunc = async (formData)=>{
    "use server"

    const {email,password} = Object.fromEntries(formData);
    console.log(email,password);
    connectToDb();

    let verify = await User.findOne({email});
    console.log(verify)

    if(verify){
       console.log("hey",val)
        //return 
    }
    else{
        return "Opps.. Not Found"
    }
}