import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPencilAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';

const VideoUploadComponent = () => {
    const [file, setFile] = useState(null);
    const [uploadedVideo, setUploadedVideo] = useState(null);
    const [showVideo, setShowVideo] = useState(false);
    const { user } = useSelector(state => state.user)

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                await getVideo();
            } catch (error) {
                console.error(error)
                
            }
        }

        fetchVideo();
    },[])

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            if(!file){
                console.error("No File Selected")
                return;

        }
          const formData = new FormData();
          formData.append('video', file);
    
          const {data} = await axios.post('https://joof-backend.onrender.com/api/video', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
    
          console.log('Upload successful:', data);
          await getVideo()
          setFile(null);
          
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

      const getVideo = async() => {
        try {
            const { data } = await axios.get('https://joof-backend.onrender.com/api/video')
            console.log(data)
            setUploadedVideo(data)

        } catch (err) {
            console.error(err)
        }
      }
  return (
    <div>

        {uploadedVideo && (
                <div className='mb-5 mt-2'>
                <video width="600" controls>
                    <source src={uploadedVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            )}

            {/** Edit Button */}
            
   { user && user?.isAdmin ?   (<div className="flex items-center justify-center">
     { (<button onClick={() => setShowVideo(true)}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-1/4 block `}     >
          <div className="flex items-centerjustify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit Video</p>
        </div></button>) }


    </div>) : (<></>)}
        {/** Edit Video Form */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Edit Video</h2>
          
            <input type='file'
              onChange={handleFileChange} 
             
              className="w-full h-36 mb-4 p-2 " // Increased height to 36
            />
            <div className="flex justify-end">
              <button 
                onClick={handleUpload}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={() => setShowVideo(false)}
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

export default VideoUploadComponent