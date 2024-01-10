import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import eventImg from '../assets/ev2.jpg'
import eventImage from '../assets/ev4.jpg'
import christopher from "../assets/christopher.jpg"
import sergio from "../assets/sergio.jpg"
import stefan from "../assets/stefan.jpg"
import jonas from "../assets/jonas.jpg"
import { FaShieldAlt } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa6";
import { FaToilet } from "react-icons/fa6";
import {BsFillCarFrontFill} from 'react-icons/bs'
import {FaRegThumbsUp} from 'react-icons/fa'
import {PiSealCheckFill} from 'react-icons/pi'



const AboutScreen = () => {
  return (
    <div>
        <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100vh"}} className={` mb-5 relative`}>
             <p className='uppercase text-4xl font-semibold md:text-5xl text-white absolute top-52 md:top-52 md:left-52 text-center'> <span className='text-yellow-400'>About</span> Profuselemo Multi-Purpose Event Center</p>
        </div>

        <div className=" p-4">
            <p className='text-center text-3xl md:text-4xl font-semibold mb-10'>Welcome to Profuselemo Multi-Purpose Event Center</p>
            <div className="flex flex-col md:flex-row justify-between ">
                <div className="w-full">
                    <img src={eventImage} alt="" className='w-full bg-no-repeat bg-cover'/>
                </div>
                <div className="w-full p-2">
                    <p className="text-lg font-semibold">
                        PROF RUFUS OLADIPO ELEMO EVENT CENTER is an ultra-modern event and conference meeting venue with a one-and-half-acre piece of property, uniquely brick built with state-of-the-art facilities within a well-kept vicinity. It is spacious, fully air-conditioned, and highly insulated with the capacity to host up to 1000 guests in banquet settings and 1300 guests in theater settings. This makes it convenient for us to host both corporate and retail events in a serene environment.

                        We can conveniently host weddings, corporate functions, parties, banquets, church services, and more! It further has the capacity to accommodate over 300 cars parked within the premises without obstructing the free flow of traffic along the highway.</p>

                </div>
            </div>
        </div> 

        {/* <div className=" p-4">
            <p className='text-center text-3xl md:text-4xl font-semibold mb-10'>Welcome to Prof Rufus Oladipo Elemo Event Center</p>
            <div className="flex flex-col md:flex-row justify-between ">
                <div className="w-full">
                    <img src={eventImage} alt="" className='w-full bg-no-repeat bg-cover'/>
                </div>
                <div className="w-full p-2">
                    <p className="text-lg font-semibold ">
                        PROF RUFUS OLADIPO ELEMO EVENT CENTER is an ultra-modern event and conference meeting venue with a one-and-half-acre piece of property, uniquely brick built with state-of-the-art facilities within a well-kept vicinity. It is spacious, fully air-conditioned, and highly insulated with the capacity to host up to 1000 guests in banquet settings and 1300 guests in theater settings. This makes it convenient for us to host both corporate and retail events in a serene environment.

                        We can conveniently host weddings, corporate functions, parties, banquets, church services, and more! It further has the capacity to accommodate over 300 cars parked within the premises without obstructing the free flow of traffic along the highway.</p>

                </div>
            </div>
        </div> */}

        <div className="bg-yellow-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            <div className="w-full shadow-lg  pt-8 px-8 pb-12 rounded-md mb-3">
                <div className="flex md:justify-between items-center py-4 ">
                    <FaShieldAlt size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-4 text-white">PROFESSIONAL SECURITY</h1>
                    
                </div>
                <p className="font-medium text-white">
                     We offer a first security system to support our clients on their events to ensure a hitch-free event. Arrangements are made to protect the VIPs, their invites as well as ensuring that the assets of our clients and their guests are safe and secured.


                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex md:justify-between items-center py-4">
                    <FaBatteryFull size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-4 text-white">UNINTERRUPTED POWER SUPPLY</h1>
                    
                </div>
                <p className="font-medium text-white">
                    We guarantee an uninterrupted power supply for our clients and their guests having our own 200KVA transformer which aids three-phase power supply from the PHCN. A dedicated 400KVA generator that can accommodate all our equipment, lighting, and multimedia facilities conveniently. 
                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex items-center py-4">
                    <FaToilet size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3 text-white">
                    REST ROOMS</h1>
                    
                </div>
                <p className="font-medium text-white">
                     We have made adequate provisions for all our guests to be comfortable with both male and female conveniences thoroughly equipped with modern toiletry facilities.
                    </p>
            

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4 ">
                    <BsFillCarFrontFill size={50} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3 text-white">
                    ACCESSIBLE EVENT SPACE WITH GREAT PARKING</h1>
                    
                </div>
                <p className="font-medium text-white">
                    With ramp access & easily reached transportation routes, our event space is highly accessible with lots of parking to ensure that guests can easily locate and attend your event.
                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4">
                    <FaRegThumbsUp size={50} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3 text-white">
                    WE ARE HERE TO MAKE YOUR EVENT SUCCESSFUL</h1>
                    
                </div>
                <p className="font-medium text-white">
                    Our one universal goal is to ensure that everyone who attends your special event is able to have a fantastic time.
                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex font-bold text-lg pl-3 text-white">
                    <PiSealCheckFill size={60} className='text-blue-900' />
                    <h1 className="ont-bold text-lg">
                        GUARANTEED HIGH SECURITY & ADDED FACILITIES</h1>
                    
                </div>
                <p className="font-medium text-white">
                With State of the art surveillance & security personnel and a host of other facilities on site, you stand to get real value for your money when you host events at Noble Castle.
                </p>

            </div>
          

        </div>

        </div>

        <div className="">
        <div className=" bg-black py-6 md:p-16 my-3">
            <div className="">
                <p className='text-white  text-center text-2xl md:text-4xl font-semibold mb-5'>What Our Clients are saying</p>
            </div>
      <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      
      spaceBetween={50}
      slidesPerView={1}
      
      autoplay
      navigation
      pagination={{ clickable: true }}
      
     
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        
      <SwiperSlide className=''><div className=" w-10/12  h-96 bg-white shadow mx-auto py-2 px-4">
         <img src={christopher} className='w-28 h-28 rounded-full mx-auto mb-7' alt="" />
         <p className='font-semibold text-lg'>Profuselemo Multi-Purpose Event Center, I love the fact that it was spacious engough for my bridal train to do the bridal dance with me, despite our numerous and glamorous guests. it was totally exciting  </p>
        </div></SwiperSlide>
      <SwiperSlide><div className="w-10/12  h-96  mx-auto bg-white shadow py-2 px-4">
        <img src={sergio} className='w-28 h-28 rounded-full mx-auto mb-7' alt="" />
          <p className='font-semibold text-lg'> How well can express our gratitude to  Profuselemo Multi-Purpose Event Center This event center is world class and their services are top notch. </p>
        </div></SwiperSlide>
      <SwiperSlide><div className="w-10/12 h-96  bg-white shadow mx-auto py-2 px-4">
        <img src={stefan} className='w-28 h-28 rounded-full mx-auto mb-7 py-2 px-4' alt="" />
        <p className='font-semibold text-lg'> No other event center beats  Profuselemo Multi-Purpose Event Center  </p>
        </div></SwiperSlide>
      
    </Swiper>
    </div>
        </div> 
    </div>
  )
}

export default AboutScreen