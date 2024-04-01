const employmentForm = () => {
  return (
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
                  <input id="yess" value="yes" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="no" value="no" type="checkbox" />
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
            <div>
              <label className="text-md font-semibold">
                Are you a citizen of the United States?
              </label>
              <div
                className="flex items-center my-3"
                style={{ justifyContent: "space-around" }}
              >
                <div className="flex items-center">
                  <input id="yess" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="noo" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="no"
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
                  <input id="yess" value="yes" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="no" value="no" type="checkbox" />
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
            <div className="flex flex-col space-y-3">
              <label htmlFor="IfYesWhen" className="text-md font-semibold">
                If yes, when?
              </label>
              <input
                id="IfYesWhen"
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
                  <input id="yess" value="yes" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="no" value="no" type="checkbox" />
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

          <div className="flex flex-col space-y-3 justify-start items-start">
            <label htmlFor="ifYesExplain" className="text-md font-semibold">
              If yes, explain :
            </label>
            <textarea
              id="ifYesExplain"
              rows="5"
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
                  <input id="yess" value="yes" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="no" value="no" type="checkbox" />
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
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Diploma" className="text-md font-semibold">
                Diploma
              </label>
              <input
                id="Diploma"
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
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
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
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
                  <input id="yess" value="yes" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="no" value="no" type="checkbox" />
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
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Diploma" className="text-md font-semibold">
                Degree
              </label>
              <input
                id="Diploma"
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
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
                  <input id="yess" value="yes" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="no" value="no" type="checkbox" />
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
            <div className="employment__formAddress flex flex-col space-y-3">
              <label htmlFor="Diploma" className="text-md font-semibold">
                Degree
              </label>
              <input
                id="Diploma"
                placeholder="Diploma in..."
                className="w-full border-none outline-none ring-1 ring-gray-600 p-2 rounded-md placeholder:text-black font-normal"
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
                  <input id="yess" value="yes" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="no" value="no" type="checkbox" />
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
                  <input id="yess" value="yes" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="no" value="no" type="checkbox" />
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
                  <input id="yess" value="yes" type="checkbox" />
                  <label
                    className="text-md font-semibold"
                    id="yess"
                    style={{ margin: "0 10px" }}
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="no" value="no" type="checkbox" />
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
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex w-[75%] mx-auto justify-between items-center">
        <button className="font-medium rounded-md text-lg px-5 py-2 bg-green-500 text-white">Save & Exit</button>
        <Link href='/pcajob' className="font-medium rounded-md text-lg px-5 py-2 bg-green-600 text-white">Save & Continue</Link>
      </div> */}

    </div>
  );
};
export default employmentForm;
