import React from 'react'
import eventImg from "../assets/ev bg.jpg"
import { RiMegaphoneFill } from "react-icons/ri";
import {FaRegCalendarAlt} from "react-icons/fa"
import axios from "axios"
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';


const EventMoreComponent = ({ event}) => {


    let token = "sk_test_51OToy2I3dQudUwMT5Rg9sYBNmpwjHDnZXQrAYGKJrjyf6T65Tex5LwmxuW2vkvCV2tuZSXrznW5xjFF6CoMBkw8P00sRVpzrvm"
    const configs = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  
  const eventPackage = [{
    name: "CERTIFIED - HealthCare Champion Training Course",
    price: 9000,
    image: eventImg
  }]

    const makePayment = async() => {
        try {
          const stripe = await loadStripe("pk_test_51OToy2I3dQudUwMT7FmUGmDarYEIG5uP9z7HudbcukrACNhMlWFUqdLEwl9ZObXn25CK31Ffs8LDWB470P0ikGrn00N5SgS1CF")
   
        const body = {
          products: eventPackage
        }
        //https://joof-backend.vercel.app
        const { data } =  await axios.post("https://joof-backend.vercel.app/create-checkout-session", {
          products: eventPackage
        },)
      
        const result = stripe.redirectToCheckout({
          sessionId: data.id
        })
          
        } catch (error) {
          console.log(error)
        }
        
      }
    
  return (
    <div>
        <div className="p-8 h-1/4">
            <img src={eventImg} alt="" srcset="" className="w-full h-1/4"  />
        </div>

      <div className="flex justify-center">
        <div style={{background: ""}} className="flex w-3/4 md:w-1/4 justify-between items-center m-3 rounded-lg bg-blue-500 p-1 mb-9">
            <RiMegaphoneFill className="bg-blue-500 " size={23} />
            <p className="">Get your tickets now </p>
        </div>
      </div>

        <div className="text-blue-900 text-2xl mb-10">
            <p className="text-center">CERTIFIED - HealthCare Champion Training Course</p>
        </div>

        <div className="">
          
            <p className="text-2xl font-semibold p-1.5 text-center">Date and Time</p>
            <div className="flex justify-center">
            <div className="flex  items-center p-1.5 ">
                <div className="pr-4">
                    <FaRegCalendarAlt size={24} />
                </div>
            
                <div className="">
                    <p className="text-lg">November 10, 2023 10:00AM</p>

                </div>

                
            </div>
            </div>
            
            <div className="flex justify-center">
            <div className="">
              <button onClick={makePayment} className="bg-blue-900 w-full rounded-xl p-4">Buy Ticket</button>
            </div>
</div>
                
        </div>
    </div>
  )
}

export default EventMoreComponent