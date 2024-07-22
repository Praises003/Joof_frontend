import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from "react-toastify"
import eventImg from '../assets/ev9.jpg';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../slices/eventPackageSlice';
import SpinnerComponent from '../components/SpinnerComponent';


const AddEventPackageScreen = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: "",
    });
    const [imageFile, setImageFile] = useState(null)
    const {name, description, price, image} = formData

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('https://joof-backend.onrender.com/api/package');
                setEvents(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchEvents();
    }, []);

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
      };
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreatePackage = async (e) => {
        e.preventDefault();

        const url = await postPic()
       

                

          const updatedFormData = {name, description, price, image:url };
          console.log(updatedFormData)
         
        try {
            setLoading(true);
            const { data } = await axios.post('https://joof-backend.onrender.com/api/package', {name, description, price, image:url});
            console.log(data)
            setEvents([...events, data]);
            setFormData({ name: '', image: "", description: '', price: '' });
            setLoading(false);
        } catch (error) {
            setLoading(false)
            toast.error('Error creating package ');
            console.error('Error creating package:', error);
            setLoading(false);
        }

         
    };

    const postPic = async() => {
        const formD = new FormData()
        formD.append("file", imageFile)
        formD.append("cloud_name", "dyliuyezy")
        try {
          const { data } = await axios.post('https://joof-backend.onrender.com/api/image', formD)
            //console.log(data)
        //setUploadPic(data)
        return data.url
        } catch (error) {
          console.error(error)
        }
      } 

  return (
    <div>
        {loading ? (<SpinnerComponent />) : (
        <>
                        <h2 className='text-center text-2xl capitalize'>Create New Package</h2>
                        <form onSubmit={handleCreatePackage}>
                            <div className='m-5'>
                                <label className="block mb-3">Name</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                            </div>
                            
                            <div className='m-5' >
                                <label className="block mb-3">Description</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" type="text" name="description" value={formData.description} onChange={handleInputChange} required />
                            </div>
                            <div className='m-5'>
                                <label className="block mb-3">Price</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" type="number" name="price" value={formData.price} onChange={handleInputChange} required />
                            </div>

                            <div className='m-5' >
                                <label className="block mb-3">Image</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" type="file" name="image"  onChange={handleImageChange} required />
                            </div>

                            <button className='bg-blue-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center w-11/12 mx-auto' type="submit">Create Package</button>
                        </form>
                    </>)}
    </div>
  )
}

export default AddEventPackageScreen