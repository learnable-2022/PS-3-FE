import React, { useState } from "react";
import HistoryPageNav from "../HistoryPageNav";
import { RiSearchLine } from "react-icons/ri";
import "./../../assets/styles/checkbox.css";

function PaidSubPage(props) {
  const [searchText, setSearchText] = useState("");
  const employeeData = props.item.length ? props.item : null;

  const handleSearchName = (event) => {
    setSearchText(event);
  };
  const filterNames = employeeData
    ? employeeData.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse md:flex-row justify-between w-full items-start md:items-center">
        <HistoryPageNav />
        <div className="flex flex-row gap-6 w-full md:w-fit">
          <form className=" rounded-lg flex w-full items-center border border-[#A396FF]">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Employee"
              onChange={(event) => handleSearchName(event.target.value)}
              className="w-full md:w-60 h-8 rounded-tl-md rounded-bl-md focus:border-[#422FC6] text-sm md:text-xs outline-none px-2"
            />
            <button className="flex justify-center items-center h-8 rounded-tr-md rounded-br-md">
              <span className="px-3 py-[6px] text-lg h-full">
                <RiSearchLine />
              </span>
            </button>
          </form>
        </div>
      </div>
      {/* BEGIN: Table development */}

      <div className="relative w-full mt-4 h-full md:max-h-96 min-h-[420px] flex justify-center items-start overflow-y-scroll">
        <div className="relative overflow-x-auto overflow-y-auto sm:rounded-lg w-full">
          <table className="table-fixed hidden md:block border-l border-r w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white capitalize bg-[#422FC6] border border-[#422FC6] rounded-t-md text-center">
              <tr>
                <th scope="col" className="px-9 py-3 w-[25%]">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3 w-[25%]">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 w-[25%]">
                  Amount Paid
                </th>
                <th scope="col" className="px-6 py-3 w-[25%]">
                  Account Number
                </th>
                <th scope="col" className="px-3 py-3 w-[25%]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-xs text-center">
              {filterNames.length !== 0 ? (
                filterNames.map((details) => (
                  <tr
                    className="bg-white border-b capitalize"
                    key={details._id}
                  >
                    <th
                      scope="row"
                      className="px-4 capitalize py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {`${details.firstName} ${details.lastName}`}
                    </th>
                    <td className="px-2 py-4">{`${details.department}`}</td>
                    <td className="px-6 py-4 uppercase">NGN{details.amount}</td>
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
          <div className="bg-white border rounded capitalize md:hidden">
            {filterNames.length !== 0 ? (
              filterNames.map((details) => (
                <div
                  className="border-b grid grid-cols-2 pt-2"
                  key={details._id}
                >
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
                      Amount paid:
                    </span>
                    <span className="text-[#422FC6] font-semibold text-sm">
                      NGN{details.amount}
                    </span>
                  </div>
                  <div className="px-4">
                    <span className="text-gray-400 text-sm font-normal">
                      Account number:
                    </span>{" "}
                    <span className="text-[#422FC6] font-semibold text-sm">
                      {" "}
                      {details.accountNumber}
                    </span>
                  </div>
                  <div className="px-4 py-2 text-green-400 font-semibold italic col-span-2 text-right">
                    successful
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white border rounded capitalize">
                <div className="border-b grid grid-cols-2 pt-2">
                  <div className="px-4 py-2 text-gray-800 font-semibold italic col-span-2 text-center uppercase">
                    No item found
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* END: Table development */}
    </div>
  );
}

export default PaidSubPage;
