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

const [cenSeats, setCenSeats] = useState([{
    id: 41,
    no: "A1"
},
{
    id: 42,
    no: "A2"
},
{
    id: 43,
    no: "A3"
},
{
    id: 44,
    no: "A4"
},
{
    id: 45,
    no: "A5"
},
{
    id: 46,
    no: "A6"
},
{
    id: 47,
    no: "A7"
},
{
    id: 48,
    no: "A8"
},
{
    id: 49,
    no: "A9"
},
{
    id: 50,
    no: "A10"
},
])

const [bCenSeats, setBCenSeats] = useState([{
    id: 51,
    no: "B1"
},
{
    id: 52,
    no: "B2"
},
{
    id: 53,
    no: "B3"
},
{
    id: 54,
    no: "B4"
},
{
    id: 55,
    no: "B5"
},
{
    id: 56,
    no: "B6"
},
{
    id: 57,
    no: "B7"
},
{
    id: 58,
    no: "B8"
},
{
    id: 59,
    no: "B9"
},
{
    id: 60,
    no: "B10"
},
])

const [cCenSeats, setCCenSeats ] = useState([
    {
        id: 61,
        no: "C1"
    },
    {
        id: 62,
        no: "C2"
    },
    {
        id: 63,
        no: "C3"
    },
    {
        id: 64,
        no: "C4"
    },
    {
        id: 65,
        no: "C5"
    },
    {
        id: 66,
        no: "C6"
    },
    {
        id: 67,
        no: "C7"
    },
    {
        id: 68,
        no: 'C8'
    },
    {
        id: 69,
        no: "C9"
    },
    {
        id: 70,
        no: "C10"
    },

])

const [dCenSeats, setDCenSeats] = useState([
    {
        id: 71,
        no: "D1"
    },
    {
        id: 72,
        no: "D2"
    },
    {
        id: 73,
        no: "D3"
    },
    {
        id: 74,
        no: "D4"
    },
    {
        id: 75,
        no: "D5"
    },
    {
        id: 76,
        no: "D6"
    },
    {
        id: 77,
        no: "D7"
    },
    {
        id: 78,
        no: "D8"
    },
    {
        id: 79,
        no: "D9"
    },
    {
        id: 80,
        no: "D10"
    },
])

const [rSeats, setRSeats] = useState([{
    id: 81,
    no: "A1"
},
{
    id: 82,
    no: "A2"
},
{
    id: 83,
    no: "A3"
},
{
    id: 84,
    no: "A4"
},
{
    id: 85,
    no: "A5"
},
{
    id: 86,
    no: "A6"
},
{
    id: 87,
    no: "A7"
},
{
    id: 88,
    no: "A8"
},
{
    id: 89,
    no: "A9"
},
{
    id: 90,
    no: "A10"
},
])

const [bRSeats, setRCenSeats] = useState([{
    id: 91,
    no: "B1"
},
{
    id: 92,
    no: "B2"
},
{
    id: 93,
    no: "B3"
},
{
    id: 94,
    no: "B4"
},
{
    id: 95,
    no: "B5"
},
{
    id: 96,
    no: "B6"
},
{
    id: 97,
    no: "B7"
},
{
    id: 98,
    no: "B8"
},
{
    id: 99,
    no: "B9"
},
{
    id: 100,
    no: "B10"
},
])

const [cRSeats, setCRSeats ] = useState([
    {
        id: 101,
        no: "C1"
    },
    {
        id: 102,
        no: "C2"
    },
    {
        id: 103,
        no: "C3"
    },
    {
        id: 104,
        no: "C4"
    },
    {
        id: 105,
        no: "C5"
    },
    {
        id: 106,
        no: "C6"
    },
    {
        id: 107,
        no: "C7"
    },
    {
        id: 108,
        no: 'C8'
    },
    {
        id: 109,
        no: "C9"
    },
    {
        id: 110,
        no: "C10"
    },

])

const [rDSeats, setRDSeats] = useState([
    {
        id: 111,
        no: "D1"
    },
    {
        id: 112,
        no: "D2"
    },
    {
        id: 113,
        no: "D3"
    },
    {
        id: 114,
        no: "D4"
    },
    {
        id: 115,
        no: "D5"
    },
    {
        id: 116,
        no: "D6"
    },
    {
        id: 117,
        no: "D7"
    },
    {
        id: 118,
        no: "D8"
    },
    {
        id: 119,
        no: "D9"
    },
    {
        id: 120,
        no: "D10"
    },
])

const [btSeats, setBTSeats] = useState([{
    id: 121,
    no: "A1"
},
{
    id: 122,
    no: "A2"
},
{
    id: 123,
    no: "A3"
},
{
    id: 124,
    no: "A4"
},
{
    id: 125,
    no: "A5"
},
{
    id: 126,
    no: "A6"
},
{
    id: 127,
    no: "A7"
},
{
    id: 128,
    no: "A8"
},
{
    id: 129,
    no: "A9"
},
{
    id: 130,
    no: "A10"
},
])

