"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const pcajobDescription = [
  `- Tub Bathing`,
  `- Washing hair and body`,
  `- Apply lotion to the back and body`,
  `- Take vitals`,
  `- Observation of skin changes & skin care`,
  `- Supervising and reporting changes in clients condition`,
  `- Feeding`,
  `- Vital Signs`,
  `- Cut toenails (non-diabetic)`,
  `- Bathing, shampoo hair, oral hygiene, and general skin care.`,
  `- Assists with dressing or grooming.re.`,
  `- feed patients and/or provide fluids.`,
  `- Assists with toileting activities`,
  `- Assists with use of a bedpan,`,
  `- Changing diapers.edpan,`,
  `- Other Hygiene tasks`,
];

const Pcajob = () => {
  const router = useRouter();

  const [PCADetails, setPCADetails] = useState({
    userName: "",
    name: "",
    applicantSignature: "",
    date1: "",
    supervisorSignature: "",
    date2: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPCADetails({ ...PCADetails, [name]: value });
  };
  const handleSubmit = async (next) => {
    router.push("/nurse-rn-staff");
  };

  return (
    <>
     <title>Pacific Health System - PCA-job</title>
        <link rel="shortcut icon" href="/logo.png" />
    <div className="p-3 w-[80%] mx-auto">
      <h3 className="text-lg font-semibold my-3">
        PCA JOB DESCRIPTION (This is a HANDS-ON,job Desscription)
      </h3>
      <p className="text-base font-semibold">
        This agency provides personal care tasks, and such tasks, shall be
        performed by a qualified PCA under the direction of a supervisor as
        required, in accordance with the client&apos;s service plan. CNA
        Certification is also a component required if acting in the capacity of
        this job description.
      </p>

      <p className="my-3 font-medium">
        1. In addition to following the service plan, a PCA must report on the
        personal care needs of the client, on changes in the client&apos;s
        condition, and on any observed problems that affect the client,
      </p>

      <p className="my-3 font-medium">
        2. Licensed and is also authorized to perform personal care tasks.
      </p>

      <p className="my-3 font-medium ml-3">
        a. The PCA who delivers the services must have access to and be
        knowledgeable of the client&apos;s service plan at the time services are
        provided
      </p>
      <p className="my-3 font-medium ml-3">
        b. As personal care needs change or problems emerge, the PCA must
        document changes or need for changes
      </p>
      <p className="my-3 font-medium ml-3">
        c. There are other non-medical, non-hand on services that can and may be
        provided; this is not an inclusive list just sample of many services one
        may provide under this job description.
      </p>
      <p className="my-3 font-medium ml-3">
        i This may be documented on the task sheet and task to perform may be as
        follows:
      </p>
      <ul className="my-3 font-normal ml-3">
        {pcajobDescription.map((cur, id) => (
          <li className="font-medium text-base my-2" key={id}>
            {cur}
          </li>
        ))}
      </ul>
      <p className="my-3 font-medium">
        I{" "}
        <input
          name="userName"
          value={PCADetails.userName}
          onChange={handleChange}
          className="border-b border-black px-2 outline-none"
        />{" "}
        accept, acknowledge and comprehend all responsibilities assigned by this
        agency.
      </p>
      <p className="my-3 font-medium">
        Who having been first duly sworn depose and say that{" "}
        <input
          name="name"
          value={PCADetails.name}
          onChange={handleChange}
          className="border-b border-black px-2 outline-none"
        />{" "}
        has never been shown to have exhibited any violent or abusive behavior
        or intentional or grossly negligent misconduct.
      </p>
      <p className="my-3 font-medium">
        Also have never been accused or convicted to have been abused,
        neglected, sexually assaulted, exploited, or deprived any person or to
        have subjected any person to serious injury as a result of intentional
        or grossly negligent misconduct as evidence by an oral or written
        statement to this effect obtained at the time of application.
      </p>

      <div className="flex justify-start items-center space-x-5">
        <div className="flex flex-col justify-start items-start space-y-3">
          <input
            value={PCADetails.applicantSignature}
            onChange={handleChange}
            name="applicantSignature"
            className="border-b border-black px-2 outline-none w-full"
          />
          <label className="text-md font-semibold">Signature</label>
        </div>
        <div className="flex flex-col justify-start items-start space-y-3">
          <input
            value={PCADetails.date1}
            onChange={handleChange}
            name="date1"
            className="border-b border-black px-2 outline-none"
          />
          <label className="text-md font-semibold">Date</label>
        </div>
      </div>

      <div className="flex justify-start items-center space-x-5">
        <div className="flex flex-col justify-start items-start space-y-3">
          <input
            value={PCADetails.supervisorSignature}
            onChange={handleChange}
            name="supervisorSignature"
            className="border-b border-black px-2 outline-none w-full"
          />
          <label className="text-md font-semibold">
            Supervisor’s Signature{" "}
          </label>
        </div>
        <div className="flex flex-col justify-start items-start space-y-3">
          <input
            value={PCADetails.date2}
            onChange={handleChange}
            name="date2"
            className="border-b border-black px-2 outline-none"
          />
          <label className="text-md font-semibold">Date</label>
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
export default Pcajob;
