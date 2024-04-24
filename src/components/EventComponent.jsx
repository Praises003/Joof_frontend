import FullCalendar from '@fullcalendar/react';
import React, {useEffect, useState} from 'react'
import Datetime from 'react-datetime';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import event from "../assets/event4.jpg"

const EventComponent = () => {
    const [title, setTitle] = useState("Man")
    const [description, setDescription] = useState("")
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const [type, setType] = useState("fruit")
    const [events, setEvents] = useState([]);
    const [ticketType, setTicketType] = useState('free');
    const [price, setPrice] = useState('0');
 


const test = [{title, start, end}]
    



const handleType = (e) => {
    setType(e.target.value)
}
    
    const submitFunc = (e) => {
        e.preventDefault()
       
        console.log("submitted");
    }

    const onchangeFunc = () => {
        console.log("Ok")
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

    console.log(events)
   
    
  return (
    <div>
        
        <h1>PROF RUFUS OLADIPO ELEMO MULTIPURPOSE EVENT CENTER </h1>
        <p>Location</p>

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
                            <Datetime value={start} onChange={(date) => setStart(date)}/>
                        
                            
                        </div>

                        <div className='mb-8'>
                            <label className="block text-md font-medium"  htmlFor="">Event Date and Time </label>
                            <Datetime value={end} onChange={(date) => setEnd(date)} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4' placeholder="Date"/>
                            
                        </div>

                        <div>

                            <label>

                            What do we eat?

                            <select value={type} onChange={handleType}>

                                <option value="wedding">Wedding</option>

                                <option value="corporate">Corporate</option>

                                <option value="seminar">Seminar</option>

                                <option value="exhibition">Exhibtion</option>
                                
                                <option value="birthday">Birthday</option>

                            </select>

                            </label>

                            <p>We eat {type}!</p>

</div>

{/* 
                        <div className="">
                            <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="text" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How can we help you?" name='text' value={text} onChange={onchangeFunc}></textarea>
                        </div> */}
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

                        
                        <div>
                                <button  type="submit" className='bg-blue-900 text-white py-2.5 px-4 w-full mt-2 rounded-md  '>Submit</button>
                            </div>     

                            </div>
                                    
                        </form>
            </div>

        </div>

    </div>
  )
}

export default EventComponent