import React from 'react'
import noble from '../assets/eve.jpg'
import event from "../assets/bg_a.jpg"
import img from "../assets/bgg.jpg"
import ima from "../assets/ima.jpg"
import { MdChair } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";
import { Link } from 'react-router-dom'
import VenueInfoCardComponent from './VenueInfoCardComponent'

const WelcomeComponent = () => {
  return (
    <div>
        <div className=" flex flex-col md:flex-row justify-between items-start px-4  md:px-16 md:py-16">
            <div className="">
                <img src={noble} className='w-11/12 md:w-3/4  bg-contain mb-10 md:mb-0  bg-no-repeat' alt="noble" />
            </div>
            <div className="w-full">
                <div className="w-1/5 bg-yellow-900 p-0.5 m-2"></div>
                <p className=" text-3xl md:text-4xl">Welcome To Prof Rufus </p>
                <p className="text-3xl md:text-3xl mb-6"> Oladipo Elemo Event Center </p>

                <p className="text-lg mb-3"> At the Prof Rufus Elemo Multi-Purpose Event Centre, we are established to provide an event venue for various events and functions ranging from weddings, corporate functions, meetings, exhibition and so much more </p>
                <div  className='w-2/5'><Link  className='bg-yellow-500 text-white font-semibold  p-4 rounded- rounded-3xl block text-center hover:bg-blue-500 hover:text-white hover:font-semibold mb-10'>Learn More</Link></div>
            </div>
        </div>
        
        <div className="pt-10">
            <p className="text-center md:text-4xl text-3xl font-semibold ">What we provide</p>
            <VenueInfoCardComponent />

        </div>

        <div className="bg-yellow-400 py-16 px-4 lg:px-8">
            <p className="text-center text-3xl md:text-4xl font-semibold">Visit Our Event Centre</p>
            <div className="bg-white p-0.5 m-6 w-2/4 md:w-1/6 mx-auto"></div>
            <div className="flex flex-col lg:flex-row justify-between bg-white shadow-md ">
                <div className="p-4">
                    <h1 className="mt-8 text-3xl font-semibold">Prof Rufus Oladipo Elemo Event Center</h1>
                    <div className="bg-yellow-500 w-1/4 p-0.5 mt-6 mb-8"></div>
                    <p className='text-lg mb-7'>The Event Centre seats 100 banquet setting has event packages. This package includes:</p>
                    
                    <div className="w-3/5 ">
                    <div className="flex justify-between items-center mb-5 md:mb-0">
                        <MdChair size={45} />
                        <p className='text-center text-medium font-semibold'>Banquet tables & Chairs</p>

                    </div>

                    <div className="flex  justify-between items-center mb-5">
                        <IoShirt size={45} />
                        <p className='text-center font-semibold'>Change Room</p>

                    </div>

                    <div className="flex justify-between items-center mb-5">
                        <FaShieldAlt size={45} />
                        <p className='text-center font-semibold'>Security Personnel</p>

                    </div>
                    <div className=''>
                        <Link  className='bg-yellow-400 text-white font-semibold  p-4 rounded- rounded-3xl block text-center hover:bg-blue-500 hover:text-white hover:font-semibold mb-10'>Learn More</Link>
                 </div>

                        
                    </div>

 
                </div>
                <div className="lg:w-11/12">
                    <img src={ima} className='s bg-cover bg-no-repeat' alt="" />
                </div>

               
            </div>
             {/* <div>
                <Link  className='bg-blue-500 text-white font-semibold  p-4 rounded- rounded-3xl block text-center hover:bg-blue-500 hover:text-white hover:font-semibold mb-10'>Learn More</Link>
                </div> */}
        </div>

    </div>
  )
}

export default WelcomeComponent