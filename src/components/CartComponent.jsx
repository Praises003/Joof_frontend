import React from 'react'

const CartComponent = ({ eventPackage }) => {
    const price = "29"
    console.log(eventPackage)
  return (
    <div className="">
        <div className=''>
        {eventPackage.map(ev => (
            <div className={`${ev.rental ?  "rounded border p-4 bg-white border-x-2 border-y-2 mb-3" : "hidden"}`}>
            <p>{ev.rental && "Name : "} {ev.rental}</p>
            <p className='mb-1'> Price:  {price}</p>
            <div className={`${ev.rental ?  "mb-5 md:mx-auto": "hidden"}`}>
                <button className="bg-blue-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4 ">Buy</button>
            </div>
            </div>
        ))}
    </div>


    <div className=''>
        {eventPackage.map(ev => (
            <div className={`${ev.catering ? "rounded border p-4 bg-white border-x-2 border-y-2 mb-3" : "hidden"}`}>
            <p>Name: {ev.catering}</p>
            <p className='mb-1'>Price: {price}</p>
            <div className="mb-5 md:mx-auto">
                <button className="bg-blue-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4">Buy</button>
            </div>
            </div>
        ))}
    </div>

    <div className=''>
        {eventPackage.map(ev => (
            <div className={`${ev.decoration ? "rounded border p-4 bg-white border-x-2 border-y-2 mb-3" : "hidden"}`}>
            <p>Name: {ev.decoration}</p>
            <p className='mb-1'>Price: {price}</p>
            <div className="mb-5 md:mx-auto">
                <button className="bg-blue-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4">Buy</button>
            </div>
            </div>
        ))}
    </div>
        
    </div>
    
  )
}

export default CartComponent