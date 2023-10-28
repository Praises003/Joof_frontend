import React, { useState } from 'react'
import birthday from '../assets/conference.jpg'
import fundraising from '../assets/fundraising.jpg'
import graduation from '../assets/graduation.jpg'
import meeting from '../assets/meeting.jpg'
import event from '../assets/event2.jpeg'
import eventImg from '../assets/event4.jpg'
import VenueInfoComponent from './VenueInfoComponent'

import data from '../utils/data'
import VenueInfoCardComponent from './VenueInfoCardComponent'


const VenueComponent = () => {
  const [details, setDetails] = useState(data)
  return (
    <div>
      <div className="bg-black md:h-72 h-48 w-full mb-10">
        <p className='text-white text-3xl md:text-5xl text-center md:pt-16 md:pb-8 pt-16 pb-2'>Joof Multi Purpose Event Center</p>
        <p className='text-white text-3xl md:text-5xl text-center '>Venue Information</p>

      </div>

      <div className="p-2 flex flex-col md:flex-row">
        <div className="w-full">
          <img src={event} alt="" className='w-full bg-cover bg-no-repeat' />
        </div>
        <div className="w-full ml-0.5 h-full">
          <h1 style={{color: "#000"}} className="md:text-4xl text-3xl  font-bold pl-2">Joof Multi Purpose Event Center</h1>
          <p style={{color: "#000", fontSize: 18.2}} className=" font-medium p-2">is located on the premises of the Federal Palace Hotel, a 5 star luxury hotel that offers state of the art facility and comforts of unimaginable proportions. Strategically located at the heart of Victoria Island, the Joof Multi Purpose Event Centre is the preferred venue for gatherings of all kinds in the region with proximity to both Island and mainland audiences. With the state of the art facilities and amenities, Joof Multipurpose Event Centre guarantees a memorable and unforgettable moments when you use our centers for your wedding, birthdays, weddings, festivals, exhibitions among others. We had your event in mind when designing and building The Joof Multi Purpose Center. See below the different types of events that can be held at the Joof Event Multi Purpose Center.</p>
        </div>
      </div>

      <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "60vh", }} className="">
        <p className="w-3/4 mx-auto pt-14 md:pt-24 text-white text-lg md:text-xl font-medium">
          Joof Multi Purpose Centre has a track record of delivering excellence at every customer touch points with trained staff who with the reason of experience provide customized and personalized services to clients within approved timelines and budget. We will stay with you through the entire process from booking through vendor meetings to execution.</p>

      </div>

      <div className="w-10/12 mx-auto">
        <p className="text-2xl md:text-3xl font-bold mb-7 mt-10"> Events That Can Be Held At The Joof Multi Purpose Event Centre.</p>
      </div>
      
        
        
        <div className=" px-6 md:px-2  grid grid-cols-2 md:grid-cols-3 gap-x-3">
          {data.map(data => <VenueInfoComponent data={data} />)}
            

        </div>

       <div className="">
        <p className="">More on our venue</p>
       </div>
       <div className="">
        <VenueInfoCardComponent />

       </div>
      
    </div>
  )
}

export default VenueComponent