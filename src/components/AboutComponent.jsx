import React from 'react'
import noble from '../assets/eve.jpg'
import { Link } from 'react-router-dom'
const AboutComponent = () => {
  return (
    <div className='p-3 bg-gray-100'>
        <p className='mx-auto w-1/2 text-3xl font-medium, pt-10 font-bold uppercase mb-9'>About Us</p>
        <div className="md:flex md:justify-between md:items-start">
            <div className="w-full">
                <p className="md:text-lg font-medium">
                    In Prof Rufus Elemo Multipurpose Event Centre our mission is to server as a beacon of education, culture, and community in igbara-Oke, Ondo State, Nigeria. We are commited to providing a dynamic and inclusive space where knowledge, creativity, social interaction, and collaboration flourish. <br></br>
                    Our primary aim is to support the goals and aspirations of Janet Olufunmilayo Oluwasanmi Foundation Anglican Grammar School Igbara-Oke and its Board of Trustees and Foundation Management Council, by offering a diverse range of events, programs, and facilities that foster social interaction, personal growth and community development.<br></br>
                    Also, Our vision is to be a hub of excellence, innovation, and cultural enrichment in the heart of Igbara-Oke, Ondo State. We aspire to create an iconic, state-of-art event center that offers unforgettable experiences and embodies the ideals of Janet Olufunmilayo Oluwasanmi Foundation Anglican Grammar School Igbara-Oke and its Foundation Management Council.
                    </p>
                    <div className="flex items-center ">
                        <Link to="/about" className="bg-blue-900 text-white  p-4 mt-12 mb-12 rounded-lg block mr-4">More About Us</Link>
                        <Link to="/venue_info" className="bg-blue-900 text-white p-4 mt-12 mb-12 rounded-lg block">See Our Venue Infos</Link>
                        

                    </div>
                     
            </div>
            {/* <div className="">
            </div> */}
            <div className="w-full md:w-11/12">
                <img src={noble} alt="" className="w-full bg-cover  bg-no-repeat"  />
            </div>
        </div>

    </div>
  )
}

export default AboutComponent