/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Aside from "./Aside"
import HistoryPagesMain from "./HistoryPagesMain"
import { setAuthToken } from './setAuthToken';

import NavPay from "./NavPay"
import ScheduleSubPage from './SubPages/ScheduleSubPage';
import PaidSubPage from './SubPages/PaidSubPages';
import PendingSubPage from './SubPages/PendingSubPage';

function HistoryPage({data}) {
    const [item, setItem] = useState({});
  
  useEffect(() => {
    fetch('https://autopay-qv54.onrender.com/api/v1/history', {
      method: 'GET',
      headers: {
        'Authorization': `${setAuthToken()}`,
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        // console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setItem(data.data);
    })
    .catch(error => console.error(error));
}, []);
console.log(item)
  return (
    <div className="flex flex-col w-screen h-screen ">
        <div className="h-14 flex justify-center items-center w-full">
            <NavPay />
        </div>
        
        <div className="flex w-screen h-full">
            <div className="bg-[#F9FAFB] w-[16%] h-full">
                <Aside />
                
            </div>
            <div className="w-[84%] h-full">
                <HistoryPagesMain data={data} item={item}>
                    <Routes>
                        <Route path="/history/" element={<HistoryPage />} />
                        <Route path="/history/schedule" element={<ScheduleSubPage data={data} />} />
                        <Route path="/history/pending" element={<PendingSubPage />} />
                        <Route path="/history/paid" element={<PaidSubPage item={item} />} />
                    </Routes>
                </HistoryPagesMain>
            </div>
        </div>
    </div>
  )
}

export default HistoryPage