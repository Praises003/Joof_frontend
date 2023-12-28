import React from 'react'
import { FaList } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { IoTicket } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import {FaTimes, FaBars} from 'react-icons/fa'

import {FaRegHourglassHalf} from "react-icons/fa6"
import {MdOutlineCorporateFare} from  "react-icons/md"
import { MdEventSeat } from "react-icons/md";
import {TbPackages} from "react-icons/tb"
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"


const DashSideBar = ({ show }) => {
    const [dash, setDash] = useState(true)
    const [tick, setTick] = useState(false)
    const [profile, setProfile] = useState(false)
    const [sign, setSign] = useState(false)
    const [selectSeat, setSelectedSeat] = useState(false)
    const [packages, setPackages] = useState(false)
    const [cartState, setCartState] = useState(false)
    const {eventPackage} = useSelector(state => state.eventPackage)


    console.log(eventPackage)
   
   
    const navigate = useNavigate()

    
    const onDash = () => {
        setDash(true)
        tick ? setTick(false) : ""
        profile ? setProfile(false) : ""
        sign ? setSign(false) : ""
        selectSeat ? setSelectedSeat(false) : ""
        packages ? setPackages(false) : ""
        cartState ? setCartState(false) : ""
        navigate("/dashboard")
    }

    const onTick = () => {
        setTick(true)
        dash ? setDash(false) : ""
        profile ? setProfile(false) : ""
        sign ? setSign(false) : ""
        selectSeat ? setSelectedSeat(false) : ""
        navigate("/dash_event")
        packages ? setPackages(false) : ""
        cartState ? setCartState(false) : ""
        
    }

    const onSeat = () => {
        setSelectedSeat(true)
        dash ? setDash(false) : ""
        tick ? setTick(false) : ""
        sign ? setSign(false) : ""
        profile ? setProfile(false) : ""
        packages ? setPackages(false) : ""
        cartState ? setCartState(false) : ""
        navigate("/seat")
    }

    const onProfile = () => {
        setProfile(true)
        dash ? setDash(false) : ""
        tick ? setTick(false) : ""
        sign ? setSign(false) : ""
        selectSeat ? setSelectedSeat(false) : ""
        packages ? setPackages(false) : ""
        cartState ? setCartState(false) : ""
        navigate("/profile")
    }

    const onPackage = () => {
        setPackages(true)
        profile ? setProfile(false) : ""
        dash ? setDash(false) : ""
        tick ? setTick(false) : ""
        sign ? setSign(false) : ""
        selectSeat ? setSelectedSeat(false) : ""
        cartState ? setCartState(false) : ""

        navigate("/event_package")
    }

    const onCart = () => {
        setCartState(true)
        packages ? setPackages(false) : ""
        profile ? setProfile(false) : ""
        dash ? setDash(false) : ""
        tick ? setTick(false) : ""
        sign ? setSign(false) : ""
        selectSeat ? setSelectedSeat(false) : ""

        navigate("/cart")
    }

    const onSign = () => {
        setSign(true)
        dash ? setDash(false) : ""
        tick ? setTick(false) : ""
        profile ? setProfile(false) : ""
        cartState ? setCartState(false) : ""
        selectSeat ? setSelectedSeat(false) : ""
    }
  return (
    <div>
        <div className="">

            <div className="hidden lg:block rounded border p-4 bg-white border-x-2 border-y-2 ">
                <div onClick={onDash} className={`${dash ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <FaHome color='' size={30} className={`${dash ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Dashboard</p>
                </div>

                <div onClick={onTick} className={`${tick ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center  mb-5`}>
                    <IoTicket  size={30} className={`${tick ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Events</p>
                </div>

                <div onClick={onSeat} className={`${selectSeat ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center  mb-5`}>
                    <MdEventSeat  size={30} className={`${tick ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Seat Booking</p>
                </div>

                <div onClick={onProfile} className={`${profile ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <RxAvatar  size={30} className={`${profile ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Profile</p>
                </div>

                <div onClick={onPackage} className={`${packages ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <TbPackages  size={30} className={`${packages ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Event Packages</p>
                </div>

                <div onClick={onCart} className={`${cartState ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5 relative`}>
                        <div className="absolute left-4 -top-2 bg-red-700 h-6  text-center w-6 rounded-full">
                        <p className="text-lg text-white">{eventPackage.length}</p>
                    </div>
                    
                    <FaShoppingCart  size={30} className={`${cartState ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Cart</p>
                </div>



                <div onClick={onSign} className={`${sign ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <FaSignOutAlt  size={30} className={`${sign ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Sign Out</p>
                </div>


            </div>

            {/**Small Screens */}

            <div className="relative z-10">
            {show && <div className="absolute lg:hidden rounded border p-4 bg-white border-x-2 border-y-2">
                <div onClick={onDash} className={`${dash ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <FaHome color='' size={30} className={`${dash ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Dashboard</p>
                </div>

                <div onClick={onTick} className={`${tick ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center  mb-5`}>
                    <IoTicket  size={30} className={`${tick ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Events</p>
                </div>

                <div onClick={onSeat} className={`${selectSeat ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center  mb-5`}>
                    <MdEventSeat  size={30} className={`${selectSeat ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Seat Booking</p>
                </div>

                <div onClick={onProfile} className={`${profile ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <RxAvatar  size={30} className={`${profile ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Profile</p>
                </div>

                <div onClick={onPackage} className={`${packages ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <TbPackages  size={30} className={`${packages ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Event Packages</p>
                </div>

                <div onClick={onCart} className={`${cartState ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5 relative`}>
                    <div className="absolute left-4 -top-2 bg-red-700 h-6  text-center w-6 rounded-full">
                        <p className="text-lg text-white">{eventPackage.length}</p>
                    </div>
                    <FaShoppingCart  size={30} className={`${cartState ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Cart</p>
                </div>


                <div onClick={onSign} className={`${sign ? "bg-black text-white border rounded-lg px-2 py-3" : "" } flex items-center mb-5`}>
                    <FaSignOutAlt  size={30} className={`${sign ? "text-white" : "text-blue-900"}`} />
                    <p className="ml-4 text-xl">Sign Out</p>
                </div>


            </div>}

                
            </div>
            
            

        </div>
        
    </div>
  )
}

export default DashSideBar