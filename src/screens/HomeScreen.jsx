import React, { useState, useRef } from 'react'
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


const HomeScreen = () => {

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
              <p class="absolute top-20 left-28 bottom-4/5 transform  text-white text-3xl md:text-5xl font-semibold">Prof Rufus Oladipo Elemo Event Center</p>
              <p className="absolute  top-72 left-32 bottom-4/5 transform  text-white text-xl ">Our Vision is to be a hub of excellence, innovation, and cultural enrichment in the heart of Igbara -Oke</p>
            </div>
          </div>      

          <div className="relative bg-black">
            <img src={event} className='w-full h-screen' alt="" />
            <div class="absolute inset-0 bg-black opacity-70 ">
              <p class="absolute top-20 left-24 bottom-4/5 transform  text-white text-3xl md:text-5xl font-semibold">Prof Rufus Oladipo Elemo Event Center</p>
              <p className="absolute  top-72 left-32 bottom-4/5 transform  text-white text-xl font-semibold">We aspire to create an iconic, state-of-the-art event center that offers unforgettable experiences.</p>
            </div>
          </div>
        

        </Slider>
      </div>
    
    
      

      {/* <NavCom ponent />  */}

    {/* <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100vh"}} className={` mb-5 relative`}>
          <p className='uppercase text-4xl font-semibold md:text-5xl text-white absolute top-52 md:top-52 md:left-52 text-center'>Prof Rufus Oladipo Elemo Event Center</p>
    </div> */}

  
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