import { User } from "./model";
import { connectToDb } from "./utils";
import { reDitectToFirstPage } from "./allFunc";
import { val } from "./allFunc";
import bcrypt from "bcryptjs";
// import signIn from "next-auth";

export const registerFunc = async (formData) => {
  "use server";
  const { name, email, phone, password, confirmRepeat } =
    Object.fromEntries(formData);
  console.log(name, email, phone, password, confirmRepeat);

  if (password !== confirmRepeat) {
    return "Passwod dose not match";
  }

  try {
    connectToDb();

    const user = await User.findOne({ email });

    if (user) {
      return "user already exist";
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
  } catch (err) {
    console.log(err);
    return { error: "somthing went wrong!" };
  }
};

export const loginFunc = async (formData) => {
  "use server";

  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);
  //   connectToDb();

  //   let verify = await User.findOne({ email });
  //   console.log(verify);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
};
