"use client"
import React, { useState } from "react";

const thisPolicyList = [
  `Shows the commitment of Pacific Health Systems’ management and workers to health and safety`,
  `Aims to remove or reduce the risks to the health, safety and welfare of all workers, contractors and visitors,and anyone else who may be affected by our business operations.`,
  `Aims to ensure all work activities are done safely.`,
];

const Management = [
  ` A safe working environment`,
  ` Safe systems of work `,
  ` Information, instruction, training and supervision that is reasonably necessary to ensure that each worker is 
    safe from injury and risks to health.`,
  ` A commitment to consult and co-operate with workers in all matters relating to health and safety in the 
    workplace `,
  ` A commitment to continually improve our performance through effective safety management. `,
];

const workersList = [
  `comply with safe work practices, with the intent of avoiding injury to themselves and others and damage to  Client’s household and equipment.`,
  ` Take reasonable care of the health and safety of themselves and others.`,
  `Wear personal protective equipment and clothing where necessary`,
  `Comply with any direction given by management for health and safety`,
  `Not misuse or interfere with anything provided for health and safety `,
  `Report all accidents and incidents on the job immediately, no matter how trivial`,
  `Report all known or observed hazards to their supervisor or manager`,
  `Attend ALL Quarterly safety meetings and trainings. They are Mandatory.`,
];

const ConsultationWithEmployees = [
  `Any new measure which may substantially affect their health and safety at work, for 
    example new equipment, new ways of working and new procedures.`,
  `Arrangements for getting competent people to help satisfy health and safety laws.`,
  `The information we give to employees on the risks to health and safety arising from their work, measures 
    to reduce or get rid of these risks and what they should do if they are exposed to a risk, including 
    emergency procedures`,
  `Planning and organizing health and safety training and the health and safety consequences for them of 
    any new technology we plan to introduce.`,
];

const receiptAndAcknowledgementList = [
  `I acknowledge receipt and have read the Manual. I understand the policies, and rules described within this 
    Manual and acknowledge that Pacific Health Systems. reserves the right to change the contents of this Manual 
    at its discretion.`,
  `I acknowledge the policies, procedures; and rules set forth in this Manual revoke all previous inconsistent 
    policies and procedures for Pacific Health Systems. as of the effective date of this Manual.`,
  `I also acknowledge it is my responsibility to be familiar with these policies and any changes or modifications 
    thereto. `,
  `My signature below acknowledges that I have read the above statements and received a copy of 
    the Pacific Health Systems Safety Policy Manual.`,
];

