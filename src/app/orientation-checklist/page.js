"use client"
import React, { useState } from "react";

const OrientationChecklist = () => {
  const [orientationDetails, setOrientationDetails] = useState({
    name1: '',
    name2: '',
    name3: '',
    name4: '',
    name5: '',
    name6: '',
    name7: '',
    name8: '',
    EmployeeSignature: '',
    EmployeeDate: '',
    AgencySignature: '',
    AgencyDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrientationDetails({ ...orientationDetails, [name]: value });
  }
  const handleSubmit = async (next) => {
    console.log(orientationDetails);
  }

  return (
    <>
      <div className="w-[70%] mx-auto py-5">
        <h2 className="text-2xl text-center underline font-semibold">
          Documentation of Orientation
        </h2>

        <p className="my-5 font-semibold text-lg">
          After attending the Pacific Health Systems Services orientation,
          please initial the following statements and sign below:
        </p>

        <p className="my-3 font-semibold text-lg">
          <input type="text" name="name1" value={orientationDetails.name1} onChange={handleChange} className="border-b border-black px-2 outline-none w-[15%]" />
          {"  "}I have read and understand the policies and procedures regarding
          scope of services and the types of clients served.
        </p>
        <p className="my-3 font-semibold text-lg">
          <input type="text" name="name2" value={orientationDetails.name2} onChange={handleChange} className="border-b border-black px-2 outline-none w-[15%]" />{" "}
          {"  "} I have read and understand my assigned duties and
          responsibilities
        </p>
        <p className="text-lg font-semibold my-3">
          <input type="text" value={orientationDetails.name3} name="name3" onChange={handleChange} className="border-b border-black px-2 outline-none w-[15%]" />{" "}
          I understand to report client emergencies, problems and/or progress to
          supervisory nurse.
        </p>

        <p className="my-3 font-semibold text-lg">
          <input type="text" onChange={handleChange} value={orientationDetails.name4} name="name4" className="border-b border-black px-2 outline-none w-[15%]" />I
          understand that I must report suspected exposure to TB to the agency
        </p>
        <p className="my-3 font-semibold text-lg">
          <input type="text" value={orientationDetails.name5} name="name5" onChange={handleChange} className="border-b border-black px-2 outline-none w-[15%]" />{" "}
          I have read and understand the client rights.
        </p>
        <p className="my-3 font-semibold text-lg">
          <input type="text" value={orientationDetails.name6} name="name6" onChange={handleChange} className="border-b border-black px-2 outline-none w-[15%]" />{" "}
          I have read procedures regarding handling of complaints, medical
          emergencies and other incidents.
        </p>
        <p className="my-3 font-semibold text-lg">
          <input type="text" value={orientationDetails.name7} name="name7" onChange={handleChange} className="border-b border-black px-2 w-[15%] outline-none" />{" "}
          I have read and understand the required daily documentation of
          activities as client is being served
        </p>
        <p className="my-3 font-semibold text-lg">
          <input type="text" value={orientationDetails.name8} name="name8" onChange={handleChange} className="border-b outline-none border-black px-2 " /> I have received a
          copy of the Pacific Health Systems Employee Handbook
        </p>

        <div className="flex justify-start items-center space-x-5 mt-8">
          <div className="flex flex-col justify-start items-start w-[50%] space-y-4">
            <input type="text" value={orientationDetails.EmployeeSignature} name="EmployeeSignature" onChange={handleChange} className="border-b outline-none border-black text-lg w-full" />
            <label
              className="text-md font-semibold"
              htmlFor="EmployeeSignature"
            >
              Employee Signature
            </label>
          </div>
          <div className="flex flex-col justify-start items-start w-[25%] space-y-4">
            <input type="text" value={orientationDetails.EmployeeDate} name="EmployeeDate" onChange={handleChange} className="border-b outline-none border-black text-lg w-full" />
            <label
              className="text-md font-semibold"
              htmlFor="EmployeeSignature"
            >
              Date
            </label>
          </div>
        </div>
        <div className="flex justify-start items-start space-x-5 mt-8">
          <div className="flex flex-col justify-start items-start space-y-4 w-[50%]">
            <input type="text" value={orientationDetails.AgencySignature} name="AgencySignature" onChange={handleChange} className="border-b outline-none border-black text-lg w-full" />
            <label className="text-md font-semibold" htmlFor="AgencySignature">
              Agency’s Signature{" "}
            </label>
          </div>
          <div className="flex flex-col justify-start items-start space-y-4 w-[25%]">
            <input type="text" value={orientationDetails.AgencyDate} name="AgencyDate" onChange={handleChange} className="border-b outline-none border-black text-lg w-full" />
            <label
              className="text-md font-semibold"
              htmlFor="EmployeeSignature"
            >
              Date
            </label>
          </div>
        </div>

        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            disabled={
              !Object.keys(orientationDetails).every((key) => {
                return Boolean(orientationDetails[key]);
              })
            }
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save & Exit
          </button>
          <button
            disabled={
              !Object.keys(orientationDetails).every((key) => {
                return Boolean(orientationDetails[key]);
              })
            }
            onClick={() => handleSubmit("nextForm")}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default OrientationChecklist;
