import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { FaList, FaRegCalendarAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import meetings from "../assets/no_event.jpg";

const DashEvent = () => {
  const [event, setEvent] = useState(true);
  const [cal, setCal] = useState(false);
  const { guest } = useSelector(state => state.guest)
  console.log(guest)

  const { user } = useSelector(state => state.user)
    console.log(user)
    const navigate = useNavigate()
    useEffect(() => {
        if ( user === null ) {
            navigate("/register")
        }
    }, [])
    const onNav = () => {
        navigate("/dash_event")
    }

  
  const onEventClick = () => {
     setCal(false);
     setEvent(true)
  };

  const onCalClick = () => {
    setCal(true);
    setEvent(false);
  };

  return (
    <div>
      
      <div className="full-width">
        
        <p className="md:text-5xl text-3xl  font-bold mb-6 ">Events</p>
      </div>

      <div className="flex justify-between px-0.5 mb-10 w-full">
        <div onClick={onEventClick} className={`flex bg-blue-900 text-white rounded-2xl p-2 items-center`}>
          <FaList />
          <p className="pl-3 md:text-lg">All Events</p>
        </div>

        <div onClick={onCalClick} className={`flex bg-blue-900 text-white rounded-2xl p-2 items-center ${cal ? 'selected' : ''}`}>
          <FaRegCalendarAlt />
          <p className="pl-3 md:text-lg w-full">{} Calendar</p>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl py-2 px-4 items-center">
          <Link to={"/calendar"}>Create Event</Link>
        </div>
      </div>

       {event && (
        <div className="">
          <img src={meetings} alt="" className=' mb-3 w-7/12 md:w-4/12  bg-cover bg-no-repeat mx-auto' />
          <p className="text-center text-lg md:text-xl font-semibold">No Events to show, create an Event</p>
        </div>
      )} 

<div className="justify-between" style={{ height: '' }}>
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
      {cal ? <div className="p-4">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
         
          aspectRatio={8}
          height={700}
          initialView="dayGridMonth"
          // selectable
          
          //select={handleSelect}
          views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        />
      </div> : ""}
      </div>
    </div>
  );
}

export default DashEvent;
