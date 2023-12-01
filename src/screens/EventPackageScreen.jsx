import React from 'react'
import eventImg from '../assets/ev9.jpg'
import { Link } from 'react-router-dom'
import { FaClock } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { GiBalloons } from "react-icons/gi";

const EventPackageScreen = () => {
  return (
    <div>
        <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "80vh"}} className={` mb-5 relative`}>
             <p className='uppercase text-4xl font-semibold left-32 md:text-5xl text-white absolute top-52 md:top-52 md:left-52 text-center'>  EVENT PACKAGES</p>
        </div>

        <div className="">
            <p className="">Choose the best package for your business</p>
        </div>

        <div className="m-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            <div className="border shadow-md border-t-8 border-r border-l- border-b- rounded border-t-yellow-500 p-4">
                {/**icon */}
                <div className="pb-12"></div>
                <FaRegHandshake size={40} className='mx-auto text-yellow-500'/>
                
                <p className="text-center text-xl md:text-3xl font-semibold pb-6">Rental Services</p>
                <p className="text-center text-base md:font-lg pb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos perferendis reprehenderit unde ab impedit, omnis fugit, voluptatem commodi quaerat atque saepe! Magni temporibus, reprehenderit eos possimus aliquam beatae omnis.</p>
                <p className='text-center font-black text-4xl pb-4'>$29<span className='inline font-semibold text-base'>/mo</span></p>
                <p className="text-center">$129 year(15% discount)</p>

                <div className="">
                    <Link className='bg-yellow-500 text-white  p-4 mt-12 mb-12 rounded-lg block text-center'>Book Now</Link>
                </div>

                
            </div>

            <div className="border shadow-md border-t-8 border-r-0 border-l-0 border-b-0 rounded border-blue-900 p-4">
                {/**icon */}
                <div className="pb-12"></div>
                <IoFastFood size={40} className='mx-auto text-blue-900'/>
                
                <p className="text-center text-xl md:text-3xl font-semibold pb-6">Catering Services</p>
                <p className="text-center font-lg text-center text-base md:font-lg pb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos perferendis reprehenderit unde ab impedit, omnis fugit, voluptatem commodi quaerat atque saepe! Magni temporibus, reprehenderit eos possimus aliquam beatae omnis.</p>
                <p className='text-center font-black text-4xl pb-4'>$29<span className='inline font-semibold text-base'>/mo</span></p>
                <p className="text-center">$129 year(15% discount)</p>

                <div className="">
                    <Link className='bg-blue-900 text-white  p-4 mt-12 mb-12 rounded-lg block text-center'>Book Now</Link>
                </div>

                
            </div>

            <div className="border shadow-md border-t-8 border-r-0 border-l-0 border-b-0 rounded border-black p-4">
                {/**icon */}
                <div className="pb-12"></div>
                <GiBalloons size={40} className='mx-auto'/>
                
                <p className="text-center text-xl md:text-3xl font-semibold pb-6">Decoration Services</p>
                <p className="text-center font-lg pb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos perferendis reprehenderit unde ab impedit, omnis fugit, voluptatem commodi quaerat atque saepe! Magni temporibus, reprehenderit eos possimus aliquam beatae omnis.</p>
                <p className='text-center font-black text-4xl pb-4'>$29<span className='inline font-semibold text-base'>/mo</span></p>
                <p className="text-center">$129 year(15% discount)</p>

                <div className="">
                    <Link className='bg-black text-white  p-4 mt-12 mb-12 rounded-lg block text-center'>Book Now</Link>
                </div>

                
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default EventPackageScreen