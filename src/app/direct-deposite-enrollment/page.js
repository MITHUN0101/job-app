"use client";
import { useRouter } from "next/navigation";

const DirectDepositEnrollment = () => {
  
  const router = useRouter();

  function handleSubmit(){
    router.push("/withholding-certificate");
  }

  return (
    <>
      <div className="w-[80%] mx-auto py-3">
        <h2 className="text-center font-bold text-4xl">PAYCHEX</h2>
        <h2 className="text-center font-semibold text-2xl">
          Direct Deposit Enrollment/Change Form*
        </h2>

        <p className="text-lg font-bold my-4">
          Company Name and/or Client Number{" "}
          <input className="border-b border-black outline-none px-2 w-[65%]" />
        </p>

        <p className="text-lg font-bold">
          Employee/Worker Name{" "}
          <input className="border-b border-black outline-none px-2" />{" "}
          Employee/Worker Number{" "}
          <input className="border-b border-black outline-none px-2" />
        </p>

        <p className="text-md font-semibold my-4">
          <strong>Employee/Worker :</strong> Retain a copy of this form for your
          records. Return the original to your employer .
        </p>

        <p className="text-md font-semibold">
          <strong>Employer/Company : </strong>Please retain a copy of this
          document for your records.
        </p>

        <div className="bg-black mt-5">
          <h2 className="text-white font-semibold text-lg text-center p-1">
            COMPLETE TO ENROLL / ADD / CHANGE BANK ACCOUNTS PLEASE PRINT IN
            BLACK/BLUE INK ONLY
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-1 border-r border-b border border-black py-[10px] px-[5px]">
            <h4 className="font-bold text-sm">Add New</h4>
          </div>
          <div className="flex-1  border-b border border-black py-[10px] px-[5px]">
            <h4 className="font-bold text-sm">Update existing account</h4>
          </div>
          <div className="flex-1 border-b border border-black py-[10px] px-[5px]">
            <h4 className="font-bold text-sm">Replace existing account</h4>
          </div>
          <div className="flex justify-center items-center w-[40%] border-b border border-black px-[5px]">
            <h4 className="font-bold text-sm">
              Last 4 digits of the existing account number
            </h4>
            <input className="w-[5%] border-2 border-black mx-2" />
            <input className="w-[5%] border-2 border-black mx-2" />
            <input className="w-[5%] border-2 border-black mx-2" />
            <input className="w-[5%] border-2 border-black mx-2" />
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex justify-around items-center w-[50%] border-l border-b p-2 border-black">
            <h4 className="text-base font-bold">Type of Account</h4>
            <h4 className="text-base font-bold">Checking</h4>
            <h4 className="text-base font-bold">Saving</h4>
          </div>
          <div className="w-[50%] border-l border-b border-r border-black p-2">
            <div>
              <label className="text-base font-bold mx-2">
                Account holder&apos;s Name
              </label>
              <input className="border-none outline-none w-[60%]" />
            </div>
          </div>
        </div>
        <div className="border border-black border-t-0 p-2 flex justify-start items-center">
          <h4 className="text-base font-bold mx-2">
            Routing/Transit Number :{" "}
          </h4>
          <div className="flex justify-start items-center w-[60%] gap-5">
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
          </div>
        </div>

        <div className="flex justify-center items-center p-2 border border-black border-t-0">
          <h4 className="text-base font-bold mx-2">
            Checking/Saving Account Number**
          </h4>
          <div className="w-[70%] flex justify-start items-center gap-4">
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
          </div>
        </div>
        <div className="flex justify-start items-center p-2 border border-black border-t-0">
          <label className="text-base font-bold mx-2">
            Financial Institution (&apos;Balck&apos;) Name
          </label>
          <input className="border-none outline-none w-[70%]" />
        </div>

        <div className="flex justify-evenly items-center p-2 border border-black border-t-0">
          <div>
            <p className="font-semibold">
              I wish to deposit (check one) :{" "}
              <input className="border-b-2 border-black w-[10%]" />% of Net
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Specific Dollar Amount ${" "}
              <input className="border-b-2 border-black w-[25%]" />
              .00
            </p>
          </div>
          <div>
            <p className="font-semibold">Remainder of Net Pay</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-1 border-r border-b border border-black py-[10px] px-[5px]">
            <h4 className="font-bold text-sm">Add New</h4>
          </div>
          <div className="flex-1  border-b border border-black py-[10px] px-[5px]">
            <h4 className="font-bold text-sm">Update existing account</h4>
          </div>
          <div className="flex-1 border-b border border-black py-[10px] px-[5px]">
            <h4 className="font-bold text-sm">Replace existing account</h4>
          </div>
          <div className="flex justify-center items-center w-[40%] border-b border border-black px-[5px]">
            <h4 className="font-bold text-sm">
              Last 4 digits of the existing account number
            </h4>
            <input className="w-[5%] border-2 border-black mx-2" />
            <input className="w-[5%] border-2 border-black mx-2" />
            <input className="w-[5%] border-2 border-black mx-2" />
            <input className="w-[5%] border-2 border-black mx-2" />
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex justify-around items-center w-[50%] border-l border-b p-2 border-black">
            <h4 className="text-base font-bold">Type of Account</h4>
            <h4 className="text-base font-bold">Checking</h4>
            <h4 className="text-base font-bold">Saving</h4>
          </div>
          <div className="w-[50%] border-l border-b border-r border-black p-2">
            <div>
              <label className="text-base font-bold mx-2">
                Account holder&apos;s Name
              </label>
              <input className="border-none outline-none w-[60%]" />
            </div>
          </div>
        </div>
        <div className="border border-black border-t-0 p-2 flex justify-start items-center">
          <h4 className="text-base font-bold mx-2">
            Routing/Transit Number :{" "}
          </h4>
          <div className="flex justify-start items-center w-[60%] gap-5">
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
          </div>
        </div>

        <div className="flex justify-center items-center p-2 border border-black border-t-0">
          <h4 className="text-base font-bold mx-2">
            Checking/Saving Account Number**
          </h4>
          <div className="w-[70%] flex justify-start items-center gap-4">
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
          </div>
        </div>
        <div className="flex justify-start items-center p-2 border border-black border-t-0">
          <label className="text-base font-bold mx-2">
            Financial Institution (&apos;Balck&apos;) Name
          </label>
          <input className="border-none outline-none w-[70%]" />
        </div>

        <div className="flex justify-evenly items-center p-2 border border-black border-t-0">
          <div>
            <p className="font-semibold">
              I wish to deposit (check one) :{" "}
              <input className="border-b-2 border-black w-[10%]" />% of Net
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Specific Dollar Amount ${" "}
              <input className="border-b-2 border-black w-[25%]" />
              .00
            </p>
          </div>
          <div>
            <p className="font-semibold">Remainder of Net Pay</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-1 border-r border-b border border-black py-[10px] px-[5px]">
            <h4 className="font-bold text-sm">Add New</h4>
          </div>
          <div className="flex-1  border-b border border-black py-[10px] px-[5px]">
            <h4 className="font-bold text-sm">Update existing account</h4>
          </div>
          <div className="flex-1 border-b border border-black py-[10px] px-[5px]">
            <h4 className="font-bold text-sm">Replace existing account</h4>
          </div>
          <div className="flex justify-center items-center w-[40%] border-b border border-black px-[5px]">
            <h4 className="font-bold text-sm">
              Last 4 digits of the existing account number
            </h4>
            <input className="w-[5%] border-2 border-black mx-2" />
            <input className="w-[5%] border-2 border-black mx-2" />
            <input className="w-[5%] border-2 border-black mx-2" />
            <input className="w-[5%] border-2 border-black mx-2" />
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex justify-around items-center w-[50%] border-l border-b p-2 border-black">
            <h4 className="text-base font-bold">Type of Account</h4>
            <h4 className="text-base font-bold">Checking</h4>
            <h4 className="text-base font-bold">Saving</h4>
          </div>
          <div className="w-[50%] border-l border-b border-r border-black p-2">
            <div>
              <label className="text-base font-bold mx-2">
                Account holder&apos;s Name
              </label>
              <input className="border-none outline-none w-[60%]" />
            </div>
          </div>
        </div>
        <div className="border border-black border-t-0 p-2 flex justify-start items-center">
          <h4 className="text-base font-bold mx-2">
            Routing/Transit Number :{" "}
          </h4>
          <div className="flex justify-start items-center w-[60%] gap-5">
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
          </div>
        </div>

        <div className="flex justify-center items-center p-2 border border-black border-t-0">
          <h4 className="text-base font-bold mx-2">
            Checking/Saving Account Number**
          </h4>
          <div className="w-[70%] flex justify-start items-center gap-4">
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
            <input className="w-[5%] border-2 border-black rounded" />
          </div>
        </div>
        <div className="flex justify-start items-center p-2 border border-black border-t-0">
          <label className="text-base font-bold mx-2">
            Financial Institution (&apos;Balck&apos;) Name
          </label>
          <input className="border-none outline-none w-[70%]" />
        </div>

        <div className="flex justify-evenly items-center p-2 border border-black border-t-0">
          <div>
            <p className="font-semibold">
              I wish to deposit (check one) :{" "}
              <input className="border-b-2 border-black w-[10%]" />% of Net
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Specific Dollar Amount ${" "}
              <input className="border-b-2 border-black w-[25%]" />
              .00
            </p>
          </div>
          <div>
            <p className="font-semibold">Remainder of Net Pay</p>
          </div>
        </div>

        <div className="bg-black mt-5">
          <h2 className="text-white font-semibold text-lg text-center p-1">
            CONFIRMATION STATEMENT - PLEASE PRINT IN BLACK/BLUE INK ONLY
          </h2>
        </div>

        <div>
          <p className="font-semibold text-sm">
            I authoeize my employer/company to deposit my earnings into the bank
            accounts specified above and if necessary,to electronically debit
            account to current erroneous entries. I certify my accounts allow
            these transactions. I certify that the above listed account number
            accurately refects my intended receiving account.I agree that direcr
            deposit transactions I authorize comply with all applicable laws. My
            signature below indicates that I am agreeing that I am either the
            accountholder or have the authority of the accountholder to
            authorize my employer/company make direct deposit into the named
            account. I understand thet this authorization will remain in full
            force and effect until I notify company in writen that I wish to
            revoke my authorization.I understand that the company require at
            least 5 business day peior notice to cancel this authorization
          </p>

          <div className="flex justify-between items-center my-2">
            <p className="text-md font-bold">
              Employee/Worker Signature{" "}
              <input className="border-b border-black outline-none p-1 w-[50%]" />
            </p>
            <p className="text-md font-bold">
              Date{" "}
              <input className="border-b border-black outline-none p-1 w-[50%]" />
            </p>
          </div>
          <p className="font-semibold text-sm">
            I comfirm that the above named Employee/worker has added or changed
            abank account for direct deposite transactions processed by
            PAYCHEX.Inc.I have reviewing the information provided and it is
            accurate to the best of my knowledge.My signature below indicates
            that I have the authority to execute this document on the behalf of
            the client.
          </p>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-md font-bold w-full">
            Employee/Company Representative Printed Name :{" "}
            <input className="border-b border-black outline-none p-1 w-[30%]" />
          </p>
        </div>

        <div className="flex justify-between items-center my-2">
          <p className="text-md font-bold">
            Employee/Company Representative Signature{" "}
            <input className="border-b border-black outline-none p-1 w-[35%]" />
          </p>
          <p className="text-md font-bold my-1">
            Date{" "}
            <input className="border-b border-black outline-none p-1 w-[50%]" />
          </p>
        </div>
        <p className="text-md font-bold my-1">
          All filds are required except Employee/worker Number.
        </p>
        <p className="text-md font-bold my-1">Certain account may have restriction on deposit and withdrawals.Check with your bank for more information specific to your account.</p>
        <p className="text-md font-bold my-1">
       <strong>Note:</strong>Digital or Electronic Signatures are not acceptable
        </p>

        <div className="flex w-full my-5 mx-auto justify-between items-center">
          <button
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white"
          >
            Save & Exit
          </button>
          <button
            onClick={handleSubmit}
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default DirectDepositEnrollment;
