import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import CartComponent from '../components/CartComponent'
import { useState } from 'react'


const CartScreen = () => {
    const [price, setPrice] = useState("29")
    const {eventPackage} = useSelector(state => state.eventPackage)
    console.log(eventPackage)

  return (
    <div>
        <div className="">
            <div className="">
               <CartComponent eventPackage={eventPackage} price={price} />
            </div>

        </div>
    </div>
  )
}

export default CartScreen