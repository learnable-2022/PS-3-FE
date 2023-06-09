/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import {BiUserPlus} from 'react-icons/bi'
import {ImCancelCircle} from 'react-icons/im'
import { setAuthToken } from './setAuthToken'

function AddEmployee(props) {
    const [successModal, setSuccessModal] = useState(false); 
    const [addEmployeeData, setAddEmployeeData] = useState(
        {
            firstName: '',
            lastName: '',
            department: '',
            email: '',
            performance: '',
            bankCode: '',
            employeeId: '',
            accountNumber: '',
            month: '',
            grossSalary: '',
        }
      )

      useEffect(() => {
        if (successModal) {
          setTimeout(() => {
            setSuccessModal(false);
          }, 2000);
        }
      }, [successModal]);

      function handleChange(event) {
        const {name, value} = event.target
        let parsedValue = value;
        if (name === 'performance' || name === 'employeeId' || name === 'grossSalary') {
            // Parse the value to number
            parsedValue = parseFloat(value);
          }
        setAddEmployeeData(prevaddEmployeeData => {
            return {
                ...prevaddEmployeeData,
                [name]: parsedValue,
                // [name]: value,
            }
        })
      }


  function handleSubmit(e) {
    e.preventDefault();
    // console.log(addEmployeeData);
    fetch('https://autopay-qv54.onrender.com/api/v1/employee', {
    method: 'POST',
    headers: { 
        'Authorization': `${setAuthToken()}`, 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(addEmployeeData)
  })

  .then(response => {
    console.log('Response status:', response.status);
    props.fetchData();
    setSuccessModal(true);
    return response.json();
  })
    .then(data => {
        console.log('Data:', data);
        // setResMessage((prevmessage) => data.message);
        props.toggleAddEmployee();
        
        // console.log(resMessage);
    })
    
    .catch(error => {
      console.log(error);
    });
   
  }
    
      // eslint-disable-next-line no-unused-vars
      const monthdetail = [
          { val: 'January', label: 'January' },
          { val: 'February', label: 'February'},
          { val: 'March', label: 'March'}, 
          { val: 'April', label: 'April'},
          { val: 'May', label: 'May'},
          { val: 'June', label: 'June' },
          { val: 'July', label: 'July' },
          { val: 'August', label: 'August' },
          { val: 'September', label: 'September' },
          { val: 'October', label: 'October'}, 
          {val: 'November', label: 'November'},
          { val: 'December', label: 'December'}
      ];
      const departments = [
          { val: 'Learnable', label: 'Learnable' },
          { val: 'Dev Studio', label: 'Dev Studio'},
          { val: 'Scuudu', label: 'Scuudu'}, 
          { val: 'UpSkill', label: 'UpSkill'}
      ];

      const banks = [
        { code: '044', name: 'Access Bank' },
        { code: '063', name: 'Access Bank (Diamond)' },
        { code: '035A', name: 'ALAT by WEMA' },
        { code: '023', name: 'Citibank Nigeria' },
        { code: '050', name: 'Ecobank Nigeria' },
        { code: '070', name: 'Fidelity Bank Plc' },
        { code: '011', name: 'First Bank of Nigeria' },
        { code: '214', name: 'First City Monument Bank' },
        { code: '501', name: 'FSDH Merchant Bank Limited' },
        { code: '00103', name: 'Globus Bank' },
        { code: '058', name: 'Guaranty Trust Bank Plc' },
        { code: '030', name: 'Heritage Bank' },
        { code: '301', name: 'Jaiz Bank' },
        { code: '082', name: 'Keystone Bank Ltd' },
        { code: '50211', name: 'Kuda Bank' },
        { code: '526', name: 'Parallex Bank' },
        { code: '076', name: 'Polaris Bank' },
        { code: '101', name: 'Providus Bank' },
        { code: '039', name: 'Stanbic IBTC Bank' },
        { code: '068', name: 'Standard Chartered Bank' },
        { code: '232', name: 'Sterling Bank Plc' },
        { code: '100', name: 'Suntrust Bank' },
        { code: '302', name: 'TAJ Ban' },
        { code: '102', name: 'Titan Bank' },
        { code: '032', name: 'Union Bank Nigeria Plc' },
        { code: '033', name: 'United Bank for Africa Plc' },
        { code: '215', name: 'Unity Bank Plc' },
        { code: '035', name: 'WEMA Bank Plc' },
        { code: '057', name: 'Zenith Bank' }
      ]

    //   onClick={props.toggleAddEmployee} 
  return ( 
    <>
        { props.showaddEmp ? 
            <div  className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-10'>
                <div className='w-screen h-screen absolute bg-gray-500 flex justify-center items-center bg-opacity-70'>
                    <div className='w-4/5 h-4/5 rounded-lg'>
                        
                        <form onSubmit={handleSubmit} className='flex flex-col justify-between py-2 bg-white h-full rounded-lg pl-4'>
                            <div className='text-[#30343F]'>
                                <h2 className=' text-lg font-bold'>Add Employee</h2> 
                                <p className='text-sm mt-1'>Add a new employee account </p>
                            </div>
                            <div className=' w-full grid grid-cols-2 gap-y-3 bg-white'>

                                <div className='w-3/4'>
                                    <label htmlFor="firstName" className="block mb-1 text-xs font-semibold text-[#241E4E] ">First Name <span className=" text-red-500 ml-[2px]">*</span></label>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        id="firstName" 
                                        placeholder="Enter First Name" 
                                        required
                                        value={addEmployeeData.firstName} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="lastName" className="block mb-1 text-xs font-semibold text-[#241E4E] ">Last Name <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        id="lastName" 
                                        placeholder="Enter Last Name" 
                                        required
                                        value={addEmployeeData.lastName} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="employeeId" className="block mb-1 text-xs font-semibold text-[#241E4E] ">employee Id <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="number" 
                                        name="employeeId" 
                                        id="employeeId" 
                                        placeholder="Enter Employee Id" 
                                        required
                                        value={addEmployeeData.employeeId} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="email" className="block mb-1 text-xs font-semibold text-[#241E4E] ">Employee Email <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Enter Employee Email"  
                                        required
                                        value={addEmployeeData.email} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="department" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Department <span className=" text-red-500">*</span></label>
                                    <select 
                                        type="text" 
                                        name="department" 
                                        id="department" 
                                        required
                                        value={addEmployeeData.department} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent ">
                                            <option value="">-- Select Department --</option>
                                            {departments.map((department) => (
                                            <option 
                                                key={department.val} 
                                                value={department.val}
                                                // selected={addEmployeeData.department === department.val}
                                                >
                                                {department.label}
                                            </option>
                                            ))}
                                        </select>
                                </div>
                            
                                <div className='w-3/4'>
                                    <label htmlFor="performance" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Performance <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="number" 
                                        name="performance" 
                                        id="performance" 
                                        placeholder="Enter Performance" 
                                        required
                                        value={addEmployeeData.performance} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="grossSalary" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Gross Salary <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="number" 
                                        name="grossSalary" 
                                        id="grossSalary" 
                                        placeholder="Enter Basic Salary" 
                                        required
                                        value={addEmployeeData.grossSalary} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="month" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Month for Salary <span className=" text-red-500">*</span></label>
                                    <select 
                                        type="text" 
                                        name="month" 
                                        id="month" 
                                        required
                                        value={addEmployeeData.month} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent ">
                                            <option value="">-- Select Month --</option>
                                            {monthdetail.map((onemonth) => (
                                            <option 
                                                key={onemonth.val} 
                                                value={onemonth.val}
                                                // selected={addEmployeeData.month === onemonth.val}
                                                >
                                                {onemonth.label}
                                            </option>
                                            ))}
                                        </select>
                                </div>
                                <div className='w-3/4'>
                                    <label htmlFor="accountNumber" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Bank Account Number <span className=" text-red-500">*</span></label>
                                    <input 
                                        type="number" 
                                        name="accountNumber" 
                                        id="accountNumber" 
                                        placeholder="Enter Account Number"  
                                        required
                                        value={addEmployeeData.accountNumber} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                </div>
                                
                                <div className='w-3/4'>
                                    <label htmlFor="bankCode" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Bank Name <span className=" text-red-500">*</span></label>
                                    <select 
                                        type="number" 
                                        name="bankCode" 
                                        id="bankCode" 
                                        required
                                        value={addEmployeeData.bankCode} 
                                        onChange={handleChange} 
                                        className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent ">
                                            <option value="">-- Select Employee bank --</option>
                                            {banks.map((bank) => (
                                            <option 
                                                key={bank.code} 
                                                value={bank.code}
                                                // selected={addEmployeeData.bankCode === bank.code}
                                                >
                                                {bank.name}
                                            </option>
                                            ))}
                                        </select>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 text-sm text-white">

                                <div className="w-3/4 ">
                                <span 
                                    onClick={props.toggleAddEmployee}
                                    className=" w-24 bg-red-600 hover:bg-red-500 py-2 px-4 flex items-start justify-center rounded-md">
                                    <span className="mt-[2px] text-lg mr-1"><ImCancelCircle /></span> 
                                    Cancel
                                </span>
                                </div>
                                <div className=" w-3/4 flex justify-end items-center ">
                                    <button
                                        className="bg-[#422FC6] hover:bg-blue-600 py-2  px-4 flex items-start justify-center rounded-md">
                                        <span className="mt-[2px] text-lg mr-1"><BiUserPlus /></span> 
                                        Add Employee
                                    </button>
                                </div>
                            </div>
                        </form>
                        
                        </div>
                    </div>
                    </div>
        : null} 
        {successModal && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 shadow-md rounded-lg">
              <div className="flex items-center justify-center text-lg text-primary rounded-lg text-center">
                <p >Successfully Added <span className='ml-2'>{`${addEmployeeData.firstName} ${addEmployeeData.lastName}`}</span></p>
              </div>
            </div>
          )}
    </>
  )
}

export default AddEmployee