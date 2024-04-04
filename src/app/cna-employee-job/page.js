"use client" 
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {

    const router = useRouter();
    function handleChange(){

    }

    function handleSubmit(next){
      router.push("/staff-miscount");
    }

    const CNAJOb = [
        `- Successful completion of a nurse aide training and competency evaluation program pursuant to 
          the requirements of 42 CFR Part 483, Subpart D, as revised or re-codified, if applicable; or `,
        `- Successful completion of a competency examination for nurse aides recognized by the department; or`,
        `- Successful completion of a health care or personal care credentialing program recognized and approved by the department. 
          OR`,
        `
          - Successful completion or progress in the completion of a 40-hour training program provided by a private home care 
          provider, which addresses at least the following areas: `,
      ];
      
      const CNAJob2 = [
        `Assist with walking`,
        `Promote physical movement`,
        `Help with easy exercise if prescribed by nurse or therapist`,
        `Feed Client`,
        `Observe any changed in client’s condition`,
        `Observing and reporting changes in `,
        `Client’s condition to RN supervisor `,
        `Assisting with self-administration of Medication`,
        `Providing watchful supervision and oversight during absence of the caregiver(s)`,
        `Tub Bathing, washing hair and body, apply lotion to the back and body, take vitals, Observation of skin changes & skin care
          Supervising and reporting changes in client’s condition, Vital Signs, cut toenails (non-diabetic), Bathing, shampoo hair, oral hygiene, 
          and general skin care, assists with dressing or grooming, assists with mobility and ambulation, feed patients and/or provide fluids
          Assists with toileting activities, assists with use of a bedpan, Changing diapers, other Hygiene tasks`,
      ];

      const [CNAStaffDetails, setCNAStaff] = useState({
        userName: '',
        name: '',
        empolyeeSignature: '',
        empolyeeDate: '',
        supervisorSignature: '',
        supervisorDate: '',
      });

  return (
    <>
     <title>Pacific Health System - CNA-Staff-Job</title>
     <link rel="shortcut icon" href="/logo.png" />
   <div className="w-[80%] mx-auto py-4">
     <h2 className="text-3xl font-semibold text-center">
       CNA EMPLOYEE JOB DESCRIPTION
     </h2>
     <p className="text-md font-bold text-center my-5">
       (This is a HANDS-ON, Job Description)
     </p>

     <p className="font-bold text-center text-[16px]">
     &quot;Personal care tasks&quot; means assistance with bathing, toileting,
       grooming, shaving, dental care, dressing, and eating; and may include
       but are not limited to proper nutrition, home management, housekeeping
       tasks, ambulation and transfer, and medically related activities,
       including the taking of vital signs only in conjunction with the above
       tasks.
     </p>

     <p className="font-medium text-base my-5">
       Any CNA hired after the effective date of these rules shall have the
       following training and/or experience :
     </p>

     <ul>
       {CNAJOb.map((cur, id) => (
         <li key={id} className="text-base font-medium my-3">
           {cur}
         </li>
       ))}
     </ul>
     <p className="text-base font-semibold my-3">
       Ambulation and transfer of clients, including positioning;
     </p>
     <p className="text-base font-semibold my-3">
       Assistance with bathing, toileting, grooming, shaving, dental care,
       dressing, and eating; Basic first aid and CPR;
     </p>
     <p className="text-base font-semibold my-3">
       Caring for clients with special conditions and needs so long as the
       services are within the scope of the tasks authorized to be performed
       by demonstration;
     </p>
     <ul>
       <li className="text-base font-medium my-3">Home management;</li>
       <li className="text-base font-medium my-3">
         Home safety and sanitation;
       </li>
       <li className="text-base font-medium my-3">
         Infection control in the home;
       </li>
       <li className="text-base font-medium my-3">
         Medically related activities to include the taking of vital signs;
         and Proper nutrition.
       </li>
     </ul>
     <p className="text-base font-semibold my-3">
       A training program described in rule .09(5)(c)1. (iv) must be
       conducted under the direction of a licensed registered professional
       nurse, or a health care professional with commensurate education and
       experience. Twenty hours of the program must be completed by the
       employee prior to serving clients and the additional twenty hours must
       be completed within six months of the date the training initially
       began. No CNA shall be assigned to perform a task for which training
       has not been completed and competency has not been determined. No PCA
       shall be assigned to care for a client with special conditions unless
       the PCA has received training and has demonstrated competency in
       performing such services related to such special conditions.
     </p>

     <p className="text-base font-semibold my-3">
       This agency provides personal care tasks, and such tasks, shall be
       performed by a qualified CNA under the direction of a supervisor as
       required, in accordance with the client&apos;s service plan. CNA
       Certification is also a component required if acting in the capacity
       of this job description.
     </p>

     <p className="text-base font-semibold my-3">
       1. In addition to following the service plan, a CNA must report on the
       personal care needs of the client, on changes in the client&apos;s
       condition, and on any observed problems that affect the client.
     </p>
     <p className="text-base font-semibold my-3">
       2. Licensed and is also authorized to perform personal care tasks.
     </p>

     <ul className="ml-3">
       <li className="text-base font-medium my-3">
         a. The CNA who delivers the services must have access to and be
         knowledgeable of the client&apos;s service plan at the time services are
         provided
       </li>
       <li className="text-base font-medium my-3">
         b. As personal care needs change or problems emerge, the CNA must
         document changes or need for changes.
       </li>
       <li className="text-base font-medium my-3">
         c. There are other non-medical, non-hand on services that can and
         may be provided; this is not an inclusive list just sample of many
         services one may provide under this job description.
       </li>
       <li className="text-base font-medium my-3">
         e. This may be documented on the task sheet and task to perform may
         be as follows:
       </li>
     </ul>

     <p className="text-base font-semibold my-3">
       <span className="underline font-bold text-md">Personal Care;</span> is
       designed to assist clients with everyday self-care activities that can
       be provided in combination with homemaker/companion services. Personal
       Care is often referred to as Activities of Daily Living or ADLs and
       includes activities such as;
     </p>

     <p className="text-base font-semibold my-3">
       **Blood pressure and vital checks can be done, only if the staff has
       documentation of training
     </p>

     <p className="text-base font-semibold my-3">
       I{" "}
       <input type="text" value={CNAStaffDetails.userName} name="userName" onChange={handleChange} className="border-b border-black px-2 outline-none w-[35%]" />{" "}
       accept, acknowledge and comprehend all responsibilities assigned by
       this agency.
     </p>

     <p className="text-base font-semibold my-3">
       Who having been first duly sworn depose and say that{" "}
       <input type="text" value={CNAStaffDetails.name} name="name" onChange={handleChange} className="border-b border-black px-2 outline-none w-[35%]" />{" "}
       has never been shown to have exhibited any violent or abusive behavior
       or intentional or grossly negligent misconduct.
     </p>

     <p className="text-base font-semibold my-3">
       Also have never been accused or convicted to have been abused,
       neglected, sexually assaulted, exploited, or deprived any person or to
       have subjected any person to serious injury as a result of intentional
       or grossly negligent misconduct as evidence by an oral or written
       statement to this effect obtained at the time of application
     </p>

     <div className="flex justify-start items-center space-x-3">
       <div className="flex flex-col space-y-2 w-[35%]">
         <input
           id="EmployeeSignature"
           type="text"
           name="empolyeeSignature"
           value={CNAStaffDetails.empolyeeSignature}
           onChange={handleChange}
           className="border-b border-black px-2 outline-none w-[%]"
         />
         <label
           className="text-md font-semibold"
           htmlFor="EmployeeSignature"
         >
           Employee Signature
         </label>
       </div>
       <div className="flex flex-col space-y-2 w-[25%]">
         <input
           id="date"
           type="text"
           value={CNAStaffDetails.empolyeeDate}
           name="empolyeeDate"
           onChange={handleChange}
           className="border-b border-black px-2 outline-none w-full"
         />
         <label className="text-md font-semibold" htmlFor="date">
           Date
         </label>
       </div>
     </div>
     <div className="flex justify-start items-center space-x-3 my-4">
       <div className="flex flex-col space-y-2 w-[35%]">
         <input
           id="EmployeeSignature"
           type="text"
           value={CNAStaffDetails.supervisorSignature}
           name="supervisorSignature"
           onChange={handleChange}
           className="border-b border-black px-2 outline-none w-full"
         />
         <label
           className="text-md font-semibold"
           htmlFor="SupervisorSignature "
         >
           Supervisor’s Signature{" "}
         </label>
       </div>
       <div className="flex flex-col space-y-2 w-[25%]">
         <input
           id="date"
           type="text"
           name="supervisorDate"
           value={CNAStaffDetails.supervisorDate}
           onChange={handleChange}
           className="border-b border-black px-2 outline-none w-full"
         />
         <label className="text-md font-semibold" htmlFor="date">
           Date
         </label>
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
  )
}


export default Page;
