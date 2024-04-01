"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

const StaffMiscount = () => {

  const router = useRouter();

  const [staffMiscount, setStaffMiscount] = useState({
    staffTitle: "",
    userName: "",
    EmpolyeeName: "",
    EmpolyeePosition: "",
    signature: "",
    date: "",
    name: "",
    staffName: "",
    staffSignature: "",
    staffDate: "",
    notaryDay: "",
    notaryDay2: "",
    notaryYear: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setStaffMiscount({ ...staffMiscount, [name]: value });
  };
  const handleSubmit = async (next) => {
    router.push("/code-of-ethics");
  };

  return (
    <>
      <title>Pacific Health System - Staff-misconduct</title>
        <link rel="shortcut icon" href="/logo.png" />
      <div className="w-[80%] mx-auto my-4">
        <h3 className="text-2xl font-normal my-5">
          STAFF MISCONDUCT ABUSE STATEMENT FORM
        </h3>
        <p className="text-xl font-semibold my-5">
          STAFF TITLE :{" "}
          <input
            type="text"
            value={staffMiscount.staffTitle}
            name="staffTitle"
            onChange={handleChange}
            className="border-b border-black px-2 outline-none w-[25%]"
          />{" "}
        </p>
        <p className="text-base font-semibold my-3">
          I understand and acknowledge that I must comply with Pacific Health
          Systems LLC, Code of Conduct and Abuse or Misconduct program.
        </p>
        <p className="text-base font-semibold my-3">
          All laws, regulations, policies & procedure as well as any other
          applicable state or local ordinances as it pertains to the
          responsibilities of my position.
        </p>
        <p className="text-base font-semibold my-3">
          I understand that my failure to report any concerns regarding possible
          violations of these laws, regulations, and Policies may result in
          disciplinary action, up to and including termination.
        </p>
        <p className="text-base font-semibold my-3">
          I{" "}
          <input
            type="text"
            value={staffMiscount.userName}
            name="userName"
            onChange={handleChange}
            className="border-b border-black px-2 outline-none w-[35%]"
          />{" "}
          as an employee of Pacific Health Systems LLC, I hereby state that, I
          have never shown any misconduct nor have a history of abuse and
          neglect of others.
        </p>
        <p className="text-base font-semibold my-3">
          I acknowledge that I have received and read the Misconduct or abuse
          statement form and that I clearly understand it.
        </p>
        <p className="text-base font-semibold my-3">
          Name of Employee (print) :{" "}
          <input
            type="text"
            name="EmpolyeeName"
            onChange={handleChange}
            value={staffMiscount.EmpolyeeName}
            className="border-b border-black px-2 outline-none w-[35%]"
          />
        </p>
        <p className="text-base font-semibold my-3">
          Employment Position :{" "}
          <input
            type="text"
            name="EmpolyeePosition"
            onChange={handleChange}
            value={staffMiscount.EmpolyeePosition}
            className="border-b border-black px-2 outline-none w-[35%]"
          />
        </p>
        <div className="flex justify-start items-center">
          <p className="text-base font-semibold my-3">
            Signature :{" "}
            <input
              type="text"
              name="signature"
              value={staffMiscount.signature}
              onChange={handleChange}
              className="border-b border-black px-2 outline-none w-[50%]"
            />
          </p>
          <p className="text-base font-semibold my-3">
            Data :{" "}
            <input
              type="text"
              name="date"
              onChange={handleChange}
              value={staffMiscount.date}
              className="border-b border-black px-2 outline-none w-[50%]"
            />
          </p>
        </div>
        <p className="text-base font-semibold my-3">
          Who having been first duly sworn depose and say that{" "}
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={staffMiscount.name}
            className="border-b border-black px-2 outline-none w-[40%]"
          />{" "}
          has never been shown to have exhibited any violent or abusive behavior
          or intentional or grossly negligent misconduct.
        </p>
        <p className="text-base font-semibold my-3">
          Also have never been accused or convicted to have been abused,
          neglected, sexually assaulted, exploited, or deprived any person or to
          have subjected any person to serious injury as a result of intentional
          or grossly negligent misconduct as evidence by an oral or written
          statement to this effect obtained at the time of application.
        </p>
        <p className="text-base font-semibold my-3">
          Print Name :{" "}
          <input
            type="text"
            value={staffMiscount.staffName}
            onChange={handleChange}
            name="staffName"
            className="border-b border-black px-2 outline-none w-[35%]"
          />
          Signature :{" "}
          <input
            type="text"
            name="staffSignature"
            value={staffMiscount.staffSignature}
            onChange={handleChange}
            className="border-b border-black px-2 outline-none w-[25%]"
          />{" "}
          Date :{" "}
          <input
            type="text"
            name="staffDate"
            onChange={handleChange}
            value={staffMiscount.staffDate}
            className="border-b border-black px-2 outline-none w-[15%]"
          />
        </p>
        <h3 className="text-xl font-bold italic my-4">Notary Affidavit</h3>
        <h5 className="font-medium text-base">State of: Georgia</h5>
        <p className="text-base font-semibold my-3">
          Sworn and subscribed before me this{" "}
          <input
            type="text"
            name="notaryDay"
            value={staffMiscount.notaryDay}
            onChange={handleChange}
            className="border-b border-black px-2 outline-none"
          />{" "}
          day of{" "}
          <input
            type="text"
            name="notaryDay2"
            value={staffMiscount.notaryDay2}
            onChange={handleChange}
            className="border-b border-black px-2 outline-none"
          />{" "}
          Year{" "}
          <input
            type="text"
            name="notaryYear"
            value={staffMiscount.notaryYear}
            onChange={handleChange}
            className="border-b border-black px-2 outline-none"
          />
        </p>
        <h5 className="font-medium text-base my-5">Notary Seal</h5>

        <h5 className="font-medium text-base my-10">Notary Signature</h5>

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

export default StaffMiscount;
