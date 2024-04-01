"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SaftyCertificate = () => {

  const router = useRouter();
  const [saftyCertificate, setSaftyCertificate] = useState({
    employer:"Pacific Health System",
    date:"",
  });

  const handleChange = (e) => {
    
  };
  const handleSubmit = (next) => {
    router.push("/direct-deposite-enrollment")
  };
  return (
    <>
      <div className="w-[80%] mx-auto py-2">
        <div className="w-[50%] h-32 relative mx-auto p-1 my-5">
          <Image
            className="object-cover"
            src="/logo2.png"
            fill
            loading="lazy"
            alt="pacificHealthLogo"
          />
        </div>

        <h2 className="text-3xl font-bold text-center my-4 text-gray-700">
          Work Health & Safety
        </h2>

        <h1 className="text-center my-4 text-8xl font-bold tracking-wider">
          Certificate
        </h1>
        <h2 className="text-center my-4 text-2xl font-bold text-gray-700">
          This certificate is awarded to
        </h2>

        <h2 className="text-center mt-28 text-2xl font-bold text-gray-700">
          For completing the Safety Protocol & Policy Module.
        </h2>

        <div className="flex justify-between items-center mt-10">
          <div className="flex flex-col justify-start items-center space-y-3 w-[40%]">
            <input
              defaultValue={saftyCertificate.employer}
              name="employer"
              readOnly
              className="border-b text-center py-1 text-3xl pacificHealthSystemSignature  border-black px-2 outline-none w-full"
              type="text"
            />
            <label className="text-lg font-bold text-gray-700">Employer</label>
          </div>

          <div className="flex flex-col justify-start  items-center space-y-3 w-[25%]">
            <input
              type="text"
              onChange={handleChange}
              value={saftyCertificate.date}
              name="date"
              className="border-b border-black px-2 w-full outline-none"
            />
            <label className="text-lg font-bold text-gray-700">Date</label>
          </div>
        </div>
        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white "
          >
            Save & Exit
          </button>
          <button
            onClick={() => handleSubmit("nextForm")}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white "
          >
            Save & Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default SaftyCertificate;
