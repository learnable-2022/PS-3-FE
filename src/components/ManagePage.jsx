/* eslint-disable react/prop-types */
import { useState, useEffect, useRef} from 'react';
import Aside from "./Aside"
import AuthTokenSet from './AuthTokenSet';
import NavPay from "./NavPay"
import AccountsPage from './Accounts/AccountsPage';

function ManagePage({data, sideBarIsOpen, setSideBarIsOpen, sideRef }) {
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
                  <p className='mt-6 ml-6 mb-6 text-lg font-bold text-primary border-b-4 w-48 border-primary'> Payment Account </p>
                    <AccountsPage/>      
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ManagePage