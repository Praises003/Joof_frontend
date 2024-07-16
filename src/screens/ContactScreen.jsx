import React from 'react'
import eventImg from '../assets/joof.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactScreen = () => {
  return (
    <div>
         <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "80vh"}} className={` mb-5 relative`}>
             <p className='uppercase text-4xl font-semibold left-96 right-56 md:text-5xl text-white absolute top-52 md:top-52 md:left-52 text-center'>  CONTACT US</p>
        </div>

        <div className="flex md:flex-row flex-col justify-between p-4">
            <div className="">
                <div className="flex items-center">
                    <FaLocationDot size={25} />
                    <p className='text-lg pl-1.5'>Our Location</p>
                    
                </div>
                <p className="text-lg mb-5">Our Address: </p>
                

            </div>
            <div className="">
                <p className="">Call Us</p>
                <div className="flex items-center">
                    <BsFillTelephoneFill size={25} />
                    <p className='text-lg pl-1.5 mb-5'>(+234) 9036069035</p>
                </div>

            </div>
        
            <div className="">
                <p className="">Working Hours</p>
                <div className="flex">
                    <FaClock size={25} className='' />
                    <p className="text-lg pl-1.5 mb-5 md:mb-2">Mon. – Fr. 8 am – 5 pm</p>
                </div>
                <div className="flex">
                    <FaClock size={25} />
                    <p className="text-lg pl-1.5 mb-5">
                        Saturday 11 am – 2 pm
                    </p>

                </div>

            </div>
            <div className="">
                <p className="">Get In Touch</p>
                <div className="flex">
                    <IoIosMail size={25} />
                    <p className="text-lg pl-1.5 mb-5">To contact our team, please mail info@joof.com</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactScreen