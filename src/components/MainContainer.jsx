import {RiSearchLine} from "react-icons/ri";
import {RxCaretDown} from "react-icons/rx";
import "../assets/styles/tablescroll.css"

function MainContainer () {
  return (
    <main className="px-1 flex flex-col w-full h-full"> 
        <div className="flex flex-col w-full px-4 relative">
          <div className="min-w-full flex mt-6 mb-3">
            <h2 className="font-bold">Employees</h2>
          </div>

          <div className="w-full mb-6 md:mb-0 flex items-center">
            <label className="block tracking-wide text-[#262626] mb-2" htmlFor="grid-state">
              Who would you like to Pay?
            </label>
            <div className="relative ml-6">
              <select className="block appearance-none w-full bg-gray-200 border border-[#899197] text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>All Employees</option>
                <option>Backend only</option>
                <option>Frontend only</option>
                <option>Product Designers only</option>
                <option>Web 3 only</option>
              </select>
            <span className="pointer-events-none text-2xl absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <RxCaretDown />
            </span>
          </div>
          </div>

          {/* BEGIN: The search input and pay button */}
          <div className="flex justify-between items-center my-4">
            <form className=" rounded-lg flex items-center">
              <input 
                type="search" 
                name="search" 
                id="search" 
                placeholder="Search Employee" 
                className="w-60 h-9 rounded-tl-lg rounded-bl-lg focus:border-[#422FC6] outline-none px-2 border border-[#899197]"/>
              <button className="flex justify-center items-center h-full rounded-tr-lg rounded-br-lg bg-[#422FC6]">
                <span className=" px-3 py-[9px] text-lg h-full text-white font-bold"><RiSearchLine/></span>
              </button>
            </form>

            <div  className="flex justify-between items-center">
              <div className="mr-4 text-sm">
                <h4 className="font-bold">Total Net Salary: <span className="text-[#422FC6] font-bold">NGN3,607,255</span></h4>
              </div>
              <button className=" py-2 px-5 rounded-lg text-white bg-[#422FC6]">Pay Now</button> 
            </div>
          </div>
          {/* BEGIN: The search input and pay button */}

          {/* BEGIN: Table development */}
          
          <div className="relative w-full max-h-96 flex justify-center items-start overflow-y-scroll" >
            
            <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg w-full mt-2">
                <table className=" border-l border-r w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-white capitalize bg-[#422FC6] rounded-t-md text-center">
                        <tr>
                            <th scope="col" className="px-3 py-3">
                              Employee ID
                            </th>
                            <th scope="col" className="px-9 py-3">
                              Full Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Department
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Performance
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Account Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Gross Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Net Salary
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-center">
                        <tr className="bg-white border-b capitalize">
                            <th scope="row" className="px-4 capitalize py-4 font-medium text-gray-900 whitespace-nowrap">
                              #1
                            </th>
                            <td className="px-12 py-4">
                              Chimaobi chukwuegbo
                            </td>
                            <td className="px-6 py-4">
                                Frontend
                            </td>
                            <td className="px-6 py-4">
                                4.7
                            </td>
                            <td className="px-6 py-4">
                              123456789
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN250,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN390,210
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                #2
                            </th>
                            <td className="px-12 py-4">
                              charles oriih
                            </td>
                            <td className="px-6 py-4">
                                Frontend
                            </td>
                            <td className="px-6 py-4">
                                4.6
                            </td>
                            <td className="px-6 py-4">
                              4233242324
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN250,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN360,210
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                #3
                            </th>
                            <td className="px-12 py-4">
                            onyinyechi Okeke
                            </td>
                            <td className="px-6 py-4">
                              Frontend
                            </td>
                            <td className="px-6 py-4">
                                4.8
                            </td>
                            <td className="px-6 py-4">
                              787767XXXX
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN250,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN410,500
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #4
                            </th>
                            <td className="px-12 py-4">
                              daniel atuonwu
                            </td>
                            <td className="px-6 py-4">
                                Frontend
                            </td>
                            <td className="px-6 py-4">
                                4.2
                            </td>
                            <td className="px-6 py-4">
                              1376533XXX
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN250,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN275,900
                            </td>
                        </tr>
                        <tr className="border-b capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #5
                            </th>
                            <td className="px-12 py-4 ">
                              fidelis awamba
                            </td>
                            <td className="px-6 py-4">
                              Frontend
                            </td>
                            <td className="px-6 py-4">
                                4.5
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN250,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN310,210
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #6
                            </th>
                            <td className="px-12 py-4">
                              bartholomew alaekwe
                            </td>
                            <td className="px-6 py-4">
                              backend
                            </td>
                            <td className="px-6 py-4">
                                4.7
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN270,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN340,500
                            </td>
                        </tr>
                        <tr className="border-b capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #7
                            </th>
                            <td className="px-12 py-4">
                              famous edoh
                            </td>
                            <td className="px-6 py-4">
                              backend
                            </td>
                            <td className="px-6 py-4">
                              4.4
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN250,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN300,200
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #8
                            </th>
                            <td className="px-12 py-4">
                              vivian ani
                            </td>
                            <td className="px-6 py-4">
                              product design
                            </td>
                            <td className="px-6 py-4">
                                4.6
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN245,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN310,189
                            </td>
                        </tr>
                        <tr className="border-b capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #9
                            </th>
                            <td className="px-12 py-4">
                              newman ogbo
                            </td>
                            <td className="px-6 py-4">
                              product design
                            </td>
                            <td className="px-6 py-4">
                              4.9
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN245,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN370,200
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #10
                            </th>
                            <td className="px-12 py-4">
                              ijeoma mbaronye
                            </td>
                            <td className="px-6 py-4">
                              product design
                            </td>
                            <td className="px-6 py-4">
                                2.0
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN245,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN120,210
                            </td>
                        </tr>
                        <tr className="border-b capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #11
                            </th>
                            <td className="px-12 py-4">
                              victory uwadoka
                            </td>
                            <td className="px-6 py-4">
                              product design
                            </td>
                            <td className="px-6 py-4">
                                4.6
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN245,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN310,210
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              #12
                            </th>
                            <td className="px-12 py-4">
                              queen elliot
                            </td>
                            <td className="px-6 py-4">
                              product design
                            </td>
                            <td className="px-6 py-4">
                                4.5
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN245,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN310,210
                            </td>
                        </tr>
                        <tr className="border-b capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #13
                            </th>
                            <td className="px-12 py-4">
                              elizabeth osuwa
                            </td>
                            <td className="px-6 py-4">
                              product design
                            </td>
                            <td className="px-6 py-4">
                                4.6
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN245,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN320,210
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 capitalize">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #14
                            </th>
                            <td className="px-12 py-4">
                              EMMANUEL AGBOR
                            </td>
                            <td className="px-6 py-4">
                              product design
                            </td>
                            <td className="px-6 py-4">
                                2.1
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN245,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN75,210
                            </td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                              #15
                            </th>
                            <td className="px-12 py-4">
                              JOSEPH ABANOBI
                            </td>
                            <td className="px-6 py-4">
                              WEB 3
                            </td>
                            <td className="px-6 py-4">
                                4.7
                            </td>
                            <td className="px-6 py-4">
                              XXXXX1234
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN255,000
                            </td>
                            <td className="px-6 py-4 uppercase">
                              NGN310,210
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

          </div>
          {/* END: Table development */}

        </div>
    </main>
  )
}

export default MainContainer