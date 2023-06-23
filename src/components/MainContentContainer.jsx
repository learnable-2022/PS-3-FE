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
    <section className="flex justify-center w-full">
      <div className='flex justify-center items-start w-full relative xl:max-w-[1280px]'>
        <div className="flex flex-col w-screen h-screen max-w-screen-xl">
            <div className="h-14 flex justify-center items-center w-full">
                <NavPay sideRef={sideRef} sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen}/>
            </div>
            
            <div className="flex w-full h-full overflow-hidden xl:max-w-[1280px] ">
              <div className='w-full md:w-[16%] relative h-full overflow-hidden z-50 md:z-10'>
                  <Aside sideBarIsOpen={sideBarIsOpen} />    
              </div>
                <div className="w-screen md:w-[84%] md:relative h-full z-0 md:z-10 px-4 max-w-screen-xl">
                    <MainContainer fetchData={fetchData} data={data} togglePaySLip={togglePaySLip} />
                    <SuccessSlipp showReceipt={showReceipt} popSlip={popSlip} togglePaySLip={togglePaySLip} handlePayNow={handlePayNow}/> 
                    <SuccessReceipt showReceipt={showReceipt} closePopReceipt={closePopReceipt} />
                </div>
            </div> 
        </div>
      </div>
    </section>

  )
}

export default MainContentContainer