import React, { useState } from "react";
import HistoryPageNav from "../HistoryPageNav";
import { RiSearchLine } from "react-icons/ri";
import "./../../assets/styles/checkbox.css";

function scheduleSubPage(props) {
  const [searchedText, setSearchedText] = useState("");
  const employeeData = props.data ? props.data : null;

  const handleSearchName = (event) => {
    setSearchedText(event);
  };
  const filterNames = employeeData
    ? employeeData.filter(
        (employee) =>
          employee.firstName
            .toLowerCase()
            .includes(searchedText.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(searchedText.toLowerCase())
      )
    : [];
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between w-full items-center">
        <HistoryPageNav />
        <div className="flex flex-row gap-6">
          <form className=" rounded-lg flex items-center border border-[#A396FF]">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Employee"
              onChange={(event) => handleSearchName(event.target.value)}
              className="w-60 h-8 rounded-tl-md rounded-bl-md focus:border-[#422FC6] text-xs outline-none px-2"
            />
            <button className="flex justify-center items-center h-8 rounded-tr-md rounded-br-md">
              <span className=" px-3 py-[6px] text-lg h-full">
                <RiSearchLine />
              </span>
            </button>
          </form>
          <div className="flex flex-row items-center gap-1">
            <input type="checkbox" name="checkall" id="" />
            <label htmlFor="checkall" className="text-sm">
              Approve all
            </label>
          </div>
        </div>
      </div>
      {/* BEGIN: Table development */}

      <div className="relative w-full mt-4 max-h-96 flex justify-center items-start overflow-y-scroll shadow">
        <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg w-full">
          <table className=" border-l border-r w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white capitalize bg-[#422FC6] rounded-t-md text-center">
              <tr>
                <th scope="col" className="px-9 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Performance
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
                <th scope="col" className="px-3 py-3">
                  Approve
                </th>
              </tr>
            </thead>
            <tbody className="text-xs text-center">
              {filterNames.length !== 0 ? (
                filterNames.map((details) => (
                  <tr className="bg-white border-b capitalize">
                    <th
                      scope="row"
                      className="px-4 capitalize py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {`${details.firstName} ${details.lastName}`}
                    </th>
                    <td className="px-12 py-4">{`${details.department}`}</td>
                    <td className="px-6 py-4">4.7</td>
                    <td className="px-6 py-4">{details.accountNumber}</td>
                    <td className="px-6 py-4 uppercase">
                      NGN{details.grossSalary}
                    </td>
                    <td className="px-6 py-4">NGN{details.netSalary}</td>
                    <td className="px-6 py-4 uppercase">
                      <input type="checkbox" name="checkall" id="" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
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
      <div>
        <div className="flex justify-end items-center gap-2 mt-6">
          <button className=" py-2 px-5 text-sm rounded text-[#422FC6] border border-[#422FC6] hover:scale-105">
            Cancel
          </button>
          <button className=" py-2 px-5 text-sm rounded text-white bg-[#422FC6] hover:scale-105">
            Run Payroll
          </button>
        </div>
      </div>
    </div>
  );
}

export default scheduleSubPage;
