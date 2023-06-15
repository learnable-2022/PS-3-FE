/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import ResourceEdgeLogo from "../assets/images/resourceedgelogo.png";
import Reviews from "../pages/Reviews";
import axios from "axios";
// import { setAuthToken } from "./setAuthToken";
import AuthTokenSet from "./setAuthToken";
import AddEmployee from "./AddEmployee";
import DeleteEmployeeModal from "./DeleteEmployeeModal";
import { NavLink } from "react-router-dom";
import EditEmployee from "./EditEmployee";



function LandingPageMain(props) {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false); 

  const [showaddEmp, setShowaddEmp] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [showUpdateEmp, setShowUpdateEmp] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState({});
  const [successModal, setSuccessModal] = useState(false); 

  useEffect(() => {
    if (successModal) {
      setTimeout(() => {
        setSuccessModal(false);
      }, 2000);
    }
  }, [successModal]);
  useEffect(() => {
    fetchData();
  }, []);

    useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://autopay-qv54.onrender.com/api/v1/employee", {
        headers: {
          'Authorization': `${AuthTokenSet()}`,
        },
      });
      setData(response.data.data);
      setLoading(false)
    } catch (error) {
      console.log("Error: ", error);
      setLoading(false)
    }
  };
  
 
    // Add employee modal functions
    function toggleAddEmployee () {
      setShowaddEmp(!showaddEmp);
      }

// delete employee functions

function handleEmployeeClick(employeeId){
  const clickedItem = data.find(employeee => employeee.employeeId === employeeId);
  setSelectedEmp(clickedItem);
  setIsDelOpen(true);
}

const handleDeleteEmp = async () => {
  try {
    await axios.delete(`https://autopay-qv54.onrender.com/api/v1/employee/${selectedEmp.employeeId}`, {
      // method: 'POST',
      headers: { 
        'Authorization': `${AuthTokenSet()}`, 
        'Content-Type': 'application/json'
      }
    });
   
    // console.log("clicked Delete Employee");
    fetchData();
    setIsDelOpen(false);
    setSuccessModal(true);
    
  } catch (error) {
    console.error('Error deleting item:', error);
    
  }
};

function toggleDelEmployee () {
  setIsDelOpen(false);

  }

  // edit employee functions 
  function toggleUpdateEmployee () {
    setShowUpdateEmp(!showUpdateEmp);
    }
  function cancelUpdateEmployee () {
    setShowUpdateEmp(false);
    }

  function handleUpdate () {
    console.log("edit clicked");
    setShowUpdateEmp(false);
    setShowUpdateEmp(true);
    // console.log(selectedEmp);
    }

  return (
    <>
      <div>
        <nav>
          <div className="flex flex-row justify-between items-center px-6 py-3 shadow-sm">
            <div className="flex flex-row items-center gap-4">
              {/* <GiHamburgerMenu className="text-xl" /> */}
              <div className="flex flex-row items-center gap-3">
                <img src={ResourceEdgeLogo} alt="" />
                <h2 className="border-l border-gray-300 hidden px-3 sm:block">
                 Genesys Performance Management
                </h2>
              </div>
            </div>
            <NavLink 
                to={"/"} 
                onClick={() => {
                    props.reloadDash();
                  }}
                className="rounded ml-2 bg-[#0052CC] hover:bg-primaryHover text-white py-2 font-bold text-sm px-2 sm:px-4">
                    Pay Employees
            </NavLink>
          </div>
          <div className="flex justify-center items-center sm:hidden">
            <h2 className="font-bold text-lg">
              Genesys Performance Management
            </h2>
          </div>
        </nav>
        <div>
          {/* {currentPage == "review" ?  */}
        <Reviews 
          data={data} 
          loading={loading}
          handleEmployeeClick={handleEmployeeClick} 
          toggleAddEmployee={toggleAddEmployee} />  :
          
           </div>
      
        <AddEmployee 
          showaddEmp={showaddEmp} 
          toggleAddEmployee={toggleAddEmployee} 
          fetchData={fetchData} />
          
        <DeleteEmployeeModal 
            selectedEmp={selectedEmp}
            handleDeleteEmp={handleDeleteEmp} 
            isDelOpen={isDelOpen}
            toggleDelEmployee={toggleDelEmployee}
            handleUpdate={handleUpdate}
            successModal={successModal}
            />
        <EditEmployee 
          showUpdateEmp={showUpdateEmp} 
          toggleUpdateEmployee={toggleUpdateEmployee} 
          fetchData={fetchData}
          selectedEmp={selectedEmp}
          cancelUpdateEmployee={cancelUpdateEmployee} 
          toggleDelEmployee={toggleDelEmployee}
          />
        </div>
    </>
  );
}

export default LandingPageMain;
