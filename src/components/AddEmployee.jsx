
import React, {useState, useEffect} from 'react'
import {FiUserCheck} from 'react-icons/fi'
import {ImCancelCircle} from 'react-icons/im'
import AuthTokenSet from './AuthTokenSet'
import LoaderMini from './tables/LoaderMini';

function AddEmployee(props) {
    const [successModal, setSuccessModal] = useState(false); 
    const [loading, setLoading] = useState(false); 
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
    setLoading(true)
    // console.log(addEmployeeData);
    fetch('https://autopay-qv54.onrender.com/api/v1/employee', {
    method: 'POST',
    headers: { 
        'Authorization': `${AuthTokenSet()}`, 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(addEmployeeData)
  })

  .then(response => {
    // console.log('Response status:', response.status);
    props.fetchData();
    setSuccessModal(true);
    return response.json();
  })
    .then(data => {
        // console.log('Data:', data);
        props.toggleAddEmployee();
        setLoading(false)
        
        
        // console.log(resMessage);
    })
    
    .catch(error => {
      console.log(error);
      setLoading(false)
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

  return ( 
    <>
        { props.showaddEmp ? 
            <div  className='md:w-screen md:h-screen fixed top-0 left-0 flex items-center justify-center z-10'>
                <div className='w-screen h-screen bg-gray-500 flex justify-center items-center bg-opacity-70' onClick={props.toggleAddEmployee}>
                    <div className='sm:w-4/5 sm:h-4/5 w-[90%] h-[90%] rounded-lg'>
                        
                        <form onSubmit={handleSubmit} onClick={(event) => event.stopPropagation()} className='flex flex-col justify-between items-center py-6 sm:py-4 bg-white h-full rounded-lg px-4 bg-opacity-100'>
                            <div className='text-[#30343F] mb-1 text-center'>
                                <h2 className=' text-lg font-bold text-[#0052CC]'>Add Employee</h2> 
                                <p className='text-sm mt-1'>Add new employee details </p>
                            </div>
                            <div className='w-full grid grid-cols-1 border border-[#0052CC] sm:border-none sm:grid-cols-2 gap-y-2 md:gap-y-3 sm:gap-y-3 bg-white overflow-y-auto overflow-hidden'>

                                <div className='w-full flex sm:justify-end justify-center items-center sm:pr-[6%] pr-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
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
                                </div>

                                <div className='w-full flex sm:justify-start justify-center items-center sm:pl-[6%] pl-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
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
                                </div>

                                <div className='w-full flex sm:justify-end justify-center items-center sm:pr-[6%] pr-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
                                        <label htmlFor="employeeId" className="block mb-1 text-xs font-semibold text-[#241E4E] ">Employee Id <span className=" text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            name="employeeId" 
                                            id="employeeId" 
                                            title="Enter a 4-digit Employee Id."
                                            pattern="[0-9]{4}"
                                            placeholder="Enter Employee Id" 
                                            required
                                            value={addEmployeeData.employeeId} 
                                            onChange={handleChange} 
                                            className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                    </div>
                                </div>

                                <div className='w-full flex sm:justify-start justify-center items-center sm:pl-[6%] pl-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
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
                                </div>

                                <div className='w-full flex sm:justify-end justify-center items-center sm:pr-[6%] pr-0'>
                                    <div className='w-[90%] sm:w-3/4'>
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
                                </div>
                            
                                <div className='w-full flex sm:justify-start justify-center items-center sm:pl-[6%] pl-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
                                        <label htmlFor="performance" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Performance (0 to 5.0) <span className=" text-red-500">*</span></label>
                                        <input 
                                            type="number" 
                                            name="performance" 
                                            id="performance" 
                                            pattern="[0-9]+([.,][0-9]+)?"
                                            step="0.1"
                                            min="0"
                                            max="5"
                                            placeholder="Enter Performance" 
                                            required
                                            value={addEmployeeData.performance} 
                                            onChange={handleChange} 
                                            className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                    </div>
                                </div>

                                <div className='w-full flex sm:justify-end justify-center items-center sm:pr-[6%] pr-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
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
                                </div>

                                <div className='w-full flex sm:justify-start justify-center items-center sm:pl-[6%] pl-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
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
                                </div>

                                <div className='w-full flex sm:justify-end justify-center items-center sm:pr-[6%] pr-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
                                        <label htmlFor="accountNumber" className="block mb-1 text-xs font-semibold text-[#241E4E] "> Bank Account Number <span className=" text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            name="accountNumber" 
                                            id="accountNumber" 
                                            title="Enter a 10-digit Account number."
                                            pattern="[0-9]{10}"
                                            placeholder="Enter Account Number"  
                                            required
                                            value={addEmployeeData.accountNumber} 
                                            onChange={handleChange} 
                                            className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                    </div>
                                </div>
                                
                                <div className='w-full flex sm:justify-start justify-center items-center sm:pl-[6%] pl-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
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
                                                    >
                                                    {bank.name}
                                                </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-full grid grid-cols-2 place-items-center text-sm text-white mt-4 border border-pink-500">
                                <div className='w-full flex sm:justify-end justify-center items-center sm:pr-[6%] pr-0 border border-blue-500'>
                                    <div className='w-full sm:w-3/4 '>
                                        <button
                                            className="bg-[#0052CC] hover:bg-blue-600 py-2 w-20  px-4 flex items-center justify-center rounded-md">
                                            
                                            {loading ? <LoaderMini /> : <><span className=" text-lg mr-1"><FiUserCheck /></span> Save </>}
                                        </button>
                                    </div>
                                </div>
                                <div className='w-full flex sm:justify-start justify-center items-center sm:pl-[6%] pl-0 border border-green-500'>
                                    <div className='w-full sm:w-3/4 flex justify-end border-blue-500'>
                                        <span 
                                            onClick={props.toggleAddEmployee}
                                            className=" w-24 bg-red-600 hover:bg-red-500 py-2 px-4 flex items-start justify-center rounded-md">
                                            <span className="mt-[2px] text-lg mr-1"><ImCancelCircle /></span> 
                                            Cancel
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </form>
                        
                        </div>
                    </div>
                    </div>
        : null} 
        {successModal && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-3 shadow-md rounded-lg">
              <div className="flex items-center justify-center text-sm text-[#298535] rounded-lg text-center">
                <p >Successfully Added <span className='ml-1'>{`${addEmployeeData.firstName} ${addEmployeeData.lastName}`}</span></p>
              </div>
            </div>
          )}
    </>
  )
}

export default AddEmployee