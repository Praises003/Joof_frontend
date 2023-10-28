import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import noblecastle from '../assets/noble.png'
import {FaTimes, FaBars} from 'react-icons/fa'
import {TfiFacebook, TfiInstagram} from 'react-icons/tfi'
import {FaXTwitter} from 'react-icons/fa6'

const NavComponent = () => {
  const [navList, setNavList] = useState(false)
  const navToggle = () => {
    setNavList(!navList)
  }
  return (
    <nav className=' flex justify-between items-center px-3  mb-1.5 shadow-lg sticky top-0 z-20 bg-white'>
        <img src={noblecastle} alt="" className='border border-gray-800  w-40'/>
        <div className="hidden lg:block">
        <div className="flex justify-between items-center ">
            <Link to={"/"} className='block  font-bold text-xl'>Home</Link>
            <Link to={"/about"} className='block px-16 font-bold text-xl'>About</Link>
            <Link to={"/service"} className='block  font-bold text-xl'>Service</Link>
            <Link to={"/service"} className='block px-16 font-bold text-xl'>Gallery</Link>
            <Link to={"/contact"} className='block font-bold text-xl'>Contact Us</Link>

          
          
        </div>

        </div>
        

        <div className="hidden lg:block">
            <Link className='bg-blue-900 px-3 py-3 text-white text-lg font-bold  rounded-md'>Book An Event</Link>
        </div>

        <div className=" w-1/12 lg:block hidden">
         <div className="flex justify-between items-center p-2 ">
              <TfiFacebook size={20} className='text-blue-900' />
              <TfiInstagram size={20} className='text-blue-900' />
              <FaXTwitter size={20} className='text-blue-900' />

              </div>

        </div>

        

        <div  className="lg:hidden">
          <div onClick={navToggle} className="block">
            {navList ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        
        <div  className={`${navList ? 'block absolute top-20 left-0 border border-blue-900 z-10 text-white w-full bg-slate-800 py-4 px-2.5' : 'hidden'}`}>
            <Link to={"/"} className='block pb-4 font-medium text-lg'>Home</Link>
            <Link to={"/about"} className='block pb-4 font-medium text-lg'>About</Link>
            <Link to={"/service"} className='block pb-4 font-medium text-lg'>Service</Link>
            <Link to={"/service"} className='block pb-4 font-medium text-lg'>Gallery</Link>
            <Link to={"/service"} className='block pb-4 font-medium text-lg'>Contact Us</Link>
            <div className="bg-white p-3 border rounded-lg text-black text-center w-1/3 font-bold text-lg ">
              <Link>Book an Event</Link>
            </div>
            <div className="bg-black p-6 mt-4 w-1/3 rounded">
              <div className="flex justify-between w-full items-center ">
              <TfiFacebook size={20} className='text-blue-900' />
              <TfiInstagram size={20} className='text-blue-900' />
              <FaXTwitter size={20} className='text-blue-900' />

              </div>
              
            </div>
        </div>

        </div>

       

    </nav>
  )
}

export default NavComponent