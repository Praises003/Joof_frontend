import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addAsyncGuest, addGuest } from '../slices/guestSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { fetchTables, reserveSeat } from '../slices/tableSlice';


const SeatSelectionComponent = () => {
    const dispatch = useDispatch();
    const { tables, loading } = useSelector((state) => state.table);
    console.log(tables, loading)
  const [name, setName] = useState('');
  const [selectedSeat, setSelectedSeat] = useState({ tableNumber: null, tableName: '', seatNumber: null });

  const [guestName, setGuestName] = useState("")
  const [seatNum, setSeatNumber] = useState("")
  const { guest, message} = useSelector(state => state.guest)

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  const handleSeatClick = (tableNumber,tableName, seatNumber) => {
    setSelectedSeat({ tableNumber,tableName, seatNumber });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSeat.tableNumber && selectedSeat.seatNumber) {
      dispatch(reserveSeat({ ...selectedSeat, name })).then((action) => {
        if (action.payload.success) {
          toast.success('Seat reserved successfully!');
          setSelectedSeat({ tableNumber: null, seatNumber: null });
          setName('');
        } else {
          toast.error(action.payload.message || 'Failed to reserve seat');
        }
      });
    } else {
      toast.error('Please select a seat');
    }
  };

  const newSeat = {name : guestName, seatNum }

  const handleGuestSubmit =  (e) => {
    e.preventDefault()

    if (!guestName || !seatNum || guestName === "" || seatNum === "") {
       return toast.error("Fill AllUp Guest Information")
    }


    dispatch(addAsyncGuest(newSeat))

    if (message) {
        toast.error(message)
    }

    setGuestName("")
    setSeatNumber("")

  }

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1 className='text-center font-bold text-3xl my-16'>Select Your Seat</h1>
      <div>
        {tables ? tables?.map((table) => (
          <div className='w-full' key={table?.tableNumber}>
            <h2 className='font-semibold text-xl text-center my-5'
            >Table {table?.tableNumber}</h2>
            <div className=' flex justify-around flex-wrap lg:flex-nowrap' style={{ width: '' }}>
              {table?.seats.map((seat) => (
                <div className='lg:w-full'
                  key={seat?.seatNumber}
                  onClick={() => handleSeatClick(table.tableNumber, table.tableName, seat.seatNumber)}
                  style={{
                    margin: '5px',
                    padding: '10px',
                    backgroundColor: seat.isReserved ? 'red' : 'green',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  <p className='text-2xl text-center'> {seat.seatNumber}  </p>
                </div>
              ))}
            </div>
          </div>
        )) : (<p>Nothing</p>)}
      </div>
      <form className="max-w-sm mx-auto my-10" onSubmit={handleSubmit}>

      <div className='mb-5'>
          <label htmlFor='tableName' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Enter Table Name</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='text'
            value={selectedSeat.tableName}
            onChange={(e) => setSelectedSeat({ ...selectedSeat, tableName: e.target.value })}
            placeholder='Table Name'
            required
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Enter Name</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your Name'
            required
          />
        </div>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4'
          type='submit'
        >
          Reserve Seat
        </button>
      </form>
     
      <div className="flex justify-center    items-center my-5 ">
                <div className="w-7 h-7 bg-red-700 rounded-full mt-5 p-5"></div>
                    <p className="fon font-bold mt-6">Selected Seats are red</p>
                

                <div className="ml-5 w-7 h-7 bg-green-700 rounded-full mt-5 p-5"></div>
                    <p className="fon font-bold mt-6">Unbooked seats are green</p>
        </div> 

        {/* Guest Information */}

    <div className="">
                <p className="text-2xl text-center mt-10 mb-6">Guest Informations</p>

                
<form onSubmit={handleGuestSubmit} className="max-w-sm mx-auto ">
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Guest's Name</label>
    <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="input guest's name" value={guestName} onChange={(e) => {setGuestName(e.target.value)}} required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Guest Seat Number</label>
    <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={seatNum} onChange={(e) => {setSeatNumber(e.target.value)}} />
  </div>


  <div className=" mb-5">
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 block mb-5">Select The Section </label>

  </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
  </div>

            
    
 
        
              
    </div>
  );
}

export default SeatSelectionComponent