"use client"

import {useFormState} from "react-dom";
import { registerFunc } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

function RegisterForm() {

    const [state, formAction] = useFormState(registerFunc,undefined);

    const router = useRouter();

    useEffect(()=>{
        state?.success && router.push("/login");
    },[state?.success,router])

    return (
        <div>
            <form action={formAction}>
                <div className="flex justify-start items-start flex-col space-y-3 w-[80%] mx-auto my-2">
                    <label htmlFor="name" className="text-lg font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name..."
                        id="name"
                        name="name"
                        className={`w-full p-2 outline-none border border-gray-400 rounded-md`}
                    />
                </div>
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
                    <label htmlFor="email" className="text-lg font-semibold">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your phone number..."
                        id="phone"
                        name="phone"
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
                        name="password"
                        placeholder="enter password..."
                        className={`w-full p-2 outline-none border border-gray-400 rounded-md`}
                    />
                </div>
                <div className="flex justify-start items-start flex-col space-y-3 w-[80%] mx-auto my-2">
                    <label htmlFor="password" className="text-lg font-semibold">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmRepeat"
                        placeholder="password again..."
                        className={`w-full p-2 outline-none border border-gray-400 rounded-md`}
                    />
                </div>
                <div className="w-[50%] mx-auto my-3">
                    <button
                        type="submit"
                        className="w-full py-1 text-xl font-semibold bg-[#403d6c] rounded-md text-white disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        Register
                    </button>

                    <p className="text-center">{state?.error}</p>
                    <Link href="/login">Have an account <b>Login</b></Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;