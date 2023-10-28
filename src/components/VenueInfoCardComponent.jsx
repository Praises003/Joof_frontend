import React from 'react'
import {FaMapLocation} from 'react-icons/fa6'
import {RxAvatar} from 'react-icons/rx'
import {FaDollarSign} from 'react-icons/fa'
import {BsFillCarFrontFill} from 'react-icons/bs'
import {FaRegThumbsUp} from 'react-icons/fa'
import {PiSealCheckFill} from 'react-icons/pi'

const VenueInfoCardComponent = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            <div className="w-full shadow-lg  pt-8 px-8 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4 pr-4">
                    <FaMapLocation size={45} />
                    <h1 className="font-bold text-lg">HIGH QUALITY EVENT SPACES</h1>
                    
                </div>
                <p className="font-medium">
                        We have crafted and designed an event space for your special event–Book now to enjoy services fit for royalty


                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4">
                    <RxAvatar size={45} />
                    <h1 className="font-bold text-lg">DEDICATED & PROFESSIONAL SERVICE</h1>
                    
                </div>
                <p className="font-medium">
                Our professional & highly trained staff are ready to handle all your event needs. We also offer event planning services.
                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4">
                    <FaDollarSign size={45} />
                    <h1 className="font-bold text-lg pl-3">
                    HIGHLY AFFORDABLE & COMPETITIVE PRICES</h1>
                    
                </div>
                <p className="font-medium">
                    Book now & take the advantage of fair, affordable and highly competitive prices to host your special event today.
                    </p>
            

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4 ">
                    <BsFillCarFrontFill size={50} />
                    <h1 className="font-bold text-lg pl-3">
                    ACCESSIBLE EVENT SPACE WITH GREAT PARKING</h1>
                    
                </div>
                <p className="font-medium">
                    With ramp access & easily reached transportation routes, our event space is highly accessible with lots of parking to ensure that guests can easily locate and attend your event.
                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4">
                    <FaRegThumbsUp size={50} />
                    <h1 className="font-bold text-lg pl-3">
                    WE ARE HERE TO MAKE YOUR EVENT SUCCESSFUL</h1>
                    
                </div>
                <p className="font-medium">
                    Our one universal goal is to ensure that everyone who attends your special event is able to have a fantastic time.
                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex font-bold text-lg pl-3">
                    <PiSealCheckFill size={60} />
                    <h1 className="ont-bold text-lg">
                        GUARANTEED HIGH SECURITY & ADDED FACILITIES</h1>
                    
                </div>
                <p className="font-medium">
                With State of the art surveillance & security personnel and a host of other facilities on site, you stand to get real value for your money when you host events at Noble Castle.
                </p>

            </div>
          

        </div>
    </div>
  )
}

export default VenueInfoCardComponent