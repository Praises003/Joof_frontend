import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import noblecastle from '../assets/logo4.jpg'
import {FaTimes, FaBars} from 'react-icons/fa'

import {TfiFacebook, TfiInstagram} from 'react-icons/tfi'
import {FaXTwitter} from 'react-icons/fa6'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";

const NavComponent = () => {
  const [navList, setNavList] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navToggle = () => {
    setNavList(!navList)
  }
  console.log(isOpen)
  return (
    <nav className=' flex justify-between items-center py-5 px-3  mb-0.5 shadow-lg sticky top-0 z-20 bg-black text-white'>
        <img src={noblecastle} alt="" className='border h-20 md:w-1/5  w-1/3'/>
        <div className="hidden lg:block">
        <div className="flex justify-between items-center ">
            <Link to={"/"} className='block  font-bold text-lg'>Home</Link>
            <Link to={"/about"} className='block px-8 font-bold text-lg'>About</Link>
            {/* <Link to={"/service"} className='block  font-bold text-xl'>Service</Link> */}
            <Link to={"/gallery"} className='block pl-2 pr-4 font-bold text-lg'>Gallery</Link>
            <Link to={"/event"} className='block pl-2 pr-4  font-bold text-lg'>Event Packages</Link>
            <div className="flex justify-start items-center">
              
              <Link to={"/corporate"}  className='block px-8  font-bold text-lg'>Corporate</Link>
              {isOpen ? <IoIosArrowUp onClick={toggleDropdown} className='-ml-6 mr-6 w-3/4 h-5' /> : <IoIosArrowDown onClick={toggleDropdown} className='-ml-6 mr-6 w-3/4 h-5' />}
            </div>
            
            <Link to={"/contact"} className='block font-bold text-lg'>Contact Us</Link>

          
          
        </div>

        </div>
        

        <div className="hidden lg:block">
            <Link to={"/calendar"} className='bg-yellow-500 px-3 py-3 text-white text-lg font-bold  rounded-md'>Book An Event</Link>
        </div>

        <div className="">
        <Link to={"/dashboard"} className='hidden lg:block pl-2 pr-4  font-bold text-lg'><FaUserLarge color='white' size={20} /></Link>
        </div>

        <div className=" w-1/12 lg:block hidden">
         <div className="flex justify-between items-center p-2 ">
              <TfiFacebook size={20} className='text-yellow-500' />
              <TfiInstagram size={20} className='text-yellow-500' />
              <FaXTwitter size={20} className='text-yellow-500' />

            </div>

        </div>

        

        <div  className="lg:hidden">
          <div onClick={navToggle} className="block">
            {navList ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        
        <div  className={`${navList ? 'block absolute top-28 left-0  z-10 text-white w-full bg-black py-4 px-2.5' : 'hidden'}`}>
            <Link to={"/"} className='block pb-4 font-medium text-lg'>Home</Link>
            <Link to={"/about"} className='block pb-4 font-medium text-lg'>About</Link>
            {/* <Link to={"/service"} className='block pb-4 font-medium text-lg'>Service</Link> */}
            <Link to={"/gallery"} className='block pb-4 font-medium text-lg'>Gallery</Link>
            <Link to={"/event"} className='block pb-4 font-medium text-lg'>Event Packages</Link>
           <div className='flex justify-between items-center'>
             <Link to={"/corporate"} className='block pb-4 font-medium text-lg'>Corporate</Link>

             {isOpen ? <IoIosArrowUp onClick={toggleDropdown} className='w-3/4 h-5' /> : <IoIosArrowDown onClick={toggleDropdown} className='w-3/4 h-5' />}

           
           </div>
           {isOpen &&  <div className=" rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none lg:hidden">
          <div className="py-1" >
            <Link to={"/corporate"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Mission</Link>
            <Link to={"/founder"}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Founder</Link>
            <Link to={"/board"}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Board of Trustees </Link>
            <Link to={"/management"}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Management Council </Link>
            <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Annual Reports </Link>
          </div>
        </div>
}
            <Link to={"/contact"} className='block pb-4 font-medium text-lg'>Contact Us</Link>

            <div className="mb-3">
            <Link to={"/dashboard"} className="block  py-2 text-sm text-gray-700 hover:bg-gray-100" >
              <div className="flex items-center">
              <FaUserLarge className='mr-4 ' color='white' size={20} /> 
              <p className=" font-medium text-lg text-white">Dashboard</p>

              </div></Link>
            </div>
            <div className="bg-yellow-500 p-3  rounded-lg text-white text-center w-full font-bold text-lg ">
              <Link to={"/calendar"}>Book an Event</Link>
            </div>
            <div className="bg-black p-6 mt-4 w-1/3 rounded">
              <div className="flex justify-between w-full items-center ">
              <TfiFacebook size={20} className='text-yellow-500' />
              <TfiInstagram size={20} className='text-yellow-500' />
              <FaXTwitter size={20} className='text-yellow-500' />

              </div>
              
            </div>
        </div>

        </div>

       {isOpen &&  <div className="origin-top-right absolute right-80 mt-60 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden lg:block">
          <div className="py-1" >
            <Link to={"/corporate"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Mission</Link>
            <Link to={"/founder"}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Founder</Link>
            <Link to={"/board"}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Board of Trustees </Link>
            <Link to={"/management"}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Management Council </Link>
            <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Annual Reports </Link>
          </div>
        </div>
}
       

    </nav>
  )
}

export default NavComponent