import React, {useState,useEffect} from 'react'

const CartComponent = ({ event }) => {
    const [totalPrice, setTotalPrice] = useState(null);


    console.log(event)
    console.log(event.name)
    useEffect(() => {
        //setTotalPrice((prevTotalPrice) => prevTotalPrice + parseFloat(event.price));
        console.log(event.price)
        //setTotalPrice((prevTotalPrice) => prevTotalPrice + parseFloat(event.price));
        //console.log(totalPrice)
        setTotalPrice((prevTotalPrice) => {
            const newTotalPrice = prevTotalPrice + event.price
            let updaate = newTotalPrice + prevTotalPrice
            console.log(newTotalPrice); // Log the updated total price
            console.log(updaate)
            return newTotalPrice;
    })
    }, [event])
  return (
    <div className="">
        <div className=''>
        
            <div className={`${event.name === "Rental Services"  ?  "rounded border p-4 bg-white border-x-2 border-y-2 mb-3" : "hidden"}`}>
            <p>{event.name && "Name : "} {event.name}</p>
            <p className='mb-1'> Price:  {event.price}</p>
            <p className='mb-1'> Total:  {totalPrice}</p>
            <div className={`${event.name ?  "mb-5 md:mx-auto": "hidden"}`}>
                <button className="bg-blue-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4 ">Buy</button>
            </div>
            </div>
      
    </div>


    <div className=''>
       
            <div className={`${event.name === "Catering Services" ? "rounded border p-4 bg-white border-x-2 border-y-2 mb-3" : "hidden"}`}>
            <p>Name: {event.name}</p>
            <p className='mb-1'>Price: {event.price}</p>
            <div className="mb-5 md:mx-auto">
                <button className="bg-blue-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4">Buy</button>
            </div>
            </div>
        
    </div>

    <div className=''>
       
            <div className={`${event.name ===  "Decoration Services" ? "rounded border p-4 bg-white border-x-2 border-y-2 mb-3" : "hidden"}`}>
            <p>Name: {event.name}</p>
            <p className='mb-1'>Price: {event.price}</p>
            <div className="mb-5 md:mx-auto">
                <button className="bg-blue-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4">Buy</button>
            </div>
            </div>
       
    </div>
        
    </div>
    
  )
}

export default CartComponent