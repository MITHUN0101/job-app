
"use client"
import React, { useState } from "react";

const NonCriminalList = [
  ` You must be provided written notification that your fingerprints/biometrics will be used to check the criminal 
  history records maintained by the Georgia Crime Information Center (GCIC) and the FBI, when a federal record 
  check is so authorized. `,
  `If your fingerprints/biometrics are used to conduct a FBI national criminal history check, you are provided a copy 
  of the Privacy Act Statement that would normally appear on the FBI fingerprint card.`,
  ` If you have a criminal history record, the agency making a determination of your suitability for the job, license, 
  or other benefit must provide you the opportunity to complete or challenge the accuracy of the information in 
  the record.`,
  `The agency must advise you of the procedures for changing, correcting, or updating your criminal history record 
  as set forth in Title 28, Code of Federal Regulations (CFR), Section 16.34.`,
  ` If you have a Georgia or FBI criminal history record, you should be afforded a reasonable amount of time to 
  correct or complete the record (or decline to do so) before the agency denies you the job, license or other 
  benefit based on information in the criminal history record.`,
  `In the event an adverse employment or licensing decision is made, you must be informed of all information 
  pertinent to that decision to include the contents of the record and the effect the record had upon the decision. 
  Failure to provide all such information to the person subject to the adverse decision shall be a misdemeanor 
  [O.C.G.A.§35-3-34(b) and §35-3- 35(b)].`,
];

