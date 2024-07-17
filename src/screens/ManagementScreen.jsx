import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {toast} from "react-toastify"
import { useSelector, useDispatch } from 'react-redux';
import SpinnerComponent from '../components/SpinnerComponent'

import { FaPencilAlt } from "react-icons/fa";
import bod1 from "../assets/bod1.jpg"
import bod2 from "../assets/bod2.jpg"
import bod3 from "../assets/bod3.jpg"
import bod4 from "../assets/bod4.jpg"
import bod5 from "../assets/bod5.jpg"
import bod6 from "../assets/bod6.jpg"
import bod7 from "../assets/bod7.jpg"
import bod8 from "../assets/bod8.jpg"
import bod9 from "../assets/bod9.jpg"
import sergio from "../assets/sergio.jpg"
import christopher from "../assets/christopher.jpg"
import stefan from "../assets/stefan.jpg"
import jonas from "../assets/jonas.jpg"
import alex from "../assets/Alex.jpg"
import segun from "../assets/segun.jpg"
import damola from "../assets/Damola.jpg"
import kay from "../assets/kay.jpg"
import wunmi from "../assets/wunmi.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsAlexa } from 'react-icons/bs'
import { Link } from 'react-router-dom';
//import jonas from "../assets/jonas.jpg"



const ManagementScreen = () => {
    const initialFormData = {
        name: '',
        position: '',
        imageUrl: '', 
        socialLinks: {
          facebook: '',
          linkedin: '',
          instagram: ''
        }
      };
      const [loading, setLoading] = useState(false)
      const [formData, setFormData] = useState(initialFormData);
      const [managementState, setManagementState] = useState([])
    
      const [imageFile, setImageFile] = useState(null); // State to hold the selected image file
      const [showForm, setShowForm] = useState(false)
      const { user } = useSelector(state => state.user)
      
      useEffect(() => {
        const fetchManagement = async () => {
            try {
                await fetchManData()
            } catch (error) {
                console.error(error)
            }
        }
        fetchManagement();

      }, [])
      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
      };
    
 
    
      const onSubmit = async (e) => {
        e.preventDefault();
        // Check if any required field is empty
        if (!formData.name || !formData.position ) {
          toast.error('Please fill out all fields');
          return;
        }
      
        // Upload image to Cloudinary if imageFile exists
        let imageUrl = formData.imageUrl; // Default to existing imageUrl
      
        if (imageFile) {
          const imageData = new FormData();
          imageData.append('file', imageFile);
          imageData.append('cloud_name', 'dyliuyezy'); // Replace with your Cloudinary upload preset
      
          try {
            setLoading(true)
            const response = await axios.post('"https://joof-backend.onrender.com/api/image', imageData);
            imageUrl = response.data.url; // Assuming your backend sends back the Cloudinary URL
            setLoading(false)
          } catch (error) {
            toast.error('Error uploading image: ');
            console.error('Error uploading image: ', error);
          }
        }
      
        // Prepare data to be sent to backend (including updated imageUrl)
        if(!imageUrl ) {
          toast.error("Please Fill the image Field")
        } 
        const updatedFormData = { ...formData, imageUrl };
      
        // Determine whether to create or update based on presence of id
        if (formData.id) {
          // Update existing member
          try {
            setLoading(true)
           const {data} = await axios.patch(`"https://joof-backend.onrender.com/api/management/${formData.id}`, updatedFormData);
           await fetchManData();
           setLoading(false)
            // Handle success or navigate away
          } catch (error) {
            toast.error('Error updating member: ');
            console.error('Error updating member: ', error);
          }
        } else {
          // Create new member
          try {
            
           const {data} = await axios.post('"https://joof-backend.onrender.com/api/management', updatedFormData);
           await fetchManData()
           console.log(data)
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
      const fetchManData = async() => {
        try {
            const { data } = await axios.get("https://joof-backend.onrender.com/api/management")
            
           
            setManagementState(data)
        } catch (error) {
            
        }
      }

      return (
    <div>
        <div className="p-4">
          
            <div className="">
                <p className="text-center text-2xl font-semibold">MANAGEMENT COUNCIL</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-2">
                    {managementState.map(manage => (
                       
                         <div key={manage?._id}
                         className="">
                             
                         <img src={manage?.imageUrl} alt="image" />
                         <p className="">{manage?.name} </p>
                         <p className="">{manage?.position}</p>
                         <div className="flex justify-between items-center">
                             <p className="">social links:</p>
                             <Link to={`/${manage?.socialLinks?.facebook}`}><FaFacebookSquare size={30} /> </Link>

                             <Link to={`/${manage?.socialLinks?.linkedin}`}><FaLinkedin size={30} /> </Link>

                             <Link to={`/${manage?.socialLinks?.instagram}`}> <FaInstagramSquare size={30} /> </Link>
                         </div>
                     </div>

                    ))}
               

                </div>

                {user && user?.isAdmin ? (<button onClick={() => setShowForm(true)}
                className={`  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center w-2/4 mx-auto block`}
                ><div className="flex items-center justify-center">
                    <FaPencilAlt size={18}/><p className='text-center'>Edit Maangement Council</p>
                </div></button>) : (<></>)}
                
            </div>
        </div>

        {loading ? (
        <SpinnerComponent /> // Your spinner component
      ) : (
        <>
        
          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg w-96 overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">Member Form</h2>
                <form onSubmit={onSubmit}>
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
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={onChange}
                      placeholder="Enter position"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                      Facebook
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      name="facebook"
                      value={formData.socialLinks.facebook}
                      onChange={onChange}
                      placeholder="Enter Facebook link"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      value={formData.socialLinks.linkedin}
                      onChange={onChange}
                      placeholder="Enter LinkedIn link"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                      Instagram
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={formData.socialLinks.instagram}
                      onChange={onChange}
                      placeholder="Enter Instagram link"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                      Image (Upload)
                    </label>
                    <input
                      type="file"
                      id="imageUrl"
                      name="imageUrl"
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
        </>
      )}
    </div>
  )
}

export default ManagementScreen
