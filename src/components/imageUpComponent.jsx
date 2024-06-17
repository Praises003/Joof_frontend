import axios from 'axios';
import React, {useState, useEffect} from 'react'


const ImageUpComponent = ({ onImage, images}) => {
    const [image, setImage] = useState("")
    const [sel, setSel] = useState("")
     console.log(images)

    // useEffect(() => {
    //     console.log('Image state updated:', image);
    //   }, [image]); // This effect runs every time the 'image' state changes
    

    const handleImageChange =  (event) => {
       const newImage = event.target.files[0];
        //console.log(event.target.files)
        console.log(newImage)
        setImage(newImage)
         console.log(image)
      };

      console.log(image)

      

    //   const handleImageUpload = () => {
        
    //     if (!image) { // Check if image is available before using it
    //       console.error('No image selected');
    //       return;
    //     }
    //     const formData = new FormData();
        
    //    formData.append("file", image ? image : console.log("no image") )
     
    //     //(formData !== '{}') ? console.log(formData ) : console.log("empty")
    //     //const {data} =  await axios.post("http://localhost:5000/api/upload")
    //     console.log(formData)
    //     setSel(formData)
    //     //onImage(data)
    // }

    const handleImageUpload = async() => {
      if (!image) { // Check if image is available before using it
        console.error('No image selected');
        return;
      }
    
      const formData = new FormData();
     
      formData.append("file", image);
      console.log(formData);
      
      try {
        const {data} = await axios.post("https://joof-backend.onrender.com/api/upload", formData)
      //setUploadPic(data)
      console.log(data)
      localStorage.setItem("image", JSON.stringify(data?.savedImage?.singleImage?.url))
      onImage(data?.savedImage?.singleImage?.url);
      } catch (error) {
        console.error(error)
      }
    //   console.log(data)
      for(let [key, value] of  formData.entries()){
      console.log(key,value)
    }
      setSel(formData);
        // Uncomment this line if you want to send the FormData to the server immediately
    };
    
  return (
    <div>
        {/* Image upload form */}
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>

      <div className="">
        {console.log(images)}
        <img src={""} alt="" srcset="" />g
      </div>
    </div>
  )
}

export default ImageUpComponent