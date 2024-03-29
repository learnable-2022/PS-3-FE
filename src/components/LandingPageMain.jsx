import React, { useState, useEffect } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import ResourceEdgeLogo from '../assets/images/ResourceEdgeLogo.png';
import Reviews from "../pages/Reviews";
import axios from "axios";
import AuthTokenSet from "./AuthTokenSet";
import AddEmployee from "./AddEmployee";
import AddEmployeeCrypto from "./AddEmployeeCrypto";
import DeleteEmployeeModal from "./DeleteEmployeeModal";
import { NavLink } from "react-router-dom";
import EditEmployee from "./EditEmployee";



function LandingPageMain(props) {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false); 

  const [showaddEmp, setShowaddEmp] = useState(false);
  const [showaddEmpCrypto, setShowaddEmpCrypto] = useState(false);
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
    // AddCrypto employee modal functions
    function toggleAddEmployeeCrypto () {
      setShowaddEmpCrypto(!showaddEmpCrypto);
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
    // console.log("edit clicked");
    setShowUpdateEmp(false);
    setShowUpdateEmp(true);
    // console.log(selectedEmp);
    }

  return (
    <div className="flex justify-center w-full">

      <div className=" flex justify-center w-full relative xl:max-w-[1350px]">
      <div className="flex flex-col w-screen">
        <nav className="w-full shadow-md fixed bg-white max-w-[1350px]">

          <div className="flex flex-row justify-between items-center px-6 py-3 shadow-sm">
            <div className="flex flex-row items-center gap-4">
              {/* <GiHamburgerMenu className="text-xl" /> */}
              <div className="flex flex-row items-center gap-3">
                <img src={ResourceEdgeLogo} alt="Resource Edge"/>
                
              </div>
            </div>
            <NavLink 
                to={"/signin"} 
                onClick={() => {
                    props.reloadDash();
                  }}
                className="rounded ml-2 bg-[#0052CC] hover:bg-primaryHover text-white text-center py-2 font-bold text-sm px-2 sm:px-4">
                    Pay Employees
            </NavLink>
          </div>
        </nav>
        <div className="flex pl-6 justify-start items-center text-center mt-14">
            <h2 className="font-bold text-lg mt-5">
              Genesys Payroll Data Input Page
            </h2>
          </div>
        <div>
          <Reviews 
            data={data} 
            loading={loading}
            handleEmployeeClick={handleEmployeeClick} 
            toggleAddEmployeeCrypto={toggleAddEmployeeCrypto} 
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
          <AddEmployeeCrypto
          showaddEmpCrypto={showaddEmpCrypto} 
          toggleAddEmployeeCrypto={toggleAddEmployeeCrypto} 
          fetchData={fetchData} />
      </div>
        </div>
    </div>
  );
}

export default LandingPageMain;
