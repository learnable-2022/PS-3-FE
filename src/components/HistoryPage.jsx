/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Aside from "./Aside"
import HistoryPagesMain from "./HistoryPagesMain"
import { setAuthToken } from './setAuthToken';

import NavPay from "./NavPay"
import PaidSubPage from './SubPages/PaidSubPages';
import PendingSubPage from './SubPages/PendingSubPage';

function HistoryPage({data, sideBarIsOpen, setSideBarIsOpen }) {
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
  return (
    <div className="flex flex-col w-full h-screen">
        <div className="h-14 flex justify-center items-center w-full">
            <NavPay sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen} />
        </div>
        
        <div className="flex w-full h-full overflow-y-auto relative">
            <div className='md:bg-[#F9FAFB] w-fit relative h-full overflow-hidden z-50 md:z-10'>
              <Aside sideBarIsOpen={sideBarIsOpen} />
            </div>
            <div className="w-screen md:w-[84%] relative h-fit z-0 md:z-10 px-4">
                <HistoryPagesMain data={data} item={item}>
                    <Routes>
                        <Route path="/history/" element={<HistoryPage />} />
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