const [bBTSeats, setBBTSeats] = useState([{
    id: 131,
    no: "B1"
},
{
    id: 132,
    no: "B2"
},
{
    id: 133,
    no: "B3"
},
{
    id: 134,
    no: "B4"
},
{
    id: 135,
    no: "B5"
},
{
    id: 136,
    no: "B6"
},
{
    id: 137,
    no: "B7"
},
{
    id: 138,
    no: "B8"
},
{
    id: 139,
    no: "B9"
},
{
    id: 140,
    no: "B10"
},
])

const [btCSeats, setBTCSeats ] = useState([
    {
        id: 141,
        no: "C1"
    },
    {
        id: 142,
        no: "C2"
    },
    {
        id: 143,
        no: "C3"
    },
    {
        id: 144,
        no: "C4"
    },
    {
        id: 145,
        no: "C5"
    },
    {
        id: 146,
        no: "C6"
    },
    {
        id: 147,
        no: "C7"
    },
    {
        id: 148,
        no: 'C8'
    },
    {
        id: 149,
        no: "C9"
    },
    {
        id: 150,
        no: "C10"
    },

])

const [btDSeats, setBTDSeats] = useState([
    {
        id: 151,
        no: "D1"
    },
    {
        id: 152,
        no: "D2"
    },
    {
        id: 153,
        no: "D3"
    },
    {
        id: 154,
        no: "D4"
    },
    {
        id: 155,
        no: "D5"
    },
    {
        id: 156,
        no: "D6"
    },
    {
        id: 157,
        no: "D7"
    },
    {
        id: 158,
        no: "D8"
    },
    {
        id: 159,
        no: "D9"
    },
    {
        id: 160,
        no: "D10"
    },
])







const [selectedSeats, setSelectedSeats] = useState([])
const[selectedSeatNum , setSelectedSeatNum] = useState([])
const [drop, setDrop] = useState("Left Section")
const [userList, setUserList] = useState([]);

// const guestInfo = [name, seatNum]
// console.log(guestInfo)

// const handleSeatClick = (seat) => {
//     const isSelected = selectedSeats.includes(seat);
//     setSelectedSeats(isSelected ? selectedSeats.filter((s) => s !== seat) : [...selectedSeats, seat]);
//     console.log(selectedSeats)
//     console.log(seat)
//   };

const handleChange = (event) => {
    setDrop(event.target.value)
  }
console.log(drop)

const handleSeatClick = (seatId, seatNumb) => {
    setSelectedSeats((prevSelectedSeats) => {
        const isSelected = prevSelectedSeats.includes(seatId);
        const updatedSeats = isSelected
            ? prevSelectedSeats.filter((s) => s !== seatId)
            : [...prevSelectedSeats, seatId];

        console.log(updatedSeats); // Real-time state

        return updatedSeats;
    });

    setSelectedSeatNum((prevSelectedSeats) => {
        const isSelected = prevSelectedSeats.includes(seatNum);
        const updatedSeats = isSelected
            ? prevSelectedSeats.filter((s) => s !== seatNumb)
            : [...prevSelectedSeats, seatNumb];

        console.log(updatedSeats); // Real-time state

        return updatedSeats;
    });
    console.log(seatId); // Seat being clicked
};

