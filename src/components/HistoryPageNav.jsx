// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/historyPage.css";

function HistoryPageNav() {
  return (
    <nav>
      <div className="flex flex-row h-full items-center gap-4">
        <NavLink
          to={"/history/summary"}
          className="text-sm"
          activeclassname="nav"
        >
          Summary
        </NavLink>
        <NavLink
          to={"/history/pending"}
          className="text-sm"
          activeclassname="nav"
        >
          Pending
        </NavLink>
        <NavLink
          to={"/history/paid"}
          className="text-sm"
          activeclassname="nav"
        >
          Paid
        </NavLink>
      </div>
    </nav>
  );
}

export default HistoryPageNav;
