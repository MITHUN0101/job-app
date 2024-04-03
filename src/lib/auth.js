// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { connectToDb } from "./utils";
// import { User } from "./model";
// import { bcrypt } from "bcryptjs";
// import { loginFunc } from "./action";
// // import { authConfig } from "./auth.config";

// // export const loginFunc = async (credentials) => {
// //     try {
// //         connectToDb();
// //         const user = await User.findOne({ email: credentials.email });

// //         if (!user) throw new Error("Worng crediantials!");

// //         const isPasswordCorrect = await bcrypt.compare(
// //             credentials.password,
// //             user.password
// //         );

// //         if (!isPasswordCorrect) {
// //             throw new Error("Wrong Credentials!");
// //         }

// //         return user;
// //     }
// //     catch (err) {
// //         console.log(err);
// //         throw new Error("Failed to login!");
// //     }
// // }




// export const {
//     handlers: { GET, POST },
//     auth,
//     signIn,
//     signOut,
// } = NextAuth({
//     ...authConfig,
//     providers: [
//         CredentialsProvider({
//             async authorize(credentials) {
//                 try {
//                     const user = await loginFunc(credentials);
//                     return user;
//                 } catch (err) {
//                     console.log(err);
//                     return null;
//                 }
//             },
//         }),
//     ],
//     callbacks: {
//         async signIn({ user, account, profile }) {
//             //console.log(profile);

//             if (account.provider === "github") {
//                 connectToDb();
//                 try {
//                     const user = await User.findOne({ email: profile.email });
//                     if (!user) {
//                         const newUser = new User({
//                             username: profile.login,
//                             email: profile.email,
//                             image: profile.avatar_url,
//                         });

//                         await newUser.save();
//                     }
//                 } catch (err) {
//                     console.log(err);
//                     return false;
//                 }
//             }

//             return true;
//         },
//         ...authConfig.callbacks,
//     },
// });




import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDb } from "./utils";
import { User } from "./model";

const login = async (credentials) =>{
    try{
        connectToDb();
        const user = await User.findOne({email: credentials.email});

        if(!user){
            throw new Error("Wrong credentials")
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if(!isPasswordCorrect){
            throw new Error("Wrong credentials!");
        }

        return user;
    }catch(err){
        console.log(err)
        throw new Error("Wrong credentials!");
    }
}


export const {handlers,auth,signIn,signOut} = NextAuth({
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                try{
                    const user = await login(credentials);
                    return user;
                }
                catch(err){
                    return null;
                }
            }
        })
    ]
})
