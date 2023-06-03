import React, { useState } from "react";
import HistoryPageNav from "../HistoryPageNav";
import { RiSearchLine } from "react-icons/ri";
import "./../../assets/styles/checkbox.css";

function PaidSubPage(props) {
  const [searchText, setSearchText] = useState("");
  const employeeData = props.data ? props.data : null;

  const handleSearchName = (event) => {
    setSearchText(event);
  };
  const filterNames = employeeData
    ? employeeData.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
          employee._id.toLowerCase().includes(searchText.toLowerCase())
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
        </div>
      </div>
      {/* BEGIN: Table development */}

      <div className="relative w-full mt-4 max-h-96 min-h-[420px] flex justify-center items-start overflow-y-scroll shadow">
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
                  Score
                </th>
                <th scope="col" className="px-6 py-3">
                  Gross Salary
                </th>
                <th scope="col" className="px-6 py-3">
                  Net Salary
                </th>
                <th scope="col" className="px-6 py-3">
                  Account Number
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-xs text-center">
              {filterNames.length !== 0 ? (
                filterNames.map((details) => (
                  <tr className="bg-white border-b capitalize" key={details._id}>
                    <th
                      scope="row"
                      className="px-4 capitalize py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {`${details.firstName} ${details.lastName}`}
                    </th>
                    <td className="px-12 py-4">{`${details.department}`}</td>
                    <td className="px-6 py-4">4.7</td>
                    <td className="px-6 py-4 uppercase">
                      NGN{details.grossSalary}
                    </td>
                    <td className="px-6 py-4">NGN{details.netSalary}</td>
                    <td className="px-6 py-4">{details.accountNumber}</td>
                    <td className="px-6 py-4 text-green-400 font-semibold italic">
                      successful
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
    </div>
  );
}

export default PaidSubPage;
