import React from 'react'
import { useState } from 'react'

const EmailComponent = () => {
    const [title, setTitle] =  useState("")
    const onSubmit = (e) => {
        e.preventDefault()
        setTitle("")

    }
  return (
    <div>
        <div className="bg-black px-8 py-14 text-white mb-4 mx-1">
            
            <div className='mb-8 w-full mx-auto'>
                                <h1 className='text-2xl md:text-3xl font-bold text-center sm:text-lg mb-3 '>Subscribe To Our Email</h1>

                                <div className="flex lg:w-9/12 w-full ">
                                <input className='  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-6' type='text' id='title' name='title' value={title} placeholder='subscribe to our mail' required onChange={(e) => setTitle(e.target.value)}/> 
                                <button onClick={onSubmit} type='submit' className='bg-blue-900 px-7 ml-3 rounded-md'>Subcribe</button>

                                </div>
                                

                            </div>
            
        </div>
    </div>
  )
}

export default EmailComponent