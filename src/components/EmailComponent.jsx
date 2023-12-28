import React from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addGuest } from '../slices/guestSlice';

import eventImg from "../assets/ev bg.jpg"
import bg from "../assets/bg_i.jpg"


const EmailComponent = () => {
    const [email, setEmail] =  useState("")
    const [name, setName] =  useState("")
    const { eventPackage } = useSelector(state => state.eventPackage)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        setEmail("")
        setName("")

    }
    
  return (
    <div>
     <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),url('${bg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: ""}} className={`pb-8`}>
      
     <p className='uppercase text-4xl font-semi-bold md:text-5xl text-white mx-auto text-center pt-20 md:pt-40 pb-8'>Subscribe to our mail</p>

    

     <p className='text-white text-center text-lg'>Subscribe to our email to get  firsthand information and news on different events</p>

     <form onSubmit={onSubmit}>
        <div className="flex justify-between items-start flex-col lg:flex-row py-10 lg:p-16">
          <div className="w-full px-5">
            <input type="text" className="p-4 border text-white bg-transparent border-solid outline-gray-300 w-full block placeholder:text-lg placeholder:text-white mb-5" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Address' />
          

          </div>

          <div className="w-full px-5">
            <input type="text" className="p-4 border text-white bg-transparent border-solid outline-gray-300 w-full block placeholder:text-lg placeholder:text-white mb-5" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
          

          </div>

          <div className="w-full px-5">
            <button  type='submit' className="w-full p-4  bg-blue-900 text-white  rounded " >Subcribe</button>
          

          </div>
        </div>
    
      
     </form>


      
    </div>
        {/* <div className="bg-black px-8 py-14 text-white mb-4 mx-1">
            
            <div className='mb-8 w-full mx-auto'>
                                <h1 className='text-2xl md:text-3xl font-bold text-center sm:text-lg mb-3 '>Subscribe To Our Email</h1>

                                <div className="flex sm:flex-col flex-col md:flex-row lg:w-10/12 w-full ">
                                <input className='  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full px-6 py-10 basis-4/5 mb-3' type='text' id='title' name='title' value={title} placeholder='subscribe to our mail' required onChange={(e) => setTitle(e.target.value)}/> 
                                <button onClick={onSubmit} type='submit' className='bg-blue-900 px-9 ml-3 rounded-md sm:w-full w-full basis-2/5 py-4 md:block'>Subcribe</button>

                                </div>
                                {/* <button onClick={onSubmit} type='submit' className='bg-blue-900 px-7 ml-3 rounded-md sm:w-full w-full basis-2/5 md:hidden'>Subcribe</button> */}
                                

                         {/* </div>
            
        </div> */}
    </div>
  )
}

export default EmailComponent