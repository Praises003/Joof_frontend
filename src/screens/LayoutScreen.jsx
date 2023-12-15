import React, { useState } from 'react'
import DashSideBar from './DashSideBar'
import {FaTimes, FaBars} from 'react-icons/fa'

const LayoutScreen = ({ children }) => {
  const [show, setShow] = useState(false)
  const menuClick = () => {
    setShow(!show)
  }
  return (
    <div>
      <div style={{background: "#F5F7F8"}} className="p-4">
        <div onClick={menuClick} className="mb-5 lg:hidden block">
          {show ? <FaTimes size={30} className='text-blue-900'/> : <FaBars size={30} className='text-blue-900'/>}
        </div>


        <div style={{background: ""}} className="w-full flex justify">
            <div className={`${show ? "basis-0" : " basis-0"} lg:basis-1/3 w-full  mr-5`}>
               {} <DashSideBar show={show} />
            </div>
            <div className={`w-full ${show ? "basis-full md:basis-11/12" : "basis-full"}   p-1`}>{children}</div>
        </div>

      </div>
        
    </div>
  )
}

export default LayoutScreen