import React, {useState,useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import { IoPersonAdd } from "react-icons/io5";
import { addGuest } from '../slices/guestSlice';
import SeatListComponent from './SeatListComponent';
import axios from 'axios';


const ProfileComponent = (props) => {
    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    const [singleGuest, setSingleGuest] = useState([])
    
    const { guest, Loading, Error, Success } = useSelector(state => state.guest)
    const dispatch = useDispatch()


    const navigate = useNavigate()
    useEffect(() => {
        if ( user === null ) {
            navigate("/register")
        }
    }, [user, isLoading, isError, isSuccess,])
   

    //console.log(props)
    //console.log(guest)
    //  useEffect(() => {
    //     console.log(Success)
    //      console.log(guest)
    
    //    }, [guest, Error, Success])
    const getGuest = async () => {
        try {
            setLoading(true)
            const { data } =  await axios.get("http://localhost:5000/api/guest", {withCredentials: true})
            console.log(data)
            setSingleGuest([...singleGuest, data])
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

       useEffect(() => {
        
         getGuest()
    
       }, [])

       //console.log(singleGuest)
  return (
    <div>
        <div className="">
            <div className=" p-2.5">
                <p className="text-center text-2xl font-semibold">{user && user.name} Profile</p>
                <div className="flex">
                <IoPersonAdd size={30} className=' basis-1/12 text-blue-900' />
                <div className="pl-4  basis-11/12">
                <p className="text-xl mb-3">Personal Info</p>
                <p className="uppercase mb-1.5">
                    Name: {user && user.name}
                </p>
                <p className="uppercase ">
                Email/Phone_no: {user && user.email}
                </p>


                </div>
                
                </div>
            </div>

            <div className="p-2.5">
                <div className="flex">
                <IoPersonAdd size={30} className=' basis-1/12 text-blue-900' />
                <div className="pl-4  basis-11/12">
                <p className="text-xl mb-3">Guest Information</p>
                {console.log(singleGuest)}
                
                {singleGuest.map(guest => <SeatListComponent guest={guest}  />) }

                </div>
                
                </div>
            </div>

            {/* <SeatListComponent  /> */}
            
        </div>
    </div>
  )
}

export default ProfileComponent