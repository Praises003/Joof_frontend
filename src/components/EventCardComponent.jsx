import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
//import { eventAction } from '../slices/moreEventSlice'
import birthday from '../assets/conference.jpg'
import fundraising from '../assets/fundraising.jpg'
import graduation from '../assets/graduation.jpg'
import meeting from '../assets/meeting.jpg'
import event from '../assets/event2.jpeg'
import eventImg from "../assets/ev bg.jpg"
import wedding from "../assets/wedding_pic.jpg"
import seminar from "../assets/seminar.jpg"
import exhibition from "../assets/Exhibition.jpg"
import christopher from "../assets/christopher.jpg"
import sergio from "../assets/sergio.jpg"
import stefan from "../assets/stefan.jpg"
import jonas from "../assets/jonas.jpg"
import {FaRegCalendarAlt} from "react-icons/fa"
import {FaRegHourglassHalf} from "react-icons/fa6"
import {MdOutlineCorporateFare} from  "react-icons/md"
import {BiSolidParty} from 'react-icons/bi'
import {AiTwotoneHeart} from "react-icons/ai"
import { Link } from 'react-router-dom'
import CustomerReviewComponent from '../components/CustomerReviewComponent'
import EmailComponent from '../components/EmailComponent'
import EventMoreComponent from './EventMoreComponent'


const EventCardComponent = () => {
    const dispatch = useDispatch()
     const [upcomings, setUpcomings] = useState([{
        id: 1,
        title: "CERTIFIED - HealthCare Champion Training Course",
        time: "10:00AM",
        price: "Free",
        date: "November 10, 2023",
        img: eventImg,
        text: "HealthCare Medical Association."
    },
    {
            id: 2,
            title: "Vertizo International Conference",
            time: "12:00 PM",
            price: 5000,
            date: "November 11, 2023",
            img: seminar,
            text: "The Medical Association."
    },
    {
        id: 3,
        title: "Golden Jubilee",
        category: "Birthday",
        price: "Free",
        date: "November 12, 2023",
        img: birthday,
        text: "Alfred Publishing Ltd"
    },
    {
        id: 4,
        title: "Communication Conference",
        time: "11:00AM",
        status: 10000,
        date: "November 13, 2023",
        img: meeting,
        text: "National Communication Organization."
    },
    {
        id: 5,
        title: "Econometrics Seminar",
        time: "1:00PM",
        price: 2000,
        date: "November 14, 2023",
        img: seminar,
        text: "Econometric Group of Nigeria."
    },
    {
        id: 6,
        title: "Women Empowerment",
        time: "2:00PM",
        paid: "Free",
        date: "November 15, 2023",
        img: graduation,
        text: "Women Empowerment Organization"
    },
    
])

const {user} = useSelector(state => state.user)

const {eventPackage} = useSelector(state => state.eventPackage)

const moreEvent = useSelector(state => state.moreEvent)
console.log(moreEvent)
console.log(user)
console.log(eventPackage)

  const [eventpack, setEventPack] = useState([
      {
        id: 1,
        name: "Wedding",
        price: "$100",
        description: "We provide risers, tables and chairs. Also china, silverware, glassware and votive candles. A Bridal Suite",
        pic: wedding 

      },
      {
        
          id: 2,
          name: "Corporate",
          price: "$100",
          description: "We provide risers, tables and chairs. Also china, silverware, glassware and votive candles. A Bridal Suite",
          pic: meeting  
        
      },
      {
        id: 3,
        name: "Private Parties",
        price: "$100",
        description: "We provide risers, tables and chairs. Also china, silverware, glassware and votive candles. A Bridal Suite",
        pic: seminar 

      }
      
    ])

    const [custRev, setCustRev] = useState([
      {
        id: 1,
        name: "stefan",
        img: stefan,
        description: ""
      },
      {
        id: 2,
        name: "christopher",
        img: christopher,
        description: ""
      },
      {
        id: 3,
        name: "sergio",
        img: sergio,
        description: ""
      },
      {
        id: 4,
        name: "jonas",
        img: jonas,
        description: ""
      }
      
    ])

    
  return ( 
    <div>

        <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "45vh"}} className={` `}>
          <p className='uppercase text-4xl md:text-5xl font-bold  text-white text-center pt-20 md:pt-40'>Events</p>

          
        </div>

        <h1 className='text-center font-bold mx-auto text-4xl my-9 md:text-4xl'> Events</h1>
        <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
           {moreEvent.events.map(up => <div className='' key={up.id}>
                <div className="border border-gray-300 shadow rounded-lg">
                    <div className="">
                    <img src={up.img} alt="" className='w-full bg-cover bg-no-repeat' />
                    <div className="p-5">
                    <p className='text-slate-600  font-bold text-xl mb-3'>{up.title}</p>
                    <div className="text-sgray-600 font-semibold">
                        Date: {up.date} 
                    </div>

                    <div className="text-sgray-600 font-semibold">
                        Time: {up.time} 
                    </div>

                    <div className="text-sgray-600 font-semibold">
                        Price: {up.price} 
                    </div>

                    <div className="text-sgray-600 font-semibold">
                        Convener: {up.text} 
                    </div>




                    <Link to={"/eventmore"}  className="w-full block p-1.5 text-center bg-blue-900 text-white rounded-lg border"> View </Link>
                    
                    

                    </div>
                    

                    </div>
                    

                </div>
           
            </div>)}

            

            
          </div>

        </div>

        

    </div>
  )
}




export default EventCardComponent