console.log(selectedSeats)
console.log(selectedSeatNum)
const onSubmitFunc = (e) => {
    e.preventDefault()
    if(selectedSeatNum.includes(seatNum)) {
        // const subSeat = [...submittedSeats, {name, seatNum}]
        // setSubmittedSeats(subSeat)
        // console.log("correct")
        // console.log(submittedSeats)
        const seatAlreadyBooked = submittedSeats.some((item) => item.seatNum === seatNum);
        if (seatAlreadyBooked) {
            toast.error("Seat already booked");
            return;
        }
        setSubmittedSeats(prevSeats => {
            const subSeat = [...prevSeats, { name, seatNum }];
            console.log("correct");
            console.log(subSeat);
            setUserList((prevUsers) => [...prevUsers, { name, seatNum }]); // Add user to the list
            return subSeat;
        })

        toast.success("Submission successful");

        // Clear fields
        setName("");
        setSeatNumber("");
        setSelectedSeats([]);

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
console.log(userList)

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

        <div className="p-4">
            <div className="w-full h-64 bg-blue-900">
                <p className="text-center text-white text-2xl md:text-5xl ">Select Your Seat</p>
            </div>

            {/*<div className="w-full">
                <div className="w-7 h-7 rounded bg-blue-900"> */}
                   {/* <p className='text-center'>A</p> */}
                   {/* {seats.map(seat => <SeatListComponent seat={seat} />)}  */}
               {/* </div> */}
            {/*</div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-900 mt-4 p-1  rounded-2xl">
                <div className="">
                    <p className="text-2xl text-center mt-5 mb-5 uppercase text-white font-semibold ">Left Section</p>
                    <div className="flex ">
                        
                    {seats.map(seat =><p key={seat.id} className={`bg-blue-200 m-1 rounded-lg w-7 ${
                  selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''} h-7 text-center`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}{selectedSeats.includes(seat.id && console.log("included"))}</p>)}
                        
                    </div>

                    <div className="flex">
                        {bseats.map(seat => <p key={seat.id}   className={`bg-yellow-400  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''} ` }  onClick={() => handleSeatClick(seat.id, seat.no)} >{seat.no}{selectedSeats.includes(seat.no && console.log("includedBB"))}</p>)}

                    </div>

                    <div className="flex">
                        {cseats.map(seat => <p key={seat.id} className={`bg-yellow-400  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}` } onClick={() => handleSeatClick(seat.id, seat.no)} >{seat.no}{selectedSeats.includes(seat.id) && console.log(seat.id)}</p>)}
                    </div>

                    <div className="flex">
                        {dseats.map(seat => <p key={seat.id} className={`bg-red-400  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''} `} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                    </div>
                </div>

                <div className=" ">
                <p className="text-2xl text-center  uppercase text-white font-semibold my-5">Center Section</p>
                    <div className="flex ">
                        
                    {cenSeats.map(seat =><p key={seat.id} className={`bg-blue-200 m-1 rounded-lg w-7 h-7 text-center ${
                  selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                        
                    </div>

                    <div className="flex">
                        {bCenSeats.map(seat => <p key={seat.id} className={`bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center  ${
                        selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}

                    </div>

                    <div className="flex">
                        {cCenSeats.map(seat => <p key={seat.id} className={`bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center ${
                        selectedSeats.includes(seat.id, seat.no) ? 'bg-green-950 text-white' : ''} `} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                    </div>

                    <div className="flex">
                        {dCenSeats.map(seat => <p key={seat.id} className={`bg-red-400  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                    </div>
                </div>

                <div className=" ">
                <p className="text-2xl text-center  uppercase text-white font-semibold my-5">Right Section</p>
                    <div className="flex ">
                       
                    {rSeats.map(seat =><p key={seat.id} className={`bg-blue-200 m-1 rounded-lg w-7 h-7 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                       
                    </div>

                    <div className="flex">
                        {bRSeats.map(seat => <p key={seat.id} className={`bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}

                    </div>

                    <div className="flex">
                        {cRSeats.map(seat => <p key={seat.id} className={`bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                    </div>

                    <div className="flex">
                        {rDSeats.map(seat => <p key={seat.id} className={`bg-red-500  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                    </div>
                </div>

                <div className=" ">
                <p className="text-2xl text-center  uppercase text-white font-semibold my-5">Bottom Section</p>
                    <div className="flex ">
                        
                    {btSeats.map(seat =><p key={seat.id} className={`bg-blue-200 m-1 rounded-lg w-7 h-7 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                       
                    </div>

                    <div className="flex">
                        {bBTSeats.map(seat => <p key={seat.id} className={`bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}

                    </div>

                    <div className="flex">
                        {btCSeats.map(seat => <p key={seat.id} className={`bg-yellow-500  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                    </div>

                    <div className="flex">
                        {btDSeats.map(seat => <p key={seat.id} className={`bg-red-500  rounded-lg w-7 h-7 m-1 text-center ${selectedSeats.includes(seat.id) ? 'bg-green-950 text-white' : ''}`} onClick={() => handleSeatClick(seat.id, seat.no)}>{seat.no}</p>)}
                    </div>
                </div>



            </div>

            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="flex    items-center ">
                    <div className="w-7 h-7 bg-green-900 rounded-full mt-5"></div>
                    <p className="fon font-bold mt-6">Seats Booked</p>
                    
                    </div>

                    <div className="flex    items-center ">
                    <div className="w-7 h-7 bg-blue-400 rounded-full mt-5"></div>
                    <p className="fon font-bold mt-6">Seats Available in Row A</p>
                    
                    </div>

                    <div className="flex    items-center ">
                    <div className="w-7 h-7 bg-yellow-500 rounded-full mt-5"></div>
                    <p className="fon font-bold mt-6">Seats Available in Row B & C </p>
                    
                    </div>

                    <div className="flex    items-center ">
                    <div className="w-7 h-7 bg-red-400 rounded-full mt-5"></div>
                    <p className="fon font-bold mt-6">Seats Available in Row D</p>
                    
                    </div>
                

                </div>
                
            </div>

            <div className="">
                <p className="text-2xl text-center mt-10 mb-6">Guest Informations</p>

                
<form onSubmit={onSubmitFunc} className="max-w-sm mx-auto">
  <div className="mb-5">
    <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Guest's Name</label>
    <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="input guest's name" value={name} onChange={(e) => {setName(e.target.value)}} required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Guest Seat Number</label>
    <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={seatNum} onChange={(e) => {setSeatNumber(e.target.value)}} />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>

  <div className=" mb-5">
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 block mb-5">Select The Section </label>
    <div className="">
        <select value={drop} onChange={handleChange} >
            <option value="Left">Left Section</option>

            <option value="Center">Center Section</option>

            <option value="Right">Right Section</option>

            <option value="Bottom">Bottom Section</option>



        </select>
        
    </div>
  </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
            </div>
            <SeatListComponent />
        </div>

    </div>
  )
}

export default SeatSelectionComponent