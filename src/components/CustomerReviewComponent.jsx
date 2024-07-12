import React from 'react'
import {BsStarFill} from "react-icons/bs"

const CustomerReviewComponent = ({ rev }) => {
    
  return (
    <div>
        <p className='mt-10 text-3xl font-bold text-center'>Customers Review</p>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1" >
            {rev.map(r => <div className='m-4'>
                <div className="bg-gray-300 p-3">
                    <div className="flex items-center">
                        <img src={r.img} alt="" className='w-20 h-20 rounded-full' />
                        <p className='pl-4 font-bold text-lg'>{r.name}</p>

                    </div>
                    
                    <div className="flex justify-center text-yellow-500 mb-10">
                    <BsStarFill size={25} /> 
                    <BsStarFill size={25} /> 
                    <BsStarFill size={25} /> 
                    <BsStarFill size={25} /> 
                    <BsStarFill size={25} />

                    </div>
                    
                    
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default CustomerReviewComponent