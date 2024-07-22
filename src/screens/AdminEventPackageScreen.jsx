import React, { useState, useEffect } from 'react';
import axios from 'axios';
import eventImg from '../assets/ev9.jpg';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../slices/eventPackageSlice';
import SpinnerComponent from '../components/SpinnerComponent';

const AdminEventPackageScreen = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null); // For updating package
    const [imageFile, setImageFile] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: ""
    });

   const {name, description, price, image} = formData

    const { user } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user === null) {
            navigate("/register");
        }
    }, [user, navigate]);

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
    const handleUpdatePackage = async (id) => {
        const pic = await postPic()
        
        try {
            setLoading(true); // Start loading
            
          
    
            const updatedFormData = { ...formData, image };
            const { data } = await axios.put(`http://localhost:5000/api/package/${id}`, {name, description, price, image: pic});
    
          
            setEvents(events.map(event => event._id === id ? data : event));
            setSelectedPackage(null);
            setLoading(false); // Stop loading
        } catch (error) {
            console.error('Error updating package:', error);
            setLoading(false); // Stop loading
        }
    };
    

    const postPic = async() => {
         const formD = new FormData()
        formD.append("file", imageFile)
         formD.append("cloud_name", "dyliuyezy")
         try {
           const { data } = await axios.post('https://joof-backend.onrender.com/api/image', formD)
             
         //setUploadPic(data)
         return data.url
         } catch (error) {
           console.error(error)
         }
       } 

    const handleDeletePackage = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`https://joof-backend.onrender.com/api/package/${id}`);
            setEvents(events.filter(event => event._id !== id));
            setLoading(false);
        } catch (error) {
            console.error('Error deleting package:', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <div style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "80vh" }} className="mb-5 relative">
                <p className='uppercase text-4xl font-semibold left-32 md:text-5xl text-white absolute top-52 md:top-52 md:left-52 text-center'>UPDATE EVENT PACKAGES</p>
            </div>

            <div className="">
                <p className="">Choose the best package for your business</p>
            </div>

            {loading ? (<SpinnerComponent />) : (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-2 mb-5'>
                    {events.map(ev => (
                        <div key={ev._id} className="border shadow-md border-t-8 border-r border-l- border-b- rounded border-t-yellow-500 p-4">
                            <div className="pb-5"></div>
                            <img src={ev.image} alt="event" />
                            <p className='text-center font-bold text-2xl mb-3'>{ev.name}</p>
                            <p className='mb-2'>{ev.description.substring(0, 535)}...</p>
                            <p className="text-center font-semibold text-2xl pb-4">₦{ev.price}</p>
                            <div onClick={() => { dispatch(addToCart({ _id: ev._id, name: ev.name, price: ev.price })) }} className="">
                                <Link className='bg-yellow-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center'>Add To Cart Now</Link>
                            </div>
                            <button className='bg-blue-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center w-full' onClick={() => setSelectedPackage(ev)}>Update Package</button>
                            
                            <button className='bg-red-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center w-full' onClick={() => handleDeletePackage(ev._id)}>Delete Package</button>
                        </div>
                    ))}
                </div>
            )}

            {selectedPackage && (
                <div>
                    {loading ? (<SpinnerComponent />) : (
                    <>
                    <h2 className='text-center text-2xl capitalize'>Update Package</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleUpdatePackage(selectedPackage._id); }}>
                        <div>
                            <label className="block mb-3">Name</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={selectedPackage.name} />
                        </div>
                        <div>
                            <label className="block mb-3">Description</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder={selectedPackage.description} />
                        </div>
                        <div>
                            <label className="block mb-3">Price</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder={selectedPackage.price} />
                        </div>

                        <div>
                            <label className="block mb-3">Image</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" type="file" name="name"  onChange={handleImageChange} placeholder={"Add A Picture"} />
                        </div>
                        <button className='bg-blue-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center w-full'  type="submit">Save</button>
                        <button className='bg-red-500 text-white p-4 mt-1 mb-12 rounded-lg block text-center w-full'  onClick={() => setSelectedPackage(null)}>Cancel</button>
                    </form>
                    </>
                    )}
                </div>
            
               
            )}
        </div>
    );
};

export default AdminEventPackageScreen;
