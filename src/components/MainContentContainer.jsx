import {useState} from 'react';
import Aside from "./Aside"
import MainContainer from "./MainContainer"
import SuccessReceipt from "./SuccessModal/SuccessReceipt"
import SuccessSlipp from './SuccessModal/SuccessSlipp';
import NavPay from "./NavPay"

function MainContentContainer({fetchData, data,  sideBarIsOpen, setSideBarIsOpen, sideRef }) {
    const [popSlip, setPopSlip] = useState(false)
    const [showReceipt, setShowReceipt] = useState(false);

  function togglePaySLip () {
    setPopSlip(!popSlip);

    }
  
   function handlePayNow () {
    setPopSlip(false)
    setShowReceipt(true)
    fetchData()
   }

   function closePopReceipt () {
    setShowReceipt(false)
    }

  return (
    
    <div className="flex flex-col w-screen h-screen">
        <div className="h-14 flex justify-center items-center w-full">
            <NavPay sideRef={sideRef} sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen}/>
        </div>
        
        <div className="flex w-full h-full overflow-hidden relative">
          <div className='w-full md:w-[16%] absolute md:relative h-full overflow-hidden z-50 md:z-10'>
            <Aside sideBarIsOpen={sideBarIsOpen} />
            
          </div>
            <div className="w-screen md:w-[84%] md:relative h-full z-0 md:z-10 px-4">
                <MainContainer fetchData={fetchData} data={data} togglePaySLip={togglePaySLip} />
                <SuccessSlipp showReceipt={showReceipt} popSlip={popSlip} togglePaySLip={togglePaySLip} handlePayNow={handlePayNow}/> 
                <SuccessReceipt showReceipt={showReceipt} closePopReceipt={closePopReceipt} />
            </div>
        </div> 
    </div>

  )
}

export default MainContentContainer