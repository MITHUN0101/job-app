"use client"

// import { Inter } from "next/font/google";
//import axios from "axios";
import { generateMetadata } from 'next/head';
//import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

export default function Home({ user }) {  
  // const User = useSelector((state) => state.user.userInfo);
  const router = useRouter();


  const [applicantDetails, setApplicantDetails] = useState({    
    fullName: "",
    date: "",
    address: "",
    phoneNumber: "",
    email: "",
    dateAvailable: "",
    positionAppliedFor: "",
    citizenOfUS: "",
    workedForThisCompany: "",
    convictedOfelony: "",
    yesExplain: "",
    highSchoolName: "",
    schoolAddress: "",
    schoolfrom: "",
    schoolTo: "",
    didYouGraduate: "",
    diploma: "",
    collegeName: "",
    collegeAddress: "",
    collegeFrom: "",
    collegeTo: "",
    didYouGraduate2: "",
    degree: "",
    other: "",
    otherAddress: "",
    degreeFrom: "",
    degreeTo: "",
    didYouGraduate3: "",
    degree2: "",
    PRfullName1: "",
    PRrelationship1: "",
    PRcompany1: "",
    PRphone1: "",
    PRaddress1: "",
    PRfullName2: "",
    PRrelationship2: "",
    PRcompany2: "",
    PRphone2: "",
    PRaddress2: "",
    PRfullName3: "",
    PRrelationship3: "",
    PRcompany3: "",
    PRphone3: "",
    PRaddress3: "",
    PEcompanyName1: "",
    PEphone1: "",
    PEaddress1: "",
    PEsupervisor1: "",
    PEjobTitle1: "",
    PEstartingSalary1: "",
    PEendingSalary1: "",
    PEresponsibilities1: "",
    PEfrom1: "",
    PETo1: "",
    PEreasonForLeaving1: "",
    contactPEsupervisor1: "",
    PEcompanyName2: "",
    PEphone2: "",
    PEaddress2: "",
    PEsuppervisor2: "",
    PEjobTitle2: "",
    PEstartingSalary2: "",
    PEendingSalary2: "",
    PEresponsibilities2: "",
    PEfrom2: "",
    PETo2: "",
    PEreasonForLeaving2: "",
    contactPEsupervisor2: "",
    PEcompanyName3: "",
    PEphone3: "",
    PEaddress3: "",
    PEsupervisor3: "",
    PEjobTitle3: "",
    PEstartingSalary3: "",
    PEendingSalary3: "",
    PEresponsibilities3: "",
    PEfrom3: "",
    PETo3: "",
    PEreasonForLeaving3: "",
    contactPEsupervisor3: "",
    MSbranch: "",
    MSform: "",
    MSTo: "",
    MSrankAtDischarge: "",
    otherHonorable: "",
    applicantSignature: "",
    curDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicantDetails({ ...applicantDetails, [name]: value });
  };

  const handleSubmit = (next) => {
    router.push("/pcajob");
  };

  return (
    <>
    <title>Pacific Health System - employment application</title>
    <link rel="shortcut icon" href="/logo.png" />
    <div className="p-3">
      <h3 className="text-2xl font-semibold my-3">Employment Application</h3>
      <div className="applicantForm__div flex justify-center items-center p-1">
        <h2 className="text-white text-lg font-semibold ">
          Applicant Information
        </h2>
      </div>

      <div className="application__FormOuterWrapper p-3">
        <div className="application__formWrapper">
          <div
            className="flex items-center"
            style={{ justifyContent: "space-evenly" }}
          >
            <div className="flex flex-col justify-start items-start space-y-3 fullName__wrapper">
              <label htmlFor="fullName" className="text-md font-semibold">
                Full Name
              </label>
              <input
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your fullname...."
                id="fullName"
                value={applicantDetails.fullName}
                name="fullName"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col justify-start items-start space-y-3 w-[40%] date__wrapper">
              <label htmlFor="date" className="text-md font-semibold">
                Date
              </label>
              <input
                id="date"
                placeholder=""
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                value={applicantDetails.date}
                name="date"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="employment__formAddress flex flex-col space-y-3 items-start justify-start">
            <label htmlFor="address" className="text-md font-semibold">
              Address
            </label>
            <input
              id="address"
              placeholder="Enter full address..."
              className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
              value={applicantDetails.address}
              name="address"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="employment__formAddress flex flex-col space-y-3 justify-start items-start">
            <label htmlFor="phoneNumber" className="text-md font-semibold">
              Phone Number
            </label>
            <input
              className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
              id="phoneNumber"
              placeholder="Enter your phone number..."
              value={applicantDetails.phoneNumber}
              name="phoneNumber"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="employment__formAddress flex flex-col space-y-3 justify-start items-start">
            <label htmlFor="email" className="text-md font-semibold">
              Email
            </label>
            <input
              className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
              id="email"
              placeholder="Enter your email..."
              type="email"
              value={applicantDetails.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          <div
            className="flex items-center mx-auto  employment__formAddress"
            style={{ justifyContent: "space-evenly" }}
          >
            <div className="flex flex-col space-y-3 justify-start items-start employment__dataAvailable">
              <label htmlFor="dateAvailable" className="text-md font-semibold">
                Date Available
              </label>
              <input
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                id="dateAvailable"
                placeholder="Available data ..."
                value={applicantDetails.dateAvailable}
                name="dateAvailable"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-3 justify-start items-start employment__dataAvailable">
              <label
                className="text-md font-semibold"
                htmlFor="SocialSecurityNo"
              >
                Social Security No
              </label>
              <input
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                id="SocialSecurityNo"
                placeholder="Enter Social Security No ..."
                value={applicantDetails.socialSecurityNo}
                name="socialSecurityNo"
                type="socialSecurityNo"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-3 justify-start items-start employment__dataAvailable">
              <label htmlFor="DesiredSalary" className="text-md font-semibold">
                Desired Salary:$
              </label>
              <input
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                id="DesiredSalary"
                placeholder="Desired Salary ..."
                type="text"
                value={applicantDetails.desiredSalary}
                name="desiredSalary"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="employment__formAddress flex flex-col space-y-3">
            <label
              htmlFor="PositionAppliedfor"
              className="text-md font-semibold"
            >
              Position Applied for
            </label>
            <input
              className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
              placeholder="Position Applied for..."
              id="PositionAppliedfor"
              type="text"
              value={applicantDetails.positionAppliedFor}
              name="positionAppliedFor"
              onChange={handleChange}
            />
          </div>

          <div
            className="employment__formAddress flex items-center"
            style={{ justifyContent: "space-evenly" }}
          >
            <div>
              <label className="text-md font-semibold">
                Are you a citizen of the United States?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    id="citizenOfUSYes"
                    onChange={handleChange}
                    name="citizenOfUS"
                    value="yes"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="citizenOfUSYes"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="citizenOfUSNo"
                    onChange={handleChange}
                    name="citizenOfUS"
                    value="no"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    style={{ margin: "0 10px" }}
                    id="citizenOfUSNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="text-md font-semibold">
                If no, are you authorized to work in the U.S.?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    id="authorizedToWorkUSYes"
                    onChange={handleChange}
                    name="authorizedToWorkUS"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="authorizedToWorkUSYes"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="authorizedToWorkUSNo"
                    onChange={handleChange}
                    name="authorizedToWorkUS"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="authorizedToWorkUSNo"
                    style={{ margin: "0 10px" }}
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div
            className="employment__formAddress flex items-center"
            style={{ justifyContent: "space-evenly" }}
          >
            <div>
              <label className="text-md font-semibold">
                Have you ever worked for this company?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    id="workedForThisCompanyYes"
                    onChange={handleChange}
                    name="workedForThisCompany"
                    value="yes"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="workedForThisCompanyYes"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="workedForThisCompanyNo"
                    onChange={handleChange}
                    name="workedForThisCompany"
                    value="no"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    style={{ margin: "0 10px" }}
                    id="workedForThisCompanyNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="IfYesWhen" className="text-md font-semibold">
                If yes, when?
              </label>
              <input
                id="IfYesWhen"
                type="text"
                value={applicantDetails.workedWhen}
                onChange={handleChange}
                name="workedWhen"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
              />
            </div>
          </div>

          <div
            className="employment__formAddress flex items-center"
            style={{ justifyContent: "space-start" }}
          >
            <div>
              <label className="text-md font-semibold">
                Have you ever been convicted of a felony?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    id="convictedOfelonyYes"
                    onChange={handleChange}
                    name="convictedOfelony"
                    value="yes"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="convictedOfelonyYes"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="convictedOfelonyNo"
                    onChange={handleChange}
                    name="convictedOfelony"
                    value="no"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    style={{ margin: "0 10px" }}
                    id="convictedOfelonyNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3 justify-start items-start">
            <label htmlFor="ifYesExplain" className="text-md font-semibold">
              If yes, explain :
            </label>
            <textarea
              id="ifYesExplain"
              rows="5"
              value={applicantDetails.yesExplain}
              name="yesExplain"
              onChange={handleChange}
              placeholder="explain here..."
              className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="applicantForm__div flex justify-center items-center p-1">
        <h2 className="text-white text-lg font-semibold ">Education</h2>
      </div>

      <div className="application__FormOuterWrapper p-3">
        <div className="application__formWrapper">
          <div className="employment__formAddress flex flex-col space-y-3">
            <label htmlFor="highSchool" className="text-md font-semibold">
              High School
            </label>
            <input
              className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
              placeholder="Enter institution name..."
              id="highSchool"
              type="text"
              value={applicantDetails.highSchoolName}
              name="highSchoolName"
              onChange={handleChange}
            />
          </div>

          <div className="employment__formAddress flex flex-col space-y-3">
            <label htmlFor="highSchool" className="text-md font-semibold">
              Address
            </label>
            <input
              className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
              placeholder="Enter institution address..."
              id="highSchool"
              type="text"
              value={applicantDetails.schoolAddress}
              name="schoolAddress"
              onChange={handleChange}
            />
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                From
              </label>
              <input
                id="from"
                placeholder="started from..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.schoolfrom}
                name="schoolfrom"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="to" className="text-md font-semibold">
                To
              </label>
              <input
                id="to"
                placeholder="Completed date..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.schoolTo}
                name="schoolTo"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                Did you graduate?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    id="didYouGraduateYes"
                    onChange={handleChange}
                    name="didYouGraduate"
                    value="yes"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="didYouGraduateYes"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="didYouGraduateNo"
                    onChange={handleChange}
                    name="didYouGraduate"
                    value="no"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    style={{ margin: "0 10px" }}
                    id="didYouGraduateNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Diploma" className="text-md font-semibold">
                Diploma
              </label>
              <input
                id="Diploma"
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.diploma}
                name="diploma"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                College
              </label>
              <input
                id="Diploma"
                placeholder="College..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.collegeName}
                name="collegeName"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Diploma" className="text-md font-semibold">
                Address
              </label>
              <input
                id="Diploma"
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.collegeAddress}
                name="collegeAddress"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                From
              </label>
              <input
                id="from"
                placeholder="started from..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.collegeFrom}
                name="collegeFrom"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="to" className="text-md font-semibold">
                To
              </label>
              <input
                id="to"
                placeholder="Completed date..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.collegeTo}
                name="collegeTo"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                Did you graduate?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    onChange={handleChange}
                    id="didYouGraduate2Yes"
                    name="didYouGraduate2"
                    value="yes"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="didYouGraduate2Yes"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={handleChange}
                    id="didYouGraduate2No"
                    name="didYouGraduate2"
                    value="no"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    style={{ margin: "0 10px" }}
                    id="didYouGraduate2No"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Diploma" className="text-md font-semibold">
                Degree
              </label>
              <input
                id="Diploma"
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.degree}
                name="degree"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                Other
              </label>
              <input
                id="Diploma"
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.other}
                name="other"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Diploma" className="text-md font-semibold">
                Address
              </label>
              <input
                id="Diploma"
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.otherAddress}
                name="otherAddress"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                From
              </label>
              <input
                id="from"
                placeholder="started from..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.degreeFrom}
                name="degreeFrom"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="to" className="text-md font-semibold">
                To
              </label>
              <input
                id="to"
                placeholder="Completed date..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.degreeTo}
                name="degreeTo"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                Did you graduate?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    onChange={handleChange}
                    id="didYouGraduate3Yes"
                    name="didYouGraduate3"
                    value="yes"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="didYouGraduate3Yes"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    onChange={handleChange}
                    id="no"
                    name="didYouGraduate3"
                    value="no"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    style={{ margin: "0 10px" }}
                    id="didYouGraduate3No"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Diploma" className="text-md font-semibold">
                Degree
              </label>
              <input
                id="Diploma"
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.degree2}
                name="degree2"
                onChange={handleChange}
              />
            </div>
          </div>

          <h2 className="text-xl space-y-3 font-semibold">
            Please list three professional references
          </h2>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="fullname" className="text-md font-semibold">
                Full Name
              </label>
              <input
                placeholder="Enter full name..."
                id="fullname"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRfullName1}
                name="PRfullName1"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="relationship" className="text-md font-semibold">
                Relationship
              </label>
              <input
                placeholder="Enter relationship..."
                id="relationship"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRrelationship1}
                name="PRrelationship1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="fullname" className="text-md font-semibold">
                Company
              </label>
              <input
                placeholder="Enter full name..."
                id="fullname"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRcompany1}
                name="PRcompany1"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="relationship" className="text-md font-semibold">
                Phone
              </label>
              <input
                placeholder="Enter relationship..."
                id="relationship"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRphone1}
                name="PRphone1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="addresss" className="text-md font-semibold">
                Address
              </label>
              <input
                placeholder="Enter full name..."
                id="addresss"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRaddress1}
                name="PRaddress1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="fullname" className="text-md font-semibold">
                Full Name
              </label>
              <input
                placeholder="Enter full name..."
                id="fullname"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRfullName2}
                name="PRfullName2"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="relationship" className="text-md font-semibold">
                Relationship
              </label>
              <input
                placeholder="Enter relationship..."
                id="relationship"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRrelationship2}
                name="PRrelationship2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="fullname" className="text-md font-semibold">
                Company
              </label>
              <input
                placeholder="Enter full name..."
                id="fullname"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRcompany2}
                name="PRcompany2"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="relationship" className="text-md font-semibold">
                Phone
              </label>
              <input
                placeholder="Enter relationship..."
                id="relationship"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRphone2}
                name="PRphone2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="addresss" className="text-md font-semibold">
                Address
              </label>
              <input
                placeholder="Enter full name..."
                id="addresss"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRaddress2}
                name="PRaddress2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="fullname" className="text-md font-semibold">
                Full Name
              </label>
              <input
                placeholder="Enter full name..."
                id="fullname"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRfullName3}
                name="PRfullName3"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="relationship" className="text-md font-semibold">
                Relationship
              </label>
              <input
                placeholder="Enter relationship..."
                id="relationship"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRrelationship3}
                name="PRrelationship3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="fullname" className="text-md font-semibold">
                Company
              </label>
              <input
                placeholder="Enter full name..."
                id="fullname"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRcompany3}
                name="PRcompany3"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="relationship" className="text-md font-semibold">
                Phone
              </label>
              <input
                placeholder="Enter relationship..."
                id="relationship"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRphone3}
                name="PRphone3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="addresss" className="text-md font-semibold">
                Address
              </label>
              <input
                placeholder="Enter full name..."
                id="addresss"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                type="text"
                value={applicantDetails.PRaddress3}
                name="PRaddress3"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="applicantForm__div flex justify-center items-center p-1">
        <h2 className="text-white text-lg font-semibold ">
          Previous Employment
        </h2>
      </div>

      <div className="application__FormOuterWrapper p-3">
        <div className="application__formWrapper">
          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="companyName" className="text-md font-semibold">
                Compamy
              </label>
              <input
                id="companyName"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter company name...."
                type="text"
                value={applicantDetails.PEcompanyName1}
                name="PEcompanyName1"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="cPhone" className="text-md font-semibold">
                Phone
              </label>
              <input
                id="cPhone"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="company phone number..."
                type="text"
                value={applicantDetails.PEphone1}
                name="PEphone1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Address3" className="text-md font-semibold">
                Address
              </label>
              <input
                id="Address3"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter company address...."
                type="text"
                value={applicantDetails.PEaddress1}
                name="PEaddress1"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Supervisor" className="text-md font-semibold">
                Supervisor
              </label>
              <input
                id="Supervisor"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter supervisor name..."
                type="text"
                value={applicantDetails.PEsupervisor1}
                name="PEsupervisor1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="jobTitle" className="text-md font-semibold">
                Job Title
              </label>
              <input
                id="jobTitle"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter job title...."
                type="text"
                value={applicantDetails.PEjobTitle1}
                name="PEjobTitle1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="startingDate" className="text-md font-semibold">
                Starting Salary:$
              </label>
              <input
                id="startingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter starting salary...."
                type="text"
                value={applicantDetails.PEstartingSalary1}
                name="PEstartingSalary1"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="endingDate" className="text-md font-semibold">
                Ending Salary:$
              </label>
              <input
                id="endingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter ending salary...."
                type="text"
                value={applicantDetails.PEendingSalary1}
                name="PEendingSalary1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label
                htmlFor="responsibilities"
                className="text-md font-semibold"
              >
                Responsibilities
              </label>
              <input
                id="responsibilities"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PEresponsibilities1}
                name="PEresponsibilities1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="startedFrom" className="text-md font-semibold">
                From
              </label>
              <input
                id="startedFrom"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PEfrom1}
                name="PEfrom1"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="leavingDate" className="text-md font-semibold">
                To
              </label>
              <input
                id="leavingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PETo1}
                name="PETo1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label
                htmlFor="reasonForLeaving"
                className="text-md font-semibold"
              >
                Reason For Leaving
              </label>
              <input
                id="reasonForLeaving"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PEreasonForLeaving1}
                name="PEreasonForLeaving1"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                May we contact your previous supervisor for a reference?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    id="yess"
                    onChange={handleChange}
                    name="contactPEsupervisor1"
                    value="yes"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="no"
                    onChange={handleChange}
                    name="contactPEsupervisor1"
                    value="no"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    style={{ margin: "0 10px" }}
                    id="no"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="companyName" className="text-md font-semibold">
                Compamy
              </label>
              <input
                id="companyName"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter company name...."
                type="text"
                value={applicantDetails.PEcompanyName2}
                name="PEcompanyName2"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="cPhone" className="text-md font-semibold">
                Phone
              </label>
              <input
                id="cPhone"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="company phone number..."
                type="text"
                value={applicantDetails.PEphone2}
                name="PEphone2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Address3" className="text-md font-semibold">
                Address
              </label>
              <input
                id="Address3"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter company address...."
                type="text"
                value={applicantDetails.PEaddress2}
                name="PEaddress2"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Supervisor" className="text-md font-semibold">
                Supervisor
              </label>
              <input
                id="Supervisor"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter supervisor name..."
                type="text"
                value={applicantDetails.PEsuppervisor2}
                name="PEsuppervisor2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="jobTitle" className="text-md font-semibold">
                Job Title
              </label>
              <input
                id="jobTitle"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter job title...."
                type="text"
                value={applicantDetails.PEjobTitle2}
                name="PEjobTitle2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="startingDate" className="text-md font-semibold">
                Starting Salary:$
              </label>
              <input
                id="startingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter starting salary...."
                type="text"
                value={applicantDetails.PEstartingSalary2}
                name="PEstartingSalary2"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="endingDate" className="text-md font-semibold">
                Ending Salary:$
              </label>
              <input
                id="endingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter ending salary...."
                type="text"
                value={applicantDetails.PEendingSalary2}
                name="PEendingSalary2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label
                htmlFor="responsibilities"
                className="text-md font-semibold"
              >
                Responsibilities
              </label>
              <input
                id="responsibilities"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PEresponsibilities2}
                name="PEresponsibilities2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="startedFrom" className="text-md font-semibold">
                From
              </label>
              <input
                id="startedFrom"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PEfrom2}
                name="PEfrom2"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="leavingDate" className="text-md font-semibold">
                To
              </label>
              <input
                id="leavingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PETo2}
                name="PETo2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label
                htmlFor="reasonForLeaving"
                className="text-md font-semibold"
              >
                Reason For Leaving
              </label>
              <input
                id="reasonForLeaving"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PEreasonForLeaving2}
                name="PEreasonForLeaving2"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                May we contact your previous supervisor for a reference?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    id="yess"
                    onChange={handleChange}
                    name="contactPEsupervisor2"
                    value="yes"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="no"
                    onChange={handleChange}
                    name="contactPEsupervisor2"
                    value="no"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    style={{ margin: "0 10px" }}
                    id="no"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="companyName" className="text-md font-semibold">
                Compamy
              </label>
              <input
                id="companyName"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter company name...."
                type="text"
                value={applicantDetails.PEcompanyName3}
                name="PEcompanyName3"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="cPhone" className="text-md font-semibold">
                Phone
              </label>
              <input
                id="cPhone"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="company phone number..."
                type="text"
                value={applicantDetails.PEphone3}
                name="PEphone3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Address3" className="text-md font-semibold">
                Address
              </label>
              <input
                id="Address3"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter company address...."
                type="text"
                value={applicantDetails.PEaddress3}
                name="PEaddress3"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Supervisor" className="text-md font-semibold">
                Supervisor
              </label>
              <input
                id="Supervisor"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter supervisor name..."
                type="text"
                value={applicantDetails.PEsupervisor3}
                name="PEsupervisor3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="jobTitle" className="text-md font-semibold">
                Job Title
              </label>
              <input
                id="jobTitle"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter job title...."
                type="text"
                value={applicantDetails.PEjobTitle3}
                name="PEjobTitle3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="startingDate" className="text-md font-semibold">
                Starting Salary:$
              </label>
              <input
                id="startingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter starting salary...."
                type="text"
                value={applicantDetails.PEstartingSalary3}
                name="PEstartingSalary3"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="endingDate" className="text-md font-semibold">
                Ending Salary:$
              </label>
              <input
                id="endingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter ending salary...."
                type="text"
                value={applicantDetails.PEendingSalary3}
                name="PEendingSalary3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label
                htmlFor="responsibilities"
                className="text-md font-semibold"
              >
                Responsibilities
              </label>
              <input
                id="responsibilities"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PEresponsibilities3}
                name="PEresponsibilities3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="startedFrom" className="text-md font-semibold">
                From
              </label>
              <input
                id="startedFrom"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PEfrom3}
                name="PEfrom3"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="leavingDate" className="text-md font-semibold">
                To
              </label>
              <input
                id="leavingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PETo3}
                name="PETo3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label
                htmlFor="reasonForLeaving"
                className="text-md font-semibold"
              >
                Reason For Leaving
              </label>
              <input
                id="reasonForLeaving"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.PEreasonForLeaving3}
                name="PEreasonForLeaving3"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="from" className="text-md font-semibold">
                May we contact your previous supervisor for a reference?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input
                    id="yess"
                    onChange={handleChange}
                    name="contactPEsupervisor3"
                    value="yes"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="no"
                    onChange={handleChange}
                    name="contactPEsupervisor3"
                    value="no"
                    type="checkbox"
                  />
                  <label
                    className="text-md font-semibold"
                    style={{ margin: "0 10px" }}
                    id="no"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="applicantForm__div flex justify-center items-center p-1">
        <h2 className="text-white text-lg font-semibold ">Military Service</h2>
      </div>

      <div className="application__FormOuterWrapper p-3">
        <div className="application__formWrapper">
          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",

              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label className="text-md font-semibold" htmlFor="Branch">
                Branch
              </label>
              <input
                type="text"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter branch...."
                value={applicantDetails.MSbranch}
                name="MSbranch"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="startedFrom" className="text-md font-semibold">
                From
              </label>
              <input
                id="startedFrom"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.MSform}
                name="MSform"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="leavingDate" className="text-md font-semibold">
                To
              </label>
              <input
                id="leavingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter your responsibilities...."
                type="text"
                value={applicantDetails.MSTo}
                name="MSTo"
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="startedFrom" className="text-md font-semibold">
                Rank at Discharge
              </label>
              <input
                id="startedFrom"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter Rank at Discharge...."
                type="text"
                value={applicantDetails.MSrankAtDischarge}
                name="MSrankAtDischarge"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="leavingDate" className="text-md font-semibold">
                Type of Discharge
              </label>
              <input
                id="leavingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter Type of Discharge...."
                name="MStypeOfDischarge"
                type="text"
                value={applicantDetails.MStypeOfDischarge}
                onChange={handleChange}
              />
            </div>
          </div>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label className="text-md font-semibold" htmlFor="Branch">
                If other than honorable, explain :
              </label>
              <input
                type="text"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter honorable...."
                value={applicantDetails.otherHonorable}
                onChange={handleChange}
                name="otherHonorable"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="applicantForm__div flex justify-center items-center p-1">
        <h2 className="text-white text-lg font-semibold ">
          Disclaimer and Signature
        </h2>
      </div>

      <div className="application__FormOuterWrapper p-3">
        <div className="application__formWrapper">
          <p className="text-md font-semibold my-3">
            I certify that my answers are true and complete to the best of my
            knowledge.
          </p>
          <p className="text-md font-semibold">
            If this application leads to employment, I understand that false or
            misleading information in my application or interview may result in
            my release.
          </p>

          <div
            className="flex items-center"
            style={{
              justifyContent: "space-evenly",
              gap: "10px",
              width: "93%",
              margin: "0 auto",
            }}
          >
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="startedFrom" className="text-md font-semibold">
                Signature
              </label>
              <input
                id="startedFrom"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Your signature...."
                type="text"
                value={applicantDetails.applicantSignature}
                name="applicantSignature"
                onChange={handleChange}
              />
            </div>
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="leavingDate" className="text-md font-semibold">
                Date
              </label>
              <input
                id="leavingDate"
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
                placeholder="Enter date...."
                type="text"
                value={applicantDetails.curDate}
                name="curDate"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[75%] mx-auto justify-between items-center">
        <button
          onClick={handleSubmit} className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white">Save & Exit</button>
        <button onClick={()=> handleSubmit('nextForm')} className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white">Save & Continue</button>
      </div>
    </div>
    </>
  );
}
