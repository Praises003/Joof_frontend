import React, {useState} from 'react'
import noble from '../assets/eve.jpg'
import axios from "axios"
import Modal from '../utils/Modal'

const TestScreen = () => {
    const [image, setImage] = useState("")
    const [sel, setSel] = useState(localStorage.getItem('img') ? JSON.parse(localStorage.getItem('img')) :  "")
    const [ano, setAno] = useState(localStorage.getItem('ano') ? JSON.parse(localStorage.getItem('ano')) :  "")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showForm, setShowForm] = useState(false);
    const [files, setFiles] = useState([])
    const [imgs, setImgs] = useState(localStorage.getItem('multiImg') ? JSON.parse(localStorage.getItem('multiImg')) :  [])

    const handleModalToggle = () => {
      setIsModalOpen(!isModalOpen);
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
            localStorage.setItem('img', JSON.stringify(data?.savedImage?.singleImage?.url))
        }
        setSel(data?.savedImage?.singleImage?.url)
        setImage("")
        
        } catch (error) {
          console.error(error)
        }
      //   console.log(data)
        for(let [key, value] of  formData.entries()){
        console.log(key,value)
      }
       
          // Uncomment this line if you want to send the FormData to the server immediately
      };

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
      const prevImageURLs = JSON.parse(localStorage.getItem("multiImg")) || [];
            
            // Concatenate new image URLs with previous state
            const updatedImageURLs = [...prevImageURLs, ...imageURLs];

            // Save updated image URLs to localStorage
            localStorage.setItem("multiImg", JSON.stringify(updatedImageURLs));
            setImgs(updatedImageURLs)
            setFiles("")
    }
   
    
    } catch (error) {
      setFiles("")
      console.error(error)
    }
    }

      const handleAnoImageUpload = async() => {
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
            localStorage.setItem('ano', JSON.stringify(data?.savedImage?.singleImage?.url))
        }
        setAno(data?.savedImage?.singleImage?.url)
        setImage("")
        
        } catch (error) {
          console.error(error)
        }
      //   console.log(data)
        for(let [key, value] of  formData.entries()){
        console.log(key,value)
      }
       
          // Uncomment this line if you want to send the FormData to the server immediately
      };
      
  return (
    
    <div>
         <div className="">
                <img src={noble} className='w-11/12 md:w-3/4  bg-contain mb-10 md:mb-0  bg-no-repeat' alt="noble" />
            </div>
            <div>
        {/* Image upload form */}
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {console.log(sel)}
      <img src={sel} className='w-11/12 md:w-3/4  bg-contain mb-10 md:mb-0  bg-no-repeat' alt="noble" />
    {console.log(sel)}
    <button onClick={handleAnoImageUpload}>Upload Image</button>
    <img src={ano} className='w-11/12 md:w-3/4  bg-contain mb-10 md:mb-0  bg-no-repeat' alt="noble" />
    {console.log(ano)}
    <button onClick={handleModalToggle}>Open Modal</button>
    {/* Modal */}
    
    </div> 
    {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <input type="file" onChange={handleImageChange} 
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAnoImageUpload}
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
    </div> )}

    <button onClick={() => setShowForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block"
      ><div className="flex items-center justify-center">
          <p className='text-center'>Edit Banner</p>
        </div></button>

        <div>
            <form onSubmit={handleMulImg} >
                <input type="file" name="image" id="image" onChange={e => setFiles(e.target.files)} multiple />
                <button type='submit'>Send</button>
            </form>
        </div>
        {console.log(imgs)}
        <div className="">
          {imgs && imgs.map(imgg => (
            <img src={imgg} />
          ))}

        {imgs && imgs.map(imgg => (
            console.log(imgg)
          ))}
          
        </div>
  
  </div>
  )
}

export default TestScreen