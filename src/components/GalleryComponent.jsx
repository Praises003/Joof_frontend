import React from 'react'
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
import { useState } from 'react'

const GalleryComponent = () => {
    const [view, setView] = useState(false)
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
  return (
    <div className='mb-4'>
        <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "45vh"}} className={` mb-6`}>
          <p className='uppercase text-4xl md:text-5xl font-bold  text-white text-center pt-20 md:pt-40 '>Gallery</p>

          
        </div>

        {/* <GridGalleryComponent images={images} /> */}
        {/* <ImageGallery items={images} /> */}
        {!view ? (<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
        <div className="">
            <img
          key={images.id}
          src={image.original}
          alt={image.alt}
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
      
    </div>
  )
}

export default GalleryComponent