import React from 'react'
import noble from '../assets/eve.jpg'
import { Link } from 'react-router-dom'
const AboutComponent = () => {
  return (
    <div className='p-3 bg-gray-100'>
        <p className='mx-auto w-1/2 text-3xl font-mediu, pt-10'>About <span>Us</span></p>
        <div className="md:flex md:justify-between md:items-center">
            <div className="w-full">
                <p>
                    The Landmark Centre is located on the grounds of Landmark Village, a spectacular beach front location overlooking the majestic Atlantic Ocean, in Victoria Island, the heart of the vibrant and lively Lagos business district and metropolis.

                    Extending over 9.4 acres, the location makes its easily accessible from anywhere in the city and makes it perfect for any event. It is a venue guaranteed to impress. Couple this with the centre’s established commitment to environmental and social sustainability and you have the making of a conference, convention, or exhibition that can only be described as exceptional on every level.</p>
                    <div className="flex items-center px-8">
                        <Link to="/about" className="bg-blue-900 text-white text-lg p-4 mt-12 mb-3 rounded-lg block mr-4">More About Us</Link>
                        <Link to="/venue_info" className="bg-blue-900 text-white text-lg p-4 mt-12 mb-3 rounded-lg block">See Our Venue Informations</Link>
                        

                    </div>
                     
            </div>
            {/* <div className="">
            </div> */}
            <div className="w-full md:w-3/4">
                <img src={noble} alt="" className="w-full bg-cover  bg-no-repeat"  />
            </div>
        </div>

    </div>
  )
}

export default AboutComponent