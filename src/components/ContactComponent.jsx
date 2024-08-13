import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ProfileComponent from './ProfileComponent';
import SpinnerComponent from '../components/SpinnerComponent'
import {toast} from "react-toastify"
import axios from 'axios';


const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name:"",
        address:"",
        phoneNo: "",
        email:"",
        messsage:""

    })

    const [loading, setLoading] = useState(false)

    const initialFormData = {
        name: '',
        address: '',
        phoneNo: '',
        email: '',
        message: ''
      };

    const onchangeFunc = (e) => {
        setFormData((prevData) => ({
            ...prevData, [e.target.name] : e.target.value
        }))
    }
   
    const submitFunc = async (e) => {
        e.preventDefault()
        let contactData = {name, phoneNo, email, message}
        try {
            setLoading(true);
            const { data } = await axios.post('https://joof-backend.onrender.com/api/contact', contactData);
            setLoading(false)
 

        } catch (error) {
            toast.error("Error Sending Complaint")
            console.error("Error Sending Complaint", error)
        }
        setFormData(initialFormData)
    }

    const {name, phoneNo, email, message} = formData
  return (
    
    <div>
        <div className="bg-black h-full w-full mb-10 p-9">
            <p className="text-white w-3/4 md:w-1/4 mx-auto font-bold text-3xl  md:text-5xl mb-8 uppercase">Contact Us</p>
            <div className="flex flex-col lg:flex-row ">
                <div className="w-full">
                    <h1 className='text-white font-bold text-xl mb-8 uppercase'>Our Location</h1>
                    <p className='text-white font-medium text-lg mb-4'><span>ADDRESS:</span> Aiyegbaju Street, behind Iroko market, Igbara Oke</p>
                    <p className='text-white font-medium text-lg mb-4'><span>PHONE:</span> +2349036069035</p>
                    <p className='text-white font-medium text-lg mb-16'><span>EMAIL: </span> 
                    rufuselemoeventcentre@gmail.com</p>
                </div>
                <div className=' bg-white py-10 px-10 w-full   '>
                    <form onSubmit={submitFunc} >
                        <div className="w-11/12 mx-auto">
                        <div className='mb-8 w-full mx-auto'>
                            <h1 className='text-2xl md:text-3xl font-bold text-center sm:text-lg '>Contact Us</h1>
                            <label className="block mb-3 font-medium text-gray-900 " htmlFor=''>Name</label>
                            <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4' type='text' id='name' name='name' value={name} placeholder='Name' required onChange={onchangeFunc}/>
                        </div>
                    
                    

                    <div className='mb-8'>
                            <label className="block text-md font-medium" htmlFor="">Phone No</label>
                            <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4' type={"number"} id='number' name='phoneNo' value={phoneNo}  placeholder='Phone Number' onChange={onchangeFunc} 
                            />
                        
                    </div>

                    <div className='mb-8'>
                        <label className="block text-md font-medium"  htmlFor="">Email</label>
                        <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4' type="email" name="email" id="email" value={email} placeholder='Email' onChange={onchangeFunc} />
                       
                        
                    </div>

                    <div className="">
                        <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="text" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How can we help you?" name='message' value={message} onChange={onchangeFunc}></textarea>
                    </div>

                    
                    <div>
                            <button type="submit" className='bg-blue-900 text-white py-2.5 px-4 w-full mt-2 rounded-md  '>Submit</button>
                        </div>     

                        </div>
                                
                    </form>
            </div>
                
            </div>

            {/* <ProfileComponent formData={formData} /> */}

        </div>
    </div>
  )
}

export default ContactComponent