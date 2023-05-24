import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminAvatar from "../assets/adminavatar.png";
import ResourceEdgeLogo from "../assets/resourceedgelogo.png";
import { NavLink } from "react-router-dom";

function Main({children}) {
  return (
    <>
    <nav>
      <div className="flex flex-row justify-between items-center px-6 py-3 shadow-sm">
        <div className="flex flex-row items-center gap-4">
          <GiHamburgerMenu className="text-xl" />
          <div className="flex flex-row items-center gap-3">
            <img src={ResourceEdgeLogo} alt="" />
            <h2 className="border-l border-gray-300 px-3">
              Performance Management
            </h2>
          </div>
        </div>
        <div>
          <img src={AdminAvatar} alt="" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 px-4 pt-2 shadow">
        <NavLink to={"/"} className="text-sm font-semibold py-2 border-b-[4px] border-[#ffffff00]" activeClassName="text-red" >
            Performance Agreements
        </NavLink>
        <NavLink to={"/Reviews"} className="text-sm py-2 font-semibold border-b-[4px] border-[#ffffff00]" activeClassName="text-red" >
            Reviews
        </NavLink>
      </div>
    </nav>
    <main>{children}</main>
    </>
  );
}

export default Main;
