
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RxCaretDown } from "react-icons/rx";
import FetchTotalnetpay from "./FetchTotalnetpay";
import "../assets/styles/tablescroll.css";

function MainContainer(props) {
  const [searchText, setSearchText] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const departments = props.data
    ? Array.from(new Set(props.data.map((item) => item.department)))
    : null;
  const employeeData = props.data
    ? props.data.filter((employee) =>
        employee.department.includes(selectedValue)
      )
    : null;

  const handleSearchName = (event) => {
    setSearchText(event);
  };
  const handleSelectChange = (event) => {
    if (event == "all") {
      setSelectedValue("");
    } else {
      setSelectedValue(event);
    }
  };

  const filteredNames = employeeData
    ? employeeData.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
          (employee.employeeId == searchText.toLowerCase())
      )
    : [];

  return (
    <main className="absolute px-1 flex flex-col w-full h-full right-1">
      <div className="flex flex-col w-full h-full md:px-4 relative">
        <div className="min-w-full mt-6 mb-3 flex flex-row justify-between items-center">
          <h2 className="font-bold text-xl md:text-base text-primary">Payment Dashboard</h2>
          <form className="md:hidden rounded-lg flex items-center border border-[#7352907d]">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Employee"
              onChange={(event) => handleSearchName(event.target.value)}
              className="w-40 h-9 rounded-tl-lg text-xs rounded-bl-lg focus:border-[#422FC6] outline-none px-2"
            />
            <button className="flex justify-center items-center h-full rounded-tr-lg rounded-br-lg">
              <span className=" px-3 py-[9px] text-base md:text-lg h-full font-bold">
                <RiSearchLine />
              </span>
            </button>
          </form>
        </div>

        <div className="w-full mb-6 md:mb-0 flex items-center justify-between md:justify-normal">
          <label
            className="block tracking-wide text-xs md:text-base min-w-[150px] text-[#262626]"
            htmlFor="grid-state"
          >
            Who would you like to Pay?
          </label>
          <div className="relative w-full md:w-60 md:ml-6">
            <select
              value={selectedValue}
              onChange={(event) => handleSelectChange(event.target.value)}
              className="block appearance-none w-full border border-[#7352907d] text-sm text-[#735290] py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option value="all">All Employees</option>
              {departments ? (
                departments.map((items, index) => (
                  <option value={items} key={index}>
                    {items}
                  </option>
                ))
              ) : (
                <option>...</option>
              )}
            </select>
            <span className="pointer-events-none text-2xl absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <RxCaretDown />
            </span>
          </div>
        </div>

        {/* BEGIN: The search input and pay button */}
        <div className="flex flex-col h-full md:h-fit md:flex-row md:justify-between items-center my-2">
          <form className="hidden md:flex rounded-lg items-center">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Employee"
              onChange={(event) => handleSearchName(event.target.value)}
              className="w-60 h-9 rounded-tl-lg rounded-bl-lg focus:border-[#422FC6] outline-none px-2 border border-[#899197]"
            />
            <button className="flex justify-center items-center h-full rounded-tr-lg rounded-br-lg bg-[#422FC6]">
              <span className=" px-3 py-[9px] text-lg h-full text-white font-bold">
                <RiSearchLine />
              </span>
            </button>
          </form>
          <div className="bg-white border w-full h-[85%] overflow-y-auto rounded capitalize md:hidden mb-6">
            {filteredNames.length !== 0 ? (
              filteredNames.map((details) => (
                <div
                  className="border-b grid grid-cols-2 pt-2"
                  key={details.employeeId}
                >
                  <div
                    scope="row"
                    className="px-4 capitalize font-medium text-gray-900"
                  >
                    <span className="text-gray-400 text-sm font-normal">
                      ID:
                    </span>
                    <span className="text-[#422FC6] font-semibold text-sm">{details.employeeId}</span>
                  </div>
                  <div
                    scope="row"
                    className="px-4 capitalize font-medium text-gray-900"
                  >
                    <span className="text-gray-400 text-sm font-normal">
                      Name:
                    </span>
                    <span className="text-[#422FC6] font-semibold text-sm">{`${details.firstName} ${details.lastName}`}</span>
                  </div>
                  <div className="px-4">
                    <span className="text-gray-400 text-sm font-normal">
                      Dept:
                    </span>
                    <span className="text-[#422FC6] font-semibold text-sm">{`${details.department}`}</span>
                  </div>
                  <div className="px-4">
                    <span className="text-gray-400 text-sm font-normal">
                      Account number:
                    </span>
                    <span className="text-[#422FC6] font-semibold text-sm">
                      {details.accountNumber}
                    </span>
                  </div>
                  <div className="px-4">
                    <span className="text-gray-400 text-sm font-normal">
                      Bonus:
                    </span>
                    <span className="text-[#422FC6] font-semibold text-sm">
                      {details.bonus}
                    </span>
                  </div>
                  <div className="px-4">
                    <span className="text-gray-400 text-sm font-normal">
                      Gross Salary:
                    </span>
                    <span className="text-[#422FC6] font-semibold text-sm">
                     NGN{details.grossSalary}
                    </span>
                  </div>
                  <div className="px-4">
                    <span className="text-gray-400 text-sm font-normal">
                      Net Salary:
                    </span>
                    <span className="text-[#422FC6] font-semibold text-sm">
                      NGN{details.netSalary}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white border w-full rounded capitalize">
                <div className="border-b grid grid-cols-2 pt-2">
                  <div className="px-4 py-2 text-gray-800 font-semibold italic col-span-2 text-center uppercase">
                    No item found
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center w-full md:w-fit">
            <div className="md:mr-2 mr-1 text-center flex-1 px-[2px] py-2 border border-[#A396FF] rounded-md">
              <h3 className=" text-xs lg:text-sm font-bold text-[#735290]">
                Total Net Salary:{" "}
                <span className="text-[#422FC6] font-bold">
                  NGN
                  <FetchTotalnetpay />
                </span>
              </h3>
            </div>
            <button
              className="py-2 px-5 rounded-lg text-white bg-[#422FC6] hover:scale-105 mr-2"
              onClick={props.togglePaySLip}
            >
              Pay Now
            </button>
          </div>
        </div>
        {/* END: The search input and pay button */}
        
        {/* BEGIN: Table development */}

        <div className="relative w-full max-h-96 justify-center items-start overflow-y-scroll hidden md:flex">
          <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg w-full mt-2">
            <table className=" border-l border-r w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-white capitalize bg-[#422FC6] rounded-t-md text-center">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Employee ID
                  </th>
                  <th scope="col" className="px-9 py-3">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bonus
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Account Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gross Salary
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Net Salary
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs text-center">
                {filteredNames.length !== 0 ? (
                  filteredNames.map((details) => (
                    <tr
                      className="bg-white border-b capitalize"
                      key={details.employeeId}
                    >
                      <th
                        scope="row"
                        className="px-4 capitalize py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {details.employeeId}
                      </th>
                      <td className="px-12 py-4">
                        {`${details.firstName} ${details.lastName}`}
                      </td>
                      <td className="px-6 py-4">{details.department}</td>
                      <td className="px-6 py-4">{details.bonus}</td>
                      <td className="px-6 py-4">{details.accountNumber}</td>
                      <td className="px-6 py-4 uppercase">
                        NGN{details.grossSalary}
                      </td>
                      <td className="px-6 py-4 uppercase">
                        NGN{details.netSalary}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-4 uppercase font-medium text-gray-900"
                    >
                      No item found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* END: Table development */}
      </div>
    </main>
  );
}

export default MainContainer;
