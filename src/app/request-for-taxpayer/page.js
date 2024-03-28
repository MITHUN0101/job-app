const RequestForTaxpayer = () => {
    return (
      <>
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-center border-b border-black">
            <div className="w-[20%] ">
              <p className="text-sm font-semibold">
                Form <strong className="text-3xl">W-9</strong>
              </p>
              <p className="text-sm font-semibold">
                (Rev. October 2018) Department of the Treasury Internal Revenue
                Service
              </p>
            </div>
  
            <div className="w-[60%] border-r border-black border-l p-1">
              <h1 className="text-center text-3xl font-bold">
                Request for Taxpayer
              </h1>
              <h2 className="text-xl font-bold text-center p-1">
                Identification Number and Certification
              </h2>
              <h3 className="text-lg font-bold text-center p-1">
                {" "}
                Go to www.irs.gov/FormW9 for instructions and the latest
                information.
              </h3>
            </div>
  
            <div className="w-[20%] ">
              <h3 className="text-center text-md font-bold">
                Give Form to the requester. Do not send to the IRS.
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-5 mt-4">
            <label className="text-lg font-semibold">
              1 Name (as shown on your income tax return). Name is required on
              this line; do not leave this line blank.
            </label>
            <input className="border-b border-black outline-none w-full" />
          </div>
          <div className="flex flex-col justify-start items-start gap-5 mt-4">
            <label className="text-lg font-semibold">
              2 Business name/disregarded entity name, if different from above
            </label>
            <input className="border-b border-black outline-none w-full" />
          </div>
          <div className="flex justify-center items-start gap-4">
            <div className="w-[75%]">
              <p className="text-lg font-semibold my-1">
                3 Check appropriate box for federal tax classification of the
                person whose name is entered on line 1. Check only one of the
                following seven boxes.
              </p>
              <div className="grid grid-cols-4 gap-3">
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" />
                  <label className="font-semibold">
                    Individual/sole proprietor or single-member LLC
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" />
                  <label className="font-semibold">C Corporation</label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" />
                  <label className="font-semibold">S Corporation</label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" />
                  <label className="font-semibold">Partnership</label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" />
                  <label className="font-semibold">Trust/estate</label>
                </div>
              </div>
              <p className="text-base font-semibold my-1">
                <input type="checkbox" /> Limited liability company. Enter the tax
                classification (C=C corporation, S=S corporation, P=Partnership)
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Note : </strong> Check the appropriate box in the line
                above for the tax classification of the single-member owner. Do
                not check LLC if the LLC is classified as a single-member LLC that
                is disregarded from the owner unless the owner of the LLC is
                another LLC that is not disregarded from the owner for U.S.
                federal tax purposes. Otherwise, a single-member LLC that is
                disregarded from the owner should check the appropriate box for
                the tax classification of its owner.
              </p>
              <p className="text-base font-semibold my-1">
                <input type="checkbox" /> Other (see instructions)
              </p>
            </div>
            <div className="w-[25%]">
              <p className="text-lg font-semibold my-1">
                4 Exemptions (codes apply only to certain entities, not
                individuals; see instructions on page 3):
              </p>
              <p className="text-md font-medium my-2">
                Exempt payee code (if any){" "}
                <input className="border-b border-black outline-none w-[30%]" />
              </p>
              <p className="text-md font-medium my-2">
                Exemption from FATCA reporting code (if any){" "}
                <input className="border-b border-black outline-none w-[30%]" />
              </p>
              <p className="text-sm text-center font-medium">
                (Applies to accounts maintained outside the U.S.)
              </p>
            </div>
          </div>
  
          <div className="flex justify-center items-start gap-4 my-3">
            <div className="flex flex-col justify-start items-start gap-4">
              <div>
                <label className="text-md font-bold">
                  5 Address (number, street, and apt. or suite no.) See
                  instructions.
                </label>
                <input className="border-b border-black outline-none w-full" />
              </div>
              <div className="w-full">
                <label className="text-md font-bold">
                  6 City, state, and ZIP code
                </label>
                <input className="border-b border-black outline-none w-full" />
              </div>
            </div>
            <div>
              <label className="text-md font-bold">
                Requester’s name and address (optional)
              </label>
              <input className="border-b border-black outline-none w-full" />
            </div>
          </div>
          <div className="my-3">
            <label className="text-lg font-semibold">
              7 List account number(s) here (optional)
            </label>
            <input className="border-b border-black outline-none w-full" />
          </div>
  
          <div className="flex justify-start items-center gap-5 p-2">
            <span className="font-bold text-2xl bg-black text-white px-1">
              Part 1
            </span>{" "}
            <h2 className="text-3xl font-bold">
              Taxpayer Identification Number (TIN)
            </h2>
          </div>
          <div className="flex justify-center items-start gap-4">
            <div className="w-[60%]">
              <p className="text-base font-semibold">
                Enter your TIN in the appropriate box. The TIN provided must match
                the name given on line 1 to avoid backup withholding. For
                individuals, this is generally your social security number (SSN).
                However, for a resident alien, sole proprietor, or disregarded
                entity, see the instructions for Part I, later. For other
                entities, it is your employer identification number (EIN). If you
                do not have a number, see How to get a TIN, later.
              </p>
              <p className="text-base font-semibold my-2">
                <strong>Note:</strong> If the account is in more than one name,
                see the instructions for line 1. Also see What Name and Number To
                Give the Requester for guidelines on whose number to enter.
              </p>
            </div>
            <div className="w-[40%]">
              <h3 className="font-bold text-md">Social security number</h3>
              <div className="flex justify-center items-center my-3">
                <div className="flex-1 flex justify-center items-center">
                  <input className="w-[30%] border py-3 px-1 border-black" />
                  <input className="w-[30%] border py-3 px-1 border-black" />
                  <input className="w-[30%] border py-3 px-1 border-black" />
                </div>
                <span className="font-extrabold text-lg">-</span>
                <div className="flex-1 flex justify-center items-center">
                  <input className="w-[40%] border py-3 px-1 border-black" />
                  <input className="w-[40%] border py-3 px-1 border-black" />
                </div>
                <span className="font-extrabold text-lg">-</span>
                <div className="flex-1 flex justify-center items-center">
                  <input className="w-[20%] border py-3 px-1 border-black" />
                  <input className="w-[20%] border py-3 px-1 border-black" />
                  <input className="w-[20%] border py-3 px-1 border-black" />
                  <input className="w-[20%] border py-3 px-1 border-black" />
                </div>
              </div>
              <span className="font-bold text-lg">Or</span>
              <h3 className="font-bold text-md my-3">
                Employer identification number
              </h3>
              <div className="flex justify-center items-center my-5">
                <div className="flex-1 flex justify-center items-center">
                  <input className="w-[30%] border py-3 px-1 border-black" />
                  <input className="w-[30%] border py-3 px-1 border-black" />
                  <input className="w-[30%] border py-3 px-1 border-black" />
                </div>
                <span className="font-extrabold text-lg">-</span>
                <div className="flex-1 flex justify-center items-center">
                  <input className="w-[40%] border py-3 px-1 border-black" />
                  <input className="w-[40%] border py-3 px-1 border-black" />
                </div>
                <span className="font-extrabold text-lg">-</span>
                <div className="flex-1 flex justify-center items-center">
                  <input className="w-[20%] border py-3 px-1 border-black" />
                  <input className="w-[20%] border py-3 px-1 border-black" />
                  <input className="w-[20%] border py-3 px-1 border-black" />
                  <input className="w-[20%] border py-3 px-1 border-black" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex justify-start items-center gap-5 p-2">
            <span className="font-bold text-2xl bg-black text-white px-1">
              Part II
            </span>{" "}
            <h2 className="text-3xl font-bold">Certification</h2>
          </div>
          <div>
            <p className="text-md font-semibold">
              Under penalties of perjury, I certify that:
            </p>
            <ul>
              <li className="my-1 font-semibold">
                1. The number shown on this form is my correct taxpayer
                identification number (or I am waiting for a number to be issued
                to me); and
              </li>
              <li className="my-1 font-semibold">
                2. I am not subject to backup withholding because: (a) I am exempt
                from backup withholding, or (b) I have not been notified by the
                Internal Revenue Service (IRS) that I am subject to backup
                withholding as a result of a failure to report all interest or
                dividends, or (c) the IRS has notified me that I am no longer
                subject to backup withholding; and
              </li>
              <li className="my-1 font-semibold">
                3. I am a U.S. citizen or other U.S. person (defined below); and
              </li>
              <li className="my-1 font-semibold">
                4. The FATCA code(s) entered on this form (if any) indicating that
                I am exempt from FATCA reporting is correct.
              </li>
            </ul>
            <p className="text-md font-semibold my-3">
              <strong>Certification instructions.</strong>
              You must cross out item 2 above if you have been notified by the IRS
              that you are currently subject to backup withholding because you
              have failed to report all interest and dividends on your tax return.
              For real estate transactions, item 2 does not apply. For mortgage
              interest paid, acquisition or abandonment of secured property,
              cancellation of debt, contributions to an individual retirement
              arrangement (IRA), and generally, payments other than interest and
              dividends, you are not required to sign the certification, but you
              must provide your correct TIN. See the instructions for Part II,
              later.
            </p>
          </div>
  
          <div>
            <h2 className="text-center font-bold text-3xl">Sign Here</h2>
            <div className="flex justify-center items-center gap-4 my-3">
              <div className="w-[60%] gap-3 flex justify-start items-start flex-col">
                <label className="text-lg font-semibold">
                  Signature of U.S. person
                </label>
                <input className="border-b border-black w-full outline-none px-2 py-1" />
              </div>
              <div className="w-[40%] gap-3 flex justify-start items-start flex-col">
                <label className="text-lg font-semibold">Date</label>
                <input className="border-b border-black w-full outline-none px-2 py-1" />
              </div>
            </div>
          </div>
  
          <div className="my-4 flex justify-start items-start gap-5">
            <div className="flex-1">
              <h2 className="text-4xl font-bold">General Instructions</h2>
              <p className="text-md font-semibold my-2">
                Section references are to the Internal Revenue Code unless
                otherwise noted.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Future developments.</strong> For the latest information
                about developments related to Form W-9 and its instructions, such
                as legislation enacted after they were published, go to
                www.irs.gov/FormW9.
              </p>
              <h2 className="text-3xl font-bold">Purpose of Form</h2>
              <p className="text-md font-semibold my-2">
                An individual or entity (Form W-9 requester) who is required to
                file an information return with the IRS must obtain your correct
                taxpayer identification number (TIN) which may be your social
                security number (SSN), individual taxpayer identification number
                (ITIN), adoption taxpayer identification number (ATIN), or
                employer identification number (EIN), to report on an information
                return the amount paid to you, or other amount reportable on an
                information return. Examples of information returns include, but
                are not limited to, the following.
              </p>
              <ul>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  Form 1099-INT (interest earned or paid)
                </li>
              </ul>
              <p className="text-md font-semibold my-2">
                By signing the filled-out form, you:
              </p>
              <ul>
                <li className="text-md font-semibold my-2 ml-4 list-decimal">
                  Certify that the TIN you are giving is correct (or you are
                  waiting for a number to be issued),
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-decimal">
                  Certify that you are not subject to backup withholding, or
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-decimal">
                  Claim exemption from backup withholding if you are a U.S. exempt
                  payee. If applicable, you are also certifying that as a U.S.
                  person, your allocable share of any partnership income from a
                  U.S. trade or business is not subject to the withholding tax on
                  foreign partners&apos; share of effectively connected income,
                  and
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-decimal">
                  Certify that FATCA code(s) entered on this form (if any)
                  indicating that you are exempt from the FATCA reporting, is
                  correct. See What is FATCA reporting, later, for further
                  information.
                </li>
              </ul>
              <p className="text-md font-semibold my-2">
                <strong>Note:</strong> If you are a U.S. person and a requester
                gives you a form other than Form W-9 to request your TIN, you must
                use the requester’s form if it is substantially similar to this
                Form W-9.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Definition of a U.S. person.</strong> For federal tax
                purposes, you are considered a U.S. person if you are:
              </p>
              <ul>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  An individual who is a U.S. citizen or U.S. resident alien;
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  A partnership, corporation, company, or association created or
                  organized in the United States or under the laws of the United
                  States;
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  An estate (other than a foreign estate); or
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  A domestic trust (as defined in Regulations section 301.7701-7).
                </li>
              </ul>
              <p className="text-md font-semibold my-2">
                <strong>Special rules for partnerships.</strong> Partnerships that
                conduct a trade or business in the United States are generally
                required to pay a withholding tax under section 1446 on any
                foreign partners’ share of effectively connected taxable income
                from such business. Further, in certain cases where a Form W-9 has
                not been received, the rules under section 1446 require a
                partnership to presume that a partner is a foreign person, and pay
                the section 1446 withholding tax. Therefore, if you are a U.S.
                person that is a partner in a partnership conducting a trade or
                business in the United States, provide Form W-9 to the partnership
                to establish your U.S. status and avoid section 1446 withholding
                on your share of partnership income.
              </p>
              <p className="text-md font-semibold my-2">
                In the cases below, the following person must give Form W-9 to the
                partnership for purposes of establishing its U.S. status and
                avoiding withholding on its allocable share of net income from the
                partnership conducting a trade or business in the United States.
              </p>
              <ul>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  In the case of a disregarded entity with a U.S. owner, the U.S.
                  owner of the disregarded entity and not the entity;
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  In the case of a grantor trust with a U.S. grantor or other U.S.
                  owner, generally, the U.S. grantor or other U.S. owner of the
                  grantor trust and not the trust; and
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  In the case of a U.S. trust (other than a grantor trust), the
                  U.S. trust (other than a grantor trust) and not the
                  beneficiaries of the trust.
                </li>
              </ul>
              <p className="text-md font-semibold my-2">
                <strong>Foreign person.</strong> If you are a foreign person or
                the U.S. branch of a foreign bank that has elected to be treated
                as a U.S. person, do not use Form W-9. Instead, use the
                appropriate Form W-8 or Form 8233 (see Pub. 515, Withholding of
                Tax on Nonresident Aliens and Foreign Entities).
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Nonresident alien who becomes a resident alien.</strong>
                Generally, only a nonresident alien individual may use the terms
                of a tax treaty to reduce or eliminate U.S. tax on certain types
                of income. However, most tax treaties contain a provision known as
                a “saving clause.” Exceptions specified in the saving clause may
                permit an exemption from tax to continue for certain types of
                income even after the payee has otherwise become a U.S. resident
                alien for tax purposes.
              </p>
              <p className="text-md font-semibold my-2">
                If you are a U.S. resident alien who is relying on an exception
                contained in the saving clause of a tax treaty to claim an
                exemption from U.S. tax on certain types of income, you must
                attach a statement to Form W-9 that specifies the following five
                items.
              </p>
              <ul>
                <li className="list-decimal text-md font-semibold my-2 ml-4">
                  The treaty country. Generally, this must be the same treaty
                  under which you claimed exemption from tax as a nonresident
                  alien.
                </li>
                <li className="list-decimal text-md font-semibold my-2 ml-4">
                  . The treaty article addressing the income.
                </li>
                <li className="list-decimal text-md font-semibold my-2 ml-4">
                  . The article number (or location) in the tax treaty that
                  contains the saving clause and its exceptions.
                </li>
                <li className="list-decimal text-md font-semibold my-2 ml-4">
                  The type and amount of income that qualifies for the exemption
                  from tax.
                </li>
                <li className="list-decimal text-md font-semibold my-2 ml-4">
                  Sufficient facts to justify the exemption from tax under the
                  terms of the treaty article.
                </li>
              </ul>
              <p className="text-md font-semibold my-2">
                <strong>Criminal penalty for falsifying information.</strong>{" "}
                Willfully falsifying certifications or affirmations may subject
                you to criminal penalties including fines and/or imprisonment.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Misuse of TINs.</strong> If the requester discloses or
                uses TINs in violation of federal law, the requester may be
                subject to civil and criminal penalties.
              </p>
              <h2 className="text-3xl font-bold my-3">Specific Instructions</h2>
              <p className="text-xl font-bold my-2">Line 1</p>
              <p className="text-md font-semibold my-2">
                You must enter one of the following on this line; do not leave
                this line blank. The name should match the name on your tax
                return.
              </p>
              <p className="text-md font-semibold my-2">
                If this Form W-9 is for a joint account (other than an account
                maintained by a foreign financial institution (FFI)), list first,
                and then circle, the name of the person or entity whose number you
                entered in Part I of Form W-9. If you are providing Form W-9 to an
                FFI to document a joint account, each holder of the account that
                is a U.S. person must provide a Form W-9.
              </p>
              <p className="text-md font-semibold my-2">
                a. <strong>Individual.</strong> Generally, enter the name shown on
                your tax return. If you have changed your last name without
                informing the Social Security Administration (SSA) of the name
                change, enter your first name, the last name as shown on your
                social security card, and your new last name.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Note: ITIN applicant: </strong> Enter your individual name
                as it was entered on your Form W-7 application, line 1a. This
                should also be the same as the name you entered on the Form
                1040/1040A/1040EZ you filed with your application.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>b. Sole proprietor or single-member LLC. </strong>Enter
                your individual name as shown on your 1040/1040A/1040EZ on line 1.
                You may enter your business, trade, or “doing business as” (DBA)
                name on line 2.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>
                  c. Partnership, LLC that is not a single-member LLC, C
                  corporation, or S corporation.
                </strong>
                Enter the entity&apos;s name as shown on the entity&apos;s tax
                return on line 1 and any business, trade, or DBA name on line 2.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>d. Other entities.</strong>
                Enter your name as shown on required U.S. federal tax documents on
                line 1. This name should match the name shown on the charter or
                other legal document creating the entity. You may enter any
                business, trade, or DBA name on line 2.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>e. Disregarded entity.</strong>
                For U.S. federal tax purposes, an entity that is disregarded as an
                entity separate from its owner is treated as a “disregarded
                entity.” See Regulations section 301.7701-2(c)(2)(iii). Enter the
                owner&apos;s name on line 1. The name of the entity entered on
                line 1 should never be a disregarded entity. The name on line 1
                should be the name shown on the income tax return on which the
                income should be reported. For example, if a foreign LLC that is
                treated as a disregarded entity for U.S. federal tax purposes has
                a single owner that is a U.S. person, the U.S. owner&apos;s name
                is required to be provided on line 1. If the direct owner of the
                entity is also a disregarded entity, enter the first owner that is
                not disregarded for federal tax purposes. Enter the disregarded
                entity&apos;s name on line 2, “Business name/disregarded entity
                name.” If the owner of the disregarded entity is a foreign person,
                the owner must complete an appropriate Form W-8 instead of a Form
                W-9. This is the case even if the foreign person has a U.S. TIN.
              </p>
              <p className="text-xl font-bold my-3">Line 2</p>
              <p className="text-md font-semibold my-2">
                If you have a business name, trade name, DBA name, or disregarded
                entity name, you may enter it on line 2.
              </p>
              <p className="text-xl font-bold my-3">Line 3</p>
              <p className="text-md font-semibold my-2">
                Check the appropriate box on line 3 for the U.S. federal tax
                classification of the person whose name is entered on line 1.
                Check only one box on line 3.
              </p>
              <p className="text-md font-semibold my-2">
                The following chart shows types of payments that may be exempt
                from backup withholding. The chart applies to the exempt payees
                listed above, 1 through 13.
              </p>
              <div className="flex justify-start items-start">
                <div className="flex-1">
                  <h2 className="text-lg font-bold">
                    IF the payment is for . . .
                  </h2>
                  <p className="text-md font-semibold my-2">
                    Interest and dividend payments
                  </p>
                  <p className="text-md font-semibold my-2">
                    Broker transactions
                  </p>
                  <p className="text-md font-semibold mt-32">
                    Barter exchange transactions and patronage dividends
                  </p>
                  <p className="text-md font-semibold my-2">
                    Payments over $600 required to be reported and direct sales
                    over $5,0001
                  </p>
                  <p className="text-md font-semibold my-2">
                    Payments made in settlement of payment card or third party
                    network transactions
                  </p>
                </div>
  
                <div className="flex-1">
                  <h2 className="text-lg font-bold">
                    THEN the payment is exempt for . .
                  </h2>
                  <p className="text-md font-semibold my-2">
                    All exempt payees except for 7
                  </p>
                  <p className="text-md font-semibold my-2">
                    Exempt payees 1 through 4 and 6 through 11 and all C
                    corporations. S corporations must not enter an exempt payee
                    code because they are exempt only for sales of noncovered
                    securities acquired prior to 2012.
                  </p>
                  <p className="text-md font-semibold my-2">
                    Exempt payees 1 through 4.
                  </p>
                  <p className="text-md font-semibold mt-7">
                    Generally, exempt payees 1 through 52
                  </p>
                  <p className="text-md font-semibold mt-9">
                    Exempt payees 1 through 4
                  </p>
                </div>
              </div>
              <p className="text-md font-semibold my-2">
                See Form 1099-MISC, Miscellaneous Income, and its instructions.
              </p>
              <p className="text-md font-semibold my-2">
                However, the following payments made to a corporation and
                reportable on Form 1099-MISC are not exempt from backup
                withholding: medical and health care payments, attorneys’ fees,
                gross proceeds paid to an attorney reportable under section
                6045(f), and payments for services paid by a federal executive
                agency.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Exemption from FATCA reporting code.</strong>
                The following codes identify payees that are exempt from reporting
                under FATCA. These codes apply to persons submitting this form for
                accounts maintained outside of the United States by certain
                foreign financial institutions. Therefore, if you are only
                submitting this form for an account you hold in the United States,
                you may leave this field blank. Consult with the person requesting
                this form if you are uncertain if the financial institution is
                subject to these requirements. A requester may indicate that a
                code is not required by providing you with a Form W-9 with “Not
                Applicable” (or any similar indication) written or printed on the
                line for a FATCA exemption code.
              </p>
              <p className="text-md font-semibold my-2">
                A—An organization exempt from tax under section 501(a) or any
                individual retirement plan as defined in section 7701(a)(37)
              </p>
              <p className="text-md font-semibold my-2">
                C—A state, the District of Columbia, a U.S. commonwealth or
                possession, or any of their political subdivisions or
                instrumentalities
              </p>
              <p className="text-md font-semibold my-2">
                D—A corporation the stock of which is regularly traded on one or
                more established securities markets, as described in Regulations
                section 1.1472-1(c)(1)(i)
              </p>
              <p className="text-md font-semibold my-2">
                E—A corporation that is a member of the same expanded affiliated
                group as a corporation described in Regulations section
                1.1472-1(c)(1)(i)
              </p>
              <p className="text-md font-semibold my-2">
                F—A dealer in securities, commodities, or derivative financial
                instruments (including notional principal contracts, futures,
                forwards, and options) that is registered as such under the laws
                of the United States or any state
              </p>
              <p className="text-md font-semibold my-2">
                G—A real estate investment trust
              </p>
              <p className="text-md font-semibold my-2">
                H—A regulated investment company as defined in section 851 or an
                entity registered at all times during the tax year under the
                Investment Company Act of 1940
              </p>
              <p className="text-md font-semibold my-2">
                I—A common trust fund as defined in section 584(a)
              </p>
              <p className="text-md font-semibold my-2">
                J—A bank as defined in section 581
              </p>
              <p className="text-md font-semibold my-2">K—A broker</p>
              <p className="text-md font-semibold my-2">
                L—A trust exempt from tax under section 664 or described in
                section 4947(a)(1)
              </p>
              <p className="text-lg font-bold my-2">
                1. Interest, dividend, and barter exchange accounts opened before
                1984 and broker accounts considered active during 1983.
              </p>
              <p className="text-md font-semibold my-2">
                You must give your correct TIN, but you do not have to sign the
                certification.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>
                  2. Interest, dividend, broker, and barter exchange accounts
                  opened after 1983 and broker accounts considered inactive during
                  1983.
                </strong>
                You must sign the certification or backup withholding will apply.
                If you are subject to backup withholding and you are merely
                providing your correct TIN to the requester, you must cross out
                item 2 in the certification before signing the form.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>3. Real estate transactions.</strong>
                You must sign the certification. You may cross out item 2 of the
                certification.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>4. Other payments. </strong>
                You must give your correct TIN, but you do not have to sign the
                certification unless you have been notified that you have
                previously given an incorrect TIN. “Other payments” include
                payments made in the course of the requester’s trade or business
                for rents, royalties, goods (other than bills for merchandise),
                medical and health care services (including payments to
                corporations), payments to a nonemployee for services, payments
                made in settlement of payment card and third party network
                transactions, payments to certain fishing boat crew members and
                fishermen, and gross proceeds paid to attorneys (including
                payments to corporations).
              </p>
              <p className="text-md font-semibold my-2">
                <strong>
                  5. Mortgage interest paid by you, acquisition or abandonment of
                  secured property, cancellation of debt, qualified tuition
                  program payments (under section 529), ABLE accounts (under
                  section 529A), IRA, Coverdell ESA, Archer MSA or HSA
                  contributions or distributions, and pension distributions.
                </strong>{" "}
                You must give your correct TIN, but you do not have to sign the
                certification.
              </p>
              <h2 className="text-2xl font-bold my-2">
                What Name and Number To Give the Requester
              </h2>
              <div className="flex justify-start items-start">
                <div className="flex-1 border-r border-black p-2">
                  <h2 className="text-lg font-bold">For this type of account:</h2>
                  <ul>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Individual
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Two or more individuals (joint account) other than an
                      account maintained by an FFI
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Two or more U.S. persons (joint account maintained by an FFI
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Custodial account of a minor (Uniform Gift to Minors Act)
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      a. The usual revocable savings trust (grantor is also
                      trustee) b. So-called trust account that is not a legal or
                      valid trust under state law
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Sole proprietorship or disregarded entity owned by an
                      individual
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Grantor trust filing under Optional Form 1099 Filing Method
                      1 (see Regulations section 1.671-4(b)(2)(i) (A))
                    </li>
                  </ul>
                </div>
                <div className="flex-1 p-2">
                  <h2 className="text-lg font-bold">Give name and SSN of:</h2>
                  <ul>
                    <li className="text-md font-semibold my-1 ">
                      The individual
                    </li>
                    <li className="text-md font-semibold my-1">
                      The actual owner of the account or, if combined funds, the
                      first individual on the account1
                    </li>
                    <li className="text-md font-semibold my-1">
                      Each holder of the account
                    </li>
                    <li className="text-md font-semibold my-1">The minor2</li>
                    <li className="text-md font-semibold my-1">
                      The grantor-trustee1
                    </li>
                    <li className="text-md font-semibold my-1">
                      The actual owner1
                    </li>
                    <li className="text-md font-semibold my-1">The owner</li>
                    <li className="text-md font-semibold my-1">The grantor*</li>
                  </ul>
                </div>
              </div>
  
              <div className="flex justify-start items-start my-3">
                <div className="flex-1 border-r border-black p-2">
                  <h2 className="text-lg font-bold">For this type of account:</h2>
                  <ul>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Disregarded entity not owned by an individual
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      A valid trust, estate, or pension trust
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Corporation or LLC electing corporate status on Form 8832 or
                      Form 2553
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Association, club, religious, charitable, educational, or
                      other taxexempt organization
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      Partnership or multi-member LLC
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      A broker or registered nominee
                    </li>
                  </ul>
                </div>
                <div className="flex-1 p-2">
                  <h2 className="text-lg font-bold">Give name and EIN of:</h2>
                  <ul>
                    <li className="text-md font-semibold my-1 ">The owner</li>
                    <li className="text-md font-semibold my-1">Legal entity4</li>
                    <li className="text-md font-semibold my-1">
                      The corporation
                    </li>
                    <li className="text-md font-semibold my-1">The minor2</li>
                    <li className="text-md font-semibold my-1">
                      The organization
                    </li>
                    <li className="text-md font-semibold my-1">
                      The actual owner1
                    </li>
                    <li className="text-md font-semibold my-1">
                      The partnership
                    </li>
                    <li className="text-md font-semibold my-1">
                      The broker or nominee
                    </li>
                  </ul>
                </div>
              </div>
  
              <p className="text-md font-semibold my-2">
                The IRS does not initiate contacts with taxpayers via emails.
                Also, the IRS does not request personal detailed information
                through email or ask taxpayers for the PIN numbers, passwords, or
                similar secret access information for their credit card, bank, or
                other financial accounts.
              </p>
              <p className="text-md font-semibold my-2">
                The IRS does not initiate contacts with taxpayers via emails.
                Also, the IRS does not request personal detailed information
                through email or ask taxpayers for the PIN numbers, passwords, or
                similar secret access information for their credit card, bank, or
                other financial accounts.
              </p>
              <p className="text-md font-semibold my-2status">
                Visit www.irs.gov/IdentityTheft to learn more about identity theft
                and how to reduce your risk.
              </p>
            </div>
            <div className="flex-1">
              <ul>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  Form 1099-DIV (dividends, including those from stocks or mutual
                  funds)
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  Form 1099-MISC (various types of income, prizes, awards, or
                  gross proceeds)
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  Form 1099-B (stock or mutual fund sales and certain other
                  transactions by brokers)
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  Form 1099-S (proceeds from real estate transactions)
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  Form 1099-K (merchant card and third party network transactions)
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  Form 1098 (home mortgage interest), 1098-E (student loan
                  interest), 1098-T (tuition)
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  Form 1099-C (canceled debt)
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-disc">
                  Form 1099-A (acquisition or abandonment of secured property)
                </li>
              </ul>
              <p className="text-md font-semibold my-2">
                Use Form W-9 only if you are a U.S. person (including a resident
                alien), to provide your correct TIN.
              </p>
              <p className="text-md font-semibold my-2">
                If you do not return Form W-9 to the requester with a TIN, you
                might be subject to backup withholding. See What is backup
                withholding, later.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Example.</strong> Article 20 of the U.S.-China income tax
                treaty allows an exemption from tax for scholarship income
                received by a Chinese student temporarily present in the United
                States. Under U.S. law, this student will become a resident alien
                for tax purposes if his or her stay in the United States exceeds 5
                calendar years. However, paragraph 2 of the first Protocol to the
                U.S.-China treaty (dated April 30, 1984) allows the provisions of
                Article 20 to continue to apply even after the Chinese student
                becomes a resident alien of the United States. A Chinese student
                who qualifies for this exception (under paragraph 2 of the first
                protocol) and is relying on this exception to claim an exemption
                from tax on his or her scholarship or fellowship income would
                attach to Form W-9 a statement that includes the information
                described above to support that exemption.
              </p>
              <p className="text-md font-semibold my-2">
                If you are a nonresident alien or a foreign entity, give the
                requester the appropriate completed Form W-8 or Form 8233.
              </p>
              <h2 className="text-3xl font-bold">Backup Withholding</h2>
              <p className="text-md font-semibold my-2">
                <strong>What is backup withholding?</strong> Persons making
                certain payments to you must under certain conditions withhold and
                pay to the IRS 24% of such payments. This is called “backup
                withholding.” Payments that may be subject to backup withholding
                include interest, tax-exempt interest, dividends, broker and
                barter exchange transactions, rents, royalties, nonemployee pay,
                payments made in settlement of payment card and third party
                network transactions, and certain payments from fishing boat
                operators. Real estate transactions are not subject to backup
                withholding.
              </p>
              <p className="text-md font-semibold my-2">
                You will not be subject to backup withholding on payments you
                receive if you give the requester your correct TIN, make the
                proper certifications, and report all your taxable interest and
                dividends on your tax return.
              </p>
              <p className="text-md font-semibold my-2">
                Payments you receive will be subject to backup withholding if:
              </p>
              <ul>
                <li className="text-md font-semibold my-2 ml-4 list-decimal">
                  You do not furnish your TIN to the requester,
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-decimal">
                  You do not certify your TIN when required (see the instructions
                  for Part II for details),
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-decimal">
                  The IRS tells the requester that you furnished an incorrect TIN,
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-decimal">
                  The IRS tells you that you are subject to backup withholding
                  because you did not report all your interest and dividends on
                  your tax return (for reportable interest and dividends only), or
                </li>
                <li className="text-md font-semibold my-2 ml-4 list-decimal">
                  You do not certify to the requester that you are not subject to
                  backup withholding under 4 above (for reportable interest and
                  dividend accounts opened after 1983 only).
                </li>
              </ul>
              <p className="text-md font-semibold my-2">
                Certain payees and payments are exempt from backup withholding.
                See Exempt payee code, later, and the separate Instructions for
                the Requester of Form W-9 for more information.
              </p>
              <p className="text-md font-semibold my-2">
                Also see Special rules for partnerships, earlier.
              </p>
              <h2 className="text-3xl font-bold my-2">
                What is FATCA Reporting?
              </h2>
              <p className="text-md font-semibold my-2">
                The Foreign Account Tax Compliance Act (FATCA) requires a
                participating foreign financial institution to report all United
                States account holders that are specified United States persons.
                Certain payees are exempt from FATCA reporting. See Exemption from
                FATCA reporting code, later, and the Instructions for the
                Requester of Form W-9 for more information.
              </p>
              <h2 className="text-3xl font-bold my-2">
                Updating Your Information
              </h2>
              <p className="text-md font-semibold my-2">
                You must provide updated information to any person to whom you
                claimed to be an exempt payee if you are no longer an exempt payee
                and anticipate receiving reportable payments in the future from
                this person. For example, you may need to provide updated
                information if you are a C corporation that elects to be an S
                corporation, or if you no longer are tax exempt. In addition, you
                must furnish a new Form W-9 if the name or TIN changes for the
                account; for example, if the grantor of a grantor trust dies.
              </p>
              <h2 className="text-3xl font-bold my-2">Penalties</h2>
              <p className="text-md font-semibold my-2">
                <strong>Failure to furnish TIN.</strong> If you fail to furnish
                your correct TIN to a requester, you are subject to a penalty of
                $50 for each such failure unless your failure is due to reasonable
                cause and not to willful neglect.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>
                  Civil penalty for false information with respect to withholding.
                </strong>{" "}
                If you make a false statement with no reasonable basis that
                results in no backup withholding, you are subject to a $500
                penalty.
              </p>
  
              <div className="flex justify-start items-start">
                <div className="flex-1 p-1">
                  <h2 className="text-xl font-bold">
                    IF the entity/person on line 1 is a(n) . . .
                  </h2>
                  <ul>
                    <li className="text-lg my-2 font-semibold list-disc">
                      Corporation
                    </li>
                    <li className="text-lg my-2 font-semibold list-disc">
                      Individual
                    </li>
                    <li className="text-lg my-2 font-semibold list-disc">
                      Single-member limited liability company (LLC) owned by an
                      individual and disregarded for U.S. federal tax purposes.
                    </li>
                    <li className="text-lg my-2 font-semibold list-disc">
                      LLC treated as a partnership for U.S. federal tax purposes,
                    </li>
                    <li className="text-lg my-2 font-semibold list-disc">
                      LLC that has filed Form 8832 or 2553 to be taxed as a
                      corporation, or,
                    </li>
                    <li className="text-lg my-2 font-semibold list-disc">
                      LLC that is disregarded as an entity separate from its owner
                      but the owner is another LLC that is not disregarded for
                      U.S. federal tax purposes.
                    </li>
                    <li className="text-lg my-2 font-semibold list-disc">
                      Partnership
                    </li>
                    <li className="text-lg my-2 font-semibold list-disc">
                      Trust/estate
                    </li>
                  </ul>
                </div>
                <div className="flex-1 p-1">
                  <h2 className="text-xl font-bold">
                    THEN check the box for . . .
                  </h2>
                  <p className="text-lg my-2 font-semibold">
                    ividual/sole proprietor or single-member LLC
                  </p>
                  <p className="text-lg my-36 font-semibold">
                    Limited liability company and enter the appropriate tax
                    classification. (P= Partnership; C= C corporation; or S= S
                    corporation)
                  </p>
                  <p className="text-lg mt-52 font-semibold">Partnership</p>
                  <p className="text-lg my-2 font-semibold">Trust/estate</p>
                </div>
              </div>
              <p className="text-2xl font-bold">Line 4, Exemptions</p>
              <p className="text-lg my-2 font-semibold">
                If you are exempt from backup withholding and/or FATCA reporting,
                enter in the appropriate space on line 4 any code(s) that may
                apply to you.
              </p>
              <p className="text-xl font-bold">Exempt payee code.</p>
              <ul className="ml-3">
                <li className="text-md font-semibold list-disc">
                  Generally, individuals (including sole proprietors) are not
                  exempt from backup withholding.
                </li>
                <li className="text-md font-semibold list-disc">
                  Except as provided below, corporations are exempt from backup
                  withholding for certain payments, including interest and
                  dividends.
                </li>
                <li className="text-md font-semibold list-disc">
                  Corporations are not exempt from backup withholding for payments
                  made in settlement of payment card or third party network
                  transactions.
                </li>
                <li className="text-md font-semibold list-disc">
                  Corporations are not exempt from backup withholding with respect
                  to attorneys’ fees or gross proceeds paid to attorneys, and
                  corporations that provide medical or health care services are
                  not exempt with respect to payments reportable on Form
                  1099-MISC.
                </li>
              </ul>
              <p className="text-md font-semibold my-2">
                The following codes identify payees that are exempt from backup
                withholding. Enter the appropriate code in the space in line 4.
              </p>
              <p className="text-md font-semibold my-2">
                1—An organization exempt from tax under section 501(a), any IRA,
                or a custodial account under section 403(b)(7) if the account
                satisfies the requirements of section 401(f)(2)
              </p>
              <p className="text-md font-semibold my-2">
                2—The United States or any of its agencies or instrumentalities
              </p>
              <p className="text-md font-semibold my-2">
                3—A state, the District of Columbia, a U.S. commonwealth or
                possession, or any of their political subdivisions or
                instrumentalities
              </p>
              <p className="text-md font-semibold my-2">
                4—A foreign government or any of its political subdivisions,
                agencies, or instrumentalities
              </p>
              <p className="text-md font-semibold my-2">5—A corporation</p>
              <p className="text-md font-semibold my-2">
                6—A dealer in securities or commodities required to register in
                the United States, the District of Columbia, or a U.S.
                commonwealth or possession
              </p>
              <p className="text-md font-semibold my-2">
                7—A futures commission merchant registered with the Commodity
                Futures Trading Commission
              </p>
              <p className="text-md font-semibold my-2">
                8—A real estate investment trust
              </p>
              <p className="text-md font-semibold my-2">
                9—An entity registered at all times during the tax year under the
                Investment Company Act of 1940
              </p>
              <p className="text-md font-semibold my-2">
                10—A common trust fund operated by a bank under section 584(a)
              </p>
              <p className="text-md font-semibold my-2">
                11—A financial institution
              </p>
              <p className="text-md font-semibold my-2">
                12—A middleman known in the investment community as a nominee or
                custodian
              </p>
              <p className="text-md font-semibold my-2">
                13—A trust exempt from tax under section 664 or described in
                section 4947
              </p>
              <p className="text-md font-semibold my-2">
                M—A tax exempt trust under a section 403(b) plan or section 457(g)
                plan
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Note:</strong> You may wish to consult with the financial
                institution requesting this form to determine whether the FATCA
                code and/or exempt payee code should be completed.
              </p>
              <p className="text-2xl font-bold my-2">Line 5</p>
              <p className="text-md font-semibold my-2">
                Enter your address (number, street, and apartment or suite
                number). This is where the requester of this Form W-9 will mail
                your information returns. If this address differs from the one the
                requester already has on file, write NEW at the top. If a new
                address is provided, there is still a chance the old address will
                be used until the payor changes your address in their records.
              </p>
              <p className="text-2xl font-bold my-2">Line 6</p>
              <p className="text-md font-semibold my-2">
                Enter your city, state, and ZIP code
              </p>
              <p className="text-2xl font-bold my-2">
                Part I. Taxpayer Identification Number (TIN)
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Enter your TIN in the appropriate box.</strong>
                If you are a resident alien and you do not have and are not
                eligible to get an SSN, your TIN is your IRS individual taxpayer
                identification number (ITIN). Enter it in the social security
                number box. If you do not have an ITIN, see How to get a TIN
                below.
              </p>
              <p className="text-md font-semibold my-2">
                If you are a sole proprietor and you have an EIN, you may enter
                either your SSN or EIN.
              </p>
              <p className="text-md font-semibold my-2">
                If you are a single-member LLC that is disregarded as an entity
                separate from its owner, enter the owner’s SSN (or EIN, if the
                owner has one). Do not enter the disregarded entity’s EIN. If the
                LLC is classified as a corporation or partnership, enter the
                entity’s EIN.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Note:</strong> See What Name and Number To Give the
                Requester, later, for further clarification of name and TIN
                combinations.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>How to get a TIN.</strong>
                If you do not have a TIN, apply for one immediately. To apply for
                an SSN, get Form SS-5, Application for a Social Security Card,
                from your local SSA office or get this form online at www.SSA.gov.
                You may also get this form by calling 1-800-772-1213. Use Form
                W-7, Application for IRS Individual Taxpayer Identification
                Number, to apply for an ITIN, or Form SS-4, Application for
                Employer Identification Number, to apply for an EIN. You can apply
                for an EIN online by accessing the IRS website at
                www.irs.gov/Businesses and clicking on Employer Identification
                Number (EIN) under Starting a Business. Go to www.irs.gov/Forms to
                view, download, or print Form W-7 and/or Form SS-4. Or, you can go
                to www.irs.gov/OrderForms to place an order and have Form W-7
                and/or SS-4 mailed to you within 10 business days.
              </p>
              <p className="text-md font-semibold my-2">
                If you are asked to complete Form W-9 but do not have a TIN, apply
                for a TIN and write “Applied For” in the space for the TIN, sign
                and date the form, and give it to the requester. For interest and
                dividend payments, and certain payments made with respect to
                readily tradable instruments, generally you will have 60 days to
                get a TIN and give it to the requester before you are subject to
                backup withholding on payments. The 60-day rule does not apply to
                other types of payments. You will be subject to backup withholding
                on all such payments until you provide your TIN to the requester.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Note:</strong> Entering “Applied For” means that you have
                already applied for a TIN or that you intend to apply for one
                soon.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Caution:</strong>A disregarded U.S. entity that has a
                foreign owner must use the appropriate Form W-8.
              </p>
              <p className="text-2xl font-bold">Part II. Certification</p>
              <p className="text-md font-semibold my-2">
                To establish to the withholding agent that you are a U.S. person,
                or resident alien, sign Form W-9. You may be requested to sign by
                the withholding agent even if item 1, 4, or 5 below indicates
                otherwise.
              </p>
              <p className="text-md font-semibold my-2">
                For a joint account, only the person whose TIN is shown in Part I
                should sign (when required). In the case of a disregarded entity,
                the person identified on line 1 must sign. Exempt payees, see
                Exempt payee code, earlier.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Signature requirements.</strong> Complete the
                certification as indicated in items 1 through 5 below.
              </p>
              <div className="flex justify-start items-start my-3">
                <div className="flex-1 border-r border-black p-2">
                  <h2 className="text-lg font-bold">For this type of account:</h2>
                  <ul>
                    <li className="text-md font-semibold my-1 ">
                      14 Account with the Department of Agriculture in the name of
                      a public entity (such as a state or local government, school
                      district, or prison) that receives agricultural program
                      payments
                    </li>
                    <li className="text-md font-semibold my-1 list-decimal">
                      15. Grantor trust filing under the Form 1041 Filing Method
                      or the Optional Form 1099 Filing Method 2 (see Regulations
                      section 1.671-4(b)(2)(i)(B))
                    </li>
                  </ul>
                </div>
                <div className="flex-1 p-2">
                  <h2 className="text-lg font-bold">Give name and EIN of:</h2>
                  <ul>
                    <li className="text-md font-semibold my-1 ">
                      The public entity
                    </li>
                    <li className="text-md font-semibold mt-32">The trust</li>
                  </ul>
                </div>
              </div>
              <p className="text-md font-semibold my-2">
                List first and circle the name of the person whose number you
                furnish. If only one person on a joint account has an SSN, that
                person’s number must be furnished.
              </p>
              <p className="text-md font-semibold my-2">
                Circle the minor’s name and furnish the minor’s SSN.
              </p>
              <p className="text-md font-semibold my-2">
                You must show your individual name and you may also enter your
                business or DBA name on the “Business name/disregarded entity”
                name line. You may use either your SSN or EIN (if you have one),
                but the IRS encourages you to use your SSN.
              </p>
              <p className="text-md font-semibold my-2">
                List first and circle the name of the trust, estate, or pension
                trust. (Do not furnish the TIN of the personal representative or
                trustee unless the legal entity itself is not designated in the
                account title.) Also see Special rules for partnerships, earlier.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>*Note:</strong> The grantor also must provide a Form W-9
                to trustee of trust.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>Note:</strong>
                If no name is circled when more than one name is listed, the
                number will be considered to be that of the first name listed.
              </p>
              <h2 className="text-2xl font-bold">
                Secure Your Tax Records From Identity Theft
              </h2>
              <p className="text-md font-semibold my-2">
                Identity theft occurs when someone uses your personal information
                such as your name, SSN, or other identifying information, without
                your permission, to commit fraud or other crimes. An identity
                thief may use your SSN to get a job or may file a tax return using
                your SSN to receive a refund.
              </p>
              <p className="text-md font-bold my-2">To reduce your risk:</p>
              <ul className="ml-8">
                <li className="text-md font-semibold my-1 list-disc">
                  Protect your SSN,
                </li>
                <li className="text-md font-semibold my-1 list-disc">
                  Ensure your employer is protecting your SSN, and
                </li>
                <li className="text-md font-semibold my-1 list-disc">
                  Ensure your employer is protecting your SSN, and
                </li>
                <li className="text-md font-semibold my-1 list-disc">
                  Be careful when choosing a tax preparer.
                </li>
              </ul>
              <p className="text-md font-semibold my-2">
                If your tax records are affected by identity theft and you receive
                a notice from the IRS, respond right away to the name and phone
                number printed on the IRS notice or letter.
              </p>
              <p className="text-md font-semibold my-2">
                If your tax records are not currently affected by identity theft
                but you think you are at risk due to a lost or stolen purse or
                wallet, questionable credit card activity or credit report,
                contact the IRS Identity Theft Hotline at 1-800-908-4490 or submit
                Form 14039.
              </p>
              <p className="text-md font-semibold my-2">
                For more information, see Pub. 5027, Identity Theft Information
                for Taxpayers
              </p>
              <p className="text-md font-semibold my-2">
                Victims of identity theft who are experiencing economic harm or a
                systemic problem, or are seeking help in resolving tax problems
                that have not been resolved through normal channels, may be
                eligible for Taxpayer Advocate Service (TAS) assistance. You can
                reach TAS by calling the TAS toll-free case intake line at
                1-877-777-4778 or TTY/TDD 1-800-829-4059.
              </p>
              <p className="text-md font-semibold my-2">
                <strong>
                  Protect yourself from suspicious emails or phishing schemes.
                </strong>
                Phishing is the creation and use of email and websites designed to
                mimic legitimate business emails and websites. The most common act
                is sending an email to a user falsely claiming to be an
                established legitimate enterprise in an attempt to scam the user
                into surrendering private information that will be used for
                identity theft.
              </p>
              <h2 className="text-3xl font-bold my-2">Privacy Act Notice</h2>
              <p className="text-md font-semibold my-2">
                Section 6109 of the Internal Revenue Code requires you to provide
                your correct TIN to persons (including federal agencies) who are
                required to file information returns with the IRS to report
                interest, dividends, or certain other income paid to you; mortgage
                interest you paid; the acquisition or abandonment of secured
                property; the cancellation of debt; or contributions you made to
                an IRA, Archer MSA, or HSA. The person collecting this form uses
                the information on the form to file information returns with the
                IRS, reporting the above information. Routine uses of this
                information include giving it to the Department of Justice for
                civil and criminal litigation and to cities, states, the District
                of Columbia, and U.S. commonwealths and possessions for use in
                administering their laws. The information also may be disclosed to
                other countries under a treaty, to federal and state agencies to
                enforce civil and criminal laws, or to federal law enforcement and
                intelligence agencies to combat terrorism. You must provide your
                TIN whether or not you are required to file a tax return. Under
                section 3406, payers must generally withhold a percentage of
                taxable interest, dividend, and certain other payments to a payee
                who does not give a TIN to the payer. Certain penalties may also
                apply for providing false or fraudulent information
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default RequestForTaxpayer;
  