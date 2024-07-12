import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useFlutterwave } from 'flutterwave-react-v3';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import CartComponent from '../components/CartComponent'
import { removeFromCart } from '../slices/eventPackageSlice';


const CartScreen = () => {
    // const [price, setPrice] = useState(29)
    // const [totalPrice, setTotalPrice] = useState(0);
    let testP;

    const {user} = useSelector(state => state.user)

    const {eventPackage} = useSelector(state => state.eventPackage)
    const {moreEvent} = useSelector(state => state.moreEvent)
    const {guest} = useSelector(state => state.guest)
    const dispatch = useDispatch()

    
    console.log(user)
    const navigate = useNavigate()
    useEffect(() => {
        if ( user === null ) {
            navigate("/register")
        }
    }, [])

      console.log(eventPackage)
    let total = eventPackage.reduce((sum, even ) => sum + even.price, 0 )
    console.log(total)
    // useEffect(() => {
    //   eventPackage.map(ev => (
    //     my = [ev.price + ev.price]
    //     //console.log(ev.price)
    //   ))
    //   console.log(my)
    // }, [eventPackage])
    //let sum = eventPackage.reduce((acc, cur) => {

    // //})
    // useEffect(() => {
    //   setTotalPrice(totalPrice + testP)
    // },[eventPackage])
    //
    //console.log(totalPrice)
  //   useEffect(() => {
  //     //setTotalPrice((prevTotalPrice) => prevTotalPrice + parseFloat(event.price));
  //     console.log(testP)
  //     //setTotalPrice((prevTotalPrice) => prevTotalPrice + parseFloat(event.price));
  //     //console.log(totalPrice)
  //     setTotalPrice((prevPrice) => prevPrice + 23)
  //     console.log(totalPrice)
  //     setTotalPrice((prevTotalPrice) => {
  //       console.log(prevTotalPrice)
  //       //const priceToAdd = parseFloat(testP.price) || 0;
  //       const newTotalPrice = prevTotalPrice + testP;
  //         console.log(testP)
  //         let updaate = newTotalPrice + testP
  //         console.log(newTotalPrice); // Log the updated total price
  //         console.log(updaate)
  //         return newTotalPrice;
  // })
  // }, [])
  // let token = "sk_test_51OToy2I3dQudUwMT5Rg9sYBNmpwjHDnZXQrAYGKJrjyf6T65Tex5LwmxuW2vkvCV2tuZSXrznW5xjFF6CoMBkw8P00sRVpzrvm"
  //   const configs = {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // }
  
//   const makePayment = async() => {
//     try {
//       const stripe = await loadStripe("pk_test_51OToy2I3dQudUwMT7FmUGmDarYEIG5uP9z7HudbcukrACNhMlWFUqdLEwl9ZObXn25CK31Ffs8LDWB470P0ikGrn00N5SgS1CF")
// console.log(stripe)
//     const body = {
//       products: eventPackage
//     }
//     //https://joof-backend.vercel.app
//     const { data } =  await axios.post("https://joof-backend.vercel.app/create-checkout-session", {
//       products: eventPackage
//     },)
//     console.log(data)

//     const result = stripe.redirectToCheckout({
//       sessionId: data.id
//     })
      
//     } catch (error) {
//       console.log(error)
//     }
    
//   }


  // const config = {
  //   public_key: import.meta.env.VITE_PUBLIC_KEY,
  //   tx_ref: Date.now(),
  //   amount: total,
  //   currency: 'NGN',
  //   payment_options: 'card,mobilemoney,ussd',
  //   customer: {
  //     email: "User 0ne",
  //     phone_number: '070********',
  //     name: "Simeone",
  //   },
  //   customizations: {
  //     title: 'Event Center',
  //     description: 'Payment for items in cart',
  //     logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
  //   },
  // };

  //const handleFlutterPayment = useFlutterwave(config);

  // const fwConfig = {
  //   ...config,
  //   text: 'Pay Now With Flutterwave',
  //   callback: (response) => {
  //      console.log(response);
  //     closePaymentModal() // this will close the modal programmatically
  //   },
  //   onClose: () => {},
  // };



  // Wema ALAT API Credentials
  const primaryKey = "be675a4ae9804fbc8a7f89793a6cb6aa"; // Replace with your actual Primary Key
  const secondaryKey = "0139e03561e24c99a6543aa0b6052ffe"; // Replace with your actual Secondary Key

  // Function to make payment request
  const makePayment = async () => {
    try {
      const response = await axios.post("https://alatpay-dev.azurewebsites.net/payments", {
        amount: total,
        currency: "NGN",
        description: "Payment for event packages",
        customer: {
          email: user.email,
          name: user.name
        },
        redirect_url: "https://yourwebsite.com/redirect", // Replace with your actual redirect URL
        callback_url: "https://yourwebsite.com/callback" // Replace with your actual callback URL
      }, {
        headers: {
          Authorization: `Bearer ${primaryKey}`, // Use primary key for authorization
          "Content-Type": "application/json"
        }
      });
      
      const paymentUrl = response.data.payment_url; // Assuming the response contains a payment URL
      window.location.href = paymentUrl;
    } catch (error) {
      console.error("Error making payment request:", error);
    }
  };
  return (
    <div>
        <div className="">
            <div className="">
            <p className="text-center font-bold text-3xl my-5">Your Packages</p>

              {eventPackage.map((event, index) => (
                
                    <div className="">
                     
<div className={` "rounded border p-4 bg-white border-x-2 border-y-2 mb-3"  "hidden"}`}>
                        <p>Name: {event.name}</p>
                        <p className='mb-1'>Price: {event.price}</p>
                        <div className="mb-5 md:mx-auto">
                            <button onClick={() => dispatch(removeFromCart(event._id))} className="bg-red-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4 text-white text-center">Delete Package</button>
                        </div>
                        </div>
                    <div className=''>
                    
                    
                        <div className={`${event.name === "Entry Package"  ?  "rounded border p-4 bg-white border-x-2 border-y-2 mb-3" : "hidden"}`}>
                        <p>{event.name && "Name : "} {event.name}</p>
                        <p className='mb-1'> Price:  {event.price}</p>
                     
                        <div className={`${event.name ?  "mb-5 md:mx-auto": "hidden"}`}>
                            <button className="bg-blue-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4 ">Buy</button>
                        </div>
                        </div>
                  
                </div>
            
            
                <div className=''>
                   
                        <div className={`${event.name === "Advanced Package" ? "rounded border p-4 bg-white border-x-2 border-y-2 mb-3" : "hidden"}`}>
                        <p>Name: {event.name}</p>
                        <p className='mb-1'>Price: {event.price}</p>
                        <div className="mb-5 md:mx-auto">
                            <button className="bg-blue-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4">Buy</button>
                        </div>
                        </div>
                    
                </div>
            
                <div className=''>
                   
                        <div className={`${event.name ===  "Premium Package" ? "rounded border p-4 bg-white border-x-2 border-y-2 mb-3" : "hidden"}`}>
                        <p>Name: {event.name}</p>
                        <p className='mb-1'>Price: {event.price}</p>
                        <div className="mb-5 md:mx-auto">
                            <button className="bg-blue-900 w-full rounded-xl p-4 md:w-1/4 lg:w-1/4">Buy</button>
                        </div>
                        </div>
                   
                </div>
                    
                </div>
                
                
              ))}
              {/* {eventPackage.map(event => (
                <CartComponent key={event.name} event={event} />
              )) } */}
               
            </div>
            <div className="">
              <p className="mt-12 text-xl font-semibold">Total Price: ${total.toFixed(2)}</p>
              <button onClick={makePayment} className="block cursor-pointer bg-blue-900 text-white text-lg w-full rounded-lg py-1.5">Buy</button>
            </div>

        </div>
    </div>
  )
}

export default CartScreen