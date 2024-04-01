
import Head from "next/head";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="w-[80%] lg:w-[35%] p-2 shadow-lg bg-[#403d6c]/20 rounded-md">
        <h1 className="font-semibold text-2xl py-2 text-[#3f3d6c] px-5">Welcome to Pacific <span className="text-[#d8314a]">Health</span> System</h1>
        <h2 className="text-2xl font-semibold py-2 text-[#3f3d6c] px-5">Log In</h2>
          <form>
            <div className="flex justify-start items-start flex-col space-y-3 w-[80%] mx-auto my-2">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email..."
                id="email"
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
                className={`w-full p-2 outline-none border border-gray-400 rounded-md`}
              />
            </div>
            <div className="w-[50%] mx-auto my-3">
              <button
                type="button"
                className="w-full py-1 text-xl font-semibold bg-[#403d6c] rounded-md text-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Login
              </button>
            </div>
          </form>
          <div className="p-3">
            <h2 className="text-md font-normal ">New here <Link href='/auth/register' className="text-[#403d6c] font-semibold">Create An Account ?</Link></h2>
            <Link href='#' className="text-[#403d6c] font-semibold">Forgot password?</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default page