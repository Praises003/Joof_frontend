import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SeatListComponent from './SeatListComponent'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector, useDispatch} from "react-redux"
import { addAsyncGuest, addGuest } from '../slices/guestSlice';
import ProfileComponent from './ProfileComponent';

const SeatSelectionComponent = ({ genUser, setGenUser }) => {
    const [name, setName] = useState("")
    const [seatNum, setSeatNumber] = useState("")
    const [submittedSeats, setSubmittedSeats] = useState([])
    const [bseats, setBSeats] = useState([
        {
            id: 11,
            no: 11
        },
        {
            id: 12,
            no: 12
        },
        {
            id: 13,
            no: 13
        },
        {
            id: 14,
            no: 14
        },
        {
            id: 15,
            no: 15
        },
        {
            id: 16,
            no: 16
        },
        {
            id: 17,
            no: 17
        },
        {
            id: 18,
            no: 18
        },
        {
            id: 19,
            no: 19
        },
        {
            id: 20,
            no: 20
        },
    ])

    const [cseats, setCSeats ] = useState([
        {
            id: 21,
            no: 21
        },
        {
            id: 22,
            no: 22
        },
        {
            id: 23,
            no: 23
        },
        {
            id: 24,
            no: 24
        },
        {
            id: 25,
            no: 25
        },
        {
            id: 26,
            no: 26
        },
        {
            id: 27,
            no: 27
        },
        {
            id: 28,
            no: 28
        },
        {
            id: 29,
            no: 29
        },
        {
            id: 30,
            no: 30
        },

    ])

    const [dseats, setDseats] = useState([
        {
            id: 31,
            no: 31
        },
        {
            id: 32,
            no: 32
        },
        {
            id: 33,
            no: 33
        },
        {
            id: 34,
            no: 34
        },
        {
            id: 35,
            no: 35
        },
        {
            id: 36,
            no: 36
        },
        {
            id: 37,
            no: 37
        },
        {
            id: 38,
            no: 38
        },
        {
            id: 39,
            no: 39
        },
        {
            id: 40,
            no: 40
        },
    ])
    const [seats, setSeats] = useState([{
        id: 1,
        no: 1
    },
    {
        id: 2,
        no: 2
    },
    {
        id: 3,
        no: 3
    },
    {
        id: 4,
        no: 4
    },
    {
        id: 5,
        no: 5
    },
    {
        id: 6,
        no: 6
    },
    {
        id: 7,
        no: 7
    },
    {
        id: 8,
        no: 8
    },
    {
        id: 9,
        no: 9
    },
    {
        id: 10,
        no: 10
    }, 
        
    
])

const [cenSeats, setCenSeats] = useState([{
    id: 41,
    no: 41
},
{
    id: 42,
    no: 42
},
{
    id: 43,
    no: 43
},
{
    id: 44,
    no: 44
},
{
    id: 45,
    no: 45
},
{
    id: 46,
    no: 46
},
{
    id: 47,
    no: 47
},
{
    id: 48,
    no: 48
},
{
    id: 49,
    no: 49
},
{
    id: 50,
    no: 50
},
])

const [bCenSeats, setBCenSeats] = useState([{
    id: 51,
    no: 51
},
{
    id: 52,
    no: 52
},
{
    id: 53,
    no: 53
},
{
    id: 54,
    no: 54
},
{
    id: 55,
    no: 55
},
{
    id: 56,
    no: 56
},
{
    id: 57,
    no: 57
},
{
    id: 58,
    no: 58
},
{
    id: 59,
    no: 59
},
{
    id: 60,
    no: 60
},
])

const [cCenSeats, setCCenSeats ] = useState([
    {
        id: 61,
        no: 61
    },
    {
        id: 62,
        no: 62
    },
    {
        id: 63,
        no: 63
    },
    {
        id: 64,
        no: 64
    },
    {
        id: 65,
        no: 65
    },
    {
        id: 66,
        no: 66
    },
    {
        id: 67,
        no: 67
    },
    {
        id: 68,
        no: 68
    },
    {
        id: 69,
        no: 69
    },
    {
        id: 70,
        no: 70
    },

])

const [dCenSeats, setDCenSeats] = useState([
    {
        id: 71,
        no: 71
    },
    {
        id: 72,
        no: 72
    },
    {
        id: 73,
        no: 73
    },
    {
        id: 74,
        no: 74
    },
    {
        id: 75,
        no: 75
    },
    {
        id: 76,
        no: 76
    },
    {
        id: 77,
        no: 77
    },
    {
        id: 78,
        no: 78
    },
    {
        id: 79,
        no: 79
    },
    {
        id: 80,
        no: 80
    },
])

const [rSeats, setRSeats] = useState([{
    id: 81,
    no: 81
},
{
    id: 82,
    no: 82
},
{
    id: 83,
    no: 83
},
{
    id: 84,
    no: 84
},
{
    id: 85,
    no: 85
},
{
    id: 86,
    no: 86
},
{
    id: 87,
    no: 87
},
{
    id: 88,
    no: 88
},
{
    id: 89,
    no: 89
},
{
    id: 90,
    no: 90
},
])

const [bRSeats, setRCenSeats] = useState([{
    id: 91,
    no: 91
},
{
    id: 92,
    no: 92
},
{
    id: 93,
    no: 93
},
{
    id: 94,
    no: 94
},
{
    id: 95,
    no: 95
},
{
    id: 96,
    no: 96
},
{
    id: 97,
    no: 97
},
{
    id: 98,
    no: 98
},
{
    id: 99,
    no: 99
},
{
    id: 100,
    no: 100
},
])

const [cRSeats, setCRSeats ] = useState([
    {
        id: 101,
        no: 101
    },
    {
        id: 102,
        no: 102
    },
    {
        id: 103,
        no: 103
    },
    {
        id: 104,
        no: 104
    },
    {
        id: 105,
        no: 105
    },
    {
        id: 106,
        no: 106
    },
    {
        id: 107,
        no: 107
    },
    {
        id: 108,
        no: 108
    },
    {
        id: 109,
        no: 109
    },
    {
        id: 110,
        no: 110
    },

])

const [rDSeats, setRDSeats] = useState([
    {
        id: 111,
        no: 111
    },
    {
        id: 112,
        no: 112
    },
    {
        id: 113,
        no: 113
    },
    {
        id: 114,
        no: 114
    },
    {
        id: 115,
        no: 115
    },
    {
        id: 116,
        no: 116
    },
    {
        id: 117,
        no: 117
    },
    {
        id: 118,
        no: 118
    },
    {
        id: 119,
        no: 119
    },
    {
        id: 120,
        no: 120
    },
])

const [btSeats, setBTSeats] = useState([{
    id: 121,
    no: 121
},
{
    id: 122,
    no: 122
},
{
    id: 123,
    no: 123
},
{
    id: 124,
    no: 124
},
{
    id: 125,
    no: 125
},
{
    id: 126,
    no: 126
},
{
    id: 127,
    no: 127
},
{
    id: 128,
    no: 128
},
{
    id: 129,
    no: 129
},
{
    id: 130,
    no: 130
},
])

const [bBTSeats, setBBTSeats] = useState([{
    id: 131,
    no: 131
},
{
    id: 132,
    no: 132
},
{
    id: 133,
    no: 133
},
{
    id: 134,
    no: 134
},
{
    id: 135,
    no: 135
},
{
    id: 136,
    no: 136
},
{
    id: 137,
    no: 137
},
{
    id: 138,
    no: 138
},
{
    id: 139,
    no: 139
},
{
    id: 140,
    no: 140
},
])

const [btCSeats, setBTCSeats ] = useState([
    {
        id: 141,
        no: 141
    },
    {
        id: 142,
        no: 142
    },
    {
        id: 143,
        no: 143
    },
    {
        id: 144,
        no: 144
    },
    {
        id: 145,
        no: 145
    },
    {
        id: 146,
        no: 146
    },
    {
        id: 147,
        no: 147
    },
    {
        id: 148,
        no: 148
    },
    {
        id: 149,
        no: 149
    },
    {
        id: 150,
        no: 150
    },

])

const [btDSeats, setBTDSeats] = useState([
    {
        id: 151,
        no: 151
    },
    {
        id: 152,
        no: 152
    },
    {
        id: 153,
        no: 153
    },
    {
        id: 154,
        no: 154
    },
    {
        id: 155,
        no: 155
    },
    {
        id: 156,
        no: 156
    },
    {
        id: 157,
        no: 157
    },
    {
        id: 158,
        no: 158
    },
    {
        id: 159,
        no: 159
    },
    {
        id: 160,
        no: 160
    },
])







const [selectedSeats, setSelectedSeats] = useState([])
const[selectedSeatObj, setSelectedSeatObj] = useState({})
const[selectedSeatNum , setSelectedSeatNum] = useState([])
const [drop, setDrop] = useState("Left Section")
//import { addGuest } from '../slices/guestSlice';
const [userList, setUserList] = useState([]);
const [show, setShow] = useState(false)
const { guest } = useSelector(state => state.guest)
const { user } = useSelector(state => state.user)

    const navigate = useNavigate()
    useEffect(() => {
        if ( user === null ) {
            navigate("/register")
        }
    }, [user])
    


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

//addGuest

const dispatch = useDispatch()


console.log(selectedSeats)
console.log(selectedSeatNum)
// const onSubmitFunc = (e) => {
//     e.preventDefault()
//     let subSeat;
//     if(selectedSeatNum.includes(seatNum)) {
//         // const subSeat = [...submittedSeats, {name, seatNum}]
//         // setSubmittedSeats(subSeat)
//         // console.log("correct")
//         // console.log(submittedSeats)
//         const seatAlreadyBooked = submittedSeats.some((item) => item.seatNum === seatNum);
//         if (seatAlreadyBooked) {
//             toast.error("Seat already booked");
//             return;
//         }
//         setSubmittedSeats(prevSeats => {
//             //  subSeat = [...prevSeats, { name, seatNum }];
//             // console.log("correct");
//             // console.log(subSeat);
//             //setGenUser((prevUsers) => [...prevUsers, { name, seatNum }]);
//             //  setUserList((prevUsers) => [...prevUsers, { name, seatNum }]); // Add user to the list
//             //  setUserList(subSeat)
//             //  setGenUser(subSeat)
//             //  console.log(subSeat)
//              //dispatch(addAsyncGuest(subSeat))
             
             
//             // return subSeat;
//         })

//         setSelectedSeatObj(prevSeats => {
//             let subSeatObj = {...prevSeats, name, seatNum };
//            console.log(subSeatObj);
//            //setGenUser((prevUsers) => [...prevUsers, { name, seatNum }]);
//             //setUserList((prevUsers) => [...prevUsers, { name, seatNum }]); // Add user to the list
//             //setUserList(subSeat)
//             //setGenUser(subSeat)
//             //console.log(subSeat)
//             dispatch(addAsyncGuest(subSeatObj))
            
            
//            return subSeatObj;
//        })



//         //dispatch(addGuest(userList))
        

//         toast.success("Submission successful");

//         // Clear fields
//         setName("");
//         setSeatNumber("");
//         setSelectedSeats([]);

//         } else {
//         toast.error("invalid submission")
//         console.log("wrong")
//     }



// }
const onSubmitFunc = (e) => {
    e.preventDefault();

    if (selectedSeatNum.includes(seatNum)) {
        const seatAlreadyBooked = submittedSeats.some((item) => item.seatNum === seatNum);

        if (seatAlreadyBooked) {
            toast.error("Seat already booked");
        } else {
            const newSeat = { name, seatNum };
            setSubmittedSeats((prevSeats) => [...prevSeats, newSeat]);

            // Assuming you want to dispatch this to Redux
            dispatch(addAsyncGuest(newSeat));

            toast.success("Submission successful");

            // Clear fields
            setName("");
            setSeatNumber("");
            setSelectedSeats([]);
        }
    } else {
        toast.error("Invalid submission");
    }
};

// let meU = [1,2,3]
// console.log(userList)
// console.log(guest)

// useEffect(() => {
//      console.log(submittedSeats);

//     // // Now you can perform actions based on the updated state
//     submittedSeats.forEach(s => {
//         if (s.name === name && s.seatNum === seatNum) {
//             console.log("a");
//         } else {
//             console.log("br");
//         }
//     });
// }, [submittedSeats]);
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
                    <p className="text-2xl text-center mt-5 mb-5 uppercase text-white font-semibold ">Table One</p>
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
                <p className="text-2xl text-center  uppercase text-white font-semibold my-5">Table Two</p>
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
                <p className="text-2xl text-center  uppercase text-white font-semibold my-5">Table Three</p>
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
                <p className="text-2xl text-center  uppercase text-white font-semibold my-5">Table Four</p>
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
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Guest's Name</label>
    <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="input guest's name" value={name} onChange={(e) => {setName(e.target.value)}} required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Guest Seat Number</label>
    <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={seatNum} onChange={(e) => {setSeatNumber(e.target.value)}} />
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
            
        </div>


    </div>
  )
}

export default SeatSelectionComponent