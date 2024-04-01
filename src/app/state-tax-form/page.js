"use client"
import { useRouter } from "next/navigation";

const StateTaxForm = () => {

    const router = useRouter();

    function handleSubmit(){
      router.push("request-for-taxpayer");
    }
    return (
      <div>
        <div className="w-[85%] mx-auto py-3">
          <h1 className="text-center font-bold text-2xl">
            STATE OF GEORGIA EMPLOYEE’S WITHHOLDING ALLOWANCE CERTIFICATE{" "}
          </h1>
  
          <div className="flex justify-center items-center gap-10 mt-6">
            <div className="flex-1 flex flex-col justify-start items-start gap-3">
              <label className="text-md font-semibold">1a. YOUR FULL NAME</label>
              <input className="border-b w-full  border-black outline-none p-1" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-3">
              <label className="text-md font-semibold">
                1b. YOUR SOCIAL SECURITY NUMBER
              </label>
              <input className="border-b w-full  border-black outline-none p-1" />
            </div>
          </div>
  
          <div className="flex justify-center items-center gap-10 mt-6">
            <div className="flex-1 flex flex-col justify-start items-start gap-3">
              <label className="text-md font-semibold">
                2a. HOME ADDRESS (Number, Street, or Rural Route)
              </label>
              <input className="border-b w-full  border-black p-1 outline-none" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-3">
              <label className="text-md font-semibold">
                2b. CITY, STATE AND ZIP CODE{" "}
              </label>
              <input className="border-b w-full  border-black p-1 outline-none" />
            </div>
          </div>
  
          <h2 className="text-center font-bold text-xl my-4">
            PLEASE READ INSTRUCTIONS ON REVERSE SIDE BEFORE COMPLETING LINES 3 – 8
          </h2>
          <h3 className="font-bold text-md mt-3">3. MARITAL STATUS</h3>
          <p className="text-md font-medium">
            (If you do not wish to claim an allowance, enter “0” in the brackets
            beside your marital status.)
          </p>
  
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <p className="text-md font-medium my-2">
                A. Single: Enter 0 or 1..........................................{" "}
                <input
                  type="text"
                  className="w-[3%] border-l-2 border-r-2 px-1 text-center border-black outline-none"
                />
              </p>
              <p className="text-md font-medium my-2">
                B. Married Filing Joint, both spouses working:
              </p>
              <p className="text-md font-medium my-2 ml-5">
                Enter 0 or 1 ..................................................{" "}
                <input
                  type="text"
                  className="w-[3%] border-l-2 border-r-2 px-1 text-center border-black outline-none"
                />
              </p>
              <p className="text-md font-medium my-2">
                C. Married Filing Joint, one spouse working:
              </p>
              <p className="text-md font-medium my-2 ml-5">
                Enter 0 or 1 or 2 ...........................................{" "}
                <input
                  type="text"
                  className="w-[3%] border-l-2 border-r-2 px-1 text-center border-black outline-none"
                />
              </p>
              <p className="text-md font-medium my-2">
                D. Married Filing Separate:
              </p>
              <p className="text-md font-medium my-2 ml-5">
                Enter 0 or 1 or 2 ...........................................{" "}
                <input
                  type="text"
                  className="w-[3%] border-l-2 border-r-2 px-1 text-center border-black outline-none"
                />
              </p>
              <p className="text-md font-medium my-2">E. Head of Household:</p>
              <p className="text-md font-medium my-2 ml-5">
                Enter 0 or 1 or 2 ...........................................{" "}
                <input
                  type="text"
                  className="w-[3%] border-l-2 border-r-2 px-1 text-center border-black outline-none"
                />
              </p>
            </div>
            <div className="flex-1">
              <p className="text-md font-bold text-xl my-5">
                4. DEPENDENT ALLOWANCES . . . . . . . . . . . . . . . .{" "}
                <input className="w-[3%] border-l-2 border-r-2 px-1 text-center border-black outline-none" />
              </p>
              <p className="text-md font-bold text-xl my-5">
                5. ADDITIONAL ALLOWANCES . . . . . . . . . . . . . . . .{" "}
                <input className="w-[3%] border-l-2 border-r-2 px-1 text-center border-black outline-none" />
              </p>
              <p className="text-md font-bold text-xl my-5">
                6. ADDITIONAL WITHHOLDING . . . . . . . . . . . . . . .{" "}
                <input className="w-[3%] border-l-2 border-r-2 px-1 text-center border-black outline-none" />
              </p>
            </div>
          </div>
  
          <div>
            <h2 className="text-center font-bold text-2xl my-2">
              WORKSHEET FOR CALCULATING ADDITIONAL ALLOWANCES
            </h2>
            <h2 className="text-center font-bold text-xl my-2">
              (Must be completed in order to enter an amount on step 5)
            </h2>
  
            <p className="text-lg font-semibold">
              1. COMPLETE THIS LINE ONLY IF USING STANDARD DEDUCTION:
            </p>
            <div className="flex justify-end items-end">
              <div className="w-[30%]">
                <p className="text-lg font-semibold my-1">
                  Yourself : <input type="checkbox" /> Age 65 or over{" "}
                  <input type="checkbox" /> Blind
                </p>
                <p className="text-lg font-semibold my-1">
                  Spouse : <input type="checkbox" /> Age 65 or over{" "}
                  <input type="checkbox" /> Blind
                </p>
              </div>
              <div className="w-[70%]">
                <p className="text-lg font-semibold my-auto">
                  Number of boxes checked{" "}
                  <input className="outline-none border-b border-black w-[10%]" />{" "}
                  x 1300{" "}
                  <input className="outline-none border-b border-dotted border-black w-[10%]" />{" "}
                  ${" "}
                  <input className="outline-none border-b border-black w-[10%]" />
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold">
              2. ADDITIONAL ALLOWANCES FOR DEDUCTIONS:
            </p>
            <p className="text-lg font-semibold my-1">
              A. Federal Estimated Itemized Deductions (If Itemizing
              Deductions).............................{"  "} $
              <input className="border-b border-black outline-none ml-2" />
            </p>
  
            <div className="flex justify-start items-start">
              <div className="flex-1">
                <p className="text-lg font-semibold my-1">
                  B. Georgia Standard Deduction (enter one):
                </p>
                <p className="text-lg font-semibold my-1">
                  Each Spouse{" "}
                  <input className="border-b border-black outline-none ml-2" />
                </p>
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold my-1">
                  Single/Head of Household $4,600
                </p>
                <p className="text-lg font-semibold my-1">
                  $3,000 . . . . . . . $
                  <input className="border-b border-black outline-none ml-2" />
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold my-1">
                C. Subtract Line B from Line A (If zero or less, enter
                zero)....................................................................${" "}
                <input className="border-b border-black outline-none ml-2" />
              </p>
              <p className="text-lg font-semibold my-1">
                D. Allowable Deductions to Federal Adjusted Gross Income
                .................................................................${" "}
                <input className="border-b border-black outline-none ml-2" />
              </p>
              <p className="text-lg font-semibold my-1">
                E. Add the Amounts on Lines 1, 2C, and 2D
                ..........................................................................................${" "}
                <input className="border-b border-black outline-none ml-2" />
              </p>
              <p className="text-lg font-semibold my-1">
                F. Estimate of Taxable Income not Subject to Withholding
                ...................................................................${" "}
                <input className="border-b border-black outline-none ml-2" />
              </p>
              <p className="text-lg font-semibold my-1">
                G. Subtract Line F from Line E (if zero or less, stop
                here)......................................................................${" "}
                <input className="border-b border-black outline-none ml-2" />
              </p>
              <p className="text-lg font-semibold my-1">
                H. Divide the Amount on Line G by $3,000. Enter total here and on
                Line 5 above ................................ ${" "}
                <input className="border-b border-black outline-none ml-2" />
              </p>
  
              <p className="text-lg font-semibold my-1">
                (This is the maximum number of additional allowances you can
                claim. If the remainder is over $1,500 round up){" "}
              </p>
            </div>
  
            <div className="flex justify-center items-start my-2">
              <div>
                <p className="text-lg font-semibold my-1">
                  <strong>7. LETTER USED </strong>
                  (Marital Status A, B, C, D, or E){" "}
                  <input className="border-b border-black outline-none w-[20%]" />
                </p>
                <p className="text-md font-semibold my-1">
                  (Employer: The letter indicates the tax tables in Em ployer’s
                  Tax Guide)
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold my-1">
                  <strong>TOTAL ALLOWANCES </strong>
                  (Total of Lines 3 - 5){" "}
                  <input className="border-b border-black outline-none w-[20%]" />
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold my-1">
                <strong>8. EXEMPT : </strong> (Do not complete Lines 3 - 7 if
                claiming exempt) Read the Line 8 instructions on page 2 before
                completing this section.
              </p>
              <p className="text-lg font-normal my-1">
                (a) I claim exemption from withholding because I incurred no
                Georgia income tax liability last year and I do not expect to have
                a Georgia income tax liability this year.{" "}
                <strong>Check here</strong> <input type="checkbox" />
              </p>
  
              <p>
                (b) I certify that I am not subject to Georgia withholding because
                I meet the conditions set forth under the Servicemembers Civil
                Relief Act as provided on page 2. My state of residence is{" "}
                <input className="border-b border-black outline-none w-[20%]" />
                My spouse’s (servicemember) state of residence is{" "}
                <input className="border-b border-black outline-none w-[20%]" />.
                The states of residence must be the same to be exempt.{" "}
                <strong>Check here </strong>{" "}
                <input type="checkbox" className="border-2 border-black" />
              </p>
            </div>
            <div className="border-t-2 border-black my-3">
              <p className="text-lg font-semibold my-1">
                I certify under penalty of perjury that I am entitled to the
                number of withholding allowances or the exemption from withholding
                status claimed on this Form G-4. Also, I authorize my employer to
                deduct per pay period the additional amount listed above
              </p>
              <p className="text-lg font-semibold my-6">
                Employee’s Signature{" "}
                <input className="border-b border-black outline-none w-[60%] px-2" />{" "}
                Date{" "}
                <input className="border-b border-black outline-none w-[20%] px-2" />
              </p>
            </div>
            <div className="border-t-2 border-black">
              <p className="text-lg font-semibold my-6">
                <strong>
                  {" "}
                  Employer: Complete Line 9 and mail entire form only if the
                  employee claims over 14 allowances or exempt from withholding.
                </strong>{" "}
                If necessary, mail form to: Georgia Department of Revenue,
                Withholding Tax Unit, 1800 Century Blvd NE, Suite 8200, Atlanta,
                GA 30345
              </p>
              <div className="flex justify-center items-center">
                <div className="flex-1 flex flex-col justify-start items-start gap-4">
                  <label className="text-lg font-bold">
                    9. EMPLOYER’S NAME AND ADDRESS:
                  </label>
                  <input className="border-b border-black outline-none w-[50%] px-2" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-bold my-3">
                    EMPLOYER’S FEIN :{" "}
                    <input className="border-b border-black outline-none w-[50%] px-2" />
                  </p>
                  <p className="text-lg font-bold my-3">
                    EMPLOYER’S WH# :{" "}
                    <input className="border-b border-black outline-none w-[50%] px-2" />
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold my-3">
                Do not accept forms claiming additional allowances unless the
                worksheet has been completed. Do not accept forms claiming exempt
                if numbers are written on Lines 3 - 7
              </p>
  
              <h2 className="text-xl font-bold mt-8">
                INSTRUCTIONS FOR COMPLETING FORM G-4
              </h2>
              <p className="text-lg font-semibold my-3">
                Enter your full name, address and social security number in boxes
                1 a through 2b.
              </p>
              <p className="text-lg font-semibold my-3">
                Line 3: Write the number of allowances you are claiming in the
                brackets beside your marital status.
              </p>
  
              <ul>
                {[
                  "A. Single – enter 1 if you are claiming yourself",
                  "B. Married Filing Joint, both spouses working – enter 1 if you claim yourself",
                  "C. Married Filing Joint, one spouse working – enter 1 if you claim yourself or 2 if you claim yourself and your spouse",
                  "D. Married Filing Separate – en ter 1 if you claim yourself",
                  "E. Head of Household – enter 1 if you claim yourself",
                ].map((cur, id) => (
                  <li className="text-lg font-semibold" key={id}>
                    {cur}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold my-1">
                Line 4: Enter the number of dependent allowances you are entitled
                to claim.
              </p>
              <p className="text-lg font-semibold my-1">
                Line 5: Complete the worksheet on Form G-4 if you claim additional
                allowances. Enter the number on Line H here.
              </p>
              <h2 className="text-xl font-bold text-center my-1">
                Failure to complete and submit the worksheet will result in
                automatic denial on your claim.
              </h2>
              <p className="text-lg font-semibold my-1">
                Line 6: Enter a specific dollar amount that you authorize your
                employer to withhold in addition to the tax withheld based on your
                marital status and number of allowances.
              </p>
              <p className="text-lg font-semibold my-1">
                Line 7: Enter the letter of your marital status from Line 3. Enter
                total of the numbers on Lines 3-5.
              </p>
              <p className="text-lg font-semibold my-1">Line 8:</p>
              <p className="text-lg font-semibold my-1 ml-4">
                (a) Check the first box if you qualify to claim exempt from
                withholding. You can claim exempt if you filed a Georgia income
                tax return last year and the amount of Line 4 of Form 500EZ or
                Line 16 of Form 500 was zero, and you expect to file a Georgia tax
                return this year and will not have a tax liability. You cannot
                claim exempt if you did not file a Georgia income tax return for
                the previous tax year.{" "}
                <strong>
                  Receiving a refund in the previous tax year does not qualify you
                  to claim exempt.
                </strong>
              </p>
              <p className="text-lg font-semibold mt-3">
                <strong>EXAMPLES: </strong> Your employer withheld $500 of Georgia
                income tax from your wages. The amount on Line 4 of Form 500EZ (or
                Line 16 of Form 500) was $100. Your tax liability is the amount on
                Line 4 (or Line 16); therefore, you do not qualify to claim
                exempt.
              </p>
              <p className="text-lg font-semibold mt-3">
                Your employer withheld $500 of Georgia income tax from your wages.
                The amount on Line 4 of Form 500EZ (or Line 16 of Form 500) was $0
                (zero). Your tax liability is the amount on Line 4 (or Line 16)
                and you filed a prior year income tax return; therefore you
                qualify to claim exempt.
              </p>
              <p className="text-lg font-semibold mt-3">
                (b) Check the second box if you are not subject to Georgia
                withholding and meet the conditions set forth under the
                Servicemembers Civil Relief Act. Under the Act, a spouse of a
                servicemember may be exempt from Georgia income tax on income from
                services performed in Georgia if:
              </p>
              <ul className="my-2 ml-5">
                {[
                  "1. The servicemember is present in Georgia in compliance with military orders;",
                  "2. The spouse is in Georgia solely to be with the servicemember;",
                  "3. The servicemember maintains domicile in another state; and",
                  "4. The domicile of the spouse is the same as the domicile of the servicemember or the spouse of the servicemember has elected to use the same residence for purposes of taxation as the servicemember.",
                ].map((cur, id) => (
                  <li className="text-lg font-semibold" key={id}>
                    {cur}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold mt-3">
                Additional information for employers regarding the Military
                Spouses Residency Relief Act:
              </p>
              <ul className="ml-5">
                <li className="text-lg font-semibold mt-1">
                  1. On the W-2 the employer should not report any of the wages as
                  Georgia wages.
                </li>
                <li className="text-lg font-semibold mt-1">
                  2. If the spouse of a servicemember is entitled to the
                  protection of the Military Spouses Residency Relief Act in
                  another state and files a withholding exemption form in such
                  other state, the spouse is required to submit a Georgia Form G-4
                  so that withholding will occur as is required by Georgia Law
                  when a Georgia domiciliary works in another state and
                  withholding is not required by such other state. If the spouse
                  does not fill out the form, the employer shall withhold Georgia
                  income tax as if the spouse is single with zero allowances
                </li>
              </ul>
              <p className="text-lg font-semibold mt-3">
                <strong>Worksheet for calculating additional allowances.</strong>{" "}
                Enter the information as requested by each line. For Line 2D,
                enter items such as Retirement Income Exclusion, U.S. Obligations,
                and other allowable deductions per Georgia Law, see the IT-511
                booklet for more information.
              </p>
              <p className="text-xl font-bold my-4">
                Do not complete Lines 3-7 if claiming exempt.
              </p>
              <p className="text-lg font-semibold mt-3">
                <strong>O.C.G.A. § 48-7-102</strong> requires you to complete and
                submit Form G-4 to your employer in order to have tax withheld
                from your wages. By correctly completing this form, you can adjust
                the amount of tax withheld to meet your tax liability. Failure to
                submit a properly completed Form G-4 will result in your employer
                withholding tax as though you are single with zero allowances.
              </p>
              <p className="text-lg font-semibold my-4">
                Employers are required to mail any Form G-4 claiming more than 14
                allowances or exempt from withholding to the Georgia Department of
                Revenue for approval. Employers will honor the properly completed
                form as submitted pending notification from the Withholding Tax
                Unit. Upon approval, such forms remain in effect until changed or
                until February 15 of the following year. Employers who know that a
                G-4 is erroneous should not honor the form and should withhold as
                if the employee is single claiming zero allowances until a
                corrected form has been received.
              </p>
            </div>
  
            <div className="flex w-full my-5 mx-auto justify-between items-center">
            <button
              // disabled={
              //   !CNAStaffDetails.userName ||
              //   !CNAStaffDetails.empolyeeSignature ||
              //   !CNAStaffDetails.name ||
                //!CNAStaffDetails.empolyeeDate
              // }
              onClick={handleSubmit}
              className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white"
            >
              Save & Exit
            </button>
            <button
              //  disabled={
              //   !CNAStaffDetails.userName ||
              //   !CNAStaffDetails.empolyeeSignature ||
              //   !CNAStaffDetails.name ||
              //   !CNAStaffDetails.empolyeeDate
              //  }
              onClick={() => handleSubmit("nextForm")}
              className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white "
            >
              Save & Continue
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  };
  export default StateTaxForm;
  