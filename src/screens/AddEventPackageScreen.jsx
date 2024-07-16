import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        price: ''
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreatePackage = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post('https://joof-backend.onrender.com/api/package', formData);
            setEvents([...events, data]);
            setFormData({ name: '', description: '', price: '' });
            setLoading(false);
        } catch (error) {
            console.error('Error creating package:', error);
            setLoading(false);
        }
    };

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
                            <button className='bg-blue-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center w-11/12 mx-auto' type="submit">Create Package</button>
                        </form>
                    </>)}
    </div>
  )
}

export default AddEventPackageScreen