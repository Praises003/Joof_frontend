import React, {useState, useEffect} from 'react'
import axios from 'axios'
import noble from '../assets/eve.jpg'
import event from "../assets/bg_a.jpg"
import img from "../assets/bgg.jpg"
import ima from "../assets/ima.jpg"
import { MdChair } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa";
import VenueInfoCardComponent from './VenueInfoCardComponent'

const WelcomeComponent = () => {
    const [welcomeText, setWelcomeText] = useState(localStorage.getItem('welcomeText') || "Welcome To Prof Rufus")
    const [secText, setSecText] = useState(localStorage.getItem('secText') || "Oladipo Elemo Event Center")
    const [profText, setProfText] = useState(localStorage.getItem('profText') ||"At the Prof Rufus Elemo Multi-Purpose Event Centre, we are established to provide an event venue for various events and functions ranging from weddings, corporate functions, meetings, exhibition and so much more")
    const [prov, setProv] = useState(localStorage.getItem('prov') || "What we provide") 
    const [ded, setDed] = useState(localStorage.getItem('ded') || "DEDICATED & PROFESSIONAL SERVICE")
    const [highly, setHighly] = useState(localStorage.getItem('highly') ||"HIGHLY AFFORDABLE & COMPETITIVE PRICES")
    const [access, setAccess] = useState(localStorage.getItem('access')|| "ACCESSIBLE EVENT SPACE WITH GREAT PARKING")
    const [success, setSuccess] = useState(localStorage.getItem('success') ||"WE ARE HERE TO MAKE YOUR EVENT SUCCESSFUL")
    const [fac, setFac] = useState(localStorage.getItem('fac') || "GUARANTEED HIGH SECURITY & ADDED FACILITIES")
    const [textOne, setTextOne] = useState(localStorage.getItem('textOne') ||"We have crafted and designed an event space for your special event–Book now to enjoy services fit for royalty")
    const [textTwo, setTextTwo] = useState(localStorage.getItem('textTwo') || "Our professional & highly trained staff are ready to handle all your event needs. We also offer event planning services.")
    const [textThree, setTextThree] = useState(localStorage.getItem('textThree') || "Book now & take the advantage of fair, affordable and highly competitive prices to host your special event today.")
    const [textFour, setTextFour] = useState(localStorage.getItem('textFour') || "With ramp access & easily reached transportation routes, our event space is highly accessible with lots of parking to ensure that guests can easily locate and attend your event.")
    const [textFive, setTextFive] = useState(localStorage.getItem('textFive') || "Our one universal goal is to ensure that everyone who attends your special event is able to have a fantastic time.")
    const [textSix, setTextSix] = useState(localStorage.getItem('textSix') || "With State of the art surveillance & security personnel and a host of other facilities on site, you stand to get real value for your money when you host events at Noble Castle.")
    const [loading, setLoading] = useState(false)

    const [showForm, setShowForm] = useState(false);
    const [showImg, setShowImg] = useState(false);
    const [showSecImg, setShowSecImg] = useState(false);

    const [visit, setVisit] = useState(localStorage.getItem('visit') || "Visit Our Event Centre")

    const [rufus, setRufus] = useState(localStorage.getItem('rufus') || "Prof Rufus Oladipo Elemo Event Center")

    const[eventText, setEventText] = useState(localStorage.getItem('eventText') || "The Event Centre seats 100 banquet setting has event packages. This package includes:")

    const [banquet, setBanquet] = useState(localStorage.getItem('banquet') ||"Banquet tables & Chairs")

    const [room, setRoom] = useState(localStorage.getItem('room') || "Change Room")

    const [security, setSecurity] = useState(localStorage.getItem('security') || "Security Personnel")

    const [image, setImage] = useState("")
    const [sel, setSel] = useState(localStorage.getItem('welImg') ? JSON.parse(localStorage.getItem('welImg')) :  "")
    const [img, setImg] = useState(localStorage.getItem('secImg') ? JSON.parse(localStorage.getItem('secImg')) :  "")

    // Save updated visionText to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('welcomeText', welcomeText);
      }, [welcomeText]);

      useEffect(() => {
        localStorage.setItem('secText', secText);
      }, [secText]);

      useEffect(() => {
        localStorage.setItem('profText', profText);
      }, [profText]);

      useEffect(() => {
        localStorage.setItem('prov', prov);
      }, [prov]);

      useEffect(() => {
        localStorage.setItem('ded', ded);
      }, [ded]);

      useEffect(() => {
        localStorage.setItem('highly', highly)
      }, [highly]);

      useEffect(() => {
        localStorage.setItem('access', access);
      }, [access]);

      useEffect(() => {
        localStorage.setItem('success', success);
      }, [success]);

      useEffect(() => {
        localStorage.setItem('fac', fac);
      }, [fac]);

      useEffect(() => {
        localStorage.setItem('textOne', textOne);
      }, [textOne]);

      useEffect(() => {
        localStorage.setItem('textTwo', textTwo);
      }, [textTwo]);

      useEffect(() => {
        localStorage.setItem('textThree', textThree);
      }, [textThree]);

      useEffect(() => {
        localStorage.setItem('textFour', textFour);
      }, [textFour]);

      useEffect(() => {
        localStorage.setItem('textFive', textFive);
      }, [textFive]);

      useEffect(() => {
        localStorage.setItem('textSix', textSix);
      }, [textSix]);







    

    const handleWelTextChange = (e) => {
        setWelcomeText(e.target.value);
      };

    const handleSecTextChange = (e) => {
        setSecText(e.target.value);
      };

      const handleProfTextChange = (e) => {
        setProfText(e.target.value);
      };

    const handleVisitChange = (e) => {
        setVisit(e.target.value);
      };

    const handleRufusChange = (e) => {
        setRufus(e.target.value);
      };
    
      const handleEventTextChange = (e) => {
        setEventText(e.target.value);
      };

      const handleBanquetChange = (e) => {
        setBanquet(e.target.value);
      };

      const handleRoomChange = (e) => {
        setRoom(e.target.value);
      };

      const handleSecurityChange = (e) => {
        setSecurity(e.target.value);
      };

      


      const handleUpdateTextOne = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/welcomeText', { text: welcomeText });
            console.log(data)
            setWelcomeText(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
      };

      const handleUpdateTextTwo = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/secText', { text: secText });
            console.log(data)
            setSecText(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
      };

      const handleUpdateTextThree = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/ProfText', { text: profText });
            console.log(data)
            setWelcomeText(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };


      
      const handleUpdateTextFour = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/visitText', { text: visit });
            console.log(data)
            setVisit(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      
      const handleUpdateTextFive = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/rufusText', { text: rufus });
            console.log(data)
            setRufus(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      
      const handleUpdateTextSix = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/eventText', { text: eventText });
            console.log(data)
            setEventText(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      
      const handleUpdateTextSeven = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/banquetText', { text: banquet });
            console.log(data)
            setBanquet(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      
      const handleUpdateTextEight = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/roomText', { text: room });
            console.log(data)
            setRoom(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      
      const handleUpdateTextNine = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/securityText', { text: security });
            console.log(data)
            setSecurity(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      const handleImageChange =  (event) => {
        const newImage = event.target.files[0];
         //console.log(event.target.files)
         console.log(newImage)
         setImage(newImage)
          console.log(image)
       };

       const handleImageUpload = async() => {
        if (!image) { // Check if image is available before using it
          console.error('No image selected');
          return;
        }

       
      
        const formData = new FormData();
       
        formData.append("file", image);
       
        
        try {
          const {data} = await axios.post("http://localhost:5000/api/upload", formData)
        //setUploadPic(data)
        console.log(data)
        if (data) {
            localStorage.setItem('welImg', JSON.stringify(data?.savedImage?.singleImage?.url))
        }
        setSel(data?.savedImage?.singleImage?.url)
        setImage("")
        
        } catch (error) {
          console.error(error)
        }
      
       
               };

               const handleSecImageUpload = async() => {
                if (!image) { // Check if image is available before using it
                  console.error('No image selected');
                  return;
                }
        
               
              
                const formData = new FormData();
               
                formData.append("file", image);
               
                
                try {
                  const {data} = await axios.post("http://localhost:5000/api/upload", formData)
                //setUploadPic(data)
                console.log(data)
                if (data) {
                    localStorage.setItem('secImg', JSON.stringify(data?.savedImage?.singleImage?.url))
                }
                setImg(data?.savedImage?.singleImage?.url)
                setImage("")
                
                } catch (error) {
                  console.error(error)
                }
              
               
                       };
        
                        



  return (
    <div>
        <div className=" flex flex-col md:flex-row justify-between items-start px-4  md:px-6 md:py-16">
            <div className="">
                <img src={sel} className='w-11/12 md:w-3/4  bg-contain mb-10 md:mb-0  bg-no-repeat' alt="noble" />
            </div>
            <div className="w-full">
                <div className="w-1/5 bg-yellow-900 p-0.5 m-2"></div>
                <p className=" text-3xl md:text-4xl"> {welcomeText} </p>
                <p className="text-3xl md:text-3xl mb-6"> {secText} </p>

                <p className="text-lg mb-3"> {profText}</p>
                <div  className='w-2/5'><Link  className='bg-yellow-500 text-white font-semibold  p-4 rounded- rounded-3xl block text-center hover:bg-blue-500 hover:text-white hover:font-semibold mb-10'>Learn More</Link></div>
            </div>
        </div>

        
    <div className="flex items-center justify-around">

    <button onClick={() => setShowImg(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block"
      ><div className="flex items-center justify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit Image</p>
        </div></button>

      <button onClick={() => setShowForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 md:3/4 block"
      ><div className="flex items-center justify-center">
          <FaPencilAlt size={18} className='hidden md:block'/><p className='text-center '>Edit Welcome Section</p>
        </div></button>

        

    </div>

     {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={welcomeText}
              onChange={handleWelTextChange}
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
              value={secText}
              onChange={handleSecTextChange}
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
              value={profText}
              onChange={handleProfTextChange}
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


        
        <div className="pt-10">
            <p className="text-center md:text-4xl text-3xl font-semibold ">{prov}</p>
            <VenueInfoCardComponent />

        </div>

        <div className="bg-yellow-400 py-16 px-4 lg:px-8">
            <p className="text-center text-3xl md:text-4xl font-semibold">{visit}</p>
            <div className="bg-white p-0.5 m-6 w-2/4 md:w-1/6 mx-auto"></div>
            <div className="flex flex-col lg:flex-row justify-between bg-white shadow-md ">
                <div className="p-4">
                    <h1 className="mt-8 text-3xl font-semibold">{rufus}</h1>
                    <div className="bg-yellow-500 w-1/4 p-0.5 mt-6 mb-8"></div>
                    <p className='text-lg mb-7'>{eventText}</p>
                    
                    <div className="w-3/5 ">
                    <div className="flex justify-between items-center mb-5 md:mb-0">
                        <MdChair size={45} />
                        <p className='text-center text-medium font-semibold'>{banquet}</p>

                    </div>

                    <div className="flex  justify-between items-center mb-5">
                        <IoShirt size={45} />
                        <p className='text-center font-semibold'>{room}</p>

                    </div>

                    <div className="flex justify-between items-center mb-5">
                        <FaShieldAlt size={45} />
                        <p className='text-center font-semibold'>{security}</p>

                    </div>
                    <div className=''>
                        <Link  className='bg-yellow-400 text-white font-semibold  p-4 rounded- rounded-3xl block text-center hover:bg-blue-500 hover:text-white hover:font-semibold mb-10'>Learn More</Link>
                 </div>

                        
                    </div>

 
                </div>
                <div className="lg:w-11/12 ">
                  {console.log(img)}
                    <img src={img} className='s bg-cover bg-no-repeat' alt="" />
                    <button onClick={() => setShowSecImg(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-3/4 block mx-auto mt-3"
                ><div className="flex items-center justify-center">
                    <FaPencilAlt size={18}/><p className='text-center'>Edit Image</p>
                    </div></button>
                </div>

               
            </div>
            

             {/* <div>
                <Link  className='bg-blue-500 text-white font-semibold  p-4 rounded- rounded-3xl block text-center hover:bg-blue-500 hover:text-white hover:font-semibold mb-10'>Learn More</Link>
                </div> */}
        </div>

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
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={visit}
              onChange={handleVisitChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateTextFour}
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
              value={rufus}
              onChange={handleRufusChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateTextFive}
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
              value={eventText}
              onChange={handleEventTextChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateTextSix}
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
              value={banquet}
              onChange={handleBanquetChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateTextSeven}
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
              value={room}
              onChange={handleRoomChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateTextEight}
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
              value={security}
              onChange={handleSecurityChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateTextNine}
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
            

          </div>
        </div>
      )}

      {showImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <input type="file" onChange={handleImageChange} 
              className="w-full h-36 mb-4 p-2 border  rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={handleImageUpload}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update Image
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

    {/** another image section */}

    {showSecImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Image</h2>
            <input type="file" onChange={handleImageChange} 
              className="w-full h-36 mb-4 p-2 border  rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSecImageUpload}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update Image
              </button>
              <button
                onClick={() => setShowSecImg(false)}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
            </div>  
              
            </div>
    </div> )}
 

 


    </div>
  )
}

export default WelcomeComponent