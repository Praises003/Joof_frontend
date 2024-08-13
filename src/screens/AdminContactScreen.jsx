import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import SpinnerComponent from '../components/SpinnerComponent'
import { useEffect } from 'react';

const AdminContactScreen = () => {

    const [feedBack, setFeedBack] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchFeedBack()
    },[])

    const fetchFeedBack = async() => {
        setLoading(true);
        const { data } = await axios.get("https://joof-backend.onrender.com/api/contact")

        setFeedBack(data);
        setLoading(false)
    }


  return (
    <div>
        {loading ? (<SpinnerComponent />):(<div>
            <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Customer FeedBack</h1>
      <ul>
        {feedBack.map(feed => (
          <li key={feed._id} className="mb-4 p-4 bg-gray-100 rounded">
            <p className="font-bold text-lg">Name: {feed.name}</p>
            <p className="font-medium text-lg">Phone Number:{feed.phoneNo}</p>
            <p className="font-medium text-lg">Email:{feed.email}</p>
            <p className="font-medium text-lg">Message:{feed.message}</p>
            

          </li>
        ))}
      </ul>
    </div>
        </div>)}
    </div>
  )
}

export default AdminContactScreen