import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {toast} from "react-toastify"
import eventImg from '../assets/joof.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";


const ContactScreen = () => {
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [workHour, setWorkHour] = useState("")
    const [mail, setMail] = useState("")
    const [loading, setLoading] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const { user } = useSelector(state => state.user)


    useEffect(() => {
        const fetchContactText = async () => {
            try {
                const { data } = await axios.get('https://joof-backend.onrender.com/api/contactText', {withCredentials: true});

                setAddress(data.address)
                setPhone(data.phone)
                setWorkHour(data.workHour)
                setMail(data.mail)
            } catch (error) {
                toast.error(error)
                console.error(error)
                
            }
        };

        fetchContactText()
    }, [])

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleWorkHour = (e) => {
        setWorkHour(e.target.value)
    }

    const handleMail = (e) => {
        setMail(e.target.value)
    }

    const handleUpdateContactText = async (type) => {
        try {

            setLoading(true);
            let updatedText;

            if (type === 'address') {
                updatedText = await axios.put('https://joof-backend.onrender.com/api/contactText/address', { text: address});
                setAddress(updatedText.data.address)
            } else if (type === 'phone') {
                updatedText = await axios.put('https://joof-backend.onrender.com/api/contactText/phone', { text: phone});
                setPhone(updatedText.data.phone)
            } else if (type === 'workHour') {
                updatedText = await axios.put('https://joof-backend.onrender.com/api/contactText/workHour', { text: workHour});
                setWorkHour(updatedText.data.workHour)
            } else if (type === 'mail') {
                updatedText = await axios.put('https://joof-backend.onrender.com/api/contactText/mail', { text: mail});
                setMail(updatedText.data.mail)
            }

            setLoading(false)
            setShowForm(false)

        } catch (error) {
            toast.error(error)
            console.error(error)
        }
    }

    console.log(address)
  return (
    <div>
         <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "80vh"}} className={` mb-5 relative`}>
             <p className='uppercase text-4xl font-semibold left-96 right-56 md:text-5xl text-white absolute top-52 md:top-52 md:left-52 text-center'>  CONTACT US</p>
        </div>

        <div className="grid grid-cols-4 gap-2 p-4">
            <div className="">
                <div className="flex items-center">
                    <FaLocationDot size={25} />
                    <p className='text-lg pl-1.5'>Our Location</p>
                    
                </div>
                <p className="text-lg mb-5">{address} </p>
                

            </div>
            <div className="">
                <p className="">Call Us</p>
                <div className="flex items-center">
                    <BsFillTelephoneFill size={25} />
                    <p className='text-lg pl-1.5 mb-5'>{phone}</p>
                </div>

            </div>
        
            <div className="">
                <p className="">Working Hours</p>
                <div className="flex">
                    <FaClock size={25} className='' />
                    <p className="text-lg pl-1.5 mb-5 md:mb-2">{workHour}</p>
                </div>
                

            </div>
            <div className="">
                <p className="">Get In Touch</p>
                <div className="flex">
                    <IoIosMail size={25} />
                    <p className="text-lg pl-1.5 mb-5">To contact our team, please mail info@joof.com</p>
                </div>

            </div>
        </div>

        <div className="">
     {user && user?.isAdmin ? (<button onClick={() => setShowForm(true)}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center mx-auto w-3/4 lg:w-2/4 block mb-3 text-center`}     >
          <div className="flex items-center justify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit Contact Details</p>
        </div></button>) : (<></>)}

       

    </div>


        {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Address</h2>
            <textarea
              value={address}
              onChange={handleAddress}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateContactText('address')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
            <br></br>
            <h2 className="text-lg font-semibold mb-4">Update Phone</h2>
            <textarea
              value={phone}
              onChange={handlePhone}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateContactText('phone')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
            <br></br>
            <h2 className="text-lg font-semibold mb-4">Update Work Hour</h2>
            <textarea
              value={workHour}
              onChange={handleWorkHour}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateContactText('workHour')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>

            <h2 className="text-lg font-semibold mb-4">Update Email</h2>
            <textarea
              value={mail}
              onChange={handleMail}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleUpdateContactText('mail')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default ContactScreen