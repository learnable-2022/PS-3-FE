import {useState} from "react"
import Logo from "../assets/images/Logo.png"
import {MdOutlineVisibility, MdOutlineVisibilityOff} from "react-icons/md"
import {RiErrorWarningLine} from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom";
import LoaderMini from "./tables/LoaderMini";

function SignUp(props) {
  const [networkError, setNetworkError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState(
    {
      firstName: "", 
      lastName: "", 
      email: "", 
      password: ""
    }
  )

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
    
  }
  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (isPasswordVisible === true) {
      setIsPasswordVisible(false)
    }
    // Check if the user is connected to the internet
    if (!navigator.onLine) {
      setLoading(false);
      setNetworkError("Please check your internet connection.");
      return;
    }
    fetch('https://autopay-qv54.onrender.com/api/v1/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      props.showVerifyMessage(); 
      navigate("/")
      setFormData({
        firstName: "", 
        lastName: "",
        email: "", 
        password: ""
      });
      
    })
    .catch(error => {
      setLoading(false);
      console.error(error); 
    });
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
      <section className="bg-gray-50 flex justify-between flex-col md:h-screen">
        <nav className="bg-white w-full h-14 z-20 shadow-md ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-start mx-auto p-4">
              <span className="flex items-center">
                  <img src={Logo} className="h-5 mr-3" alt="AutoPay Logo" />
              </span>
          </div>
        </nav>
        <div className="flex max-w-screen-xl flex-col items-center justify-center px-5 py-6 mx-auto ">
          <h1 className="text-2xl text-[#422FC6] font-bold leading-tight tracking-tight md:text-3xl mb-3">
              Sign Up
          </h1>
          <div className="md:w-[400px] border bg-white rounded-lg shadow-md  md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-4 space-y-3 md:space-y-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                        <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-600 md:text-lg text-center">
                        Unlock Performance. Elevate Rewards.
                    </h3>
                    {networkError === null ? null :
                    <p className="text-sm h-1 text-red-500 font-semibold flex justify-center items-center"><span className="mr-1"><RiErrorWarningLine /></span>{networkError}</p>}
                        <div>
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 ">First Name <span className=" text-red-500">*</span></label>
                            <input 
                              type="text" 
                              name="firstName" 
                              id="firstName" 
                              placeholder="Enter First Name" 
                              autoComplete="off"
                              required
                              value={formData.firstName} 
                              onChange={handleChange} 
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-2"/>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name <span className=" text-red-500">*</span></label>
                            <input 
                              type="text" 
                              name="lastName" 
                              id="lastName" 
                              placeholder="Enter Last Name" 
                              autoComplete="off"
                              required
                              value={formData.lastName} 
                              onChange={handleChange} 
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-2"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email <span className=" text-red-500">*</span></label>
                            <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              placeholder="name@email.com" 
                              autoComplete="off"
                              required
                              value={formData.email} 
                              onChange={handleChange} 
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-2"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password <span className=" text-red-500">*</span></label>
                            <div className="relative w-full">
                              <input 
                                type={isPasswordVisible ? "text" : "password"}
                                // type="password" 
                                name="password" 
                                id="password" 
                                placeholder="••••••••" 
                                required 
                                autoComplete="off"
                                value={formData.password} 
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-2" />
                                <span className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                  onClick={togglePasswordVisibility}>
                                  {isPasswordVisible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                                </span>
                            </div>
                        </div>
                      
                        {/*  */}
                        <button type="submit" className={`w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#422FC6] `}>
                        {loading ? 
                          <LoaderMini/> 
                          : "Sign Up"}
                        </button>
                        <p className="text-sm font-light text-gray-500">
                          Aleady have an account? <Link to="/" className="ml-2 font-bold text-primary-600 hover:underline">Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <footer className="flex items-center justify-end self-end text-sm mr-5 mb-5 text-[#141619]">
          <p>Privacy policy</p>
          <span className="mx-3 text-slate-500" >|</span>
          <p>Terms and conditions</p>
        </footer>
      </section>
    </>
  )
}

export default SignUp