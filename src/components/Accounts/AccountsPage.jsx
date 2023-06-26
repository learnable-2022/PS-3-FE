import "./web3.css";
import React, { useEffect,useState,useRef} from "react";
import abi from "./utilis/send.json";
import { ethers ,} from "ethers";
import {TbCopy} from "react-icons/tb"
import {BiSend} from "react-icons/bi"
import {AiOutlineCloseCircle} from "react-icons/ai"
import LoaderMini from "../tables/LoaderMini"

// const ethers = require("ethers") 
const getEthereumObject = () => window.ethereum;


const findMetaMaskAccount = async () => {
  try {
    
    const ethereum = getEthereumObject();
    /*
    * First make sure we have access to the Ethereum object.
    */
    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    console.log("We have the Ethereum object", ethereum);
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
  
};


function AccountsPage( ) {
    const [currentAccount, setCurrentAccount] = useState("");
  // const [balance, setBalance] = useState('');
  const [address, setAddress] = useState('');
  const [redaddress, setRedaddress] = useState('');  
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [showDiv, setShowDiv] = useState(false);
  const [displayDiv, setDisplayDiv] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [copied, setCopied] = useState(false); 
  const [successModal, setSuccessModal] = useState(false); 
  const textRef = useRef(null);

  useEffect(() => {
    if (successModal) {
      setTimeout(() => {
        setSuccessModal(false);
      }, 2000);
    }
  }, [successModal]);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  const contractABI = abi.abi;
  const contractAddress = "0x1CeC813543d285F6bBF0C1b7067f61c4Dd1C3Bc0"; 

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  
const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

//Gets wallets addres from metamask
const getAddress = async () => {
    try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAddress(accounts[0]);
    const reducedAddress = accounts[0].substring(0,15);
    setRedaddress(reducedAddress);
    // getAccountBalance();  
    
  
  } catch (error) {
    console.error(error);
  }
  
  };
   getAddress()
  
const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
      const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const sendEther = new ethers.Contract(contractAddress, contractABI, signer);
          const transaction = await  sendEther.sendEth(recipient, {
            value: ethers.utils.parseEther(amount)
          });
          await transaction.wait();}
  
      console.log('Ether sent successfully!');
      setLoading(false)
      handleClose();
      setSuccessModal(true);
      setRecipient(''); // Clear recipient input field
      setAmount(''); 
      // You can perform additional actions or show a success message to the user
    } catch (error) {
      console.error('Error sending Ether:', error);
      setLoading(flase)
      // Handle the error gracefully and show an error message to the user
    }
  };

  const handleClick = () => {
    setShowDiv(true);
    
  };
  const handleAdd = () => {
    setDisplayDiv(true);
    
  };
  
  const handleClose = () => {
    setShowDiv(false);
    setDisplayDiv(false)
  };

  const copyText = () => {
    if (textRef.current) {
      const textToCopy = textRef.current.innerText;

      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // alert('Text copied :', textToCopy);
          // You can show a success message to the user if needed
          handleClose();
          setCopied(true)
        })
        .catch((error) => {
          console.error('Error copying text to clipboard:', error);
          // Handle the error gracefully and show an error message to the user
        });
    }
  };
 
  useEffect(() => {
    const fetchData = async () => {
      const account = await findMetaMaskAccount();
      if (account !== null) {
        setCurrentAccount(account);
        console.log('Acc',account);
      }

    };
   
     fetchData();
  }, []);
 
  return (
  <>
  <div className="App">
      
      <div className="dataContainer">
      <div className="conn">
              {! currentAccount ? (
               
            <button type="button" className='connect' onClick={connectWallet} >Connect Wallet</button>
            ) : (
              <button className="btn-connect" onClick={null}>
              Connected
              <span className="address">{redaddress}</span>
            </button> 
            )}
        </div>
      
       
     <div className="flex flex-col mt-10 mx-2 bg-primary text-white rounded-lg h-40">
      <div className="text-center">
          <h2 className="text-center font-bold py-4">Pay ETH</h2>
      </div>
        <div className="flex justify-between text-gray-600 font-bold text-lg px-4">
          <button className="bg-white px-2 py-2" onClick={handleAdd}>Add funds</button>
          <button className="bg-white px-2 py-2" onClick={handleClick}>Send funds</button>
          
        </div>
       

     </div>
     {showDiv &&  
        <div  className='md:w-screen md:h-screen fixed top-0 left-0 flex items-center justify-center z-10'>
                <div className='w-screen h-screen bg-gray-500 flex justify-center items-center bg-opacity-70'>
                    <div className='w-[95%] md:w-4/5 sm:h-[35%] h-1/2 rounded-lg'>
                        
                        <section  className='flex flex-col justify-between items-center py-6 sm:py-4 bg-white h-full rounded-lg px-4 bg-opacity-100'>
                            <div className='text-[#30343F] mb-1 text-center'>
                                <h2 className=' text-lg font-bold text-[#0052CC]'>Pay Employee</h2> 
                            </div>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-y-2 md:gap-y-3 sm:gap-y-3 bg-white overflow-y-auto overflow-hidden'>

                                <div className='w-full flex sm:justify-end justify-center items-center sm:pr-[6%] pr-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
                                        <label htmlFor="address" className="block mb-1 text-xs font-semibold text-[#241E4E] ">Recipient Address: <span className=" text-red-500 ml-[2px]">*</span></label>
                                        <input 
                                            type="text" 
                                            id="address" 
                                            placeholder="Enter wallet address" 
                                            required
                                            value={recipient} 
                                            onChange={handleRecipientChange} 
                                            className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                    </div>
                                </div>

                                <div className='w-full flex sm:justify-start justify-center items-center sm:pl-[6%] pl-0'>
                                    <div className=' w-[90%] sm:w-3/4 '>
                                        <label htmlFor="amount" className="block mb-1 text-xs font-semibold text-[#241E4E] ">Amount (ETH) <span className=" text-red-500">*</span></label>
                                        <input 
                                            type="text" 
                                            id="amount" 
                                            placeholder="Enter amount(netsalary equivalent) " 
                                            required
                                            value={amount} 
                                            onChange={handleAmountChange} 
                                            className="bg-gray-50 border border-[#A396FF] outline-1 outline-[#A396FF] text-[#241E4E] sm:text-sm rounded-lg focus:ring-[#A396FF] focus:border-[#A396FF] block w-full p-2 bg-transparent "/>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[90%] sm:w-full grid grid-cols-2 place-items-center text-sm text-white mt-4 ">
                                <div className='w-full flex sm:justify-end justify-center items-center sm:pr-[6%] pr-0'>
                                    <div className='w-full sm:w-3/4 '>
                                        <button onClick={handleSubmit}
                                            className="bg-[#0052CC] hover:bg-blue-600 py-2 w-20  px-4 flex items-center justify-center rounded-md">
                                            {/* <span className="mt-[2px] text-lg mr-1"><BiSend /></span> */}
                                            {/* Send */}
                                            {loading ? <LoaderMini /> : <><span className=" text-lg mr-1"><BiSend /></span> Send </>}
                                        </button>
                                    </div>
                                </div>
                                <div className='w-full flex sm:justify-start justify-center items-center sm:pl-[6%] pl-0'>
                                    <div className='w-full sm:w-3/4 flex justify-end'>
                                        <span 
                                            onClick={handleClose}
                                            className=" w-24 bg-red-600 hover:bg-red-500 py-2 px-4 flex items-start justify-center rounded-md">
                                            <span className="mt-[2px] text-lg mr-1"><AiOutlineCloseCircle /></span> 
                                            Close
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </section>
                        
                        </div>
                    </div>
         </div>
     
        }
        

        {displayDiv && <div  className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-10'>
          <div  className='w-screen h-screen absolute bg-gray-500 flex justify-center items-center bg-opacity-70'>
            <div className='w-[95%] md:w-4/5 h-[35%] rounded-lg border'>
            <article 
                className='flex flex-col justify-between bg-white h-full rounded-lg px-4 pb-4'
            >
                <div className='text-[#30343F] flex justify-center items-center pt-2 '>
                  <h2 className=' text-lg text-primary font-bold'>Fund Ethereum Account</h2>
                </div>
                <div className=' w-full'>
                  <div className="flex flex-col justify-center text-center items-center">
                    <p className="font-semi-bold text-lg">To fund this account, here is your Account wallet address (<span className="font-semi-bold text-gray-500">SepoliaETH test network</span>) :</p>
                    <p className="text-primary" ref={textRef} ><b>{address}</b></p>
                    
                  
                  </div>
                </div>
                <div className="w-full grid grid-cols-2 text-sm text-white">

                    <div className="w-full ">
                      <button 
                            onClick={handleClose}
                            className=" bg-[#DC3545] hover:bg-red-500 py-2 px-4 flex items-start justify-center rounded-md">
                            <span className="mt-[2px] text-lg mr-1"><AiOutlineCloseCircle /></span>
                            Close
                        </button>
                    </div>
                    <div className=" w-full flex justify-end items-center ">
                        <button onClick={copyText}
                            className="bg-gray-400 hover:bg-gray-500 py-2  px-4 flex items-start justify-center rounded-md">
                            <span className="mt-[2px] text-lg mr-1"><TbCopy /></span> 
                            Copy
                        </button>
                    </div>
                </div>
            </article>
            </div>
        </div>
        </div>}


      </div>
    </div>


    {successModal && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-3 shadow-md rounded-lg">
              <div className="flex items-center justify-center text-sm text-[#298535] rounded-lg text-center">
                <p >Payment Successful</p>
              </div>
            </div>
          )}
    {copied && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-3 shadow-md rounded-lg">
              <div className="flex items-center justify-center text-sm text-gray-500 rounded-lg text-center">
                <p >Address Copied</p>
              </div>
            </div>
          )}
  </>
  )
}

export default AccountsPage