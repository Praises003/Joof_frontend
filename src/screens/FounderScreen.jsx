import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {toast} from "react-toastify"
import { useSelector, useDispatch } from 'react-redux';
import SpinnerComponent from '../components/SpinnerComponent'

import { FaPencilAlt } from "react-icons/fa";
import founder from "../assets/prof.jpg"

const FounderScreen = () => {
    const initialFormData = {
        title: '',
        name: '',
        image: '', 
        description: "",
        email: ""
      };
      const [loading, setLoading] = useState(false)
      const [formData, setFormData] = useState(initialFormData);
      const [founderState, setFounderState] = useState([])
      const [selectFounder, setSelectedFounder] = useState(null)
    
      const [imageFile, setImageFile] = useState(null); // State to hold the selected image file
      const [showForm, setShowForm] = useState(false)
      const { user } = useSelector(state => state.user)



    useEffect(() => {
        fetchFounderData()
    }, []);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        // Check if any required field is empty
        if (!formData.name ) {
          toast.error('Please fill out all fields');
          return;
        }
      
        // Upload image to Cloudinary if imageFile exists
        let image = formData.imageUrl; // Default to existing imageUrl
      
        if (imageFile) {
          const imageData = new FormData();
          imageData.append('file', imageFile);
          imageData.append('cloud_name', 'dyliuyezy'); // Replace with your Cloudinary upload preset
      
          try {
            setLoading(true)
            const response = await axios.post('"https://joof-backend.onrender.com/api/image', imageData);
            image = response.data.url; // Assuming your backend sends back the Cloudinary URL
            setLoading(false)
          } catch (error) {
            toast.error('Error uploading image: ');
            console.error('Error uploading image: ', error);
          }
        }
      
        // Prepare data to be sent to backend (including updated imageUrl)
        if(!image ) {
          toast.error("Please Fill the image Field")
        } 
        const updatedFormData = { ...formData, image };
      
        // Determine whether to create or update based on presence of id
        if (formData.id) {
          // Update existing member
          
        } else {
          // Create new member
          try {
            
           const {data} = await axios.post('https://joof-backend.onrender.com/api/founder', updatedFormData);
           await  fetchFounderData()
           
            // Handle success or navigate away
             // Clear form fields after successful submission
          setFormData(initialFormData);
          setImageFile(null);
          toast.success('Form submitted successfully');
          } catch (error) {
            console.error('Error creating member: ', error);
            toast.error('Failed to submit form');
          }
        }
        setShowForm(false) 
      };


      
      const updateFounder = async (id) => {
        let image = formData.image; // Default to existing imageUrl
      
        if (imageFile) {
          const imageData = new FormData();
          imageData.append('file', imageFile);
          imageData.append('cloud_name', 'dyliuyezy'); // Replace with your Cloudinary upload preset
      
          try {
       
            const response = await axios.post('https://joof-backend.onrender.com/api/image', imageData);
            image = response.data.url ? response.data.url : image; // Assuming your backend sends back the Cloudinary URL
          
          } catch (error) {
            toast.error('Error uploading image: ');
            console.error('Error uploading image: ', error);
          }
        }
      
        // Prepare data to be sent to backend (including updated imageUrl)
        const updatedFormData = { ...formData, image };
      
        try {
          setLoading(true)
          const { data } = await axios.put(`https://joof-backend.onrender.com/api/founder/${id}`, updatedFormData)
          await fetchFounderData()
          selectFounder(null)
          setLoading(false)
  
        } catch (error) {
          setLoading(false)
        }
      }

    
    
    
    // Fetch FounderData
    const fetchFounderData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('https://joof-backend.onrender.com/api/founder')
           
            setFounderState(data)
            
        } catch(error) {
            console.error('Error fetching founder data:', error);

        } finally {
            setLoading(false)
        }
    };

 
  return (
    <div>
        <p className="font-semibold text-2xl text-center">FOUNDER</p>

        <div className="flex lg:flex-row flex-col justify-between items-start">
            <div className="lg:w-1/4">
                <img src={founderState.image} alt="" className="   bg-no-repeat bg-cover " />

            </div>
            <div className="lg:w-3/4 ">
               
                    <div>
                   
                    <p className="text-2xl font-bold mb-7 lg:text-center px-5">{founderState.name}</p>

                    <p className="mb-7 px-5">
                    {founderState.description}
                    </p>
    
                    <p className="text-lg font-semibold px-5 mb-5">
                    {founderState.email}
                    </p>
                </div>

               
                

            </div>



     </div>
     <div className="">
     {user && user?.isAdmin ? (<button className='bg-blue-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center w-2/4 mx-auto' onClick={() => setSelectedFounder(founderState)}>Update Information</button>) : (<></>)}
                        

     </div>

        {loading ? (
        <SpinnerComponent /> // Your spinner component
      ) : (
        <>
        
          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg w-96 overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">Update Founder </h2>
                <form onSubmit={onSubmit}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={onChange}
                      placeholder="Enter title"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      placeholder="Enter name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <input
                      type="text"
                      id="descriptioj"
                      name="description"
                      value={formData.description}
                      onChange={onChange}
                      placeholder="Enter description"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      placeholder="Enter  Email"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Image (Upload)
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}


        {selectFounder && (
                <div>
                    {loading ? (<SpinnerComponent />) : (
                    <>
                   
                    <h2 className='text-center text-2xl capitalize'>Update Founder Page </h2>
                    <form onSubmit={(e) => { e.preventDefault(); updateFounder(selectFounder._id); }}>
                    <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={onChange}
                      placeholder="Enter Title"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      placeholder="Enter Name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Image (Upload)
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={onChange}
                      placeholder="Enter description"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      placeholder="Enter email"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>


                        <button className='bg-blue-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center w-full'  type="submit">Save</button>
                        <button className='bg-red-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center w-full'  onClick={() => setSelectedFounder(null)}>Cancel</button>
                    </form>
            
                    </>
                  
                    )}
                </div>
            
               
            )}
        </>
      )}
    
    </div>
  )
}

export default FounderScreen