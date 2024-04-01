"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EmployeeCovenantsList = [
  ` Employee shall not induce, directly or indirectly, any other employees of the Company to
  terminate their employment;`,
  `Employee shall not solicit the business of any client of the Company.`,
  ` Employee shall not offer same or similar services to a client that they previously served during 
  the period of employment with the company`,
  `Employee shall not induce, directly or indirectly, any client of the Company to transfer services 
  to another agency offering same or similar services as the Company;`,
];

const NonCompleteAgreement = () => {

  const router = useRouter();

  const [nonCompleteAgreement, setNonCompleteAgreement] = useState({
    day: '',
    day2: '',
    year: '',
    employeeName: '',
    employeeAddress: '',
    employeePosition:'',
    CompanyRepresentationSignature: '',
    CompanyRepresentativeNameAndTitle: '',
    EmployeeSignature: '',
    EmployeeName:''
  });

  const handleChange = (e) => {
    
  }
  const handleSubmit = () => {
    router.push("/phs-background-check")
  }




  return (
    <>
      <div className="w-[80%] mx-auto my-3">
        <h2 className="text-center font-semibold text-3xl my-8 uppercase">
          Non-Complete Agreement
        </h2>
        <p className="my-2 font-medium text-lg">
          This Non-Compete (the &quot;Agreement&quot;) is made as of this{" "}
          <input type="text" name="day" value={nonCompleteAgreement.day} onChange={handleChange} className="border-b border-black px-2 w-[6%] outline-none" />{" "}
          day of{" "}
          <input type="text" name="day2" value={nonCompleteAgreement.day2} onChange={handleChange} className="border-b border-black px-2 w-[6%] outline-none" />,
          20{" "}
          <input type="text" name="year" value={nonCompleteAgreement.year} onChange={handleChange} className="border-b border-black px-2 outline-none w-[6%]" />,
          (the &quot;Effective Date&quot;) by and between Pacific Health Systems LLC
          (&quot;Company&quot;), located at 110 EAGLE SPRINGS Drive, Suite C, Stockbridge,
          GA 30281, and{" "}
          <input type="text" name="employeeName" value={nonCompleteAgreement.employeeName} onChange={handleChange} className="border-b border-dotted border-black px-2 outline-none w-[25%]" />
          (&quot;Employee&quot;), residing at{" "}
          <input type="text" name="employeeAddress" value={nonCompleteAgreement.employeeAddress} onChange={handleChange} className="border-b border-dotted border-black outline-none w-[55%]" />{" "}
          Employee will be serving as{" "}
          <input type="text" name="employeePosition" value={nonCompleteAgreement.employeePosition} onChange={handleChange} className="border-black px-2 outline-none border-b border-dotted w-[8%]" />{" "}
          . Employee may have access to or may generate or otherwise come into
          contact with proprietary and/or confidential information of the
          Company or the Company’s clients. The Company wishes to enter into a
          non-compete agreement in the event Employee terminates his employment.
          In consideration of the promises and mutual covenants herein, the
          parties agree as follows:
        </p>
        <p className="text-md font-semibold my-3">
          <strong>1. Employee Covenants.</strong> In consideration of offer of
          employment or continued employment with the Company, Employee
          covenants that during their employment with the Company and for a
          period of two (2) years or the longest period of time allowed by state
          law, whichever is shorter, after said employment is ended for any
          reason, including but not limited to the termination of their
          employment due to inadequate performance or resignation:
        </p>
        <ol className="px-4 my-2">
          {EmployeeCovenantsList.map((items, id) => (
            <li className="listStyle font-medium text-lg py-1" key={id}>
              {items}
            </li>
          ))}
        </ol>
        <p className="text-md font-semibold my-3">
          <strong>2. Confidentiality Agreement.</strong> Employee shall not,
          without written consent, share or use any information relating to the
          Company that has not been previously publicly released including but
          not limited to patient charts, patent and patent applications; trade
          secrets; proprietary and confidential information, designs,
          inventions, research, development, design details and specifications,
          engineering, and all related documentation; financial information,
          financial plans, customer lists investors, employees, business and
          contractual relationships, business forecasts, sales and
          merchandising, marketing plans and information the Company provides
          regarding third parties; and any and all other information that
          Employee knew, or reasonably should have known, was confidential.
        </p>
        <p className="text-md font-semibold my-3">
          <strong>3.Injunctive Relief.</strong> Employee acknowledges that
          disclosure of any confidential information or breach of any of the
          noncompetitive covenants will give rise to irreparable injury to the
          Company. Employee acknowledges that such injuries are not adequately
          compensable by damages and that injunctive relief against such breach
          is available as a legal remedy. Employee agrees that the covenants
          herein are necessary for the protection of the Company’s legitimate
          business interests.
        </p>
        <p className="text-md font-semibold my-3">
          <strong>4.Bingging Effect</strong>. This Agreement shall be binding
          upon and inure to the benefit of the parties and their respective
          legal representatives, heirs, administrators, executors, successors
          and permitted assigns.
        </p>
        <p className="text-md font-semibold my-3">
          <strong>5.Severability.</strong>
          If any provision of this Agreement is held to be invalid, illegal or
          unenforceable in whole or in part, the remaining provisions shall not
          be affected and shall continue to be valid, legal and enforceable as
          though the invalid, illegal or unenforceable parts had not been
          included in this Agreement.
        </p>
        <p className="text-md font-semibold my-3">
          <strong>6.Governing Law.</strong> The term of this Agreement shall be
          governed by and construed in accordance with the laws of the State of
          Georgia,not including its conflicts of law provision.
        </p>
        <p className="text-md font-semibold my-3">
          <strong>7.Dispute Resolution.</strong> Any suit involving any dispute
          or matter arising under this Agreement may only be brought in a United
          States District Court located in the State of Georgia or any State
          Court in Georgia having jurisdiction over the subject matter of the
          dispute or matter. All parties hereby consent to the exercise of
          personal jurisdiction by any such court with respect to any such
          proceeding. All parties waive, to the maximum extent permitted by law,
          any right to trial by jury in connection with any action or proceeding
          relating to this Agreement.
        </p>
        <p className="text-md font-semibold my-3">
          <strong>8.Headings.</strong> The section headings herein are for
          reference purposes only and shall not otherwise affect the meaning,
          construction or interpretation of any provision in this Agreement.
        </p>
        <p className="text-md my-3 font-semibold">
          <strong>9.Entire Agreement.</strong>
          This Agreement contains the entire understanding between the parties
          and supersedes and cancels all prior agreements of the parties,
          whether oral or written, with respect to such subject matter.
        </p>
        <p className="text-md font-semibold my-3">
          <strong>10. Amendment.</strong>
          This Agreement may be amended or modified only by a written agreement
          signed by all of the parties.
        </p>
        <p className="text-md font-semibold my-3">
          <strong>11.Notices.</strong> Any notice or other communication given
          or made to any party under this Agreement shall be in writing and
          delivered by hand, sent by overnight courier service or sent by
          certified or registered mail, return receipt requested, to the address
          stated above or to another address as that parties may subsequently
          designate by notice and shall be deemed given on the date of delivery.
        </p>
        <p className="text-md font-semibold my-3">
          <strong>12.Waiver.</strong>
          No party shall be deemed to have waived any provision of this
          Agreement or the exercise of any rights held under this Agreement
          unless such waiver is made expressly and in writing. Waiver by any
          Partner of a breach or violation of any provision of this Agreement
          shall not constitute a waiver of any other subsequent breach or
          violation.
        </p>
        <p className="text-md font-semibold my-5">
          <strong>IN WITNESS WHEREOF,</strong> this Agreement has been executed
          and delivered as of the date first written above.
        </p>

        <div className="flex justify-around items-center my-10">
          <div className="flex flex-col justify-start items-start space-y-3 w-[40%]">
            <input type="text" name="CompanyRepresentationSignature" value={nonCompleteAgreement.CompanyRepresentationSignature} onChange={handleChange} className="border-b border-black px-2 outline-none w-full" />
            <label
              htmlFor="CompanyRepresentationSignature"
              className="text-lg font-semibold"
            >
              Company Representation Signature
            </label>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3 w-[40%]">
            <input type="text" name="CompanyRepresentativeNameAndTitle" value={nonCompleteAgreement.CompanyRepresentativeNameAndTitle} onChange={handleChange} className="border-b border-black px-2 outline-none w-full" />
            <label
              className="text-lg font-semibold "
              htmlFor="CompanyRepresentationSignature"
            >
              Company Representative Name and Title
            </label>
          </div>
        </div>

        <div className="flex justify-around items-center my-10">
          <div className="flex flex-col justify-start items-start space-y-3 w-[40%]">
            <input type="text" name="EmployeeSignature" value={nonCompleteAgreement.EmployeeSignature} onChange={handleChange} className="border-b border-black px-2 outline-none w-full" />
            <label
              htmlFor="CompanyRepresentationSignature"
              className="text-lg font-semibold"
            >
              Employee Signature
            </label>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3 w-[40%]">
            <input type="text" name="EmployeeName" value={nonCompleteAgreement.EmployeeName} onChange={handleChange} className="border-b border-black px-2 outline-none w-full" />
            <label
              className="text-lg font-semibold "
              htmlFor="CompanyRepresentationSignature"
            >
              Employee Name
            </label>
          </div>
        </div>

        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white "
          >
            Save & Exit
          </button>
          <button
            onClick={() => handleSubmit("nextForm")}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white "
          >
            Save & Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default NonCompleteAgreement;
