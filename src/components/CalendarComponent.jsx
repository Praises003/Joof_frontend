import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import Datetime from 'react-datetime';
import EventCon from './EventCon';
import EventComponent from './EventComponent';
import event from "../assets/event4.jpg"


const CalendarComponent = () => {

  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [type, setType] = useState("fruit")
  const [events, setEvents] = useState([]); 

 console.log(events)
 

 const handleType = (e) => {
  setType(e.target.value)
}
  
  const submitFunc = (e) => {
      e.preventDefault()
      setEvents([
        ...events,
        {
          start: start.toISOString(),
          //end: end.toDate(),
          title          
        }
      ])
     
      console.log("submitted");
      setTitle(""); // Clear input fields
    setDescription("");
    setStart("");
    setEnd("");
  }

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
                <img src={event} alt="" className='w-full bg-cover bg-no-repeat' />
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
                            <label className="block text-md font-medium"  htmlFor="">Event Date and Time </label>
                            <Datetime value={start} onChange={(date) => setStart(date)} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4 placeholder:text-black' />
                        
                            
                        </div>
{/* 
                        <div className='mb-8'>
                            <label className="block text-md font-medium"  htmlFor="">Event Date and Time </label>
                            <Datetime value={end} onChange={(date) => setEnd(date)} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4 placeholder:text-black' placeholder="Date" /> 
                            
          </div> */}

                        <div>

                            <label>

                            <p>Select An Event Category</p>

                            <select value={type} onChange={handleType}>

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


                            </select>

                            </label>

                            

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