"use client";
// import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { useSelector } from "react-redux";

const nurseJobDities = [
  `Identifies client care requirements by establishing personal rapport
    with potential and actual clients and other persons in a position to
    understand care requirements.`,

  `Establishes a compassionate environment by providing emotional, psychological, and spiritual support to 
    clients, friends, and families`,

  ` Promotes client's independence by establishing client care goals; teaching client's, friends, and family to 
  understand condition, medications, and self-care skills; answering questions.`,

  ` Assures quality of care by adhering to therapeutic standards; measuring health outcomes against patient 
  care goals, and standards; making or recommending necessary adjustments; following doctor's orders and 
  agencies philosophies and standards of care set by state board of nursing, state nurse practice act, and 
  other governing agency regulations.`,

  ` Resolves client problems and needs by utilizing multidisciplinary team strategies.`,

  ` Maintains safe and clean working home environment by complying with procedures, rules, and regulations 
  as established by the agency; calling for assistance from agency support personnel`,

  ` Protects clients and employees by adhering to infection-control policies and protocols, medication 
  administration and storage procedures, and controlled substance regulations.`,

  ` Documents client care services by charting in client records.`,

  ` Maintains continuity among other staff by documenting and communicating actions, irregularities, and 
  continuing needs.`,

  ` Maintains client confidence and protects operations by keeping information confidential. title: nurse, 
  registered`,

  ` Ensures operation of equipment by completing preventive maintenance requirements; following 
  manufacturer's instructions; troubleshooting malfunctions; calling for repairs; maintaining equipment 
  inventories; evaluating new equipment and techniques.`,

  ` Maintain or expedite orders for supplies; verifying receipt of supplies; using equipment and supplies as 
  needed to accomplish job results.`,

  ` Maintains professional and technical knowledge by attending educational workshops; reviewing 
  professional publications; establishing personal networks; participating in professional societies.`,

  ` Maintains a cooperative relationship among health care agency staff by communicating information; 
  responding to requests; building rapport; participating in team problem-solving methods.`,

  `Contributes to team effort by accomplishing related results as needed.`,

  `Participates in development and review of client's service plan`,

  `Performs supervisory visits of Nurse’s every 62 days or when medical needs or service change & 92 days 
  for CNA’s services for clients who are receiving personal care and 122 days for Companion Sitter.`,

  `Responsible for medically fragile clients when applicable and determine clients appropriate eligibility`,

  ` Participates in orientation and training`,

  `Perform supervisory visits of Companion Sitters when needed.`,

  `Ensures that the client’s families and agency staff are made aware of any medical changes and or issues 
  with medication when needed, or any changes in conditions`,

  ` Ensure completion of all client assessments to serve as basis for client Service Plan, to determine what level 
  of supervision is required and also to determine whether or not the client is medically frail/medically 
  compromised(MF/MC)`,

  `Ensure all plan of care forms are completed and updated or changed when needed.`,

  `Implements Initial assessment review with all agency clients to determine if they are MF/MC`,
];

const NurseRNStaff = () => {
  const [nurseStaffDetails, setNurseStaffDetails] = useState({
    nurseStaffSignature: "",
    staffDate: "",
    userName: "",
    staffSignature: "",
    date: "",
  });

  const router = useRouter();
  // const User = useSelector((state) => state.user.userInfo);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNurseStaffDetails({ ...nurseStaffDetails, [name]: value });
  };

  const handleSubmit = (next) => {
    router.push("/cna-employee-job");
  };

  return (
    <>
       <Head>
        <title>Pacific Health System - Nurse-RN-Staff</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <div className="p-3 w-[80%] mx-auto">
        <h3 className="text-lg font-semibold my-3">DESCRIPTION: NURSE</h3>

        <p className="text-base font-semibold">
          Promotes and restores client&apos;s health by completing the nursing
          process, service plan and plan of care and by collaborating with
          physicians and multidisciplinary team members; providing physical and
          psychological support to clients, friends, and families; supervising
          assigned staff members.
        </p>

        <h4 className="text-lg font-medium my-3">Nurse Job Duties :</h4>

        <p className="text-[15px] font-semibold my-2">
          Nurse is required to participate in the development and implementation
          of the consumer service plan
        </p>

        <p className="text-[15px] font-semibold my-2">
          Nurse is required to regularly assess and reassess the needs of the
          clients requiring nursing services.
        </p>

        <ul className="my-3">
          {nurseJobDities.map((cur, id) => (
            <li key={id} className="list-disc font-medium text-base my-2">
              {cur}
            </li>
          ))}
        </ul>
        <p className="text-lg font-semibold my-2">
          Never have been shown by credible evidence (e.g. a court or jury, a
          department investigation, or other reliable evidence) to have abused,
          neglected, sexually assaulted, exploited, or deprived any person or to
          have subjected any person to serious injury as a result of intentional
          or grossly negligent misconduct as evidenced by an oral or written
          statement to this effect obtained at the time of application;
        </p>
        <p className="text-lg text-center font-semibold my-2">
          There must be, in addition, a signed affidavit to reflect that they
          have never been found to have participated in the types of misconduct.
        </p>

        <p className="text-lg text-center font-semibold my-5">
          Nurse Staff Signature:
          <input
            onChange={handleChange}
            type="text"
            name="nurseStaffSignature"
            value={nurseStaffDetails.nurseStaffSignature}
            className="border-b border-black px-2 outline-none"
          />
          Staff Date:
          <input
            onChange={handleChange}
            type="text"
            value={nurseStaffDetails.staffDate}
            name="staffDate"
            className="border-b border-black px-2 outline-none"
          />
        </p>

        <p className="text-lg font-semibold my-5">
          <strong>Skills/Qualifications : </strong>
          Clinical Skills, Bedside Manner, Infection Control, Nursing Skills,
          Physiological Knowledge, Administering Medication, Medical Teamwork,
          Multi-tasking, Listening, Verbal Communication, Health Promotion and
          Maintenance. Must have valid driver&apos;s license. Must have vehicle.
          Georgia BS in Nursing with RN License.
        </p>

        <p className="text-lg text-center font-semibold my-5">
          I
          <input
            name="userName"
            onChange={handleChange}
            type="text"
            value={nurseStaffDetails.userName}
            className="border-b border-black px-2 outline-none"
          />{" "}
          have read this job description and fully understand the conditions set
          forth therein, and will perform these duties to the best of my
          knowledge and ability.
        </p>

        <p className="text-lg font-semibold my-5">
          Staff signature :
          <input
            type="text"
            name="staffSignature"
            value={nurseStaffDetails.staffSignature}
            onChange={handleChange}
            className="border-b border-black px-2 outline-none w-[35%]"
          />
          <input
            onChange={handleChange}
            type="text"
            name="date"
            value={nurseStaffDetails.date}
            className="border-b border-black px-2 outline-none w-[25%]"
          />
        </p>

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

export default NurseRNStaff;
