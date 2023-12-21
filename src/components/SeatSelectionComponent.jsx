import React from 'react'
import { useState, useEffect } from 'react'
import SeatListComponent from './SeatListComponent'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SeatSelectionComponent = () => {
    const [name, setName] = useState("")
    const [seatNum, setSeatNumber] = useState("")
    const [submittedSeats, setSubmittedSeats] = useState([])
    const [bseats, setBSeats] = useState([
        {
            id: 11,
            no: "B1"
        },
        {
            id: 12,
            no: "B2"
        },
        {
            id: 13,
            no: "B3"
        },
        {
            id: 14,
            no: "B4"
        },
        {
            id: 15,
            no: "B5"
        },
        {
            id: 16,
            no: "B6"
        },
        {
            id: 17,
            no: "B7"
        },
        {
            id: 18,
            no: "B8"
        },
        {
            id: 19,
            no: "B9"
        },
        {
            id: 20,
            no: "B10"
        },
    ])

    const [cseats, setCSeats ] = useState([
        {
            id: 21,
            no: "C1"
        },
        {
            id: 22,
            no: "C2"
        },
        {
            id: 23,
            no: "C3"
        },
        {
            id: 24,
            no: "C4"
        },
        {
            id: 25,
            no: "C5"
        },
        {
            id: 26,
            no: "C6"
        },
        {
            id: 27,
            no: "C7"
        },
        {
            id: 28,
            no: 'C8'
        },
        {
            id: 29,
            no: "C9"
        },
        {
            id: 30,
            no: "C10"
        },

    ])

    const [dseats, setDseats] = useState([
        {
            id: 31,
            no: "D1"
        },
        {
            id: 32,
            no: "D2"
        },
        {
            id: 33,
            no: "D3"
        },
        {
            id: 34,
            no: "D4"
        },
        {
            id: 35,
            no: "D5"
        },
        {
            id: 36,
            no: "D6"
        },
        {
            id: 37,
            no: "D7"
        },
        {
            id: 38,
            no: "D8"
        },
        {
            id: 39,
            no: "D9"
        },
        {
            id: 40,
            no: "D10"
        },
    ])
    const [seats, setSeats] = useState([{
        id: 1,
        no: "A1"
    },
    {
        id: 2,
        no: "A2"
    },
    {
        id: 3,
        no: "A3"
    },
    {
        id: 4,
        no: "A4"
    },
    {
        id: 5,
        no: "A5"
    },
    {
        id: 5,
        no: "A5"
    },
    {
        id: 6,
        no: "A6"
    },
    {
        id: 7,
        no: "A7"
    },
    {
        id: 8,
        no: "A8"
    },
    {
        id: 9,
        no: "A9"
    },
    {
        id: 10,
        no: "A10"
    },
    
    
    
    
    
    
])
const [selectedSeats, setSelectedSeats] = useState("")

const handleSeatClick = (seat) => {
    const isSelected = selectedSeats.includes(seat);
    setSelectedSeats(isSelected ? selectedSeats.filter((s) => s !== seat) : [...selectedSeats, seat]);
    console.log(selectedSeats)
    console.log(seat)
  };

const onSubmitFunc = (e) => {
    e.preventDefault()
    if(selectedSeats.includes(seatNum)) {
        // const subSeat = [...submittedSeats, {name, seatNum}]
        // setSubmittedSeats(subSeat)
        // console.log("correct")
        // console.log(submittedSeats)
        setSubmittedSeats(prevSeats => {
            const subSeat = [...prevSeats, { name, seatNum }];
            console.log("correct");
            console.log(subSeat);
            return subSeat;
        })

        } else {
        toast.error("invalid submission")
        console.log("wrong")
    }

    // if(submittedSeats.includes(name || seatNum)) {
    //     console.log("e dey there now")
    // } else {
    //     console.log("oya naw")
    // }

    // if (submittedSeats.some(item => item.name === name || item.seatNum === seatNum)) {
    //     console.log("e dey there now");
    //   } else {
    //     console.log("oya naw");
    //   }
//         console.log(submittedSeats)
//     submittedSeats.map(s => {
//         if(s.name === name && s.seatNum === seatNum) {
//             console.log("a")
//         } else {
//             console.log("br")
//         }
// })



}

useEffect(() => {
     console.log(submittedSeats);

    // // Now you can perform actions based on the updated state
    submittedSeats.forEach(s => {
        if (s.name === name && s.seatNum === seatNum) {
            console.log("a");
        } else {
            console.log("br");
        }
    });
}, [submittedSeats]);
  return (
    <div>

        <div className="p-8">
            <div className="w-full h-64 bg-blue-900">
                <p className="text-center text-white text-2xl md:text-5xl ">Select Your Seat</p>
            </div>

            {/*<div className="w-full">
                <div className="w-7 h-7 rounded bg-blue-900"> */}
                   {/* <p className='text-center'>A</p> */}
                   {/* {seats.map(seat => <SeatListComponent seat={seat} />)}  */}
               {/* </div> */}
            {/*</div> */}

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <p className="text-xl">Left</p>
                    <div className="flex ">
                        <p className='m-1'>Row A</p>
                    {seats.map(seat =><p className={`bg-blue-200 m-1 rounded-lg w-7 ${
                  selectedSeats.includes(seat.no) ? 'bg-green-500 text-white' : ''} h-7 text-center`} onClick={() => handleSeatClick(seat.no)}>{seat.no}</p>)}
                        <span>Row A</span>
                    </div>

                    <div className="flex">
                        {bseats.map(seat => <p className='bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}

                    </div>

                    <div className="flex">
                        {cseats.map(seat => <p className='bg-yellow-500  rounded-lg w-7 h-7 m-1 text-centerr'>{seat.no}</p>)}
                    </div>

                    <div className="flex">
                        {dseats.map(seat => <p className='bg-red-400  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}
                    </div>
                </div>

                <div className=" ">
                <p className="text-xl">Center</p>
                    <div className="flex ">
                        <p className='m-1'>Row A</p>
                    {seats.map(seat =><p className='bg-blue-200 m-1 rounded-lg w-7 h-7 text-center'>{seat.no}</p>)}
                        <span>Row A</span>
                    </div>

                    <div className="flex">
                        {bseats.map(seat => <p className='bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}

                    </div>

                    <div className="flex">
                        {cseats.map(seat => <p className='bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}
                    </div>

                    <div className="flex">
                        {dseats.map(seat => <p className='bg-red-400  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}
                    </div>
                </div>

                <div className=" ">
                <p className="text-xl">Right</p>
                    <div className="flex ">
                        <p className='m-1'>Row A</p>
                    {seats.map(seat =><p className='bg-blue-200 m-1 rounded-lg w-7 h-7 text-center'>{seat.no}</p>)}
                        <span>Row A</span>
                    </div>

                    <div className="flex">
                        {bseats.map(seat => <p className='bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}

                    </div>

                    <div className="flex">
                        {cseats.map(seat => <p className='bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}
                    </div>

                    <div className="flex">
                        {dseats.map(seat => <p className='bg-red-500  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}
                    </div>
                </div>

                <div className=" ">
                <p className="text-xl">Bottom</p>
                    <div className="flex ">
                        <p className='m-1'>Row A</p>
                    {seats.map(seat =><p className='bg-blue-200 m-1 rounded-lg w-7 h-7 text-center'>{seat.no}</p>)}
                        <span>Row A</span>
                    </div>

                    <div className="flex">
                        {bseats.map(seat => <p className='bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}

                    </div>

                    <div className="flex">
                        {cseats.map(seat => <p className='bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}
                    </div>

                    <div className="flex">
                        {dseats.map(seat => <p className='bg-red-500  rounded-lg w-7 h-7 m-1 text-center'>{seat.no}</p>)}
                    </div>
                </div>



            </div>

            <div className="">
                <p className="text-2xl text-center mt-10 mb-6">Guest Informations</p>

                
<form onSubmit={onSubmitFunc} class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Guest's Name</label>
    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" value={name} onChange={(e) => {setName(e.target.value)}} required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Guest Seat Number</label>
    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={seatNum} onChange={(e) => {setSeatNumber(e.target.value)}} />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
            </div>
        </div>

    </div>
  )
}

export default SeatSelectionComponent