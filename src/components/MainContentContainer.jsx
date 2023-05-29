/* eslint-disable react/prop-types */
import {useState} from 'react';
import Aside from "./Aside"
import MainContainer from "./MainContainer"
import SuccessSlip from "./SuccessModal/SuccessSlip"
import SuccessReceipt from "./SuccessModal/SuccessReceipt"

import NavPay from "./NavPay"

function MainContentContainer({data}) {
    const [popSlip, setPopSlip] = useState(false)
    const [showReceipt, setShowReceipt] = useState(false);

  function togglePaySLip () {
    setPopSlip(!popSlip);

    }
  
   function handlePayNow () {
    setPopSlip(false)
    setShowReceipt(true)
   }

   function closePopReceipt () {
    setShowReceipt(false)
    }

  return (
    <div className="flex flex-col w-screen h-screen ">
        <div className="h-14 flex justify-center items-center w-full">
            <NavPay />
        </div>
        
        <div className="flex w-screen h-full">
            <div className="bg-[#F9FAFB] w-1/5 h-full">
                <Aside />
                
            </div>
            <div className="w-4/5 h-full">
                <MainContainer data={data} togglePaySLip={togglePaySLip} />
            </div>
        </div>
        <SuccessSlip showReceipt={showReceipt} popSlip={popSlip} togglePaySLip={togglePaySLip} handlePayNow={handlePayNow}/> 
        <SuccessReceipt showReceipt={showReceipt} closePopReceipt={closePopReceipt} />
    </div>
  )
}

export default MainContentContainer