import axios from 'axios';
import React, {useState} from 'react'


const ImageComponent = ({ onImage}) => {
    const [image, setImage] = useState()
    const [sel, setSel] = useState("")

    const handleImageChange = async (event) => {
       setImage(event.target.files[0]);
        //console.log(event.target.files)
        //console.log(newImage)
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

    const handleImageUpload = () => {
      if (!image) { // Check if image is available before using it
        console.error('No image selected');
        return;
      }
    
      const formData = new FormData();
      formData.append("file", image);
      console.log(formData);
      setSel(formData);
      // onImage(formData); // Uncomment this line if you want to send the FormData to the server immediately
    };
    
  return (
    <div>
        {/* Image upload form */}
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  )
}

export default ImageComponent