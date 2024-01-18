import React, { useState, useRef } from 'react'
import AdminNavComponent from '../components/AdminNavComponent'
import AdminSectionComponent from '../components/AdminSectionComponent'
import {FaTimes, FaBars} from 'react-icons/fa'

const AdminScreen = ({children}) => {
  const [show, setShow] = useState(false);
  const scrollContainerRef = useRef(null);
  
  const menuClick = () => {
    setShow(!show)
  }
  
  const handleScroll = (e) => {
    // Your custom scrolling logic here
    console.log('Scrolling:', e.target.scrollTop);
  };
  return (
    <div>
      <div className="flex">
        <div style={{background: "#FE8D01", }} className={`basis-0 lg:basis-2/6  w-full  z-50 lg:block`}>
          <AdminNavComponent show={show} setShow={setShow} />        
        </div>

        <div className="block w-full lg:basis-4/5 lg:block">
          {/* <AdminSectionComponent show={show} setShow={setShow} /> */}
          {children}
        </div>
                
      </div>
    </div>
  )
}

export default AdminScreen