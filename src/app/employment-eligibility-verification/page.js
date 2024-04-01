"use client"

const listAListItem = [
    "U.S. Passport or U.S. Passport Card",
    `Permanent Resident Card or Alien 
  Registration Receipt Card (Form I-551)`,
    `Foreign passport that contains a 
  temporary I-551 stamp or temporary 
  I-551 printed notation on a machine-readable immigrant visa`,
    `Employment Authorization Document 
  that contains a photograph (Form 
  I-766)`,
    `For a nonimmigrant alien authorized 
  to work for a specific employer 
  because of his or her status`,
    ` Foreign passport; and'Form I-94 or Form I-94A that has 
  the following:'`,
    `The same name as the passport; 
  and`,
    ` An endorsement of the alien's 
  nonimmigrant status as long as 
  that period of endorsement has 
  not yet expired and the 
  proposed employment is not in 
  conflict with any restrictions or 
  limitations identified on the form`,
    `Passport from the Federated States of 
  Micronesia (FSM) or the Republic of 
  the Marshall Islands (RMI) with Form 
  I-94 or Form I-94A indicating 
  nonimmigrant admission under the 
  Compact of Free Association Between 
  the United States and the FSM or RMI`,
  ];
  
  const listBListItem = [
    `Driver's license or ID card issued by a 
      State or outlying possession of the 
      United States provided it contains a 
      photograph or information such as 
      name, date of birth, gender, height, eye 
      color, and address`,
    `ID card issued by federal, state or local 
      government agencies or entities, 
      provided it contains a photograph or 
      information such as name, date of birth, 
      gender, height, eye color, and address`,
    `School ID card with a photograph`,
    `Voter's registration card`,
    `U.S. Military card or draft record`,
    `Military dependent's ID card`,
    `U.S. Coast Guard Merchant Mariner 
      Card`,
    `Native American tribal document`,
    `Driver's license issued by a Canadian 
      government authority`,
    `School record or report card`,
    `Clinic, doctor, or hospital record`,
    `Day-care or nursery school record`,
  ];
  const listCListItem = [
    `A Social Security Account Number 
      card, unless the card includes one of 
      the following restrictions:`,
    `NOT VALID FOR EMPLOYMENT`,
    `VALID FOR WORK ONLY WITH 
      INS AUTHORIZATION`,
    `VALID FOR WORK ONLY WITH 
      DHS AUTHORIZATION`,
    `Certification of report of birth issued 
      by the Department of State (Forms 
      DS-1350, FS-545, FS-240)`,
    `Original or certified copy of birth 
      certificate issued by a State, 
      county, municipal authority, or 
      territory of the United States 
      bearing an official sea`,
    `Native American tribal documen`,
    `U.S. Citizen ID Card (Form I-197)`,
    `Identification Card for Use of 
      Resident Citizen in the United 
      States (Form I-179)`,
    `Employment authorization 
      document issued by the 
      Department of Homeland Security`,
  ];
  
  const EmploymentEligibilityVerification = () => {

    function handleSubmit(){

    }

    return (
      <>
        <div className="w-[90%] mx-auto">
          <h1 className="text-center my-3 text-3xl font-bold">
            Employment Eligibility Verification
          </h1>
          <h2 className="text-center text-2xl font-bold">
            Department of Homeland Security
          </h2>
          <p className="text-center font-semibold my-3 text-xl">
            U.S. Citizenship and Immigration Services
          </p>
  
          <p className="text-md font-semibold my-2">
            <strong>START HERE:</strong> Read instructions carefully before
            completing this form. The instructions must be available, either in
            paper or electronically, during completion of this form. Employers are
            liable for errors in the completion of this form.
          </p>
          <p className="text-md font-semibold my-2">
            <strong>ANTI-DISCRIMINATION NOTICE:</strong> It is illegal to
            discriminate against work-authorized individuals. Employers CANNOT
            specify which document(s) an employee may present to establish
            employment authorization and identity. The refusal to hire or continue
            to employ an individual because the documentation presented has a
            future expiration date may also constitute illegal discrimination.
          </p>
  
          <p className="text-md font-semibold my-2">
            <strong>Section 1. Employee Information and Attestation</strong>{" "}
            (Employees must complete and sign Section 1 of Form I-9 no later than
            the first day of employment, but not before accepting a job offer.)
          </p>
          <div className="grid grid-cols-4 gap-4 my-4">
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">Last Name (Family Name)</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">First Name (Given Name)</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">Middle Initial</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">
                Other Last Names Used (if any)
              </label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 my-4">
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">
                Address(Street Number and Name)
              </label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">Apt. Number</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">City or Town</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">State</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">ZIP Code</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 my-4">
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">Date of Birth (mm/dd/yyyy)</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">U.S. Social Security Number</label>
              <div className="flex justify-center items-center">
                <div className="flex-1">
                  <input className="border border-black w-[30%]" />
                  <input className="border border-black w-[30%]" />
                  <input className="border border-black w-[30%]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <input className="border border-black w-[30%]" />
                  <input className="border border-black w-[30%]" />
                </div>
                <div className="flex-1">
                  <input className="border border-black w-[20%]" />
                  <input className="border border-black w-[20%]" />
                  <input className="border border-black w-[20%]" />
                  <input className="border border-black w-[20%]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold"> Employee&apos;s E-mail Address</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <label className="font-semibold">Employee&apos;s Telephone Number</label>
              <input className="w-full p-1 border-b border-black outline-none" />
            </div>
          </div>
          <p className="font-bold text-md my-2">
            I am aware that federal law provides for imprisonment and/or fines for
            false statements or use of false documents in connection with the
            completion of this form.
          </p>
          <p className="font-bold text-md my-2">
            I attest, under penalty of perjury, that I am (check one of the
            following boxes):
          </p>
  
          <p className="font-semibold text-md my-2">
            <input type="checkbox" /> 1. A citizen of the United States
          </p>
          <p className="font-semibold text-md my-2">
            <input type="checkbox" /> 2. A noncitizen national of the United
            States (See instructions)
          </p>
          <p className="font-semibold text-md my-2">
            <input type="checkbox" /> 2. A noncitizen national of the United
            States (See instructions)
          </p>
          <p className="font-semibold text-md my-2">
            <input type="checkbox" /> 3. A lawful permanent resident (Alien
            Registration Number/USCIS Number){" "}
            <input className="border-b border-black p-1" />
          </p>
          <p className="font-semibold text-md my-2">
            <input type="checkbox" /> 4. An alien authorized to work (expiration
            date, if applicable, mm/dd/yyyy):{" "}
            <input className="border-b border-black p-1" />
          </p>
          <p className="font-medium text-sm ml-5">
            Some aliens may write &apos;N/A&apos; in the expiration date field. (See
            instructions)
          </p>
          <div className="flex justify-center items-start">
            <div className="w-[60%]">
              <p className="font-bold my-2 text-md">
                Aliens authorized to work must provide only one of the following
                document numbers to complete Form I-9: An Alien Registration
                Number/USCIS Number OR Form I-94 Admission Number OR Foreign
                Passport Number.
              </p>
              <p className="text-md font-medium my-2">
                1. Alien Registration Number/USCIS Number :{" "}
                <input className="border-b border-black p-1 outline-none w-full" />
              </p>
              <p className="text-center font-bold">OR</p>
              <p className="text-md font-medium my-2">
                2. Form I-94 Admission Number:
                <input className="border-b border-black p-1 outline-none w-full" />
              </p>
              <p className="text-center font-bold">OR</p>
              <p className="text-md font-medium my-2">
                3. Foreign Passport Number:
                <input className="border-b border-black p-1 outline-none w-full" />
              </p>
              <p className="text-md font-medium my-2">
                Country of Issuance{" "}
                <input className="border-b border-black p-1 outline-none w-full" />
              </p>
            </div>
            <div className="w-[40%] flex justify-center items-center">
              <div className=" w-[70%] h-52 m-auto border border-black">
                <p className="text-center text-sm my-2 font-semibold">
                  QR Code - Section 1 Do Not Write In This Space
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center my-3">
            <div className="w-[60%]">
              <p className="font-bold text-md my-2">
                Signature of Employee{" "}
                <input className="border-b border-black outline-none p-1 w-[70%]" />
              </p>
            </div>
            <div className="w-[40%]">
              <p className="font-bold text-md my-2">
                Today&apos;s Date (mm/dd/yyyy){" "}
                <input className="border-b border-black outline-none p-1 w-[50%]" />
              </p>
            </div>
          </div>
  
          <div>
            <h2 className="text-2xl font-bold">
              Preparer and/or Translator Certification (check one):
            </h2>
            <div className="flex justify-between items-center my-2">
              <p className="text-md font-semibold ">
                <input type="checkbox" /> Preparer and/or Translator Certification
                (check one)
              </p>
              <p className="text-md font-semibold my-2">
                <input type="checkbox" /> A preparer(s) and/or translator(s)
                assisted the employee in completing Section 1.
              </p>
            </div>
            <p className="text-center font-bold text-base">
              (Fields below must be completed and signed when preparers and/or
              translators assist an employee in completing Section 1.)
            </p>
          </div>
  
          <div className="my-2">
            <p className="text-base font-bold">
              I attest, under penalty of perjury, that I have assisted in the
              completion of Section 1 of this form and that to the best of my
              knowledge the information is true and correct.
            </p>
            <div className="flex justify-center items-center gap-5 my-4">
              <div className="flex flex-col justify-start items-start w-[60%] gap-1">
                <label className="text-md font-semibold">
                  Signature of Preparer or Translator
                </label>
                <input className="border-b outline-none w-full  border-black px-2 py-1" />
              </div>
              <div className="flex flex-col justify-start items-start w-[40%] gap-1">
                <label className="text-md font-semibold">
                  Today&apos;s Date (mm/dd/yyyy)
                </label>
                <input className="border-b outline-none w-full  border-black px-2 py-1" />
              </div>
            </div>
  
            <div className="flex justify-center items-center gap-5 my-4">
              <div className="flex flex-col justify-start items-start w-[50%] gap-1">
                <label className="text-md font-semibold">
                  Last Name (Family Name)
                </label>
                <input className="border-b outline-none w-full  border-black px-2 py-1" />
              </div>
              <div className="flex flex-col justify-start items-start w-[50%] gap-1">
                <label className="text-md font-semibold">
                  First Name (Given Name)
                </label>
                <input className="border-b outline-none w-full  border-black px-2 py-1" />
              </div>
            </div>
  
            <div className="grid grid-cols-4 gap-3">
              <div className="flex flex-col justify-start items-start gap-1">
                <label className="text-md font-semibold">
                  Address (Street Number and Name)
                </label>
                <input className="border-b outline-none w-full  border-black px-2 py-1" />
              </div>
              <div className="flex flex-col justify-start items-start gap-1">
                <label className="text-md font-semibold">City or Town</label>
                <input className="border-b outline-none w-full  border-black px-2 py-1" />
              </div>
              <div className="flex flex-col justify-start items-start gap-1">
                <label className="text-md font-semibold">State</label>
                <input className="border-b outline-none w-full  border-black px-2 py-1" />
              </div>
              <div className="flex flex-col justify-start items-start gap-1">
                <label className="text-md font-semibold">Zip Code</label>
                <input className="border-b outline-none w-full  border-black px-2 py-1" />
              </div>
            </div>
  
            <div className="mt-5">
              <h2 className="text-2xl font-bold">
                Section 2. Employer or Authorized Representative Review and
                Verification
              </h2>
              <p className="text-md font-semibold my-2">
                (Employers or their authorized representative must complete and
                sign Section 2 within 3 business days of the employee&apos;s first day
                of employment. You must physically examine one document from List
                A OR a combination of one document from List B and one document
                from List C as listed on the &apos;Lists of Acceptable Documents.&apos;)
              </p>
              <div className="grid grid-cols-4 gap-3 my-3">
                <div>
                  <h3 className="text- font-bold">
                    Employee Info from Section 1
                  </h3>
                </div>
                <div>
                  <label className="text-md font-semibold">
                    Last Name (Family Name)
                  </label>
                  <input className="border-b outline-none w-full  border-black px-2 py-1" />
                </div>
                <div>
                  <label className="text-md font-semibold">
                    First Name (Given Name)
                  </label>
                  <input className="border-b outline-none w-full  border-black px-2 py-1" />
                </div>
                <div>
                  <label className="text-md font-semibold">M.I.</label>
                  <input className="border-b outline-none w-full  border-black px-2 py-1" />
                </div>
                <div>
                  <label className="text-md font-semibold">
                    Citizenship/Immigration Status
                  </label>
                  <input className="border-b outline-none w-full  border-black px-2 py-1" />
                </div>
              </div>
            </div>
  
            <div className="flex justify-center items-center">
              <div className="w-[40%] flex flex-col justify-center items-center">
                <h3 className="font-bold text-lg">List A</h3>
                <p className="text-md font-semibold">
                  Identity and Employment Authorization
                </p>
              </div>
              <span className="text-lg font-bold">OR</span>
              <div className="w-[55%] flex justify-around items-center">
                <div className="flex flex-col justify-center items-center">
                  <h3 className="font-bold text-lg">List B</h3>
                  <p className="text-md font-semibold">Identity</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold"> AND</h4>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3 className="font-bold text-lg">List C</h3>
                  <p className="text-md font-semibold">
                    Employment Authorization
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start bg-gray-400 my-3">
              <div className="w-[40%] bg-white p-2">
                <div className="flex justify-start items-start flex-col my-3 ">
                  <label className="text-md font-semibold">Document Title</label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3">
                  <label className="text-md font-semibold">
                    Issuing Authority
                  </label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3">
                  <label className="text-md font-semibold">Document Number</label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3">
                  <label className="text-md font-semibold">
                    Expiration Date (if any)(mm/dd/yyyy)
                  </label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3 border-t border-black">
                  <label className="text-md font-semibold">Document Title</label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3">
                  <label className="text-md font-semibold">
                    Issuing Authority
                  </label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3">
                  <label className="text-md font-semibold">Document Number</label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3">
                  <label className="text-md font-semibold">
                    Expiration Date (if any)(mm/dd/yyyy)
                  </label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3 border-t border-black">
                  <label className="text-md font-semibold">Document Title</label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3">
                  <label className="text-md font-semibold">
                    Issuing Authority
                  </label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3">
                  <label className="text-md font-semibold">Document Number</label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
                <div className="flex justify-start items-start flex-col my-3">
                  <label className="text-md font-semibold">
                    Expiration Date (if any)(mm/dd/yyyy)
                  </label>
                  <input className="outline-none border-b border-black px-2 py-1 w-full" />
                </div>
              </div>
              <div className="w-[55%] flex justify-between items-start  bg-white p-2">
                <div className="w-[45%]">
                  <div className="flex flex-col justify-start items-start my-2">
                    <label className="text-md font-semibold">
                      Document Title
                    </label>
                    <input className="border-b border-black outline-none px-2 py-1 w-full" />
                  </div>
                  <div className="flex flex-col justify-start items-start my-2">
                    <label className="text-md font-semibold">
                      Issuing Authority
                    </label>
                    <input className="border-b border-black outline-none px-2 py-1 w-full" />
                  </div>
                  <div className="flex flex-col justify-start items-start my-2">
                    <label className="text-md font-semibold">
                      Document Number
                    </label>
                    <input className="border-b border-black outline-none px-2 py-1 w-full" />
                  </div>
                  <div className="flex flex-col justify-start items-start my-2">
                    <label className="text-sm font-semibold">
                      Expiration Date (if any)(mm/dd/yyyy)
                    </label>
                    <input className="border-b border-black outline-none px-2 py-1 w-full" />
                  </div>
                  <div className="mt-[1.68rem]">
                    <textarea
                      className="border border-black w-full"
                      rows="23"
                      placeholder="Additional Information"
                    ></textarea>
                  </div>
                </div>
                <div className="w-[45%]">
                  <div className="flex flex-col justify-start items-start my-2">
                    <label className="text-md font-semibold">
                      Document Title
                    </label>
                    <input className="border-b border-black outline-none px-2 py-1 w-full" />
                  </div>
                  <div className="flex flex-col justify-start items-start my-2">
                    <label className="text-md font-semibold">
                      Issuing Authority
                    </label>
                    <input className="border-b border-black outline-none px-2 py-1 w-full" />
                  </div>
                  <div className="flex flex-col justify-start items-start my-2">
                    <label className="text-md font-semibold">
                      Document Number
                    </label>
                    <input className="border-b border-black outline-none px-2 py-1 w-full" />
                  </div>
                  <div className="flex flex-col justify-start items-start my-2">
                    <label className="text-sm font-semibold">
                      Expiration Date (if any)(mm/dd/yyyy)
                    </label>
                    <input className="border-b border-black outline-none px-2 py-1 w-full" />
                  </div>
  
                  <div className="h-56 mt-[1.68rem] border border-black">
                    <p className="text-sm text-center font-semibold py-2 px-2">
                      QR Code - Sections 2 & 3 Do Not Write In This Space
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-md font-bold">
              Certification: I attest, under penalty of perjury, that (1) I have
              examined the document(s) presented by the above-named employee, (2)
              the above-listed document(s) appear to be genuine and to relate to
              the employee named, and (3) to the best of my knowledge the employee
              is authorized to work in the United States.
            </p>
            <p className="text-md my-3 font-bold">
              The employee&apos;s first day of employment (mm/dd/yyyy):{" "}
              <input className="border-b border-black" /> (See instructions for
              exemptions)
            </p>
  
            <div className="grid grid-cols-3 gap-4 my-5">
              <div className="flex flex-col justify-start items-start gap-3">
                <label className="text-md font-semibold ">
                  Signature of Employer or Authorized Representative
                </label>
                <input className="border-b border-black outline-none w-full" />
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <label className="text-md font-semibold ">
                  Today&apos;s Date (mm/dd/yyyy
                </label>
                <input className="border-b border-black outline-none w-full" />
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <label className="text-md font-semibold ">
                  Title of Employer or Authorized Representative
                </label>
                <input className="border-b border-black outline-none w-full" />
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <label className="text-md font-semibold ">
                  Last Name of Employer or Authorized Representative
                </label>
                <input className="border-b border-black outline-none w-full" />
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <label className="text-md font-semibold ">
                  First Name of Employer or Authorized Representative
                </label>
                <input className="border-b border-black outline-none w-full" />
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <label className="text-md font-semibold ">
                  Employer&apos;s Business or Organization Name
                </label>
                <input className="border-b border-black outline-none w-full" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label className="text-md font-semibold ">
                  Employer&apos;s Business or Organization Address (Street Number and
                  Name)
                </label>
                <input className="border-b border-black outline-none px-2 py-1 w-full" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label className="text-md font-semibold ">City or Town</label>
                <input className="border-b border-black outline-none px-2 py-1 w-full" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label className="text-md font-semibold ">State</label>
                <input className="border-b border-black outline-none px-2 py-1 w-full" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label className="text-md font-semibold ">ZIP Code</label>
                <input className="border-b border-black outline-none px-2 py-1 w-full" />
              </div>
            </div>
  
            <p className="text-lg  font-semibold">
              <strong className="text-2xl">
                Section 3. Reverification and Rehires
              </strong>{" "}
              (To be completed and signed by employer or authorized
              representative.)
            </p>
            <div className="flex justify-center items-center my-2">
              <div className="w-[60%] bg-gray-400 px-2 py-1 border border-black">
                <p className="text-lg font-semibold">
                  A. New Name (if applicable)
                </p>
              </div>
              <div className="w-[40%] bg-gray-400 px-2 py-1 border border-black">
                <p className="text-lg font-semibold">
                  B. Date of Rehire (if applicable)
                </p>
              </div>
            </div>
  
            <div className="flex justify-center items-center gap-4">
              <div className="grid grid-cols-3 gap-4 w-[60%]">
                <div>
                  <label className="text-md font-semibold">
                    Last Name (Family Name)
                  </label>
                  <input className="border-b border-black outline-none px-2 py-1 w-full" />
                </div>
                <div>
                  <label className="text-md font-semibold">
                    First Name (Given Name)
                  </label>
                  <input className="border-b border-black outline-none px-2 py-1 w-full" />
                </div>
                <div>
                  <label className="text-md font-semibold">Middle Initial</label>
                  <input className="border-b border-black outline-none px-2 py-1 w-full" />
                </div>
              </div>
              <div className="w-[40%] flex flex-col justify-start items-start">
                <label className="text-md font-semibold">Date (mm/dd/yyyy)</label>
                <input className="border-b border-black outline-none px-2 py-1 w-full" />
              </div>
            </div>
  
            <div className="my-3 bg-gray-400 px-2 py-1 border border-black">
              <p className="font-bold text-md">
                C. If the employee&apos;s previous grant of employment authorization
                has expired, provide the information for the document or receipt
                that establishes continuing employment authorization in the space
                provided below
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex justify-start items-start flex-col gap-3">
                <label className="text-md font-semibold">Document Title</label>
                <input className="outline-none border-b border-black w-full" />
              </div>
              <div className="flex justify-start items-start flex-col gap-3">
                <label className="text-md font-semibold">Document Number</label>
                <input className="outline-none border-b border-black w-full" />
              </div>
              <div className="flex justify-start items-start flex-col gap-3">
                <label className="text-md font-semibold">
                  Expiration Date (if any) (mm/dd/yyyy)
                </label>
                <input className="outline-none border-b border-black w-full" />
              </div>
            </div>
            <p className="text-lg font-bold my-3">
              I attest, under penalty of perjury, that to the best of my
              knowledge, this employee is authorized to work in the United States,
              and if the employee presented document(s), the document(s) I have
              examined appear to be genuine and to relate to the individual.
            </p>
  
            <div className="grid grid-cols-3 gap-3">
              <div className="flex justify-start items-start flex-col gap-3">
                <label className="text-md font-semibold">
                  Signature of Employer or Authorized Representative
                </label>
                <input className="outline-none border-b border-black w-full" />
              </div>
              <div className="flex justify-start items-start flex-col gap-3">
                <label className="text-md font-semibold">
                  Today&apos;s Date (mm/dd/yyyy)
                </label>
                <input className="outline-none border-b border-black w-full" />
              </div>
              <div className="flex justify-start items-start flex-col gap-3">
                <label className="text-md font-semibold">
                  Name of Employer or Authorized Representative
                </label>
                <input className="outline-none border-b border-black w-full" />
              </div>
            </div>
  
            <h2 className="text-center mt-10 font-bold text-3xl">
              LISTS OF ACCEPTABLE DOCUMENTS
            </h2>
            <h2 className="text-center my-1 font-bold text-2xl">
              All documents must be UNEXPIRED
            </h2>
  
            <p className="text-center text-lg font-semibold">
              Employees may present one selection from List A
            </p>
            <p className="text-center text-lg font-semibold">
              or a combination of one selection from List B and one selection from
              List C.
            </p>
  
            <div className="flex justify-center items-center mt-8">
              {[
                {
                  heading: "LIST A",
                  para: `Documents that Establish Both Identity and Employment
                  Authorization`,
                },
                {
                  heading: "LIST B",
                  para: `Documents that Establish Identity`,
                },
                {
                  heading: "LIST C",
                  para: `Documents that Establish Employment Authorization`,
                },
              ].map((cur, id) => (
                <div key={id} className="flex-1">
                  <h2 className="text-center font-bold text-2xl my-2">
                    {cur.heading}
                  </h2>
                  <p className="font-semibold text-center">{cur.para}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-start mt-8">
              <div className="flex-1 p-2">
                <ul>
                  {listAListItem.map((cur, id) => (
                    <li
                      className="text-md font-semibold my-2 list-decimal"
                      key={id}
                    >
                      {cur}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 p-2">
                <ul>
                  {listBListItem.map((cur, id) => (
                    <li
                      className="text-md font-semibold my-2 list-decimal"
                      key={id}
                    >
                      {cur}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 p-2">
                <ul>
                  {listCListItem.map((cur, id) => (
                    <li
                      className="text-md font-semibold my-2 list-decimal"
                      key={id}
                    >
                      {cur}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="text-2xl text-center my-5 font-bold">
              Examples of many of these documents appear in Part 13 of the
              Handbook for Employers (M-274)
            </h2>
            <h2 className="text-2xl text-center my-5 font-bold">
              Refer to the instructions for more information about acceptable
              receipts
            </h2>
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
            className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white "
          >
            Submit
          </button>
        </div>
        </div>
      </>
    );
  };
  
  export default EmploymentEligibilityVerification;
  