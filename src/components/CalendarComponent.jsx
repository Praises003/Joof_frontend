import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {toast} from "react-toastify"
import {Link, useNavigate} from "react-router-dom"
import chatLogoo from "../assets/logo.jpg"
import axios from "axios"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import Datetime from 'react-datetime';
import EventCon from './EventCon';
import EventComponent from './EventComponent';
import eventImg from "../assets/event4.jpg"

import { createEvent } from '../slices/eventSlice'



const CalendarComponent = () => {

  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [end, setEnd] = useState("")
  const [type, setType] = useState("")
  const [events, setEvents] = useState([]); 
  const [ticketType, setTicketType] = useState('free');
  const [price, setPrice] = useState('0');


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {event, isLoading, isError, isSuccess, message} = useSelector(state => state.event)
  

  useEffect(() => {
  

    
    if(isError) {
      toast.error(message)
      console.log(message)
    }
 
  },[event, navigate, dispatch, message, isError, isSuccess])
 console.log(events)
 

 const handleType = (e) => {
  setType(e.target.value)
}

const handleTypeChange = (type) => {
  setTicketType(type);
  if (type === 'free') {
    setPrice('0');
  }
};

const handlePriceChange = (e) => {
  if (ticketType === 'free') {
    e.preventDefault();
  } else {
    setPrice(e.target.value);
  }
};

const stateData = {title, description, type, date}
  
  const submitFunc = (e) => {
      e.preventDefault()
      if (!title || !description || !type || !date) { 
         toast.error("Fill Up All Fields")
      } 

      dispatch(createEvent(stateData))
      setEvents([
        ...events,
        {
          date: date.toISOString(),
          //end: end.toDate(),
          title          
        }
      ])
     
      console.log("submitted");
      setTitle(""); // Clear input fields
    setDescription("");
    setDate("");
    setType("")
  }

  console.log(event)
  const onchangeFunc = () => {
      console.log("Ok")
  }

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          
        },
      ]);
    }
  }
  return (
    <div className="justify-between" style={{ height: '' }}>
      {isLoading && (<h1>Loading</h1>)}
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
      <div className="p-4">
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
          events={events}
          //select={handleSelect}
          views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        />
      </div>
      
      {/* <EventComponent /> */}
      <div>
        
        <h1 className='text-center font-bold text-lg md:text-3xl'>PROF RUFUS OLADIPO ELEMO MULTIPURPOSE EVENT CENTER  </h1>
        {/* <p>Location</p> */}

        <div className="flex flex-col lg:flex-row justify-between items-center p-4">
            <div className="basis-3/5 p-4">
                <img src={eventImg} alt="" className='w-full bg-cover bg-no-repeat' />
            </div>
            <div className="basis-2/5 border shadow-lg rounded-sm w-full p-3">
                <form onSubmit={submitFunc} >
                            <div className="p-2">
                            <div className='mb-8 w-full mx-auto'>
                                <h1 className='text-2xl md:text-3xl font-bold text-center sm:text-lg mb-3 '>Book Your Event Now</h1>
                                <label className="block mb-3 font-medium text-gray-900 " htmlFor=''>Enter Event Title</label>
                                <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4' type='text' id='title' name='title' value={title} placeholder='title' required onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                        
                        

                        

                        <div className="">
                        <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">Event Description</label>
                        <textarea id="text" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" name='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                        <div className='mb-8'>
                            <label className="block text-md font-medium"  htmlFor=""> Set Event Date and Time </label>
                            <Datetime value={date} onChange={(date) => setDate(date)} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4 placeholder:text-black' />
                        
                            
                        </div>
{/* 
                        <div className='mb-8'>
                            <label className="block text-md font-medium"  htmlFor="">Event Date and Time </label>
                            <Datetime value={end} onChange={(date) => setEnd(date)} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4 placeholder:text-black' placeholder="Date" /> 
                            
          </div> */}

                        <div>

                            <label>

                            <p>Enter your Event Category i.e Wedding, Birthdays, Seminar</p>


                            {/* <select value={type} onChange={handleType}>

                                <option value="wedding">Wedding</option>

                                <option value="corporate">Corporate</option>

                                <option value="seminar">Seminar</option>

                                <option value="exhibition">Exhibtion</option>

                                <option value="wedding">Wedding</option>

                                <option value="corporate">Corporate</option>

                                <option value="seminar">Seminar</option>

                                <option value="exhibition">Exhibtion</option>
                                
                                <option value="others">Others</option>

                                
                                <option value="birthday">Birthday</option>


                            </select> */}

                            </label>

                            <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4' type='text' id='category' name='category' value={type} placeholder='category' required onChange={handleType}/>

                            

</div>

<div className="container mx-auto mt-10">
      <div className="flex justify-center">
        <button
          className={`mr-4 py-2 px-4 rounded ${
            ticketType === 'free' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
          }`}
          onClick={() => handleTypeChange('free')}
        >
          Free
        </button>
        <button
          className={`py-2 px-4 rounded ${
            ticketType === 'paid' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
          }`}
          onClick={() => handleTypeChange('paid')}
        >
          Paid
        </button>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="text"
          className={`mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
            ticketType === 'free' ? 'bg-gray-200' : ''
          }`}
          placeholder="Enter price"
          value={price}
          onChange={handlePriceChange}
          disabled={ticketType === 'free'}
        />
      </div>
    </div>

{/* 
                        <div className="">
                            <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="text" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How can we help you?" name='text' value={text} onChange={onchangeFunc}></textarea>
                        </div> */}

                        
                        <div>
                                <button  type="submit" className='bg-blue-900 text-white py-2.5 px-4 w-full mt-2 rounded-md  '>Submit</button>
                            </div>     

                            </div>
                                    
                        </form>
            </div>

        </div>

    </div>
    </div>
  )
}

export default CalendarComponent