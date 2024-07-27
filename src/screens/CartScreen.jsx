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

    
    
    const navigate = useNavigate()
    useEffect(() => {
        if ( user === null ) {
            navigate("/register")
        }
    }, [])

   
    let total = eventPackage.reduce((sum, even ) => sum + even.price, 0 )
    
   
   

   

  // Function to make payment request
  // const makePayment = async () => {
  //   try {
  //     const response = await axios.post("https://alatpay-dev.azurewebsites.net/payments", {
  //       amount: total,
  //       currency: "NGN",
  //       description: "Payment for event packages",
  //       customer: {
  //         email: user.email,
  //         name: user.name
  //       },
  //       redirect_url: "", 
  //       callback_url: "" // 
  //     }, {
  //       headers: {
  //         Authorization: `Bearer ${primaryKey}`, // Use primary key for authorization
  //         "Content-Type": "application/json"
  //       }
  //     });
      
  //     const paymentUrl = response.data.payment_url; // Assuming the response contains a payment URL
  //     window.location.href = paymentUrl;
  //   } catch (error) {
  //     console.error("Error making payment request:", error);
  //   }
  // };
  const makePayment = () => {
    // Ensure all required fields are filled
    if (!user || !user.email || !user.name  || !total) {
        alert("Please fill all required fields.");
        return;
    }

    // Setup Alatpay payment
    let popup = Alatpay.setup({
        apiKey: import.meta.env.VITE_ALAT_PRIMARY_KEY, // Replace with your actual API key
        businessId: import.meta.env.VITE_BUSINESS_ID, // Replace with your actual business ID
        email: user.email, // [Required] customer email
        firstName: user.name, // customer first name
        lastName: user.name, // customer last name
        metaData: null,
        currency: "NGN",
        amount: total , // [Required] Payment Amount in kobo
        // onTransaction: function (response) {
        //     console.log("API response is ", response);
        //     // Handle the response from Alatpay, e.g., save the transaction details in your database
        //     axios.post('/api/save-transaction', response)
        //         .then(res => {
        //             console.log("Transaction saved:", res.data);
        //         })
        //         .catch(error => {
        //             console.error("Error saving transaction:", error);
        //         });
        // },
        
        onTransaction: function (response) {

          console.log("API response is ", response)
          
          },
        onClose: function () {
            console.log("Payment gateway is closed");
        }
    });

    popup.show();
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
              <p className="mt-12 text-xl font-semibold">Total Price: ₦{total.toFixed(2)}</p>
              <button onClick={makePayment} className="block cursor-pointer bg-blue-900 text-white text-lg w-full rounded-lg py-1.5">Buy</button>
            </div>

        </div>
    </div>
  )
}

export default CartScreen