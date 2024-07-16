import React from 'react'
import eventImg from '../assets/joof.jpg'
import img from '../assets/ev11.jpg'
import Img from '../assets/ev10.jpg'
import evImg from '../assets/ev8.jpg'
import { FaLightbulb } from "react-icons/fa6";
import { GiTiedScroll } from "react-icons/gi";
import {RxAvatar} from 'react-icons/rx'
import {FaDollarSign} from 'react-icons/fa'
import { MdOutlineCastForEducation } from "react-icons/md";
import {BsFillCarFrontFill} from 'react-icons/bs'
import {FaRegThumbsUp} from 'react-icons/fa'
import {PiSealCheckFill} from 'react-icons/pi'
import { GiDrum } from "react-icons/gi";

const CorporateScreen = () => {
  return (
    <div>
         <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "80vh"}} className={` mb-5 relative`}>
             <p className='uppercase text-4xl font-semibold left-60 md:text-5xl text-white absolute top-52 md:top-52 md:left-96 right-64 text-center'> CORPORATE </p>
        
        </div>

        <div className="">
            <p className="text-2xl md:text-3xl font-bold text-center">Our Vision Statement</p>
            <div className="flex flex-col md:flex-row justify-between p-4 ">
                <div className="w-full">
                    <img src={"https://res.cloudinary.com/dyliuyezy/image/upload/v1718808865/test/my3xv91ib2gbgiavvrzt.jpg"} alt="" className='w-full md:w-10/12 bg-no-repeat bg-cover mx-auto'/>
                </div>
                <div className="w-full p-2">
                    <p className="text font-semibold ">
                    Our Vision is to be a hub of excellence, innovation, and cultural enrichment in the heart of Igbara-Oke, Ondo State. We aspire to create an iconic, state-of-art event centre that offers unforgettable experiences and embodies the ideals of Prof Elemo and its Foundation Anglican Grammar School Igbara-Oke and its Foundation Management Council. Through education, the arts, and community engagement, we envision a space where individuals of all backgrounds come together to learn, celebrate, and inspire positive change. We see the Prof Rufus Oladipo Elemo Multipurpose Event Centre as a catalyst for progress and a symbol of our commitment to the community's growth and well-being.</p>

                </div>

                
            </div>

            <div className="">
            <p className="text-2xl md:text-3xl font-bold text-center">Our Mission Statement</p>
            <div className="flex flex-col md:flex-row justify-between p-4 ">
                <div className="w-full">
                    <img src={"https://res.cloudinary.com/dyliuyezy/image/upload/v1718808701/test/whn8btmalot0cmsyjuco.jpg"} alt="" className='w-full md:w-10/12 bg-no-repeat bg-cover mx-auto'/>
                </div>
                <div className="w-full p-2">
                    <p className="text-base font-semibold ">
                        At the Prof Rufus Oladipo Elemo Multi-Purpose Event Centre, Our mission is to serve as a beacon of education, culture, and community in Igbara-Oke, Ondo State, Nigeria. We are committed to providing a dynamic and inclusive space where knowledge, creativity, social interaction, and collaboration flourish. Our primary aim is to support the goals and aspirations of Janet Olufunmilayo Oluwasanmi Foundation Anglican Grammar School Igbara-Oke and its Board of Trustees and Foundation Management Council, by offering a diverse range of events, programs, and facilities that foster social interaction, personal growth and community development 
                    </p>

                </div>

                
            </div>
        
           </div> 
        </div>

        <div className="">
        <div>
        <p className="text-2xl md:text-3xl font-bold text-center">Our Value Statement</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            <div className="w-full shadow-lg  pt-8 px-8 pb-12 rounded-md mb-3">
                <div className="flex items-center py-4 ">
                    <FaLightbulb size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-4">Community-Centhric</h1>
                    
                </div>
                <p className="font-medium">
                        We are deeply committed to the betterment of Igbara-Oke, the surrounding communities and the world. Our values revolve around community service, inclusivity, and providing opportunities for local talent and businesses.
                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex  items-center py-4">
                    <GiTiedScroll size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-4">EXCELLENCE</h1>
                    
                </div>
                <p className="font-medium">
               We are committed to delivering excellence in event services and customer satisfaction. We uphold the highest standards of quality, professionalism, and integrity in all our endeavours. We strive for excellence in every event and service we offer.
                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex items-center py-4">
                    <FaLightbulb size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3">
                    INNOVATION</h1>
                    
                </div>
                <p className="font-medium">
                   We embrace innovation as a means to continuously enhance our offerings and create memorable, transformative experiences for our patrons. We are not afraid to explore new ideas and technologies to better serve our community.
                    </p>
            

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex items-center py-4 ">
                    <GiDrum size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3">
                    Cultural Enrichment</h1>
                    
                </div>
                <p className="font-medium">
                    We value the promotion of cultural diversity and the celebration of local heritage and traditions. Our centre is a platform for cultural exchange, artistic expression,and the preervation of our shared history.
                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex  items-center py-4">
                    <MdOutlineCastForEducation size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3">
                    EDUCATION</h1>
                    
                </div>
                <p className="font-medium">
                    Education is at the core of our existence. We are dedicated to supporting academic pursuits, lifelong learning, and the development of knowledge in all its forms. Our Janet Olufunmilayo Oluwasanmi Foundation Anglican Grammar School Igbara-Oke computer centre located at the premises of Anglican Grammar School Igbara-Oke with state of art computer systems offers free computer services to all students and members of the community.
                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex items-center font-bold text-lg pl-3">
                    <PiSealCheckFill size={45} className='text-blue-900' />
                    <h1 className="ont-bold text-lg">
                        Collaboration</h1>
                    
                </div>
                <p className="font-medium">
                We believe in the power of collaboration, both within our organization and with partners, stakeholders, and the community. We actively seek opportunities to work together to achieve common goals.
                </p>

            </div>
          

        </div>
    </div>
        </div>
    </div>
  )
}

export default CorporateScreen