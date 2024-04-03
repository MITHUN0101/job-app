"use server";

import { signIn } from "./auth";
import { User } from "./model";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
// import signIn from "next-auth";

export const registerFunc = async (previousState,formData) => {

  const { name, email, phone, password, confirmRepeat } =
    Object.fromEntries(formData);
  console.log(name, email, phone, password, confirmRepeat);

  if (password !== confirmRepeat) {
    return {error:"Passwod dose not match"};
  }

  try {
    connectToDb();

    const user = await User.findOne({ email });

    if (user) {
      return {error:"user already exist"};
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      phone,
      password: hashPassword,
    });

    await newUser.save();

    return {success:true};
    console.log("saved to database!");
  } catch (err) {
    console.log(err);
    return { error: "somthing went wrong!" };
  }
};


/*==========================Login actions============================= */

export const loginFunc = async (previousData,formData) => {

  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);

  // try {
  //   console.log(signIn,"HELLO");
  //   await signIn("credentials", { email, password });
  // } catch (err) {
  //   console.log(err,"hello");

  //   if(err.message.includes["CredentialsSignin"]){
  //     return {error: "Invalid username or password"}
  //   }

  //   return { error: "something went wrong!" };
  // }

  connectToDb();

  const user = await User.findOne({ email });

  if (!user) {
    return {error:"username is incorrect"};
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  if(!bcrypt.compare(hashPassword, user.password)){
    return {error:"usename or password is incorrect"};
  }

  const logedInUser = {
    name:user.name,
    email:user.email,
  }
  
  return {success:true, logedInUser};
};
