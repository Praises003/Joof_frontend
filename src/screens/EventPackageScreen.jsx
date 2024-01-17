import React, { useState } from 'react'
import eventImg from '../assets/ev9.jpg'
import {useSelector, useDispatch} from "react-redux"
import { addToCart } from '../slices/eventPackageSlice'
import { Link } from 'react-router-dom'
import { FaClock } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { GiBalloons } from "react-icons/gi";

const EventPackageScreen = () => {
    const [rental, setRental] = useState({
        name: "Entry Package",
        price: 29
    })
    const [catering, setCatering] = useState({
        name: "Advanced Package",
        price: 45
    })
    const [decoration, setDecoration] = useState({
        name: "Premium Package",
        price: 50
    })

    const [wedding, setWedding] = useState({
        name: "Wedding Services",
        price: 100
    })
    const [privates, setPrivates] = useState({
        name: "Private Parties",
        price: 120
    })
    const [price, setPrice] = useState("29")
    const {eventPackage} = useSelector(state => state.eventPackage)

    const dispatch = useDispatch()
    console.log(eventPackage)


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
                
                <p className="text-center text-xl md:text-3xl font-semibold pb-6">{rental.name}</p>
                <p className='text-center font-bold text-xl mb-6'>Premium Package</p>
                  <p className='text-center font-bold text-5xl mb-4'>₦60,000 </p>
                  <p className='text-center font-bold text-xl mb-3'>Images</p>
                  <p className='text-center font-bold text-xl mb-3'>Photo Album</p>
                  <p className='text-center font-bold text-xl mb-3'>Photography</p>
                  <p className='text-center font-bold text-xl mb-3'>Catering Services</p>
                  <p className='text-center font-bold text-xl mb-3'>Videos</p>

                

                <p className='text-center font-black text-4xl pb-4'>$29<span className='inline font-semibold text-base'>/mo</span></p>
                <p className="text-center">$129 year(15% discount)</p>

                <div className="">
                    {/* <Link  className='bg-yellow-500 text-white  p-4 mt-12 mb-1 rounded-lg block text-center'>Book Now</Link> */}
                </div>

                <div onClick={() => {dispatch(addToCart(rental))}} className="">
                    <Link  className='bg-yellow-500 text-white  p-4 mt-1 mb-12 rounded-lg block text-center'>Add To Cart Now</Link>
                </div>
                
                
            </div>

            <div className="border shadow-md border-t-8 border-r-0 border-l-0 border-b-0 rounded border-blue-900 p-4">
                {/**icon */}
                <div className="pb-12"></div>
                <IoFastFood size={40} className='mx-auto text-blue-900'/>
                
                <p className="text-center text-xl md:text-3xl font-semibold pb-6">{catering.name}</p>
                <p className='text-center font-bold text-xl mb-6'>Premium Package</p>
                  <p className='text-center font-bold text-5xl mb-4'>₦60,000 </p>
                  <p className='text-center font-bold text-xl mb-3'>Images</p>
                  <p className='text-center font-bold text-xl mb-3'>Photo Album</p>
                  <p className='text-center font-bold text-xl mb-3'>Photography</p>
                  <p className='text-center font-bold text-xl mb-3'>Catering Services</p>
                  <p className='text-center font-bold text-xl mb-3'>Videos</p>

                
                <p className='text-center font-black text-4xl pb-4'>$45<span className='inline font-semibold text-base'>/mo</span></p>
                <p className="text-center">$129 year(15% discount)</p>

                <div className="">
                    {/* <Link className='bg-blue-900 text-white  p-4 mt-12 mb-1 rounded-lg block text-center'>Book Now</Link> */}
                </div>

                <div /*onClick={() => {dispatch(addToCart(decoration))}} */ onClick={() => {dispatch(addToCart(catering))}}className="">
                    <Link className='bg-blue-900 text-white  p-4 mt-1 mb-12 rounded-lg block text-center'>Add To Cart </Link>
                </div>


                
            </div>

            <div className="border shadow-md border-t-8 border-r-0 border-l-0 border-b-0 rounded border-black p-4">
                {/**icon */}
                <div className="pb-12"></div>
                <GiBalloons size={40} className='mx-auto'/>
                
                <p className="text-center text-xl md:text-3xl font-semibold pb-6">{decoration.name}</p>
                <p className='text-center font-bold text-xl mb-6'>Premium Package</p>
                  <p className='text-center font-bold text-5xl mb-4'>₦60,000 </p>
                  <p className='text-center font-bold text-xl mb-3'>Images</p>
                  <p className='text-center font-bold text-xl mb-3'>Photo Album</p>
                  <p className='text-center font-bold text-xl mb-3'>Photography</p>
                  <p className='text-center font-bold text-xl mb-3'>Catering Services</p>
                  <p className='text-center font-bold text-xl mb-3'>Videos</p>

                <p className='text-center font-black text-4xl pb-4'>$50<span className='inline font-semibold text-base'>/mo</span></p>
                <p className="text-center">$129 year(15% discount)</p>

                <div className="">
                    {/* <Link className='bg-black text-white  p-4 mt-12 mb-1 rounded-lg block text-center'>Book Now</Link> */}
                </div>

                <div onClick={() => {dispatch(addToCart(decoration))}} className="">
                    <Link className='bg-black text-white  p-4 mt-1 mb-12 rounded-lg block text-center'>Add To Cart</Link>
                </div>


                
            </div>

            </div>
            
        </div>

        <div className="">
            <p className="text-center font-bold text-3xl">Our Custom Packages</p>
        </div>

        <div className="m-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            <div className="border shadow-md border-t-8 border-r border-l- border-b- rounded border-t-yellow-500 p-4">
                {/**icon */}
                <div className="pb-12"></div>
                <FaRegHandshake size={40} className='mx-auto text-yellow-500'/>
                
                <p className="text-center text-xl md:text-3xl font-semibold pb-6">{wedding.name}</p>
                <p className="text-center text-base md:font-lg pb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos perferendis reprehenderit unde ab impedit, omnis fugit, voluptatem commodi quaerat atque saepe! Magni temporibus, reprehenderit eos possimus aliquam beatae omnis.</p>
                <p className='text-center font-black text-4xl pb-4'>$29<span className='inline font-semibold text-base'>/mo</span></p>
                <p className="text-center">$129 year(15% discount)</p>

                <div className="">
                    <Link  className='bg-yellow-500 text-white  p-4 mt-12 mb-1 rounded-lg block text-center'>Book Now</Link>
                </div>

                <div onClick={() => {dispatch(addToCart(wedding))}} className="">
                    <Link  className='bg-yellow-500 text-white  p-4 mt-1 mb-12 rounded-lg block text-center'>Add To Cart Now</Link>
                </div>
                
                
            </div>

            <div className="border shadow-md border-t-8 border-r-0 border-l-0 border-b-0 rounded border-blue-900 p-4">
                {/**icon */}
                <div className="pb-12"></div>
                <IoFastFood size={40} className='mx-auto text-blue-900'/>
                
                <p className="text-center text-xl md:text-3xl font-semibold pb-6">{privates.name}</p>
                <p className="text-center font-lg t text-base md:font-lg pb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos perferendis reprehenderit unde ab impedit, omnis fugit, voluptatem commodi quaerat atque saepe! Magni temporibus, reprehenderit eos possimus aliquam beatae omnis.</p>
                <p className='text-center font-black text-4xl pb-4'>$45<span className='inline font-semibold text-base'>/mo</span></p>
                <p className="text-center">$129 year(15% discount)</p>

                <div className="">
                    <Link className='bg-blue-900 text-white  p-4 mt-12 mb-1 rounded-lg block text-center'>Book Now</Link>
                </div>

                <div onClick={() => {dispatch(addToCart(privates))}} className="">
                    <Link className='bg-blue-900 text-white  p-4 mt-1 mb-12 rounded-lg block text-center'>Add To Cart </Link>
                </div>


                
            </div>

            <div className="border shadow-md border-t-8 border-r-0 border-l-0 border-b-0 rounded border-black p-4">
                {/**icon */}
                <div className="pb-12"></div>
                <GiBalloons size={40} className='mx-auto'/>
                
                <p className="text-center text-xl md:text-3xl font-semibold pb-6">{decoration.name}</p>
                <p className="text-center font-lg pb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos perferendis reprehenderit unde ab impedit, omnis fugit, voluptatem commodi quaerat atque saepe! Magni temporibus, reprehenderit eos possimus aliquam beatae omnis.</p>
                <p className='text-center font-black text-4xl pb-4'>$50<span className='inline font-semibold text-base'>/mo</span></p>
                <p className="text-center">$129 year(15% discount)</p>

                <div className="">
                    <Link className='bg-black text-white  p-4 mt-12 mb-1 rounded-lg block text-center'>Book Now</Link>
                </div>

                <div onClick={() => {dispatch(addToCart(decoration))}} className="">
                    <Link className='bg-black text-white  p-4 mt-1 mb-12 rounded-lg block text-center'>Add To Cart</Link>
                </div>


                
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default EventPackageScreen