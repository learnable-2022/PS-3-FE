import Aside from "./Aside"
import MainContainer from "./MainContainer"

import NavPay from "./NavPay"

function MainContentContainer() {
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
                <MainContainer />
            </div>
        </div>
    </div>
  )
}

export default MainContentContainer