import {useState} from "react"
import Logo from "../assets/images/Logo.png"
import {MdOutlineVisibility, MdOutlineVisibilityOff} from "react-icons/md"
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState(false)
  // const [signUpBtn, setSignUpBtn] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState(
    {
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
    // if(formData.email === "" || formData.password === ""){
    //   return setSignUpBtn(true)
    // }
  }
  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
        if (isPasswordVisible === true) {
          setIsPasswordVisible(false)
        }
    fetch('https://autopay-qv54.onrender.com/api/v1/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigate("/")
      setFormData({
        email: "", 
        password: ""
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    })
    .catch(error => console.error(error));
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 flex justify-between flex-col h-screen">
        <nav className="bg-white w-full h-14 z-20 shadow-md ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center">
                  <img src={Logo} className="h-5 mr-3" alt="AutoPay Logo" />
              </a>
          </div>
        </nav>
        <div className="flex max-w-screen-xl flex-col items-center justify-center px-5 py-6 mx-auto ">
          <h1 className="text-xl text-[#422FC6] font-bold leading-tight tracking-tight md:text-2xl mb-3">
              Sign Up
          </h1>
          <div className="w-[400px] border bg-white rounded-lg shadow-md  md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-5 space-y-4 md:space-y-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <h3 className="text-lg font-bold leading-tight tracking-tight text-gray-600 md:text-lg">
                        Unlock Performance. Elevate Rewards.
                    </h3>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email <span className=" text-red-500">*</span></label>
                            <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              placeholder="name@company.com" 
                              autoComplete="off"
                              required
                              value={formData.email} 
                              onChange={handleChange} 
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password <span className=" text-red-500">*</span></label>
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                <span className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                  onClick={togglePasswordVisibility}>
                                  {isPasswordVisible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                                </span>
                            </div>
                        </div>
                      
                        {/*  */}
                        <button type="submit" className={`w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#422FC6] `}>Sign Up</button>
                        <p className="text-sm font-light text-gray-500">
                          Aleady have an account? <Link to="/" className="ml-2 font-medium text-primary-600 hover:underline">Sign In</Link>
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