"use client"

import {useFormState} from "react-dom";
import { loginFunc } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

function LoginForm() {

    const [state, formAction] = useFormState(loginFunc,undefined);

    const router = useRouter();

    useEffect(()=>{
        if(state?.success){
            console.log("logedin",state.logedInUser);
            localStorage.setItem("logedInUser",JSON.stringify(state.logedInUser));
            router.push("/employmentForm");
        }

    },[state?.success,router])

    return (
        <div className="h-screen flex justify-center items-center">
        <div className="w-[80%] lg:w-[35%] p-2 shadow-lg bg-[#403d6c]/20 rounded-md">
        <h1 className="font-semibold text-2xl py-2 text-[#3f3d6c] px-5">Welcome to Pacific <span className="text-[#d8314a]">Health</span> System</h1>
        <h2 className="text-2xl font-semibold py-2 text-[#3f3d6c] px-5">Log In</h2>
          <form action={formAction}>
            <div className="flex justify-start items-start flex-col space-y-3 w-[80%] mx-auto my-2">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email..."
                id="email"
                name="email"
                className={`w-full p-2 outline-none border border-gray-400 rounded-md`}
              />
            </div>
            <div className="flex justify-start items-start flex-col space-y-3 w-[80%] mx-auto my-2">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="enter password..."
                name="password"
                className={`w-full p-2 outline-none border border-gray-400 rounded-md`}
              />
            </div>
            <div className="w-[50%] mx-auto my-3">
              <button
                type="submit"
                className="w-full py-1 text-xl font-semibold bg-[#403d6c] rounded-md text-white"
              >
                Login
              </button>
            </div>
          </form>
          <div className="p-3">
            <p>{state?.error}</p>
            <Link href='/register' className="text-[#403d6c] font-semibold">{"Don't have an account?"}<b>Register</b></Link>
          </div>
        </div>
      </div>
    )
}

export default LoginForm;