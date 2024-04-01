"use client"
// import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import { useSelector } from "react-redux";

const EmergencyContact = () => {

  const router = useRouter();

  const [emergencyContact, setEmergencyContact] = useState({
    staffName: "",
    title: "",
    employeeName: "",
    contactAndPhone: "",
    EmergencyContactName: "",
    ContactNumberAndPhoneNumber: "",
    EmergencyContactName2: "",
    ContactNumberAndPhoneNumber2: "",
  });
//   const router = useRouter();
//   const User = useSelector((state) => state.user.userInfo);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEmergencyContact({ ...emergencyContact, [name]: value });
  };
  const handleSubmit = (next) => {
    router.push("/work-health-policy");
  }
  return (
    <>
      <div className="w-[80%] mx-auto py-4">
        <h2 className="my-4 font-semibold text-center text-2xl">
          AGENCY STAFF EMERGENCY CONTACT INFORMATION
        </h2>
        <p className="text-lg font-semibold text-center mx-auto my-3 bg-yellow-400 w-max">
          **Be advised, you are required to have the full address and contact
          number for all 3 contacts
        </p>
        <div className="flex justify-center items-center space-x-5 my-5">
          <div className="flex flex-col justify-start items-start space-y-3 w-[40%]">
            <label className="text-lg font-semibold">STAFF NAME:</label>
            <input type="text" value={emergencyContact.staffName} name="staffName" onChange={handleChange} className="border-b border-black outline-none w-full" />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3 w-[25%]">
            <label className="text-lg font-semibold">Title:</label>
            <input type="text" name="title" value={emergencyContact.title} onChange={handleChange} className="border-b border-black outline-none w-full" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <label className="text-lg font-semibold">1. Employee Name</label>
          <input type="text" value={emergencyContact.employeeName} name="employeeName" onChange={handleChange} className="border-b border-black outline-none px-2 w-[75%]" />
        </div>
        <div className="my-5 flex flex-col justify-start items-start">
          <label className="text-lg font-semibold">
            Contact address & phone number:
          </label>
          <input type="text" name="contactAndPhone" onChange={handleChange} value={emergencyContact.contactAndPhone}  className="border-b border-black outline-none px-2 w-[75%]" />
        </div>

        <div className="my-5 flex flex-col justify-start items-start">
          <label className="text-lg font-semibold">
            2. Employee Optional Emergency Contact name:
          </label>
          <input type="text" name="EmergencyContactName" onChange={handleChange} value={emergencyContact.EmergencyContactName} className="border-b border-black outline-none px-2 w-[75%]" />
        </div>
        <div className="my-5 flex flex-col justify-start items-start">
          <label className="text-lg font-semibold">
            Contact Number & phone number:
          </label>
          <input type="text" value={emergencyContact.ContactNumberAndPhoneNumber2} name="ContactNumberAndPhoneNumber2" onChange={handleChange} className="border-b border-black outline-none px-2 w-[75%]" />
        </div>

        <div className="my-5 flex flex-col justify-start items-start">
          <label className="text-lg font-semibold">
            3. Employee Optional Emergency Contact name:
          </label>
          <input type="text" name="EmergencyContactName2" onChange={handleChange} value={emergencyContact.EmergencyContactName2} className="border-b border-black outline-none px-2 w-[75%]" />
        </div>
        <div className="my-5 flex flex-col justify-start items-start">
          <label className="text-lg font-semibold">
            Contact Number & phone number:
          </label>
          <input type="text" name="ContactNumberAndPhoneNumber" onChange={handleChange} value={emergencyContact.ContactNumberAndPhoneNumber} className="border-b border-black outline-none px-2 w-[75%]" />
        </div>

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

export default EmergencyContact;
