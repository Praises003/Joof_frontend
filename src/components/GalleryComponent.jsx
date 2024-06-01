import React from 'react'
import axios from 'axios'
import birthday from '../assets/conference.jpg'
import fundraising from '../assets/fundraising.jpg'
import graduation from '../assets/graduation.jpg'
import meeting from '../assets/meeting.jpg'
import event from '../assets/event2.jpeg'
import eventImg from "../assets/ev bg.jpg"
import wedding from "../assets/wedding_pic.jpg"
import seminar from "../assets/seminar.jpg"
import exhibition from "../assets/Exhibition.jpg"

import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery'
import GridGalleryComponent from './GridGalleryComponent'
import {FaTimes} from 'react-icons/fa'
import { FaPencilAlt } from "react-icons/fa";
import { useState } from 'react'
//import { isMoment } from 'moment'

const GalleryComponent = () => {
    const [view, setView] = useState(false)
    const [showForm, setShowForm] = useState(false);
    const [files, setFiles] = useState([])
    const [imgs, setImgs] = useState(localStorage.getItem('multiImg') ? JSON.parse(localStorage.getItem('multiImg')) :  [])

    const images = [
        {
            original: seminar,
            thumbnail: seminar,
            
        },
        {
            original: birthday,
            thumbnail: birthday,
            
        },
        {
            original: event,
            thumbnail: event,
            
        },
        {
            original: eventImg,
            thumbnail: eventImg,
            
        },
        {
            original: exhibition,
            thumbnail: exhibition,
            
        },
        {
            original: graduation,
            thumbnail: graduation,
            
        },
        {
            original: fundraising,
            thumbnail: fundraising ,
                     
        },
        {
            original: meeting,
            thumbnail: meeting,
            
        },
        {
            original: wedding,
            thumbnail: wedding,
            
        }
    ]
    console.log(view)
    console.log(imgs)
    const handleMulImg = async (e) => {
        e.preventDefault()
        
  
        if (!files) { // Check if image is available before using it
          console.error('No image selected');
          return;
        }
  
  
        const formData = new FormData();
  
        [...files].forEach((file) => {
          /* Here we give the form name 'image'. this same name in the
             upload.array('image') middleware
          */
          formData.append('photos', file);
      })
        //   files.forEach((file) => {
        //    formData.append('photos', file);
        // });
  
  
      try {
        const {data} = await axios.post("http://localhost:5000/api/upload/multi", formData)
      //setUploadPic(data)
      const imageURLs = data.filePaths.multipleImages.map(img => img.url);
      console.log(data.filePaths.multipleImages.map(img => img.url))
       if (data) {
         localStorage.setItem("multiImg", JSON.stringify(imageURLs))
      }
      setImgs(imageURLs)
      setFiles("")
      
      } catch (error) {
        console.error(error)
      }
      }
  return (
    <div className='mb-4'>
        <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "45vh"}} className={` mb-6`}>
          <p className='uppercase text-4xl md:text-5xl font-bold  text-white text-center pt-20 md:pt-40 '>Gallery</p>

          
        </div>

        {/* <GridGalleryComponent images={images} /> */}
        {/* <ImageGallery items={images} /> */}
        {!view ? (<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((image, index) => (
        <div className="">
            <img
          key={index}
          src={image}
          alt={image}
          onClick={() => {setView(!view)}}
          
        />


        </div>
        
      ))}


      
      </div>) : (<div>
        {/** close slide show button */}
        <button onClick={() => setView(!view)} className='bg-gray-200 flex items-center m-3 sticky top-20 z-30'>
            <FaTimes size={20} color='red'/>
            <p>End Gallery Display</p>
        </button>
       <div className='lg:bg-gray-900 lg:p-6'> <ImageGallery items={images}  /> </div>

      </div>)}
      <div className="flex items-center justify-center mt-2.5">
                <button onClick={() => setShowForm(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-3/4 block"
                ><div className="flex items-center justify-center">
                    <FaPencilAlt size={18}/><p className='text-center'>Edit Event Center Section</p>
                    </div></button>

            </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Change Image</h2>
            <form onSubmit={handleMulImg}>
            <input type='file'
              onChange={e => setFiles(e.target.files)} 
              multiple 
              className="w-full h-36 mb-4 p-2 " // Increased height to 36
            />
            <div className="flex justify-end">
              <button 
                type='submit'
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
            </form>
            </div>
    </div> )}
    </div>
  )
}

export default GalleryComponent