import React, {useState} from 'react'
import { FaHome } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { IoTicket } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa6";
import {FaRegCalendarAlt} from "react-icons/fa"
import {FaRegHourglassHalf} from "react-icons/fa6"
import {MdOutlineCorporateFare} from  "react-icons/md"
import {BiSolidParty} from 'react-icons/bi'
import {AiTwotoneHeart} from "react-icons/ai"
import {useSelector, useDispatch} from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import meetings from "../assets/g_meeting.jpg"
import events from "../assets/no_event.jpg"
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
import { useEffect } from 'react';
import DashEvent from '../components/DashEvent';
const DashboardScreen = () => {
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

    const { user } = useSelector(state => state.user)
   
    const navigate = useNavigate()
    useEffect(() => {
        if ( user === null ) {
            navigate("/register")
        }
    }, [])
    const onNav = () => {
        navigate("/dash_event")
    }
  return (
    <div>
        <div className="">
        
        </div>

        <div className="ml-4">
            <p className="font-bold text-2xl md:text-4xl text-blue-950 text-center my-4">Welcome {user ? user.name : ""}, To Your Dashboard</p>
        </div>

        <div className="">
            <div className="flex flex-col md:flex-row justify-between p-4">
                <div className="">
                    <img src={"https://res.cloudinary.com/dyliuyezy/image/upload/v1718808701/test/whn8btmalot0cmsyjuco.jpg"} alt="" className=' w-full mb-3 md:w-11/12 h-3/4 bg-cover bg-no-repeat mx-auto' />

                </div>
                <div className="w-full bg-gray-200 h-2/4  pt-16 pb-16 md:pb-16">
                    {/**React Icon */}
                    <FaPenFancy size={50} className='mx-auto te text-blue-900 bg-white  rounded-lg p-2 mb-4' />
                    <p className="text-center font-semibold text-xl md:text-2xl mb-2">Create your event</p>
                    <p className="text-center ">Add all your event details, create new tickets, and set up recurring events</p>
                    <div className='pb-5 mx-auto w-11/12 bg-white p-4 border border-gray-600 border-solid border-x-2 border-y-2 text-center rounded-lg mt-3'>
                        <Link to={"/calendar"}>Create Event</Link>
                    </div>
                </div>

            </div>
            {/* <div className="">
                
                <p className="">Create your event</p>
                <p className="">Add all your event details, create new tickets, and set up recurring events</p>
                <Link>Create Event</Link>
            </div> */}
        </div>


     
        
          
       
    </div>

    
  )
}

export default DashboardScreen