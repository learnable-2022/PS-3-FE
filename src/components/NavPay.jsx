// import React from 'react'
import Logo from "../assets/images/Logo.png";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavPay({ sideBarIsOpen, setSideBarIsOpen }) {
    

  const username = localStorage.getItem('username'); 
  const nameArray = username.split(" ");
  const firstName = nameArray[0].charAt(0).toUpperCase();
  const lastName = nameArray[1].charAt(0).toUpperCase();

  const toggleSidebar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };
  return (
    <nav className="bg-white w-full h-14 z-20 shadow-md fixed">
      <div className="max-w-screen-xl flex md:flex-wrap items-center justify-between mx-auto p-4">
        <button
          className="text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 md:hidden"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {sideBarIsOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <Link to="/landingpage" className="flex items-center">
          <img src={Logo} className="h-5 mr-3" alt="AutoPay Logo" />
        </Link>
        <div className="flex flex-row items-center justify-between w-fit md:flex md:w-auto md:order-1">
          <span className="text-lg mr-6 cursor-pointer">
            <BsBell />
          </span>
          <span className="justify-center text-white text-sm font-bold items-center hidden md:flex h-7 w-7 bg-[#5243AA] rounded-full">
            {`${firstName} ${lastName}`}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavPay;
