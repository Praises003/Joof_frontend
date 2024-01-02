import React from 'react'
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom'

const PaymentFailedScreen = () => {
  return (
    <div>
        <div className="">
            <div className=" mx-auto bg-red-900 p-10">
            <MdCancel size={60} className='text-center text-red-500 mb-5' />
                <p className="text-2xl md:text-4xl font-semibold mb-5 text-white">Payment Failed</p>
                                    <Link className='bg-yellow-500 w-full block rounded-xl p-4 md:w-2/4 lg:w-2/4' to={"/dashboard"}>Back To The Dashboard</Link>
               


            </div>
                    </div>
    </div>
  )
}

export default PaymentFailedScreen