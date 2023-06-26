/* eslint-disable react/prop-types */
import { useState, useEffect, useRef} from 'react';
import { Route, Routes } from "react-router-dom";
import Aside from "./Aside"
import HistoryPagesMain from "./HistoryPagesMain"
import AuthTokenSet from './AuthTokenSet';

import NavPay from "./NavPay"
import PaidSubPage from './SubPages/PaidSubPages';
import PendingSubPage from './SubPages/PendingSubPage';

function HistoryPage({data, sideBarIsOpen, setSideBarIsOpen, sideRef }) {
    const [item, setItem] = useState({});
  
  useEffect(() => {
    fetch('https://autopay-qv54.onrender.com/api/v1/history', {
      method: 'GET',
      headers: {
        'Authorization': `${AuthTokenSet()}`,
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        // console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        // console.log('Data:', data);
        setItem(data.data);
    })
    .catch(error => console.error(error));
}, []);
  return (
    // <section className="flex justify-center w-full">
    //   <div className='flex justify-center items-start w-full relative xl:max-w-[1280px]'>
    //     <div className="flex flex-col w-screen h-screen max-w-screen-xl">
    //         <div className="h-14 flex justify-center items-center w-full">
    //             <NavPay sideRef={sideRef} sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen}/>
    //         </div>
            
    //         <div className="flex w-full h-full overflow-hidden relative xl:max-w-[1280px] ">
    //           <div className='w-full md:w-[16%] relative h-full overflow-hidden z-50 md:z-10'>
    //               <Aside sideBarIsOpen={sideBarIsOpen} />    
    //           </div>
    //             <div className="w-screen md:w-[84%] md:relative h-full z-0 md:z-10 px-4 max-w-screen-xl">
    //               <HistoryPagesMain data={data} item={item}>
    //                   <Routes>
    //                       <Route path="/history/" element={<HistoryPage />} />
    //                       <Route path="/history/pending" element={<PendingSubPage />} />
    //                       <Route path="/history/paid" element={<PaidSubPage item={item} />} />
    //                   </Routes>
    //               </HistoryPagesMain>
    //             </div>
    //         </div> 
    //     </div>
    //   </div>
    // </section>
    <section className="flex justify-center w-full">
      <div className='flex justify-center items-start w-full relative xl:max-w-[1350px]'>
        <div className="flex flex-col w-full h-screen">
            <div className="h-14 flex justify-center items-center w-full">
                <NavPay sideRef={sideRef} sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen} />
            </div>
            
            <div className="flex w-full h-full overflow-y-auto relative">
                <div className='w-fit md:w-[16%] absolute md:relative h-full overflow-hidden z-50 md:z-10'>
                  <Aside sideBarIsOpen={sideBarIsOpen} />
                </div>
                <div className="w-screen md:w-[84%] md:relative h-fit z-0 md:z-10 px-4">
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
      </div>

    </section>
  )
}

export default HistoryPage