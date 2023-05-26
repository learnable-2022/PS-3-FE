/* eslint-disable react/prop-types */
import { MdErrorOutline} from 'react-icons/md';
import {TbGraph} from 'react-icons/tb';
import {BiHomeAlt} from 'react-icons/bi';
import {RiAccountCircleLine} from 'react-icons/ri';
import {MdOutlineSettings} from 'react-icons/md';
import {FiLogOut} from 'react-icons/fi';



function SidebarBtn(props) {
  return (
    <button className='font-semibold bg-transparent hover:bg-[#422FC6] group flex h-8 my-2 w-full items-center py-1 rounded-lg'>
        <span className='text-xl pl-6 bg-transparent text-[#241E4E] group-hover:text-white'> {props.icon} </span>
        <p className="ml-3 text-xs bg-transparent text-[#241E4E] group-hover:text-white"> {props.title} </p>
    </button>
  )
}

function SidebarLogoutBtn(props) {
  return (
    <button className='font-semibold bg-transparent hover:bg-[#DC3545] group flex h-8 my-2 w-full items-center py-1 rounded-lg'>
        <span className='text-xl pl-6 bg-transparent text-[#DC3545] group-hover:text-white'> {props.icon} </span>
        <p className="ml-3 text-xs bg-transparent text-[#DC3545] group-hover:text-white"> {props.title} </p>
    </button>
  )
}

function Aside () {
  return (
    <>
        <div className=" z-2 w-full h-full bg-[#F6F5FF] transition-transform -translate-x-full sm:translate-x-0 flex flex-col justify-between" aria-label="Sidebar">
          <div className="mt-4 px-3 overflow-y-auto bg-transparent">
              <SidebarBtn icon={<BiHomeAlt />} title="Dashboard"/>
              <SidebarBtn icon={<TbGraph />} title="Transactions" />
              <SidebarBtn icon={<RiAccountCircleLine />} title="Account management" />
          </div>
          <div className="px-3 py-4 overflow-y-auto bg-transparent mb-4">
              <SidebarBtn icon={<MdErrorOutline />} title="Policies" />
              <SidebarBtn icon={<MdOutlineSettings />} title="Settings" />
              <SidebarLogoutBtn  icon={<FiLogOut />} title="Log out" />
          </div>        
        </div>
    </>
  )
}

export default Aside