const WorkHealthPolicy = () => {
  const [workHealthPolicy, setWorkHealthPolicy] = useState({
    signature: '',
    date: '',
    printName: 'Pacific Health System',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkHealthPolicy({...workHealthPolicy, [name]: value });
  }
  const handleSubmit = async (next) => {
      
   }
  return (
    <>
      <div className="w-[80%] py-2 mx-auto">
        <h2 className="text-4xl font-bold my-3">Work Health & Safety</h2>

        <h3 className="text-base font-bold my-3 text-blue-700">
          WORK HEALTH AND SAFETY POLICY
        </h3>

        <h4 className="bg-yellow-500 w-max font-semibold p-1">This policy :</h4>

        <ul className="px-3 my-3">
          {thisPolicyList.map((item, id) => (
            <li
              className="text-md font-medium my-2 list-disc text-blue-500"
              key={id}
            >
              {item}
            </li>
          ))}
        </ul>

        <h4 className="bg-yellow-500 w-max font-semibold p-1">Obligations</h4>

        <p className="font-semibold text-lg my-2 text-blue-500">
          Management is firmly committed to a policy enabling all work
          activities to be carried out safely, and with all possible measures
          taken to remove (or at least reduce) risks to the health, safety and
          welfare of caregivers, clients, authorized visitors, and all office
          employees who may be affected by our operations
        </p>
        <p className="font-semibold text-lg my-2 text-blue-500">
          We are committed to ensuring we comply with the Work Health and Safety
          Act 2012, the Work Health and Safety Regulations 2012 and applicable
          Codes of Practice.
        </p>

        <h4 className="bg-yellow-500 w-max font-semibold p-1">Management:</h4>

        <p className="font-semibold text-md my-2 text-blue-500">
          Will provide and maintain as far as possible:{" "}
        </p>

        <ul className="px-3 my-3">
          {Management.map((item, id) => (
            <li
              className="text-md font-medium my-2 list-disc text-blue-500"
              key={id}
            >
              {item}
            </li>
          ))}
        </ul>

        <h4 className="bg-yellow-500 w-max font-semibold p-1">Workers:</h4>
        <p className="font-semibold text-md my-2 text-blue-500">
          Each worker has an obligation to:
        </p>
        <ul className="px-3 my-3">
          {workersList.map((item, id) => (
            <li
              className="text-md font-medium my-2 list-disc text-blue-500"
              key={id}
            >
              {item}
            </li>
          ))}
        </ul>

        <h4 className="bg-yellow-500 w-max font-semibold p-1">
          Consultation with employees
        </h4>
        <p className="font-semibold text-md my-2 text-blue-500">
          <strong>Pacific Health Systems</strong> will consult with employees on
          the following:
        </p>

        <ul className="px-3 my-3">
          {ConsultationWithEmployees.map((item, id) => (
            <li
              key={id}
              className="text-md font-medium my-2 list-disc text-blue-500"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="font-semibold text-md my-2 text-blue-500">
          The information provided to employees will be in a form that can be
          easily understood.
        </p>
        <p className="font-semibold text-md my-2 text-blue-500">
          <strong>Pacific Health Systems</strong> will consult directly with
          employees through team meetings and face-to-face discussions
        </p>
        <p className="font-semibold text-md my-2 text-blue-500">
          <strong>Pacific Health Systems</strong> will take employees’ views
          into account before a final decision is made, respond to any concerns
          and questions raised and explain the final decision and why it has
          been taken.
        </p>

        <h4 className="bg-yellow-500 w-max font-semibold p-1">
          Application of this policy
        </h4>

        <p className="font-semibold text-md my-2 text-blue-500">
          We seek the co-operation of all caregivers, clients and employees. We
          encourage suggestions for realizing our health and safety objectives
          to create a safe working environment with a{" "}
          <strong>zero accident rate.</strong>
        </p>
        <p className="text-md font-semibold text-blue-500 my-2">
          This policy applies to all business operations, including those
          situations where caregivers are required to work off-site
        </p>

        <h4 className="bg-yellow-500 text-md w-max font-semibold p-1 my-10">
          RECEIPT AND ACKNOWLEDGEMENT
        </h4>

        <p className="font-semibold text-md my-2 text-blue-500">
          Pacific Health Systems. LLC. reserves the right to change the contents
          of this Manual at any time
        </p>

        <p className="font-semibold text-md my-2 text-blue-500">
          No changes in any benefit, policy or rule will be made without due
          consideration to the effect such changes will have on you as an
          employee and on Pacific Health Systems.
        </p>
        <ul className="px-3 my-3">
          {receiptAndAcknowledgementList.map((item, id) => (
            <li
              className="text-md font-medium my-2 list-disc text-blue-500"
              key={id}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-start items-center space-x-5 my-8">
          <div className="flex flex-col justify-start items-start space-y-3 w-[30%]">
            <input type="text" name="signature" onChange={handleChange} value={workHealthPolicy.signature} className="border-b border-blue-500 outline-none px-2 w-full" />
            <label className="text-blue-500 font-semibold text-lg">
              (Signature)
            </label>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3 w-[20%]">
            <input type="text" value={workHealthPolicy.date} name="date" onChange={handleChange} className="border-b border-blue-500 outline-none px-2 w-full" />
            <label className="text-blue-500 font-semibold text-lg">Date</label>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start space-y-3 my-5">
          <input
            value={
              workHealthPolicy.printName
            }
            name='printName'
            readOnly
            className="border-b text-center py-1 text-4xl pacificHealthSystemSignature  border-black px-2 outline-none"
          />
          <label className="text-blue-500 font-semibold text-lg">
            (Printed name)
          </label>
        </div>

        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            disabled={
              !Object.keys(workHealthPolicy).every((key) => {
                return Boolean(workHealthPolicy[key]);
              })
            }
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save & Exit
          </button>
          <button
            disabled={
              !Object.keys(workHealthPolicy).every((key) => {
                return Boolean(workHealthPolicy[key]);
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

export default WorkHealthPolicy;
