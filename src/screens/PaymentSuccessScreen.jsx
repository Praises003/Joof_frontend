import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircleCheck } from "react-icons/fa6"

const PaymentSuccessScreen = () => {
  return (
    <div>
        <div className="">
            <div className=" mx-auto bg-blue-900 p-10">
            <FaCircleCheck size={60} className='text-center text-white mb-5' />
                <p className="text-2xl md:text-4xl font-semibold mb-5 text-white">Payment Successful</p>
              
                    <Link className='bg-yellow-500 w-full rounded-xl p-4 md:w-2/4 lg:w-2/4' to={"/dashboard"}>Back To The Dashboard</Link>
               


            </div>
                    </div>
    </div>
  )
}

export default PaymentSuccessScreen