const PHSBackgroundCheck = () => {
  const [backgroundCheck, setBackgroundCheck] = useState({
    applicantType: "",
    lastName: "",
    firstName: "",
    middleName: "",
    DOB: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    emailAddress: "",
    telephoneNo: "",
    nameOfFacility: "",
    street2: "",
    city2: "",
    state2: "",
    zip2: "",
    ApplicantSignature: "",
    applicationDate: "",
    applicantType2: "",
    condition1: '',
    condition2: '',
    ApplicantSignature2: "",
    applicationDate2: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBackgroundCheck({...backgroundCheck, [name]: value });
  };

  const handleSubmit = async (next) => {
    
  }
  return (
    <>
      <div className="w-[75%] mx-auto">
        <h1 className="uppercase text-center my-5 text-2xl font-semibold">
          ACKNOWLEDGEMENT OF APPLICANT’S NON-CRIMINAL JUSTICE PRIVACY RIGHTS AND
          CONSENT TO BE INCLUDED IN THE CAREGIVER PORTAL
        </h1>
        <h2 className="font-bold text-xl my-3">
          SECTION I – PRIVACY RIGHTS - TO BE COMPLETED BY INDIVIDUAL BEING
          FINGERPRINTED:
        </h2>

        <div className="flex justify-start items-start space-x-5">
          <h3 className="font-semibold text-md">APPLICANT TYPE :</h3>
          <div className="flex flex-col justify-start items-start space-y-1">
            <div className="flex justify-center items-center space-x-3">
              <input
                value="Owner (Facility)"
                name="applicantType"
                id="Owner"
                type="checkbox"
                onChange={handleChange}
              />
              <label htmlFor="Owner" className="text-lg font-semibold">
                Owner (Facility)
              </label>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <input
                id="Employment/Direct"
                name="applicantType"
                value="Applicant for Employment/Direct Access Employee (Facility)"
                type="checkbox"
                onChange={handleChange}
              />
              <label
                htmlFor="Employment/Direct"
                className="text-lg font-semibold "
              >
                {" "}
                Applicant for Employment/Direct Access Employee (Facility)
              </label>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <input
                value="Non-Employee (Facility Volunteer)"
                name="applicantType"
                id="NonEmployee"
                type="checkbox"
                onChange={handleChange}
              />
              <label htmlFor="NonEmployee" className="text-lg font-semibold ">
                Non-Employee (Facility Volunteer)
              </label>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <input
                name="applicantType"
                value="Contractor/Direct Access (Facility)"
                id="Contractor/Direct"
                type="checkbox"
                onChange={handleChange}
              />
              <label
                htmlFor="Contractor/Direct"
                className="text-lg font-semibold"
              >
                Contractor/Direct Access (Facility)
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 my-5 ">
          <div>
            <h2 className="text-lg font-semibold">PRINT FULL NAME </h2>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <input
              type="text"
              value={backgroundCheck.lastName}
              name="lastName"
              onChange={handleChange}
              className="border-b border-black outline-none px-2"
            />
            <label className="text-md font-semibold">Last</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <input
              type="text"
              value={backgroundCheck.firstName}
              name="firstName"
              onChange={handleChange}
              className="border-b border-black outline-none px-2"
            />
            <label className="text-md font-semibold">First</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <input
              type="text"
              name="middleName"
              onChange={handleChange}
              value={backgroundCheck.middleName}
              className="border-b border-black outline-none px-2"
            />
            <label className="text-md font-semibold">Middle</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <input
              type="text"
              name="DOB"
              onChange={handleChange}
              value={backgroundCheck.DOB}
              className="border-b border-black outline-none px-2"
            />
            <label className="text-md font-semibold">Date Of Birth</label>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 my-5">
          <h2 className="text-lg font-semibold">Home Address</h2>
          <div className="flex flex-col justify-center items-center space-y-2">
            <input
              name="street"
              value={backgroundCheck.street}
              type="text"
              onChange={handleChange}
              className="border-b border-black px-2 outline-none"
            />
            <label className="text-md font-semibold">Street</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <input
              type="text"
              name="city"
              value={backgroundCheck.city}
              onChange={handleChange}
              className="border-b border-black px-2 outline-none"
            />
            <label className="text-md font-semibold">City</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <input
              value={backgroundCheck.state}
              name="state"
              type="text"
              onChange={handleChange}
              className="border-b border-black px-2 outline-none"
            />
            <label className="text-md font-semibold">State</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <input
              type="text"
              name="zip"
              value={backgroundCheck.zip}
              onChange={handleChange}
              className="border-b border-black px-2 outline-none"
            />
            <label className="text-md font-semibold">Zip</label>
          </div>
          <div className="flex flex-col col-span-2 justify-center items-center space-y-2">
            <input
              type="text"
              name="emailAddress"
              value={backgroundCheck.emailAddress}
              onChange={handleChange}
              className="border-b border-black px-2 outline-none w-full"
            />
            <label className="text-md font-semibold">Email Address</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <input
              type="text"
              name="telephoneNo"
              value={backgroundCheck.telephoneNo}
              onChange={handleChange}
              className="border-b border-black px-2 outline-none"
            />
            <label className="text-md font-semibold">Telephone No.</label>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start space-y-3 my-5">
          <input
            type="text"
            name="nameOfFacility"
            value={backgroundCheck.nameOfFacility}
            onChange={handleChange}
            className="border-b border-black outline-none px-2 w-[70%]"
          />
          <label className="text-md font-semibold">Name of Facility</label>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col justify-center items-center space-y-3">
            <input
              type="text"
              value={backgroundCheck.street2}
              onChange={handleChange}
              name="street2"
              className="border-b border-black outline-none px-2 w-full"
            />
            <label className="text-md font-semibold">Street</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <input
              type="text"
              name="city2"
              value={backgroundCheck.city2}
              onChange={handleChange}
              className="border-b border-black outline-none px-2 w-full"
            />
            <label className="text-md font-semibold">City</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <input
              type="text"
              value={backgroundCheck.state2}
              onChange={handleChange}
              name="state2"
              className="border-b border-black outline-none px-2 w-full"
            />
            <label className="text-md font-semibold">State</label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3 ">
            <input
              type="text"
              value={backgroundCheck.zip2}
              name="zip2"
              onChange={handleChange}
              className="border-b border-black outline-none px-2 w-full"
            />
            <label className="text-md font-semibold">Zip</label>
          </div>
        </div>

        <p className="text-md font-medium my-4">
          I hereby authorize the Georgia Department of Community Health (DCH),
          Office of Inspector General, to receive any criminal history record
          information pertaining to me which may be in the files of any state or
          local criminal justice agency in Georgia. I understand a State and
          Federal fingerprint criminal background check will be conducted. By
          signing below, I am indicating that I have read and understand the
          terms and conditions of the attached Non-Criminal Justice Applicant’s
          Privacy Rights and Policy Act Statements.
        </p>

        <div className="flex justify-around w-[80%] items-center">
          <div className="flex flex-col justify-center items-center space-y-3 w-[60%]">
            <input
              id="ApplicantSignature"
              className="border-b border-black outline-none px-2 w-full"
              type="text"
              name="ApplicantSignature"
              value={backgroundCheck.ApplicantSignature}
              onChange={handleChange}
            />
            <label
              htmlFor="ApplicantSignature"
              className="text-md font-semibold"
            >
              Applicant Signature
            </label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3 w-[20%]">
            <input
              type="text"
              value={backgroundCheck.applicationDate}
              onChange={handleChange}
              name="applicationDate"
              className="border-b border-black outline-none px-2 w-full"
            />
            <label className="text-md font-semibold">Date</label>
          </div>
        </div>

        <h2 className="my-5 font-bold text-xl">
          SECTION II – CAREGIVER PORTAL - TO BE COMPLETED ONLY BY AN APPLICANT
          OR EMPLOYEE BEING FINGERPRINTED AS PART OF FACILITY LICENSURE. DOES
          NOT INCLUDE OWNERS OR FAMILY EMPLOYERS.
        </h2>

        <div className="flex justify-start items-start space-x-5">
          <h3 className="font-semibold text-md">APPLICANT TYPE :</h3>
          <div className="flex flex-col justify-start items-start space-y-1">
            <div className="flex justify-center items-center space-x-3">
              <input
                value="Applicant for Employment/Direct Access Employee (Licensed
                Facility)"
                name="applicantType2"
                id="LicensedFacility"
                type="checkbox"
                onChange={handleChange}
              />
              <label
                htmlFor="LicensedFacility"
                className="text-lg font-semibold"
              >
                Applicant for Employment/Direct Access Employee (Licensed
                Facility)
              </label>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <input
                name="applicantType2"
                value="Non-Employee (Volunteer at Licensed Facility)"
                id="Non-Employee"
                type="checkbox"
                onChange={handleChange}
              />
              <label htmlFor="Non-Employee" className="text-lg font-semibold ">
                {" "}
                Non-Employee (Volunteer at Licensed Facility)
              </label>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <input
                value="Contractor/Direct Access Employee (Licensed Facility)"
                name="applicantType2"
                id="AccessEmployee"
                type="checkbox"
                onChange={handleChange}
              />
              <label
                htmlFor="AccessEmployee"
                className="text-lg font-semibold "
              >
                Contractor/Direct Access Employee (Licensed Facility)
              </label>
            </div>
          </div>
        </div>

        <p className="text-sm my-5 font-medium">
          The Georgia Caregiver Portal only contains the eligibility status of
          applicants and employees who have successfully passed the background
          screening process. The Caregiver Portal does not contain the names of
          applicants and employees who are ineligible. Family employers can
          access the Caregiver Portal to view a prospective applicant or current
          employee’s eligibility to determine their suitability for employment
          to provide personal care services to that employer’s elderly family
          member or wards. All services are performed at locations not licensed
          by DCH. Individuals should check one of the boxes below.
        </p>

        <div className="flex justify-start items-center space-x-4">
          <input
            name="condition1"
            value="I agree to the results of my background check determination being
            available to family employers in the Georgia Caregiver Portal"
            id="condition1"
            type="checkbox"
            onChange={handleChange}
          />
          <label htmlFor="condition1" className="text-sm font-semibold">
            I agree to the results of my background check determination being
            available to family employers in the Georgia Caregiver Portal
          </label>
        </div>

        <div className="flex justify-start items-center space-x-4 my-4">
          <input
            name="condition2"
            value="I am seeking employment only by licensed healthcare employers. I do
            not want or agree to the results of my background check
            determination being available to family employers."
            id="condition2"
            type="checkbox"
            onChange={handleChange}
          />
          <label htmlFor="condition2" className="text-sm font-semibold">
            I am seeking employment only by licensed healthcare employers. I do
            not want or agree to the results of my background check
            determination being available to family employers.
          </label>
        </div>

        <div className="flex justify-around w-[80%] items-center">
          <div className="flex flex-col justify-center items-center space-y-3 w-[60%]">
            <input
              id="ApplicantSignature"
              className="border-b border-black outline-none px-2 w-full"
              onChange={handleChange}
              name="ApplicantSignature2"
              value={backgroundCheck.ApplicantSignature2}
            />
            <label
              htmlFor="ApplicantSignature"
              className="text-md font-semibold"
            >
              Applicant Signature
            </label>
          </div>
          <div className="flex flex-col justify-center items-center space-y-3 w-[20%]">
            <input onChange={handleChange}
              name="applicationDate2"
              value={backgroundCheck.applicationDate2} className="border-b border-black outline-none px-2 w-full" />
            <label className="text-md font-semibold">Date</label>
          </div>
        </div>

        <h2 className="text-center text-2xl font-semibold my-8 text-blue-600">
          Non-Criminal Justice Applicant&apos;s Privacy Rights
        </h2>

        <p className="text-lg font-semibold">
          As an applicant that is the subject of a Georgia only or a Georgia and
          Federal Bureau of Investigation (FBI) national
          fingerprint/biometric-based criminal history record check for a
          non-criminal justice purpose (such as an application for a job or
          license, immigration or naturalization, security clearance, or
          adoption), you have certain rights which are discussed below:
        </p>

        <ul className="px-3">
          {NonCriminalList.map((item, id) => (
            <li className="list-disc font-medium my-2 text-lg" key={id}>
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg my-3 font-semibold">
          You have the right to expect the agency receiving the results of the
          criminal history record check will use it only for authorized purposes
          and will not retain or disseminate it in violation of state and/or
          federal statute, regulation or executive order, or rule, procedure or
          standard established by the National Crime Prevention and Privacy
          Compact Council.
        </p>
        <p className="text-lg my-3 font-semibold">
          If the employment/licensing agency policy permits, the agency may
          provide you with a copy of your Georgia or FBI criminal history record
          for review and possible challenge. If agency policy does not permit it
          to provide you a copy of the record, information regarding how to
          obtain a copy of your Georgia, FBI or other state criminal history may
          be obtained at the GBI website
          (http://gbi.georgia.gov/obtaining-criminal-history-record-information).
        </p>
        <p className="text-lg font-semibold my-3">
          If you decide to challenge the accuracy or completeness of your
          Georgia or FBI criminal history record, you should send your challenge
          to the agency that contributed the questioned information.
          Alternatively, you may send your challenge directly to GCIC provided
          the disputed arrest occurred in Georgia. Instructions to dispute the
          accuracy of your criminal history can be obtained at the GBI website (
          <a
            className="text-blue-500 underline underline-offset-4"
            href="http://gbi.georgia.gov/obtaining-criminal-history-record-information"
          >
            http://gbi.georgia.gov/obtaining-criminal-history-record-information
          </a>
          ).
        </p>

        <h2 className="text-2xl font-semibold text-center text-blue-600 my-8">
          Privacy Act Statement
        </h2>

        <p className="text-lg font-semibold my-3">
          Authority: The FBI&apos;s acquisition, preservation, and exchange of
          fingerprints and associated information is generally authorized under
          28 U.S.C. 534. Depending on the nature of your application,
          supplemental authorities include Federal statutes, State statutes
          pursuant to Pub. L. 92-544, Presidential Executive Orders, and federal
          regulations. Providing your fingerprints and associated information is
          voluntary; however, failure to do so may affect completion or approval
          of your application.
        </p>

        <p className="text-lg font-semibold my-3">
          Principal Purpose: Certain determinations, such as employment,
          licensing, and security clearances, may be predicated on
          fingerprint-based background checks. Your fingerprints and associated
          information/biometrics may be provided to the employing,
          investigating, or otherwise responsible agency, and/or the FBI for the
          purpose of comparing your fingerprints to other fingerprints in the
          FBI&apos;s Next Generation Identification (NGI) system or its
          successor systems (including civil, criminal, and latent fingerprint
          repositories) or other available records of the employing,
          investigating, or otherwise responsible agency. The FBI may retain
          your fingerprints and associated information/biometrics in NGI after
          the completion of this application and, while retained, your
          fingerprints may continue to be compared against other fingerprints
          submitted to or retained by NGI.
        </p>

        <p className="text-lg font-semibold my-3">
          Routine Uses: During the processing of this application and for as
          long thereafter as your fingerprints and associated
          information/biometrics are retained in NGI, your information may be
          disclosed pursuant to your consent, and may be disclosed without your
          consent as permitted by the Privacy Act of 1974 and all applicable
          Routine Uses as may be published at any time in the Federal Register,
          including the Routine Uses for the NGI system and the FBI&apos;s
          Blanket Routine Uses. Routine uses include, but are not limited to,
          disclosures to: employing, governmental or authorized non-governmental
          agencies responsible for employment, contracting, licensing, security
          clearances, and other suitability determinations; local, state,
          tribal, or federal law enforcement agencies; criminal justice
          agencies; and agencies responsible for national security or public
          safety.
        </p>


        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            disabled={
              !Object.keys(backgroundCheck).every((key) => {
                return Boolean(backgroundCheck[key]);
              })
            }
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save & Exit
          </button>
          <button
            disabled={
              !Object.keys(backgroundCheck).every((key) => {
                return Boolean(backgroundCheck[key]);
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

export default PHSBackgroundCheck;
