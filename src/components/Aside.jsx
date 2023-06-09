/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { TbGraph } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useNavigate, NavLink } from "react-router-dom";

function SidebarBtn(props) {
  return (
    <NavLink
      to={props.location}
      className="font-semibold border-b-[4px] border-[#ffffff00] bg-transparent hover:bg-[#422FC6] group flex h-8 my-2 w-full items-center py-1"
    >
      <span className="text-xl pl-6 bg-transparent text-[#241E4E] group-hover:text-white">
        {" "}
        {props.icon}{" "}
      </span>
      <p className="ml-3 md:text-xs bg-transparent text-[#241E4E] group-hover:text-white">
        {" "}
        {props.title}{" "}
      </p>
    </NavLink>
  );
}

function SidebarLogoutBtn(props) {
  return (
    <button className="font-semibold bg-transparent hover:bg-[#DC3545] group flex h-8 my-2 w-full items-center py-1">
      <span className="text-xl pl-6 bg-transparent text-[#DC3545] group-hover:text-white">
        {" "}
        {props.icon}{" "}
      </span>
      <p
        className="ml-3 text-xs bg-transparent text-[#DC3545] group-hover:text-white"
        onClick={props.handleLogout}
      >
        {" "}
        {props.title}{" "}
      </p>
    </button>
  );
}

function Aside({ sideBarIsOpen }) {
  const navigate = useNavigate();

  function handleLogout() {
    // Clear token from local storage
    localStorage.removeItem("token");

    // Redirect user to the sign-in page
    navigate("/");
  }
  return (
    <div
      className={`${
        sideBarIsOpen ? "block" : "hidden"
      } md:block transition ease-in duration-300 bg-black text-white w-[50%] md:w-[16%] min-w-[300px]`}
    >
    <div className="md:block md:w-[16%] flex flex-row fixed left-0 top-14 bottom-0 overflow-y-auto m-0 p-0">
        <div
          className="z-2 w-full h-full sm:translate-x-0 flex flex-col justify-between bg-[#F9FAFB]"
          aria-label="Sidebar"
        >
          <div className="mt-4 px-3 overflow-y-auto">
            <SidebarBtn
              icon={<BiHomeAlt />}
              title="Transactions"
              location={"/dashboard"}
            />
            <SidebarBtn
              icon={<TbGraph />}
              title="History"
              location={"/history"}
            />
            <SidebarBtn icon={<RiAccountCircleLine />} title="Manage" />
          </div>
          <div className="px-3 py-4 overflow-y-auto bg-transparent mb-4">
            <SidebarBtn icon={<MdErrorOutline />} title="Policies" />
            <SidebarBtn icon={<MdOutlineSettings />} title="Settings" />
            <SidebarLogoutBtn
              icon={<FiLogOut />}
              title="Log out"
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
