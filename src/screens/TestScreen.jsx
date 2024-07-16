import React, { useState } from 'react';
import axios from 'axios';
import {toast} from "react-toastify"
import SpinnerComponent from '../components/SpinnerComponent'

const TestScreen = () => {
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

  const [imageFile, setImageFile] = useState(null); // State to hold the selected image file
  const [showForm, setShowForm] = useState(false)
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   // Upload image to Cloudinary
  //   const imageData = new FormData();
  //   imageData.append('file', imageFile);
  //   imageData.append('cloud_name', 'dyliuyezy'); // Replace with your Cloudinary upload preset

  //   try {
  //     const response = await axios.post('http://localhost:5000/api/image', imageData);
  //     const imageUrl = response.data.url; // Assuming your backend sends back the Cloudinary URL
  //     console.log(imageUrl)
  //     setFormData({ ...formData, imageUrl }); // Set the imageUrl in your form data
  //   } catch (error) {
  //     console.error('Error uploading image: ', error);
  //   }

  //   // Now you can submit the rest of the formData (including the imageUrl) to create/update member
  //   // Example: axios.post('YOUR_BACKEND_API_ENDPOINT_FOR_MEMBERS', formData);
  // };

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
        const response = await axios.post('http://localhost:5000/api/image', imageData);
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
       const {data} = await axios.patch(`http://localhost:5000/api/member/${formData.id}`, updatedFormData);
       setLoading(false)
        // Handle success or navigate away
      } catch (error) {
        toast.error('Error updating member: ');
        console.error('Error updating member: ', error);
      }
    } else {
      // Create new member
      try {
        
       const {data} = await axios.post('http://localhost:5000/api/member', updatedFormData);
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
  
  return (
<>
      {loading ? (
        <SpinnerComponent /> // Your spinner component
      ) : (
        <>
        <button onClick={() => setShowForm(true)}>edit</button>
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
    </>
  );
};

export default TestScreen;
