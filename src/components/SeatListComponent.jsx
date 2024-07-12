import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { IoPersonAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SeatListComponent = ({ guest }) => {
  //console.log(props)
  //console.log(meU)
  //console.log(selectedSeats)



  return (
    <div>
         {/* <div className="flex">
          <div className="">
            <p className="">Name of Guest</p>
            <p className="">B</p>
          </div>

          <div className="">
            <p className="">SEAT NUMBER</p>
            <p className="">3</p>
          </div>

          <div className="">
            <p className="">SEAT</p>
            <p className="">10</p>
          </div>

        </div>  */}
        <div className="bg-blue-900 p-2 border rounded-lg">
           {guest.length > 0 ? (guest.map(g => (
            //console.log(g.name)
            <div key={g._id}>

            <p className="text-white">Name: {g.name}</p>
            <p className="text-white mb-3">Seat No: {g.seatNum}</p>
            <div className="flex justify-around">
              <button className="bg-green-900  w-full mr-1 border border-black rounded-xl text-white">Edit</button>
              
              <button className="bg-red-900 w-full ml-1 border text-white border-black rounded-xl">Delete</button>
            </div>
            </div>
          ))) : (<div className=""><p className='text-white text-xl md:text-3xl mb-2'>Go to the Seat Booking and Assign Seats To Guests</p> <Link className='bg-yellow-500 w-full ml-1 border text-white mx- border-black rounded-md p-1' to={"/seat"}>Book a Seat</Link> </div>) } 
        </div>

        

    </div>
  )
}

export default SeatListComponent