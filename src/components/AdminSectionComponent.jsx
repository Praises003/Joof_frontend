import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import { FaUsers } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import {FaTimes, FaBars} from 'react-icons/fa'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";



const AdminSectionComponent = ({show, setShow}) => {
  const { user } = useSelector(state => state.user)

    const navigate = useNavigate()
    useEffect(() => {
        if ( !user.isAdmin ) {
            navigate("/register")
        }
    }, [])

  const menuClick = () => {
    setShow(true)
  }
  return (
    <div className=''>
       <style>
        {`.fc {
          background-color: blue;
        }
        .fc-daygrid-event .fc-content .fc-title {
          color:#fff;
          word-wrap: wrap;
          
          overflow-wrap: break-word;
        }

        .fc-daygrid-header .fc-daygrid-title {
          color: white;
        }
        
          .fc-daygrid-event .fc-content {
            /*word-break: break-all;
            overflow-wrap: break-word;
            word-break: break-all;
            overflow: hidden; */
            
         
          } .fc-event .fc-title {
            font-size: 14px;
            font-weight: bold;
            color: #fff;
            overflow-wrap: break-word;
            
            
            
            
          }
          .fc-header-toolbar {
            color: #fff;
            font-weight: 600;
          }

          .fc-daygrid-day-number {
            color: white;
          }

          .fc-daygrid-day {
            * {
              color: white;
            }
          }

          .fc-daygrid-header .fc-daygrid-day-header {
            color: white;
          }

     
          
          /* Style the event background */
          .fc-event {
            
            
            border-radius: 4px;
           
            /*overflow-wrap: break-word;
            text-overflow: ellipsis; */
          } 

          .fc-content {
            background: ;
            max-width: 100%;
          }
        `}
      </style>
      <div style={{background: "#202020"}} className="hidden lg:block">
        <div className="p-4">
          <p className="text-white text-lg font- mb-2">Admin</p>
          <div className="h-0.5 w-full bg-slate-500 "></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 mb-9">
            <div style={{}} className="bg-yellow-500 rounded-lg p-6">
              <div className="flex justify-between  items-center">
                
                <div className="">
                  <p className="text-4xl font-bold text-white mb-2.5">1250+</p>
                  <p className="text-white text-lg">Total Registration</p>
                </div>
                <FaUsers size={45} className='text-white' />
              </div>
                          </div>

            <div className="bg-yellow-500 rounded-lg p-6">
              <div className="flex justify-between  items-center">
                <div className="">
                  <p className="text-4xl font-bold text-white mb-2.5">35</p>
                  <p className="text-white text-lg">New Events</p>


                </div>
                <IoCalendarNumberSharp size={45} className='text-white' />

                

              </div>
                          </div>

            <div className="bg-yellow-500 rounded-lg p-6">
              <div className="flex justify-between  items-center">
                <div className="">
                  <p className="text-4xl font-bold text-white mb-2.5">2560+</p>
                  <p className="text-white text-lg">Total Ticket Created</p>

                </div>
                <IoTicketSharp size={45} className='text-white' />


              </div>
              
                          </div>

            
            <div className="bg-yellow-500 rounded-lg p-6">
              <div className="flex justify-between  items-center">
                <div className="">

                  <p className="text-4xl font-bold text-white mb-2.5">2560+</p>
                  <p className="text-white text-lg">Event Packages</p>

                </div>
                <FaGift size={45} className='text-white' />

              </div>
                          </div>
          </div>

          <div className="bg-yellow-500 p-5 rounded-lg">
          <div className="flex items-center justify-center">
            <BsFillTicketPerforatedFill size={30} />
            <p className="text-white text-2xl pl-4">Ticket Sold</p>

          </div>
          

          <div style={{background: "#202020"}} className=" rounded-lg p-6 mb-4">
            <p className="text-white text-2xl font-semibold mb-3">Digital Business Summit - 2023</p>
            <div  className="flex items-center bg-">
              <FaUserAlt className='text-white'/>
              <p className="px-4 text-white">Andru Hebo</p>
              <FaClock className='text-white' />
              <p className="pl-4 text-white">9:00am- 5:00 pm</p>

            </div>
          </div>

          <div style={{background: "#202020"}} className=" rounded-lg p-6">
            <p className="text-white text-2xl font-semibold mb-3">NASA Space Apps Challenge Summit - 2023</p>
            <div  className="flex items-center bg-">
              <FaUserAlt className='text-white'/>
              <p className="px-4 text-white">Andru Hebo</p>
              <FaClock className='text-white' />
              <p className="pl-4 text-white">9:00am- 5:00 pm</p>

            </div>
            </div>


          </div>

          <div className="p-4">
            <div className="flex items-center mb-3">
              <IoCalendarNumberSharp size={40} className='pr-3 text-white' />
              <p className=" text-white text-xl font-semibold">Calendar</p>

            </div>
            
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          eventContent={(info) => (
            <div className="fc-content">
              <div
                className="fc-title"
                
                
              >
                <p  className='text-white whitespace-normal '>{info.event.title}</p>
              </div>
            </div>
          )}
          aspectRatio={8}
          height={600}
          initialView="dayGridMonth"
          // selectable
          //events={events}
          //select={handleSelect}
          views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        />
      </div>

      <div className="bg-yellow-500 p-4 rounded-lg">
        <div className="flex items-center mb-3">
          <IoCalendarNumberSharp size={40} className='text-white pr-4' />
          <p className="text-lg text-white">Event Registration User List</p>
        </div>

        <div className=''>
          <div className="flex justify-between mb-1.5 bg-black text-white font-bold rounded-md p-2.5 text-lg">
            <p className="text-center">ID No</p>
            <p className="text-center">Name</p>
            <p className="">Status</p>
            <p className="lg:pr-16">Time</p>

          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-2">
            <p className="text-center">#3265</p>
            <p className="text-center lg:pl">Harry Porter</p>
            <p style={{background: "#414B42", color: "#37D146", fontSize: "15.9px" }} className=" text-center rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5">Approved</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-2">
            <p className="text-center">#3112</p>
            <p className="text-center lg:pl">Lary go</p>
            <p style={{background: "#544B3A", color: "#F98732", fontSize: "15.9px"}} className=" text-center rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5">Pending</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-3">
            <p className="text-center">#4232</p>
            <p className="text-center lg:pl">Sumona Gang</p>
            <p style={{background: "#3A4F4F", color: "#14C8C8", fontSize: "15.9px"}} className=" text-start rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5  lg:mr-10">Paid</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-3">
            <p className="text-center">#5532</p>
            <p className="text-center lg:pl">David Morph</p>
            <p style={{background: "#4F3C3C", color: "#AF251C", fontSize: "15.9px"}} className=" text-start rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5  lg:mrr-10">Unpaid</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-3">
            <p className="text-center">#1932</p>
            <p className="text-center lg:pl">Willium Cany</p>
            <p style={{background: "#414B42", color: "#37D146", fontSize: "15.9px" }} className=" text-center rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5">Approved</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>
        </div>
      </div>

        

        </div>

              </div>

              {/** Small Screens */}
              <div style={{background: "#202020"}} className="lg:hidden block w-full">
                {/* <div className="pl-5 pt-4">
                <FaBars onClick={menuClick} size={28} className='text-white ' />
                  
                </div> */}
        <div className="p-4">
          <p className="text-white text-2xl md:text-4xl font-bold mb-2 text-center">Admin Dashboard</p>
          <div className="h-0.5 w-full bg-slate-500 "></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 mb-9">
            <div style={{}} className="bg-yellow-500 rounded-lg p-6">
              <div className="flex justify-between  items-center">
                
                <div className="">
                  <p className="text-4xl font-bold text-white mb-2.5">1250+</p>
                  <p className="text-white text-lg">Total Registration</p>
                </div>
                <FaUsers size={45} className='text-white' />
              </div>
                          </div>

            <div className="bg-yellow-500 rounded-lg p-6">
              <div className="flex justify-between  items-center">
                <div className="">
                  <p className="text-4xl font-bold text-white mb-2.5">35</p>
                  <p className="text-white text-lg">New Events</p>


                </div>
                <IoCalendarNumberSharp size={45} className='text-white' />

                

              </div>
                          </div>

            <div className="bg-yellow-500 rounded-lg p-6">
              <div className="flex justify-between  items-center">
                <div className="">
                  <p className="text-4xl font-bold text-white mb-2.5">2560+</p>
                  <p className="text-white text-lg">Total Ticket Created</p>

                </div>
                <IoTicketSharp size={45} className='text-white' />


              </div>
              
                          </div>

            
            <div className="bg-yellow-500 rounded-lg p-6">
              <div className="flex justify-between  items-center">
                <div className="">

                  <p className="text-4xl font-bold text-white mb-2.5">2560+</p>
                  <p className="text-white text-lg">Event Packages</p>

                </div>
                <FaGift size={45} className='text-white' />

              </div>
                          </div>
          </div>

          <div className="bg-yellow-500 p-5 rounded-lg">
          <div className="flex items-center justify-center">
            <BsFillTicketPerforatedFill size={30} />
            <p className="text-white text-2xl pl-4">Ticket Sold</p>

          </div>
          

          <div style={{background: "#202020"}} className=" rounded-lg p-6 mb-4">
            <p className="text-white text-2xl font-semibold mb-3">Digital Business Summit - 2023</p>
            <div  className="flex items-center bg-">
              <FaUserAlt className='text-white'/>
              <p className="px-4 text-white">Andru Hebo</p>
              <FaClock className='text-white' />
              <p className="pl-4 text-white">9:00am- 5:00 pm</p>

            </div>
          </div>

          <div style={{background: "#202020"}} className=" rounded-lg p-6">
            <p className="text-white text-2xl font-semibold mb-3">NASA Space Apps Challenge Summit - 2023</p>
            <div  className="flex items-center bg-">
              <FaUserAlt className='text-white'/>
              <p className="px-4 text-white">Andru Hebo</p>
              <FaClock className='text-white' />
              <p className="pl-4 text-white">9:00am- 5:00 pm</p>

            </div>
            </div>


          </div>

          <div className="p-4">
            <div className="flex items-center mb-3">
              <IoCalendarNumberSharp size={40} className='pr-3 text-white' />
              <p className=" text-white text-xl font-semibold">Calendar</p>

            </div>
            
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          eventContent={(info) => (
            <div className="fc-content">
              <div
                className="fc-title"
                
                
              >
                <p  className='text-white whitespace-normal '>{info.event.title}</p>
              </div>
            </div>
          )}
          aspectRatio={8}
          height={600}
          initialView="dayGridMonth"
          // selectable
          //events={events}
          //select={handleSelect}
          views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        />
      </div>

      <div className="bg-yellow-500 p-4 rounded-lg">
        <div className="flex items-center mb-3">
          <IoCalendarNumberSharp size={40} className='text-white pr-4' />
          <p className="text-lg text-white">Event Registration User List</p>
        </div>

        <div className=''>
          <div className="flex justify-between mb-1.5 bg-black text-white font-bold rounded-md p-2.5 text-lg">
            <p className="text-center">ID No</p>
            <p className="text-center">Name</p>
            <p className="">Status</p>
            <p className="lg:pr-16">Time</p>

          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-2">
            <p className="text-center">#3265</p>
            <p className="text-center lg:pl">Harry Porter</p>
            <p style={{background: "#414B42", color: "#37D146", fontSize: "15.9px" }} className=" text-center rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5">Approved</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-2">
            <p className="text-center">#3112</p>
            <p className="text-center lg:pl">Lary go</p>
            <p style={{background: "#544B3A", color: "#F98732", fontSize: "15.9px"}} className=" text-center rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5">Pending</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-3">
            <p className="text-center">#4232</p>
            <p className="text-center lg:pl">Sumona Gang</p>
            <p style={{background: "#3A4F4F", color: "#14C8C8", fontSize: "15.9px"}} className=" text-start rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5  lg:mr-10">Paid</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-3">
            <p className="text-center">#5532</p>
            <p className="text-center lg:pl">David Morph</p>
            <p style={{background: "#4F3C3C", color: "#AF251C", fontSize: "15.9px"}} className=" text-start rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5  lg:mrr-10">Unpaid</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>

          <div style={{background: "#414141"}} className="flex justify-between text-white text-lg font-semibold p-2.5 rounded-md mb-3">
            <p className="text-center">#1932</p>
            <p className="text-center lg:pl">Willium Cany</p>
            <p style={{background: "#414B42", color: "#37D146", fontSize: "15.9px" }} className=" text-center rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5">Approved</p>
            <p className="">9:00am- 5:00 pm </p>
          </div>
        </div>
      </div>

        

        </div>

              </div>

    </div>
  )
}

export default AdminSectionComponent