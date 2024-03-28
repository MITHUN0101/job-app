"use client"
import React, { useState } from "react";

const codeOfEthicsList = [
  `PHS employees will not use the client's car for personal reasons.`,
  `Employees will not consume the client's food or beverages, nor will they eat inside the client’s home 
    without permission.
    `,
  `Employees will not use the client's telephone for personal calls`,
  `Employees will not discuss political, religious beliefs, or personal problems with the client.`,
  `Employees will not accept gifts or financial gratuities (tips) from the client or client's representative`,
  `Employees will not loan money or other items to the client and/or client representative.`,
  `Employees will not sell gifts, food, or other items to or for the client.
    `,
  `Employees will not purchase any items for the client unless directed in the client care plan.`,
  `Employees will not bring other visitors to client's home (children, friends, relatives, etc...).`,
  `Employees will not smoke in or around the client's home with or without permission.
    `,
  `Employees will not report to duty under the influence of alcohol or drugs`,
  `Employees will not sleep in the client's house unless ordered in service care plan.`,
  `Employees will not remain in the client's home after services have been rendered and completed.`,
  `Employees will not falsify client's records/timesheets.`,
  `Employees must report any unusual changes or events with client during work hours.`,
  `Employees must not breach clients’ and or primary care giver's privacy and confidentiality of
    information and records against HIPPA regulations.`,
  `Employees must not assume control of the financial or personal affairs, or both, of the client or 
    his/her estate, including power of attorney or guardianship.`,
  `Employees must not be committing any act of abuse, neglect or exploitation.`,
  `Employees will wear, have badge visible and adhere to the dress code of appropriate scrubs for PHS.
    `,
  `Employees will attend all mandatory quarterly meetings.
    `,
  `Employees will notify the office if they are unable to report to work for their assigned schedule, at least 2 
    hours before the start of the shift, if it’s an emergency (A written doctor’s excuse will be needed to make 
    this an excused absence). Employees will provide at least a 2weeks notice to request and schedule time 
    off.
    `,
];

const CodeOfEthics = () => {

  const [codeOfEthics, setCodeOfEthics] = useState({
    empolyeeSignature: '',
    date: '',
  });

  const handleChange = (e) => {
    
  }
  
  const handleSubmit = async (next) => {
    
  }

  return (
    <>
      <div className="w-[80%] mx-auto py-4">
        <h2 className="text-3xl font-semibold text-center underline uppercase">
          Code of Ethics
        </h2>
        <ol className="p-4">
          {codeOfEthicsList.map((list, id) => (
            <li
              className="list-decimal list-inside font-semibold text-lg py-1"
              key={id}
            >
              {list}
            </li>
          ))}
        </ol>
        <p className="text-lg font-semibold my-5">
          By signing my name below, I agree and promise that while in the
          employment of Pacific Health Systems, I will abide by the Code of
          Ethics established for Pacific Health Systems. I understand that
          failure to abide by the code of ethics will result in disciplinary
          action and may result in termination of my employment with PHS.
        </p>

        <div className="flex justify-between items-center my-5">
          <div className="flex flex-col justify-start items-start space-y-3 w-[35%]">
            <input type="text" onChange={handleChange} value={codeOfEthics.empolyeeSignature} name="empolyeeSignature" className="border-b border-black px-2 outline-none w-full" />
            <label className="text-md font-semibold">Employee Signature</label>
          </div>

          <div className="flex flex-col justify-start items-start space-y-3 w-[35%]">
            <input type="text" onChange={handleChange} value={codeOfEthics.date} name="date" className="border-b border-black px-2 outline-none w-full" />
            <label className="text-md font-semibold">Date</label>
          </div>
        </div>

        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            disabled={
              !Object.keys(codeOfEthics).every((key) => {
                return Boolean(codeOfEthics[key]);
              })
            }
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save & Exit
          </button>
          <button
            disabled={
              !Object.keys(codeOfEthics).every((key) => {
                return Boolean(codeOfEthics[key]);
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

export default CodeOfEthics;
