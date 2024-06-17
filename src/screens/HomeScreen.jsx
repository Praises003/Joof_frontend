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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import ImageComponent from '../components/ImageComponent'
import ImageUpComponent from '../components/imageUpComponent'


import { Link } from 'react-router-dom'
import axios from 'axios'
import { TbRuler2Off } from 'react-icons/tb'


const HomeScreen = () => {
  const [visionText, setVisionText] = useState( "Our Vision is to be a hub of excellence, innovation, and cultural enrichment in the heart of Igbara -Oke");  
  const [missionText, setMissionText] = useState(  "We aspire to create an iconic, state-of-the-art event center that offers unforgettable experiences.")
  const [bannerText, setBannerText] = useState("Profuselemo Multi-Purpose Event Center")
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false)

  const [image, setImage] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [firstImg, setFirstImage]= useState("")
  const [secImg, setSecImg] = useState("")
  const [thirdImg, setThirdImg] = useState("")
  const [showImg, setShowImg] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
          console.log("Fetching images...");
          await getFirstImage();
          console.log("Images fetched successfully.");
      } catch (error) {
          console.error("Error fetching images:", error);
          // Handle error as needed
      }
  };

  

  fetchData();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
          console.log("Fetching images...");
          await getSecImage();
          console.log("Images fetched successfully.");
      } catch (error) {
          console.error("Error fetching images:", error);
          // Handle error as needed
      }
  };

  

  fetchData();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
          console.log("Fetching images...");
          await getThirdImage();
          console.log("Images fetched successfully.");
      } catch (error) {
          console.error("Error fetching images:", error);
          // Handle error as needed
      }
  };

  

  fetchData();
  }, [])




  const handleVTextChange = (e) => {
    setVisionText(e.target.value);
  };
  const handleMTextChange = (e) => {
    setMissionText(e.target.value);
  };

  const handleBTextChange = (e) => {
    setBannerText(e.target.value);
  };

  const handleSelectedImage = (img) => {
    setImage(img)
    // localStorage.setItem("image", JSON.stringify(img))
  }

  // Retrieving image data from localStorage
  // useEffect(() => {
  //   const storedImg = localStorage.getItem('image');
  //   if (storedImg) {
  //     const parsedImg = JSON.parse(storedImg);
  //     setImage(parsedImg);
  //   }
  // }, []);

  useEffect(() => {
    const fetchTextData = async () => {
      try {
      
        const { data } = await axios.get('http://localhost:5000/api/text', {withCredentials: true});
        setVisionText(data.visionText);
        setMissionText(data.missionText);
        setBannerText(data.bannerText);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTextData();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }


  const handleFirstImgUpload = async() => {
    if(!image) {
      console.error("No Image Selected")
      return;
    }

    const formData = new FormData()

    formData.append("file", image)

    try {
      const {data} = await axios.post("https://joof-backend.onrender.com/api/upload/imageIII", formData)

      console.log(data)
      await getFirstImage()
      setImage("")
    } catch (err) {
      console.error(err)

    }

  }

  const handleSecondImgUpload = async() => {
    if(!image) {
      console.error("No Image Selected")
      return;
    }

    const formData = new FormData()

    formData.append("file", image)

    try {
      const {data} = await axios.post("https://joof-backend.onrender.com/api/upload/imageIV", formData)

      console.log(data)
      await getSecImage()
      setImage("")
    } catch (err) {
      console.error(err)

    }

  }

  const handleThirdImgUpload = async() => {
    if(!image) {
      console.error("No Image Selected")
      return;
    }

    const formData = new FormData()

    formData.append("file", image)

    try {
      const {data} = await axios.post("https://joof-backend.onrender.com/api/upload/imageV", formData)

      console.log(data)
      await getThirdImage()
      setImage("")
    } catch (err) {
      console.error(err)

    }

  }

  const getFirstImage = async() => {
    try {
      const { data } = await axios.get("https://joof-backend.onrender.com/api/upload/imageIII")
      console.log(data)
      setFirstImage(data?.singleImage?.url)
    } catch (err) {
      console.error(err)

    }
  }

  const getSecImage = async() => {
    try {
      const { data } = await axios.get("https://joof-backend.onrender.com/api/upload/imageIV")
      setSecImg(data?.singleImage?.url)
    } catch (err) {
      console.error(err)

    }
  }

  const getThirdImage = async() => {
    try {
      const { data } = await axios.get("https://joof-backend.onrender.com/api/upload/imageV")
      setThirdImg(data?.singleImage?.url)
    } catch (err) {
      console.error(err)

    }
  }

  const handleUpdateText = async (type) => {
    try {
      setLoading(true);
      let updatedText;
      if (type === 'vision') {
        updatedText = await axios.put('http://localhost:5000/api/text/vision', { text: visionText });
        setVisionText(updatedText.data.visionText);
      } else if (type === 'mission') {
        updatedText = await axios.put('http://localhost:5000/api/text/mission', { text: missionText });
        setMissionText(updatedText.data.missionText);
      } else if (type === 'banner') {
        updatedText = await axios.put('http://localhost:5000/api/text/banner', { text: bannerText });
        setBannerText(updatedText.data.bannerText);
      }
      setLoading(false);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };
  
console.log(firstImg)
  

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
      <div className="">
        {/* <ImageUpComponent onImage={handleSelectedImage} images={image} />
        {console.log(image)}
       */}
      <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      
      spaceBetween={50}
      slidesPerView={1}
      
      autoplay
      navigation
      pagination={{ clickable: true }}
      
     
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
         <SwiperSlide>
    <div className="relative bg bg-opacity-90 mb-3">
      <img src={firstImg} className="w-full h-screen " alt="" />
      <div class="absolute inset-0 bg-black opacity-70">
              <p class="absolute top-20 left-32 bottom-4/5 transform  text-white text-3xl md:text-5xl font-semibold">{bannerText}</p>
              <p className="absolute  top-52 left-32 bottom-4/5 transform  text-white text-xl ">{visionText}</p>
            </div>
      
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="relative bg bg-opacity-90">
      <img src={secImg} className="w-full h-screen" alt="" />
 
            <div class="absolute inset-0 bg-black opacity-70 ">
              <p class="absolute top-20 left-32 bottom-4/5 transform  text-white text-3xl md:text-5xl font-semibold">{bannerText}</p>
              <p className="absolute  top- top-52 left-32 bottom-4/5 transform  text-white text-xl font-semibold">{missionText}</p>
            </div>
      
    </div>
  </SwiperSlide>
    </Swiper>
      </div>
      {/* <div className="w-full overflow-hidden">
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
      </div> */}
    
    
      

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
                onClick={() => handleUpdateText('vision')}
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
                oonClick={() => handleUpdateText('mission')}
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
                onClick={() => handleUpdateText('banner')}
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

      {/* Image Section **/}

      
      {showImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Change First Image</h2>
          
            <input type='file'
              onChange={handleImageChange} 
             
              className="w-full h-36 mb-4 p-2 " // Increased height to 36
            />
            <div className="flex justify-end">
              <button 
                onClick={handleFirstImgUpload}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowImg(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
           
            </div>

            <br></br>
            <br></br>

            <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Change Second Image</h2>
            
            <input type='file'
              onChange={handleImageChange} 
               
              className="w-full h-36 mb-4 p-2 " // Increased height to 36
            />
            <div className="flex justify-end">
              <button 
                onClick={handleSecondImgUpload}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowImg(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
        
            </div>
            <br></br>
            <br></br>

            <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Change Third Image</h2>
            
            <input type='file'
              onChange={handleImageChange} 
             
              className="w-full h-36 mb-4 p-2 " // Increased height to 36
            />
            <div className="flex justify-end">
              <button 
                onClick={handleThirdImgUpload}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowImg(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              
              
            </div>
            
            </div>


    </div> )}


    <div className="flex items-center justify-center">
      <button onClick={() => setShowForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block"
      ><div className="flex items-center justify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit Banner</p>
        </div></button>

        <button onClick={() => setShowImg(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block"
      ><div className="flex items-center justify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit Image</p>
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
          <img src={firstImg} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide><div className="">
          <img src={secImg} className="w-full" alt="" />
        </div></SwiperSlide>
      <SwiperSlide><div className="">
          <img src={thirdImg} className="w-full" alt="" />
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