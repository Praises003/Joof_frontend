import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    const [welcomeText, setWelcomeText] = useState( "Welcome To Prof Rufus")
    const [secText, setSecText] = useState( "Oladipo Elemo Event Center")
    const [profText, setProfText] = useState("At the Prof Rufus Elemo Multi-Purpose Event Centre, we are established to provide an event venue for various events and functions ranging from weddings, corporate functions, meetings, exhibition and so much more")
    const [prov, setProv] = useState( "What we provide") 
    const [ded, setDed] = useState( "DEDICATED & PROFESSIONAL SERVICE")
    const [highly, setHighly] = useState("HIGHLY AFFORDABLE & COMPETITIVE PRICES")
    const [access, setAccess] = useState("ACCESSIBLE EVENT SPACE WITH GREAT PARKING")
    const [success, setSuccess] = useState("WE ARE HERE TO MAKE YOUR EVENT SUCCESSFUL")
    const [fac, setFac] = useState("GUARANTEED HIGH SECURITY & ADDED FACILITIES")
    const [textOne, setTextOne] = useState("We have crafted and designed an event space for your special event–Book now to enjoy services fit for royalty")
    const [textTwo, setTextTwo] = useState("Our professional & highly trained staff are ready to handle all your event needs. We also offer event planning services.")
    const [textThree, setTextThree] = useState( "Book now & take the advantage of fair, affordable and highly competitive prices to host your special event today.")
    const [textFour, setTextFour] = useState("With ramp access & easily reached transportation routes, our event space is highly accessible with lots of parking to ensure that guests can easily locate and attend your event.")
    const [textFive, setTextFive] = useState( "Our one universal goal is to ensure that everyone who attends your special event is able to have a fantastic time.")
    const [textSix, setTextSix] = useState("With State of the art surveillance & security personnel and a host of other facilities on site, you stand to get real value for your money when you host events at Noble Castle.")
    const [loading, setLoading] = useState(false)

    const [showForm, setShowForm] = useState(false);
    const [showAno, setShowAno] = useState(false)
    const [showImg, setShowImg] = useState(false);
    const [showSecImg, setShowSecImg] = useState(false);

    const [visit, setVisit] = useState("Visit Our Event Centre")

    const [rufus, setRufus] = useState( "Prof Rufus Oladipo Elemo Event Center")

    const[eventText, setEventText] = useState("The Event Centre seats 100 banquet setting has event packages. This package includes:")

    const [banquet, setBanquet] = useState("Banquet tables & Chairs")

    const [room, setRoom] = useState( "Change Room")

    const [security, setSecurity] = useState( "Security Personnel")

    const [image, setImage] = useState("")
    const [sel, setSel] = useState("")
    const [img, setImg] = useState("")
    const [files, setFiles] = useState([])
    const [imgs, setImgs] = useState(localStorage.getItem('multiImg') ? JSON.parse(localStorage.getItem('multiImg')) :  [])

    const { user } = useSelector(state => state.user)

    // Save updated visionText to localStorage whenever it changes
    

      useEffect(() => {
        getImage()
      },[sel])

      useEffect(() => {
        getSecImage()
      },[img])



  useEffect(() => {
    const fetchTextData = async () => {
      try {
        const { data } = await axios.get('https://joof-backend.onrender.com/api/texts');
        setWelcomeText(data.welcomeText);
        setSecText(data.secText);
        setProfText(data.profText);
        setProv(data.prov)
        setDed(data.ded)
        setHighly(data.highly)
        setAccess(data.access)
        setSuccess(data.success)
        setFac(data.fac)
        setTextOne(data.textOne)
        setTextTwo(data.textTwo)
        setTextThree(data.textThree)
        setTextFour(data.textFour)
        setTextFive(data.textFive)
        setTextSix(data.textSix)

      } catch (error) {
        console.log(error);
      }
    };
    fetchTextData();
  }, []);








    

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



      const handleUpdateText = async (type) => {
        try {
          setLoading(true);
          let updatedText;
          if (type === 'welcome') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/welcome', { text: welcomeText });
            setVisionText(updatedText.data.welcomeText);
          } else if (type === 'sec') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/secText', { text: secText });
            setSecText(updatedText.data.secText);
          } else if (type === 'prof') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/profText', { text: profText });
            setProfText(updatedText.data.profText);
          } else if (type === 'prov') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/prov', { text: prov });
            setProv(updatedText.data.prov);
          } else if (type === 'ded') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/ded', { text: ded });
            setDed(updatedText.data.ded);
          } else if (type === 'highly') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/highly', { text: highly });
            setHighly(updatedText.data.highly);
          } else if (type === 'access') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/access', { text: access });
            setAccess(updatedText.data.access);
          } else if (type === 'success') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/success', { text: success });
           setSuccess(updatedText.data.success);
          } else if (type === 'fac') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/fac', { text: fac });
            setFac(updatedText.data.fac);
          } else if (type === 'textOne') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textOne', { text: textOne });
            setTextOne(updatedText.data.textOne);
          } else if (type === 'textTwo') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textTwo', { text: textTwo });
            setTextTwo(updatedText.data.textTwo);
          } else if (type === 'textThree') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textThree', { text: textThree });
            setTextThree(updatedText.data.textThree);
          } else if (type === 'textFour') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textFour', { text: textFour });
            setTextFour(updatedText.data.textFour);
          } else if (type === 'textFive') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textFive', { text: textFive });
            setTextFive(updatedText.data.textFive);
          } else if (type === 'textSix') {
            updatedText = await axios.put('https://joof-backend.onrender.com/api/texts/textSix', { text: textSix });
            setTextSix(updatedText.data.textSix);
          }
          setLoading(false);
          setShowForm(false);
        } catch (error) {
          console.log(error);
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
          const {data} = await axios.post("https://joof-backend.onrender.com/api/upload", formData)
        //setUploadPic(data)
        console.log(data)
        await getImage()
        //  if (data) {
        //     localStorage.setItem('welImg', JSON.stringify(data?.savedImage?.singleImage?.url))
        // }
        //setSel(data?.savedImage?.singleImage?.url)
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
                  const {data} = await axios.post("https://joof-backend.onrender.com/api/upload/imageI", formData)
                //setUploadPic(data)
                console.log(data)
                await getSecImage()
                // if (data) {
                //     localStorage.setItem('secImg', JSON.stringify(data?.savedImage?.singleImage?.url))
                // }
                // setImg(data?.savedImage?.singleImage?.url)
                setImage("")
                
                } catch (error) {
                  console.error(error)
                }
              
               
                       };
          
          
            const getImage = async() => {
              try {
                setLoading(true);
                const { data } = await axios.get("https://joof-backend.onrender.com/api/upload");
                console.log(data)
                setSel(data?.singleImage?.url)
                 
                setLoading(false);
              } catch (error) {
                console.error(error);
                setLoading(false);
              }

            }

            const getSecImage = async() => {
              try {
                setLoading(true);
                const { data } = await axios.get("https://joof-backend.onrender.com/api/upload/imageI");
                console.log(data)
                setImg(data?.singleImage?.url)
                 
                setLoading(false);
              } catch (error) {
                console.error(error);
                setLoading(false);
              }

            }
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
        formData.append('file', file);
    })
      //   files.forEach((file) => {
      //    formData.append('photos', file);
      // });


    try {
      const {data} = await axios.post("https://joof-backend.onrender.com/api/upload/multi", formData)
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

    {user?.isAdmin && <button onClick={() => setShowImg(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block"
      ><div className="flex items-center justify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit Image</p>
        </div></button>}

      {user && user?.isAdmin ? (<button onClick={() => setShowForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 md:3/4 block"
      ><div className="flex items-center justify-center">
          <FaPencilAlt size={18} className='hidden md:block'/><p className='text-center '>Edit Welcome Section</p>
        </div></button>) : (<div></div>)}

        

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
                onClick={() => handleUpdateText('welcome')}
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
                onClick={() => handleUpdateText('sec')}
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
                onClick={() => handleUpdateText('prof')}
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
                   {user && user.isAdmin ? (<button onClick={() => setShowSecImg(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-3/4 block mx-auto mt-3"
                ><div className="flex items-center justify-center">
                    <FaPencilAlt size={18}/><p className='text-center'>Edit Image</p>
                    </div></button>) : (<div></div>)}
                </div>

               
            </div>
            

             {/* <div>
                <Link  className='bg-blue-500 text-white font-semibold  p-4 rounded- rounded-3xl block text-center hover:bg-blue-500 hover:text-white hover:font-semibold mb-10'>Learn More</Link>
                </div> */}
        </div>

        <div className="flex items-center justify-center mt-2.5">
                {user && user.isAdmin ?  (<button onClick={() => setShowAno(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-3/4 block"
                ><div className="flex items-center justify-center">
                    <FaPencilAlt size={18}/><p className='text-center'>Edit Event Center Section</p>
                    </div></button>) : (<div></div>)}

            </div>

        {showAno && (
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
                onClick={() => handleUpdateText('')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowAno(false)}
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
                onClick={() => handleUpdateText('textFive')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowAno(false)}
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
               onClick={() => handleUpdateText('textSix')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowAno(false)}
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
                onClick={() => {}}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowAno(false)}
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
                onClick={() => {}}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowAno(false)}
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
                onClick={() => {}}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowAno(false)}
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
           { user.isAdmin && <div className="flex justify-end">
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
            </div>}  
              
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