"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ServiceDeliveryPolicies = () => {

  const router = useRouter();

  const [serviceDelivery, setServiceDelivery] = useState({
    name: "",
    userName: "",
    name2: "",
    name3: "",
    name4: "",
    empolyeeSignature: "",
    empolyeeDate: "",
    agencySignature: "",
    agencyDate: "",
  });

  const handleChange = (e) => {};
  const handleSubmit = (next) => {
    router.push("/orientation-checklist");
  };
  return (
    <>
      <div className="w-[80%] p-3 mx-auto">
        <h2 className="text-2xl font-bold underline my-2 text-center">
          Service Delivery Policies
        </h2>

        <p className="text-center text-lg my-5 font-semibold">
          At the Pacific Health Systems orientation forum, employees where told
          of the significances of rendering qualify service to our clients.
          Please initial the following statements and sign below:
        </p>

        <ul className="w-[80%] mx-auto">
          <li className="text-md font-bold my-3">
            <input
              type="text"
              name="name"
              value={serviceDelivery.name}
              onChange={handleChange}
              className="border-b border-black outline-none px-2"
            />{" "}
            I am aware of the agency policy of No “EVV Login, No pay”. I
            understand that I have to complete my hours daily for the previous
            two weeks prior to payroll week by 12:00PM on the Wednesday of the
            Payroll week and send in the copies of the Progress Notes by email
            to{" "}
            <a
              className="text-blue-600"
              href="mailto:payroll@pacifichealthsystems.net"
            >
              {" "}
              payroll@pacifichealthsystems.net
            </a>{" "}
            or post latest Friday of the week of the payroll week.
          </li>
          <li className="text-md font-bold my-3">
            <input
              type="text"
              name="userName"
              value={serviceDelivery.userName}
              onChange={handleChange}
              className="border-b border-black outline-none px-2"
            />{" "}
            I understand that NO CALL, NO SHOW results in immediate termination
          </li>
          <li className="text-md font-bold my-3">
            <input
              type="text"
              name="name2"
              onChange={handleChange}
              value={serviceDelivery.name2}
              className="border-b border-black px-2 outline-none"
            />{" "}
            Should there be a need to attend to non-business or family matters
            during my scheduled hours, I understand that I have to let the
            Administrator or my supervisor know of my plans to be off-duty as
            early as possible.
          </li>
          <li className="text-md font-medium my-3">
            <input
              type="text"
              name="name3"
              value={serviceDelivery.name3}
              onChange={handleChange}
              className="border-b border-black px-2 outline-none"
            />{" "}
            I understand that it is against agency policy to borrow money from
            my client or tell my client about my personal challenges
          </li>
          <li className="text-md font-medium my-3">
            <input
              type="text"
              onChange={handleChange}
              value={serviceDelivery.name4}
              name="name4"
              className="border-b border-black outline-none px-2"
            />{" "}
            I understand that services are performed at client’s home and I must
            seek agency approval before driving the client on Doctor’s
            appointments, grocery shopping, purchase medication etc..
          </li>
        </ul>

        <div className="w-[80%] flex justify-around items-center mx-auto my-7">
          <div className="flex justify-start items-start flex-col space-y-3 w-[50%]">
            <input
              type="text"
              onChange={handleChange}
              value={serviceDelivery.empolyeeSignature}
              name="empolyeeSignature"
              className="border-b border-black px-2 outline-none w-full"
            />
            <label
              className="text-md font-semibold"
              htmlFor="EmployeeSignature"
            >
              Employee Signature
            </label>
          </div>
          <div className="flex justify-start items-start flex-col space-y-3 w-[25%]">
            <input
              type="text"
              name="empolyeeDate"
              value={serviceDelivery.empolyeeDate}
              onChange={handleChange}
              className="border-b border-black px-2 outline-none w-full"
            />
            <label htmlFor="date" className="text-md font-semibold">
              Date
            </label>
          </div>
        </div>

        <div className="w-[80%] flex justify-around items-center mx-auto my-7">
          <div className="flex justify-start items-start flex-col space-y-3 w-[50%]">
            <input
              type="text"
              value={serviceDelivery.agencySignature}
              name="agencySignature"
              onChange={handleChange}
              className="border-b border-black px-2 outline-none w-full"
            />
            <label className="text-md font-semibold" htmlFor="AgencySignature">
              Agency&apos;s Signature
            </label>
          </div>
          <div className="flex justify-start items-start flex-col space-y-3 w-[25%]">
            <input
              type="text"
              name="agencyDate"
              value={serviceDelivery.agencyDate}
              onChange={handleChange}
              className="border-b border-black px-2 outline-none w-full"
            />
            <label htmlFor="date" className="text-md font-semibold">
              Date
            </label>
          </div>
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

export default ServiceDeliveryPolicies;
