import React from "react";
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <section className="flex flex-row gap-3">
      <div className="flex flex-row items-center justify-center border border-gray-400 px-2 py-1 rounded">
        <input
          type="text"
          placeholder="search"
          className="outline-none text-xs"
        />
        <CiSearch />
      </div>
      <div>
        <select
          name="year"
          id="year"
          className="bg-gray-100 h-full outline-none rounded text-sm"
        >
          <option value="2021" selected>
            2021
          </option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
      <div>
        <select
          name="status"
          id="status"
          className="bg-gray-100 h-full outline-none rounded text-sm"
        >
          <option value="status" selected>
            status
          </option>
          <option value="Approved">Approved</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Not Submitted">Not Submitted</option>
        </select>
      </div>
      <div>
        <select
          name="Department"
          id="Department"
          className="bg-gray-100 h-full outline-none rounded text-sm"
        >
          <option value="Department" selected>
            Department
          </option>
          <option value="Dev Studio">Dev Studio</option>
          <option value="Learnable">Learnable</option>
        </select>
      </div>
      <div>
        <select
          name="All Companies"
          id="All Companies"
          className="bg-gray-100 h-full outline-none rounded text-sm"
        >
          <option value="All companies" selected>
            All companies
          </option>
        </select>
      </div>
    </section>
  );
}

export default Search;
