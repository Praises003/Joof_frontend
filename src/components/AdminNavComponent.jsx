import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import {FaTimes, FaBars} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const AdminNavComponent = ({ shows, setShows}) => {
    const [show, setShow] = useState(false);
    const menuClick = () => {
        setShow(!show)
      }

    const adminMenu = () => {
        setShow(false)
    }

    const navigate = useNavigate()

    const adminMenuT = () => {
        setShow(true)
    }
      console.log(show)
      console.log(setShow)
    
  return (
    <div style={{background: "#FE8D01", }} className='relative z-10 '>
        <div  className="hidden lg:block">
            <div className="flex px-5 pt-2 items-center mb-1">
                <FaHome className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Dashboard</p>
                
            </div>

            <div className="flex px-5 items-center mb-2">
                <FaUserFriends className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Management Council</p>
            </div>

            <div className="flex px-5 items-center mb-2">
                <IoCalendarNumberSharp className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Event List</p>
            </div>

            <div className="flex px-5 items-center mb-2">
                <FaCalendarAlt className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Calendar</p>
            </div>

            <div className="flex px-5 items-center mb-2">
                <FaUsers className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Guest List</p>
            </div>

            <div className="flex px-5 items-center mb-2">
                <FaMapMarkedAlt className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Venue</p>
            </div>

             <div className="flex px-5 items-center mb-2">
                <IoTicketSharp className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Print Ticket</p>
            </div>







        </div>

        {/** Small Screens */}
        <div  className="relative lg:hidden">
        {show  ? (<div style={{background: "#FE8D01", }} className={`block w-96   absolute lg:hidden`}>
            <div className="flex justify-end items-end" onClick={adminMenu}>
            <FaTimes size={25} className='text-red-700 mt-3 mr-3' />
            </div>
            <div onClick={() => navigate("/admin")}  className="flex px-5 pt-2 items-center mb-1">
                <FaHome className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Dashboard</p>
            </div>

            <div onClick={() => navigate("/users")} className="flex px-5 items-center mb-2">
                <FaUserFriends className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Users</p>
            </div>

            <div onClick={() => navigate("/events")} className="flex px-5 items-center mb-2">
                <IoCalendarNumberSharp className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Event List</p>
            </div>

            <div className="flex px-5 items-center mb-2">
                <FaCalendarAlt className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Calendar</p>
            </div>

            <div onClick={() => navigate("/guests")} className="flex px-5 items-center mb-2">
                <FaUsers className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Guest List</p>

            </div>

            {/* <div className="flex px-5 items-center mb-2">
                <FaMapMarkedAlt className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Venue</p>
            </div> */}

             <div className="flex px-5 items-center mb-2">
                <IoTicketSharp className='text-white pr-3.5' size={40} />
                <p className="text-lg text-white font-semibold">Print Ticket</p>
            </div>







        </div>) : (<div className="lg:hidden flex justify-end items-end" onClick={adminMenuT}>
            <FaBars size={25} className='text-white mt-3 mr-3  z-50 top-0  left-1 absolute' />
            </div>
) }
        </div>

    </div>
  )
}

export default AdminNavComponent