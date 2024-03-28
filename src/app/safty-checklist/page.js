import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SaftyCheckList = () => {
  const [saftyDetails, setSaftyDetails] = useState({
    name1: "",
    name2: "",
    name3: "",
    name4: "",
    name5: "",
    name6: "",
    name7: "",
    employeeSignature: "",
    employeeDate: "",
    agencySignature: "Pacific Health System",
    agencyDate: "",
  });
  const User = useSelector((state) => state.user.userInfo);
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSaftyDetails({ ...saftyDetails, [name]: value });
  };
  const handleSubmit = async (next) => {
    try {
      const saveSaftyDetails = await axios.post("/api/saftydetails", {
        saftyDetails,
        userId: User._id,
      });
      localStorage.setItem("formFilled", "safty-certificate");
      if (next) {
        router.push("/safty-certificate");
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
   }
  return (
    <>
      <div className="w-[80%] mx-auto my-5">
        <h2 className="text-2xl text-center py-4 underline">
          Documentation of Safety Training
        </h2>

        <p className="font-semibold text-lg">
          After attending the Workplace Safety Protocol and Procedures
          orientation, please initial the following statements and sign below:
        </p>

        <p className="text-lg font-semibold my-10">
          <input
            type="text"
            name="name1"
            onChange={handleChange}
            value={saftyDetails.name1}
            className="px-2 border-b border-black outline-none"
          />{" "}
          I have read and understand the 5 basic caregiver safety procedures.
        </p>

        <p className="text-lg font-semibold my-10">
          <input
            name="name2"
            onChange={handleChange}
            value={saftyDetails.name2}
            className="px-2 border-b border-black outline-none"
            type="text"
          />{" "}
          I have read and understand how to properly inform Pacific Health
          Systems of an injury that occurred at the workplace.
        </p>

        <p className="text-lg font-semibold my-10">
          <input
            className="px-2 border-b border-black outline-none"
            type="text"
            name="name3"
            onChange={handleChange}
            value={saftyDetails.name3}
          />
          I understand that I MUST utilize proper Lifting Techniques and Body
          Mechanics.
        </p>

        <p className="text-lg font-semibold my-10">
          <input
            className="px-2 border-b border-black outline-none"
            type="text"
            name="name4"
            onChange={handleChange}
            value={saftyDetails.name4}
          />
          I have read and understand the importance of proper PPE and to UTILIZE
          them on the job.
        </p>

        <p className="text-lg font-semibold my-10">
          <input
            className="px-2 border-b border-black outline-none"
            type="text"
            name="name5"
            onChange={handleChange}
            value={saftyDetails.name5}
          />
          I have read procedures regarding Positions, Positioning and rolling of
          a client.
        </p>

        <p className="text-lg font-semibold my-10">
          <input
            className="px-2 border-b border-black outline-none"
            type="text"
            name="name6"
            onChange={handleChange}
            value={saftyDetails.name6}
          />
          I have read and understand the daily essential recommendations and
          tips on Caregiver Safety.
        </p>

        <p className="text-lg font-semibold my-10">
          <input
            className="px-2 border-b border-black outline-none"
            type="text"
            name="name7"
            onChange={handleChange}
            value={saftyDetails.name7}
          />
          I have read and understand that the Workplace Safety Protocols and
          Procedure training webinar is MANDATORY and MUST be completed to
          receive credit and coverage. If not, I forfeit my ability to file a
          claim in the event of an incident.
        </p>

        <div className="flex justify-start items-center space-x-5 my-8">
          <div className="flex flex-col justify-start items-start space-y-4 w-[40%]">
            <input
              className="border-b border-black outline-none px-2 w-full"
              type="text"
              name="employeeSignature"
              onChange={handleChange}
              value={saftyDetails.employeeSignature}
            />
            <label
              className="text-md font-semibold"
              htmlFor="EmployeeSignature"
            >
              Employee Signature{" "}
            </label>
          </div>
          <div className="flex flex-col justify-start items-start space-y-4 w-[25%]">
            <input
              type="text"
              name="employeeDate"
              onChange={handleChange}
              value={saftyDetails.employeeDate}
              className="border-b border-black outline-none px-2 w-full"
            />
            <label className="text-md font-semibold" htmlFor="dateEmployee">
              Date
            </label>
          </div>
        </div>

        <div className="flex justify-start items-center space-x-5 my-8">
          <div className="flex flex-col justify-start items-start space-y-4 w-[40%]">
            <input
              readOnly
              defaultValue={saftyDetails.agencySignature}
              className="border-b text-center py-1 text-3xl pacificHealthSystemSignature  border-black px-2 outline-none w-full"
              type="text"
            />
            <label
              className="text-md font-semibold"
              htmlFor="EmployeeSignature"
            >
              Agency&quot;s Signature
            </label>
          </div>
          <div className="flex flex-col justify-start items-start space-y-4 w-[25%]">
            <input
              type="text"
              name="agencyDate"
              onChange={handleChange}
              value={saftyDetails.agencyDate}
              id="date"
              className="border-b border-black outline-none px-2 py-1 w-full"
            />
            <label className="text-md font-semibold" htmlFor="date">
              Date
            </label>
          </div>
        </div>

        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            disabled={
              !Object.keys(saftyDetails).every((key) => {
                return Boolean(saftyDetails[key]);
              })
            }
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save & Exit
          </button>
          <button
            disabled={
              !Object.keys(saftyDetails).every((key) => {
                return Boolean(saftyDetails[key]);
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

export default SaftyCheckList;
