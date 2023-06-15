/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import { Route, Routes } from "react-router-dom";

import MainContentContainer from './components/MainContentContainer'
import HistoryPage from './components/HistoryPage';
import LandingPageMain from './components/LandingPageMain';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import AuthTokenSet from './components/AuthTokenSet';

function App() {
  const [data, setData] = useState(null);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [showVerifyMail, setShowVerifyMail] = useState(false);
  const sideRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sideRef.current &&!sideRef.current.contains(event.target)){
      setSideBarIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    
    fetchData();
    return() => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("https://autopay-qv54.onrender.com/api/v1/transaction", {
        method: 'GET',
        headers: {
          'Authorization': `${AuthTokenSet()}`,
          'Content-Type': 'application/json'
        },
      });
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  function showVerifyMessage (){
    setShowVerifyMail(true);
  }
  function hideVerifyMessage (){
    setShowVerifyMail(false);
  }
  return (
    <>
    <Routes>
        <Route path="/" element={<SignIn showVerifyMail={showVerifyMail} hideVerifyMessage={hideVerifyMessage}/>} />
        <Route path="/landingpage" element={<LandingPageMain reloadDash={fetchData}/>} />
        <Route path="/dashboard" element={<MainContentContainer fetchData={fetchData} sideRef={sideRef}  data={data} sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen} />} />
        <Route path="/history/*" element={<HistoryPage sideRef={sideRef} data={data}  sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen}/>} />
        <Route path="/signup" element={<SignUp showVerifyMail={showVerifyMail} showVerifyMessage={showVerifyMessage}/>} />
    </Routes>
    </>
  )
}

export default App
