import React, { useState, useRef, useEffect } from 'react'
import eventImg from "../assets/event3.jpg"
import event from "../assets/event2.jpeg"
import seminar from "../assets/seminar.jpg"
import meeting from "../assets/meeting.jpg"
import exhibition from "../assets/fundraising.jpg"
import NavComponent from '../components/NavComponent'
import FaqComponent from '../components/FaqComponent'
import AboutComponent from '../components/AboutComponent'
import VenueComponent from '../components/VenueComponent'
import ContactComponent from '../components/ContactComponent'
import VenueInfoCardComponent from '../components/VenueInfoCardComponent'
import WelcomeComponent from '../components/WelcomeComponent'
import { FaPencilAlt } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom'
import axios from 'axios'


const HomeScreen = () => {
  const [visionText, setVisionText] = useState(localStorage.getItem('visionText') || "Our Vision is to be a hub of excellence, innovation, and cultural enrichment in the heart of Igbara -Oke");  
  const [missionText, setMissionText] = useState(localStorage.getItem('missionText') || "We aspire to create an iconic, state-of-the-art event center that offers unforgettable experiences.")
  const [bannerText, setBannerText] = useState(localStorage.getItem('bannerText') ||"Profuselemo Multi-Purpose Event Center")
  const [showForm, setShowForm] = useState(false);

  // Save updated visionText to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('visionText', visionText);
  }, [visionText]);

  useEffect(() => {
    localStorage.setItem('missionText', missionText);
  }, [missionText]);

  useEffect(() => {
    localStorage.setItem('bannerText', bannerText);
  }, [bannerText]);




  const handleVTextChange = (e) => {
    setVisionText(e.target.value);
  };
  const handleMTextChange = (e) => {
    setMissionText(e.target.value);
  };

  const handleBTextChange = (e) => {
    setBannerText(e.target.value);
  };

  const handleUpdateTextOne = async() => {
    // Handle updating the text here, e.g., make an API request
    const {data} = await axios.put('http://localhost:5000/api/text', { text: visionText });
    console.log(data)
    setVisionText(data.text)
    setShowForm(false); // Hide the form after updating text
  };

  const handleUpdateTextTwo = async() => {
    // Handle updating the text here, e.g., make an API request
    const {data} = await axios.put('http://localhost:5000/api/text/edittwo', { text: missionText });
    console.log(data)
    setMissionText(data.text)
    setShowForm(false); // Hide the form after updating text
  };

  const handleUpdateTextThree = async() => {
    // Handle updating the text here, e.g., make an API request
    const {data} = await axios.put('http://localhost:5000/api/text/edittwo', { text: bannerText });
    console.log(data)
    setBannerText(data.text)
    setShowForm(false); // Hide the form after updating text
  };

  

  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [delay, setDelay] = useState(3000); // Delay in milliseconds
  const sliderRef = useRef(null); // Reference to the Slider instance

  const handleBeforeChange = (oldIndex, newIndex) => {
    if (newIndex === 1) { // Check if transitioning to the second slide
      setTimeout(() => {
        sliderRef.current.slickNext(); // Transition back to the first slide after the delay
      }, delay);
      return false; // Prevent the default slide transition
    }
    return true; // Allow the default slide transition for other slides
  };

  // const setting = {
  //   className: "slider variable-width",
  //   dots: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   variableWidth: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  return (
    <section className="">
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          

          <div className="relative bg bg-opacity-90">
            <img src={eventImg} className='w-full h-screen' alt="" />
            <div class="absolute inset-0 bg-black opacity-70">
              <p class="absolute top-20 left-32 bottom-4/5 transform  text-white text-3xl md:text-5xl font-semibold">{bannerText}</p>
              <p className="absolute  top-52 left-32 bottom-4/5 transform  text-white text-xl ">{visionText}</p>
            </div>
          </div>      

          <div className="relative bg-black">
            <img src={event} className='w-full h-screen' alt="" />
            <div class="absolute inset-0 bg-black opacity-70 ">
              <p class="absolute top-20 left-32 bottom-4/5 transform  text-white text-3xl md:text-5xl font-semibold">{bannerText}</p>
              <p className="absolute  top- top-52 left-32 bottom-4/5 transform  text-white text-xl font-semibold">{missionText}</p>
            </div>
          </div>
        

        </Slider>
      </div>
    
    
      

      {/* <NavCom ponent />  */}

    {/* <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100vh"}} className={` mb-5 relative`}>
          <p className='uppercase text-4xl font-semibold md:text-5xl text-white absolute top-52 md:top-52 md:left-52 text-center'>Prof Rufus Oladipo Elemo Event Center</p>
    </div> */}

{showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={visionText}
              onChange={handleVTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateTextOne}
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
            <br></br>
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={missionText}
              onChange={handleMTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateTextTwo}
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
            <br></br>
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={bannerText}
              onChange={handleBTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateTextThree}
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
          </div>
        </div>
      )}

    <div className="flex items-center justify-center">
      <button onClick={() => setShowForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block"
      ><div className="flex items center justify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit Banner</p>
        </div></button>

    </div>
  
    <WelcomeComponent />
    
    <div className="">
      <p className='text-3xl font-bold text-center mt-20 md:text-4xl uppercase'>OUR GALLERY</p>
    </div>
    {/* <VenueInfoCardComponent /> */}

    <div className="">
      <div className="w-1/6 my-8 bg-yellow-900 p-0.5 mx-auto"></div>
      <div className="flex justify-between md:items-center  p-2">
        <p className="text-2xl font-semibold">Photo Gallery Of Our Events</p>
        <Link to={"/gallery"} className='bg-yellow-500 text-white font-semibold  px-4 py-2 rounded- rounded-3xl block text-center hover:bg-blue-500 hover:text-white hover:font-semibold mb-10'>View Our Gallery</Link>

      </div>
      

      {/* <div style={{}} className=" overflow-hidden">
        <Slider {...setting}>
        <div className="w-full">
          <img src={event} className="w-full" alt="" />
        </div>
        <div className="slide-item">
          <img src={eventImg} className="w-full" alt="" />
        </div>
        <div className="slide-item">
          <img src={meeting} className="w-full" alt="" />
        </div>
        <div className="slide-item">
          <img src={seminar} className="w-full" alt="" />
        </div>
        <div className="slide-item">
          <img src={exhibition} className="w-full" alt="" />
        </div>



        
        </Slider>
      </div> */}
      <div className="w-full ">
        <div className="hidden md:block">
      <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      
      spaceBetween={50}
      slidesPerView={3}
      
      autoplay
      navigation
      pagination={{ clickable: true }}
      
     
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className=" w-full">
          <img src={event} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide><div className="">
          <img src={eventImg} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide><div className="">
          <img src={meeting} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide><div className="">
          <img src={seminar} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide>
        <div className="">
          <img src={exhibition} className="w-full" alt="" />
        </div>

      </SwiperSlide>
      ...
    </Swiper>
    </div>

    <div className="md:hidden"> 
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar]}
      
      spaceBetween={50}
      slidesPerView={1}
      
      autoplay={{delay: 2000}}
      navigation
      pagination={{ clickable: true }}
      
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className=" w-full">
      <img src={event} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide><div className="">
      <img src={eventImg} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide><div className="">
      <img src={meeting} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide><div className="">
      <img src={seminar} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide>
        <div className="">
        <img src={exhibition} className="w-full" alt="" />
        </div>

      </SwiperSlide>
    
    </Swiper>
    </div>
      </div>
      
    </div>
    
    <FaqComponent />

    
    </section>
    
    
  )
}

export default HomeScreen