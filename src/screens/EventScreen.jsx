import React, {useEffect, useState} from 'react'
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
import axios from 'axios'
import SpinnerComponent from '../components/SpinnerComponent'

const EventScreen = () => {
    const [upcoming, setUpcoming] = useState([{
        id: 1,
        title: "World Trade Fair",
        category: "Conference",
        status: "upcoming",
        date: "November 10, 2023",
        img: eventImg,
        text: "The NVMA Eko 2023 congress and AGM is the annual scientific conference, exhibition and AGM of the Nigerian Veterinary Medical Association."
    },
    {
            id: 2,
            title: "Vertizo 6.0",
            category: "Seminar",
            status: "upcoming",
            date: "November 11, 2023",
            img: seminar,
            text: "The NVMA Eko 2023 congress and AGM is the annual scientific conference, exhibition and AGM of the Nigerian Veterinary Medical Association."
    },
    {
        id: 3,
        title: "Golden Jubilee",
        category: "Birthday",
        status: "upcoming",
        date: "November 12, 2023",
        img: birthday,
        text: "The NVMA Eko 2023 congress and AGM is the annual scientific conference, exhibition and AGM of the Nigerian Veterinary Medical Association."
    },
    {
        id: 4,
        title: "Communication Conference",
        category: "Conference",
        status: "upcoming",
        date: "November 13, 2023",
        img: meeting,
        text: "The NVMA Eko 2023 congress and AGM is the annual scientific conference, exhibition and AGM of the Nigerian Veterinary Medical Association."
    },
    {
        id: 5,
        title: "Econometrics Seminar",
        category: "Seminar",
        status: "upcoming",
        date: "November 14, 2023",
        img: seminar,
        text: "The NVMA Eko 2023 congress and AGM is the annual scientific conference, exhibition and AGM of the Nigerian Veterinary Medical Association."
    },
    {
        id: 6,
        title: "Women Empowerment",
        category: "Conference",
        status: "upcoming",
        date: "November 15, 2023",
        img: graduation,
        text: "The NVMA Eko 2023 congress and AGM is the annual scientific conference, exhibition and AGM of the Nigerian Veterinary Medical Association."
    },
    
])
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
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchEvents = async () => {
        try {
          setLoading(true)
          const { data } = await axios.get('http://localhost:5000/api/package')
          setEvents(data)
          setLoading(false)
        } catch (error) {
          console.error(error)
          
        }
      }
      fetchEvents();
    },[])
    console.log(events)
  return (
    <div>

        <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "45vh"}} className={` `}>
          <p className='uppercase text-4xl md:text-5xl font-bold  text-white text-center pt-20 md:pt-40'>Events</p>

          
        </div>

        {loading ? (<SpinnerComponent />) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-2 mb-5'>
          {events.map(ev => (
          
            <div className="border shadow-md border-t-8 border-r border-l- border-b- rounded border-t-yellow-500 p-4">
              <div className="pb-5"></div>
                <img src={ev.image} alt={"image"} />
                <p className='text-center font-bold text-2xl mb-3'>{ev.name}</p>

                <p className='  mb-2'>{ev.description.substring(0,535)}...</p>

                <p className="text-center font-semibold text-2xl pb-4">₦{ev.price}</p>                      
              
              
  
            </div>
          ))}
          </div>
        )}

        {/* <h1 className='text-center font-bold mx-auto text-4xl my-9 md:text-4xl'>Upcoming Events</h1> */}
        {/* <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {upcoming.map(up => <div className='' key={up.id}>
                <div className="border border-gray-300 shadow">
                    <div className="">
                    <img src={up.img} alt="" className='w-full bg-cover bg-no-repeat' />
                    <div className="p-5">
                    <p className='text-blue-700 font-bold text-2xl mb-3'>{up.title}</p>
                    <div className="flex justify-between items-center mb-6">
                    <p className='bg-blue-900 text-white rounded-2xl px-3 py-0.5'>{up.category}</p>
                    <div className="flex justify-between items-center">
                    <FaRegCalendarAlt />
                    <p className='p-1'> {up.date}</p>

                    </div>
 

                    </div>

                    <p className='mb-4'>{up.text}</p>
                    
                    

                    <div className="flex items-center justify-start mb-3">
                      <FaRegHourglassHalf color='blue' />
                      <p className='ml-3 text'>{up.status}</p>
                    </div>

                    <button className="w-full p-1.5 text-center bg-blue-900 text-white rounded-lg border">MORE INFORMATION</button>
                    
                    

                    </div>
                    

                    </div>
                    

                </div>
           
            </div>)}

            
          </div>

        </div> */}

        {/* <h1 className='text-center font-bold mx-auto text-4xl my-9 md:text-5xl'> Events Packages</h1> */}
       

        <div className="bg-blue-900 text-center text-white p-1.5 text-lg font-bold rounded-md mb-5 md:w-2/5 md:mx-auto mx-9 ">
          <Link to={"/calendar"}>Book An Event Now</Link>
        </div>

        <div className="">
          <CustomerReviewComponent rev={custRev}/>
        </div>

        {/* <EmailComponent /> */}

  


    </div>
  )
}

export default EventScreen