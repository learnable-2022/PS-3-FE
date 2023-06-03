// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/historyPage.css";

function HistoryPageNav() {
  return (
    <nav>
      <div className="flex flex-row h-full items-center gap-4">
        <NavLink
          to={"/history/"}
          className="text-sm"
          activeClassName="nav"
        >
          History
        </NavLink>
        <NavLink
          to={"/history/schedule"}
          className="text-sm"
          activeClassName="nav"
        >
          Schedule
        </NavLink>
        <NavLink
          to={"/history/pending"}
          className="text-sm"
          activeClassName="nav"
        >
          Pending
        </NavLink>
        <NavLink
          to={"/history/paid"}
          className="text-sm"
          activeClassName="nav"
        >
          Paid
        </NavLink>
      </div>
    </nav>
  );
}

export default HistoryPageNav;
