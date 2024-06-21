import React, { useState, useEffect } from 'react'
import axios from 'axios'
import eventImg from '../assets/ev9.jpg'
import {useSelector, useDispatch} from "react-redux"
import { addToCart } from '../slices/eventPackageSlice'
import { Link } from 'react-router-dom'
import { FaClock } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { GiBalloons } from "react-icons/gi";
import SpinnerComponent from '../components/SpinnerComponent'


const EventPackageScreen = () => {
    const [rental, setRental] = useState({
        name: "Entry Package",
        price: 29
    })
    const [catering, setCatering] = useState({
        name: "Advanced Package",
        price: 45
    })
    const [decoration, setDecoration] = useState({
        name: "Premium Package",
        price: 50
    })

    const [wedding, setWedding] = useState({
        name: "Wedding Services",
        price: 100
    })
    const [privates, setPrivates] = useState({
        name: "Private Parties",
        price: 120
    })
    const [price, setPrice] = useState("29")
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const {eventPackage} = useSelector(state => state.eventPackage)

    const dispatch = useDispatch()
    console.log(eventPackage)

    

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

    const cartEv = events.map(ev => {
        return {
            name: ev.name,
            price: ev.price
        }
    })

    console.log(events)
    console.log(cartEv)



  return (
    <div>
        <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "80vh"}} className={` mb-5 relative`}>
             <p className='uppercase text-4xl font-semibold left-32 md:text-5xl text-white absolute top-52 md:top-52 md:left-52 text-center'>  EVENT PACKAGES</p>
        </div>

        <div className="">
            <p className="">Choose the best package for your business</p>
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

                 <div onClick={() => {dispatch(addToCart({name:ev.name, price: ev.price}))}} className="">
                    <Link  className='bg-yellow-500 text-white  p-4 mt-1 mb-12 rounded-lg block text-center'>Add To Cart Now</Link>
                </div>                  
              
              
  
            </div>
          ))}
          </div>
        )}

        
       

    </div>
  )
}

export default EventPackageScreen