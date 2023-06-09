// eslint-disable-next-line no-unused-vars
import React from 'react'
// import Logo from "../assets/images/Logo.png"


function LoginLogo() {
    return(
        <div  className='md:w-screen md:h-screen fixed top-0 left-0 flex items-center justify-center z-10'>
                <div className='w-screen h-screen bg-gray-500 flex justify-center items-center bg-opacity-70'>
                    <div className='sm:w-4/5 sm:h-4/5 w-[90%] h-[90%] rounded-lg'>
                        
                        <form  className='flex flex-col justify-between py-2 bg-white h-full rounded-lg px-4'>
                            <div className='text-[#30343F]'>
                                <h2 className=' text-lg font-bold'>Add Employee</h2> 
                                <p className='text-sm mt-1'>Add a new employee account </p>
                            </div>
                            <div className=' w-full grid grid-cols-1  sm:grid-cols-2 md:gap-y-3 sm:gap-y-2 bg-white place-content-stretch border border-purple-500 '>

                                <div className='w-full flex justify-center items-center  border border-green-500'>
                                    <div className=' w-[90%] sm:w-3/4 border border-pink-500'>
                                    <label htmlFor="firstName" className="block mb-1 text-xs font-semibold text-[#241E4E] ">First Name <span className=" text-red-500 ml-[2px]">*</span></label>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        id="firstName" 
                                        placeholder="Enter First Name" 
                                        required
                                        // value={addEmployeeData.firstName} 
                                        // onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                    </div>
                                </div>

                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-[90%] sm:w-3/4 '>
                                        <label htmlFor="lastName" className="block mb-1 text-xs font-semibold text-[#241E4E] ">Last Name <span className=" text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            name="lastName" 
                                            id="lastName" 
                                            placeholder="Enter Last Name" 
                                            required
                                            // value={addEmployeeData.lastName} 
                                            // onChange={handleChange} 
                                            className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>

                                    </div>
                                </div>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-[90%] sm:w-3/4 '>
                                        <label htmlFor="employeeId" className="block mb-1 text-xs font-semibold text-[#241E4E] ">employee Id <span className=" text-red-500">*</span></label>
                                        <input 
                                            type="number" 
                                            name="employeeId" 
                                            id="employeeId" 
                                            placeholder="Enter Employee Id" 
                                            required
                                            // value={addEmployeeData.employeeId} 
                                            // onChange={handleChange} 
                                            className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                    </div>

                                    </div>
                                <div className='w-3/4'>
                                    <label htmlFor="email" className="block mb-1 text-xs font-semibold text-[#241E4E] ">Employee Email <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Enter Employee Email"  
                                        // required
                                        // value={addEmployeeData.email} 
                                        // onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="department" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Department <span className=" text-red-500">*</span></label>
                                    <select 
                                        type="text" 
                                        name="department" 
                                        id="department" 
                                        // required
                                        // value={addEmployeeData.department} 
                                        // onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent ">
                                            <option value="">-- Select Department --</option>
                                            <option value="">Scuudu</option>
                                           
                                        </select>
                                </div>
                            
                                <div className='w-3/4'>
                                    <label htmlFor="performance" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Performance (between 0 and 5.0) <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="number" 
                                        name="performance" 
                                        id="performance" 
                                        pattern="[0-9]+([.,][0-9]+)?"
                                        step="0.1"
                                        min="0"
                                        max="5"
                                        placeholder="Enter Performance" 
                                        // required
                                        // value={addEmployeeData.performance} 
                                        // onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="grossSalary" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Gross Salary <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="number" 
                                        name="grossSalary" 
                                        id="grossSalary" 
                                        placeholder="Enter Basic Salary" 
                                        // required
                                        // value={addEmployeeData.grossSalary} 
                                        // onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="month" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Month for Salary <span className=" text-red-500">*</span></label>
                                    <select 
                                        type="text" 
                                        name="month" 
                                        id="month" 
                                        // required
                                        // value={addEmployeeData.month} 
                                        // onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent ">
                                            <option value="">-- Select Month --</option>
                                            <option value="">June</option>
                                            <option value="">July</option>
                                            
                                        </select>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="accountNumber" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Bank Account Number <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="number" 
                                        name="accountNumber" 
                                        id="accountNumber" 
                                        placeholder="Enter Account Number"  
                                        // required
                                        // value={addEmployeeData.accountNumber} 
                                        // onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                
                                <div className='w-3/4'>
                                    <label htmlFor="bankCode" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Bank Name <span className=" text-red-500">*</span></label>
                                    <select 
                                        type="number" 
                                        name="bankCode" 
                                        id="bankCode" 
                                        // required
                                        // value={addEmployeeData.bankCode} 
                                        // onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent ">
                                            <option value="">-- Select Employee bank --</option>
                                            <option value="">Access</option>
                                            <option value=""> UBA bank</option>
                                            
                                        </select>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 text-sm text-white">

                                <div className="w-3/4 ">
                                <span 
                                    // onClick={props.toggleAddEmployee}
                                    className=" w-24 bg-red-600 hover:bg-red-500 py-2 px-4 flex items-start justify-center rounded-md">
                                    {/* <span className="mt-[2px] text-lg mr-1"><ImCancelCircle /></span>  */}
                                    Cancel
                                </span>
                                </div>
                                <div className=" w-3/4 flex justify-end items-center ">
                                    <button
                                        className="bg-[#422FC6] hover:bg-blue-600 py-2  px-4 flex items-start justify-center rounded-md">
                                        {/* <span className="mt-[2px] text-lg mr-1"><BiUserPlus /></span>  */}
                                        Add Employee
                                    </button>
                                </div>
                            </div>
                        </form>
                        
                        </div>
                    </div>
                    </div>
    )
}

export default LoginLogo