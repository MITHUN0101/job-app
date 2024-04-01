"use client"

import { useRouter } from "next/navigation";

const PHSTB = () => {

    const router = useRouter();
    const handleSubmit = (next) => {
      router.push("/emergency-contact")
    } 
  return (
    <>
      <div className="w-[80%] py-2 mx-auto">
        {/* <iframe src="/PHS-TB.pdf" width="100%" height="500px" /> */}
        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white"
          >
            Save & Exit
          </button>
          <button
            onClick={() => handleSubmit("nextForm")}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default PHSTB;
