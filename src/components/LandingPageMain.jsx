/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminAvatar from "../assets/images/adminavatar.png";
import ResourceEdgeLogo from "../assets/images/resourceedgelogo.png";
import PerformanceAgreement from "../pages/PerformanceAgreement";
import Reviews from "../pages/Reviews";
import axios from "axios";
import { setAuthToken } from "./setAuthToken";
import AddEmployee from "./AddEmployee";
import DeleteEmployeeModal from "./DeleteEmployeeModal";
// import UpdateEmployee from "./UpdateEmployee";





// eslint-disable-next-line react/prop-types
function LandingPageMain(props) {
  const [currentPage, setCurrentPage] = useState("performance");
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false); 

  const [showaddEmp, setShowaddEmp] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  // const [showUpdateEmp, setShowUpdateEmp] = useState(false);
  // const [selectedEmpUpdate, setSelectedEmpUpdate] = useState({});
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

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://autopay-qv54.onrender.com/api/v1/employee", {
        headers: {
          'Authorization': `${setAuthToken()}`,
        },
      });
      setData(response.data.data);
      setLoading(false)
    } catch (error) {
      console.log("Error: ", error);
      setLoading(false)
    }
  };
  
 
  const performancehandleClick = () => {
    setCurrentPage("performance");
  };
  const reviewhandleClick = () => {
    setCurrentPage("review");
  };
  // console.log(currentPage);

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
        'Authorization': `${setAuthToken()}`, 
        'Content-Type': 'application/json'
      }
    });
    // Perform any further actions upon successful deletion
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
  
  // update employee details functions
  // function toggleUpdateEmployee () {
  //   setShowUpdateEmp(!showUpdateEmp);
  // }

  // function handleUpdateClick(employeeId){
  //   const clickedItemUpdate = data.find(employeee => employeee.employeeId === employeeId);
  //   setSelectedEmpUpdate(clickedItemUpdate);
  //   setShowUpdateEmp(true);
  //   console.log("Clicked handle update");
  //   console.log(selectedEmpUpdate);
  // }



  return (
    <>
      <div>
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
              <img src={AdminAvatar} alt="abssa" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 px-4 pt-2 shadow">
            <div
              onClick={performancehandleClick}
              className="text-sm font-semibold py-2 border-b-[4px] border-[#ffffff00] cursor-pointer hover:text-[#0052cc] hover:border-[#0052cc]"
            >
              Performance Agreements
            </div>
            <div
              onClick={reviewhandleClick}
              className="text-sm py-2 font-semibold border-b-[4px] border-[#ffffff00] cursor-pointer hover:text-[#0052cc] hover:border-[#0052cc]"
            >
              Reviews
            </div>
          </div>
        </nav>
        <div>{currentPage == "review" ? 
        <Reviews 
          reloadDash={props.reloadDash} 
          data={data}  
          loading={loading}
          handleEmployeeClick={handleEmployeeClick} 
          toggleAddEmployee={toggleAddEmployee}/>  : 
          
          <PerformanceAgreement loading={loading} data={data}/>}</div>
      
        <AddEmployee showaddEmp={showaddEmp} toggleAddEmployee={toggleAddEmployee} fetchData={fetchData} />
        <DeleteEmployeeModal 
            selectedEmp={selectedEmp}
            handleDeleteEmp={handleDeleteEmp} 
            isDelOpen={isDelOpen}
            toggleDelEmployee={toggleDelEmployee}
            successModal={successModal}
            />
        
        </div>
    </>
  );
}

export default LandingPageMain;
