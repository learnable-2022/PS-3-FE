/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";

import MainContentContainer from './components/MainContentContainer'
import HistoryPage from './components/HistoryPage';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import { setAuthToken } from './components/setAuthToken';

// import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://autopay-qv54.onrender.com/api/v1/transaction", {
          method: 'GET',
          headers: {
            'Authorization': `${setAuthToken()}`,
            'Content-Type': 'application/json'
          },
        });
        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<MainContentContainer data={data} />} />
        <Route path="/history/*" element={<HistoryPage data={data} />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
