import React, { useEffect, useState } from 'react'

import axios from 'axios';
import {toast} from "react-toastify"
import { useSelector, useDispatch } from 'react-redux';
import SpinnerComponent from '../components/SpinnerComponent'

const AuditScreen = () => {

    const [latestPdf, setLatestPdf] = useState(null);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false)
    const [latestPdfUrl, setLatestPdfUrl] = useState('');
    const { user } = useSelector(state => state.user)



    useEffect(() => {
        fetchPdf()
    },[])

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pdf', file);

        try {

            const { data } = await axios.post('https://joof-backend.onrender.com/api/pdf', formData)
                        
            await fetchPdf()

            setFile(null)
        } catch (error) {
            toast.error('Error uploading pdf: error');
            console.error('Error uploading pdf: ', error);
          }

            
        }

       
            
 



    const fetchPdf = async() => {
        try {
            setLoading(true)
            const { data } = await axios.get("https://joof-backend.onrender.com/api/pdf")

            setLatestPdf(data)
            setLatestPdfUrl(data?.filePath)

            setLoading(false)

            
           
            
        } catch(err) {
            console.error(err);
        }
      }

      const handleViewPdf = () => {
        if (latestPdfUrl) {
            window.open(latestPdfUrl, '_blank');
        } else {
            alert('No PDF available to view.');
        }
    };
    
    const pdfFunc = () => {
        const pdfPath = "https://drive.google.com/file/d/1Mcu1gUEpIWA3gun_-E_cJQzjWiA5RGpq/view?usp=sharing"

        window.open(pdfPath, '_blank');

    }
  return (
    <div>
      { loading ? (<SpinnerComponent />) : ( <div className="">


            <p className="text-center font-bold">JANET OLUFUNMILAYO OLUWASANMI FOUNDATION</p>
            <p className="text-center font-bold">Audited Financial Statements fo the period ended in june 2022</p>
        </div>)}
        <div className="" >
            {/* <button onClick={pdfFunc} className="bg-blue-500 text-white font-semibold  px-4 py-2 rounded- rounded-3xl block text-center hover:bg-yellow-500 hover:text-white hover:font-semibold mb-10">
                View Audited Financial Statements fo the period ended in june 2022
            </button> */}

            <button
            onClick={handleViewPdf}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full block text-center hover:bg-yellow-500 hover:text-white hover:font-semibold mb-10 mt-5 lg:w-2/4 lg:mx-auto"
        >
             View Our Audited Financial Statements 
        </button>)     

        </div>


        {user && user?.isAdmin ?  ( <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-center text-2xl font-bold mb-6">Upload New PDF</h2>
    <form onSubmit={handleUpload} className="space-y-4">
        <div>
            <label 
                htmlFor="pdf-upload" 
                className="block text-sm font-medium text-gray-700"
            >
                Choose PDF file
            </label>
            <input 
                id="pdf-upload"
                type="file" 
                accept=".pdf" 
                onChange={handleFileChange} 
                className="mt-2 block w-full text-sm text-gray-500 
                           file:border file:border-gray-300 
                           file:bg-gray-50 file:py-2 file:px-4 
                           file:text-sm file:font-semibold 
                           file:rounded-md file:cursor-pointer 
                           hover:file:bg-gray-100"
            />
        </div>
        <button 
            type="submit" 
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md 
                       hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 
                       focus:ring-opacity-50"
        >
            Upload PDF
        </button>

        {/* <div className="mt-5 lg:w-2/4 lg:mx-auto">
                    <p className="text-center font-bold">Latest PDF</p>
                    <a href={`http://localhost:5000/${latestPdf.filePath}`} target="_blank" rel="noopener noreferrer">
                        {latestPdf.originalName}
                    </a>
                </div> */}

    </form>
        </div>) : (<></>)}
    </div>
  )
}

export default AuditScreen