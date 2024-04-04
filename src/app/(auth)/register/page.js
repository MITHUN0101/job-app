
import RegisterForm from "@/component/registerForm/registerForm";
import Link from "next/link";



function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="w-[80%] lg:w-[35%] p-2 shadow-lg bg-[#403d6c]/20 rounded-md">
        <h1 className="font-semibold text-2xl py-2 text-[#3f3d6c] px-5">Welcome to Pacific <span className="text-[#d8314a]">Health</span> System</h1>
        <h2 className="text-2xl font-semibold py-2 text-[#3f3d6c] px-5">Register</h2>
          <RegisterForm/>
        </div>
      </div>
  )
}

export default Page