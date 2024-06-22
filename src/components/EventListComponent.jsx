import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import { fetchTables, reserveSeat } from '../slices/tableSlice';

import SpinnerComponent from '../components/SpinnerComponent'




const EventListComponent = () => {
  const dispatch = useDispatch();
  const { tables, loading } = useSelector((state) => state.table);
  console.log(tables, loading)
  const { user } = useSelector(state => state.user)

    const navigate = useNavigate()
    useEffect(() => {
        if ( !user.isAdmin ) {
            navigate("/register")
        }
    }, [])
  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);
let tableNumber;
  let reservedTable = tables.flatMap(table => {
     tableNumber = table.tableNumber;
    return table.seats
        .filter(seat => seat.isReserved && seat.reservedBy !== '') // Filter reserved seats with 'reservedBy' filled
        .map(seat => ({
            tableNumber: tableNumber,
            seatNumber: seat.seatNumber,
            reservedBy: seat.reservedBy
        }));
});

console.log(reservedTable);
  return (
    <div>
      <div style={{background: "#202020"}} className="p-5">
        <div className="mb-4 lg:mb-0"></div>
          <div className="flex justify-center mb-4 lg:mb-0">
            <h1 className='text-white text-2xl'>Event Bookings</h1>
            <IoCalendarNumberSharp color='white' size={30} />
          </div>

          <div style={{background: "#414141"}} className="flex justify-between px-8 py-2 rounded-2xl mb-3">
            <div  className="flex justify-start items-center">                         
              <FaUserAlt color='white' size={40} className='pr-5' />
              <div className="
              ">
                <p className="text-white text-lg">Guests</p>
              
              </div>
            </div>

            <div className="flex items-center">
              <FaCalendarAlt size={40} className='pr-5 text-white' />
              <div className="
              ">
                <p className="text-white text-lg">Table Number</p>
                
              </div>
            </div>


          

            <div className="flex items-center">
              <FaTicket size={40} className='pr-5 text-white' />
              <div className="
              ">
                <p className="text-white text-lg">Seat Number</p>
            
              </div>
            </div>
          </div>


{loading ? (<SpinnerComponent />) : (tables.flatMap(table => {
    let tableNum = table.tableNumber;
    return table.seats
        .filter(seat => seat.isReserved && seat.reservedBy !== '') // Filter reserved seats with 'reservedBy' filled
        .map(seat => (
            <div key={seat._id} className="grid grid-cols-3 gap-4 bg-gray-200 p-4 rounded-md mb-2">
                <p className=" text-center text-lg font-semibold text-white bg-gray-700 py-2 rounded-t-md">
                    {seat.reservedBy}
                </p>
                <p className="text-center font-semibold">
                    Table: {tableNum}
                </p>
                <p className="text-center bg-blue-900 text-white rounded-md px-2.5 py-1">
                    Seat: {seat.seatNumber}
                </p>
            </div>
        ))
}))}


          

          

        
        </div>
    </div>
  )
}

export default EventListComponent