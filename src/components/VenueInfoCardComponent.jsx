import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {FaMapLocation} from 'react-icons/fa6'
import {RxAvatar} from 'react-icons/rx'
import {FaDollarSign} from 'react-icons/fa'
import {BsFillCarFrontFill} from 'react-icons/bs'
import {FaRegThumbsUp} from 'react-icons/fa'
import {PiSealCheckFill} from 'react-icons/pi'
import { FaPencilAlt } from "react-icons/fa";

const VenueInfoCardComponent = () => {
    const [high, setHigh] = useState("HIGH QUALITY EVENT SPACES")
    const [ded, setDed] = useState("DEDICATED & PROFESSIONAL SERVICE")
    const [highly, setHighly] = useState("HIGHLY AFFORDABLE & COMPETITIVE PRICES")
    const [access, setAccess] = useState("ACCESSIBLE EVENT SPACE WITH GREAT PARKING")
    const [success, setSuccess] = useState("WE ARE HERE TO MAKE YOUR EVENT SUCCESSFUL")
    const [fac, setFac] = useState("GUARANTEED HIGH SECURITY & ADDED FACILITIES")
    const [textOne, setTextOne] = useState("We have crafted and designed an event space for your special event–Book now to enjoy services fit for royalty")
    const [textTwo, setTextTwo] = useState("Our professional & highly trained staff are ready to handle all your event needs. We also offer event planning services.")
    const [textThree, setTextThree] = useState("Book now & take the advantage of fair, affordable and highly competitive prices to host your special event today.")
    const [textFour, setTextFour] = useState("With ramp access & easily reached transportation routes, our event space is highly accessible with lots of parking to ensure that guests can easily locate and attend your event.")
    const [textFive, setTextFive] = useState("Our one universal goal is to ensure that everyone who attends your special event is able to have a fantastic time.")
    const [textSix, setTextSix] = useState("With State of the art surveillance & security personnel and a host of other facilities on site, you stand to get real value for your money when you host events at Noble Castle.")

    const [loading, setLoading] = useState(false)
    const [showForm, setShowForm] = useState(false);

    const handlehighChange = (e) => {
        setHigh(e.target.value);
    };

    const handleDedChange = (e) => {
        setDed(e.target.value);
    };

    const handlehighlyChange = (e) => {
        setHighly(e.target.value);
    };

    const handleAccessChange = (e) => {
        setAccess(e.target.value);
    };

    const handleSuccessChange = (e) => {
        setSuccess(e.target.value);
    };

    const handleFacChange = (e) => {
        setFac(e.target.value);
    };

    const handleTextOneChange = (e) => {
        setTextOne(e.target.value);
    };

    const handleTextTwoChange = (e) => {
        setTextTwo(e.target.value);
    };

    const handleTextThreeChange = (e) => {
        setTextThree(e.target.value);
    };

    const handleTextFourChange = (e) => {
        setTextFour(e.target.value);
    };

    const handleTextFiveChange = (e) => {
        setTextFive(e.target.value);
    };

    const handleTextSixChange = (e) => {
        setTextSix(e.target.value);
    };

    {/** Update Function */}
    const handleUpdateHigh = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/highText', { text: high });
            console.log(data)
            setHigh(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      const handleUpdateDed = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/dedText', { text: ded });
            console.log(data)
            setDed(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      const handleUpdatehighlyText = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/highlyText', { text: highly });
            console.log(data)
            setHighly(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      const handleUpdateAccess = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/accessText', { text: access });
            console.log(data)
            setAccess(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      const handleUpdateSuccess = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/successText', { text: success });
            console.log(data)
            setSuccess(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      const handleUpdateFac = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/facText', { text: fac });
            console.log(data)
            setSuccess(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };

      const handleUpdateTextOne = async() => {
        // Handle updating the text here, e.g., make an API request
        try {
            setLoading(true)
            const {data} = await axios.put('http://localhost:5000/api/text/oneText', { text: textOne });
            console.log(data)
            setTextOne(data.text)
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
            const {data} = await axios.put('http://localhost:5000/api/text/twoText', { text: textTwo });
            console.log(data)
            setTextTwo(data.text)
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
            const {data} = await axios.put('http://localhost:5000/api/text/threeText', { text: textThree });
            console.log(data)
            setTextThree(data.text)
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
            const {data} = await axios.put('http://localhost:5000/api/text/fourText', { text: textFour });
            console.log(data)
            setTextFour(data.text)
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
            const {data} = await axios.put('http://localhost:5000/api/text/fiveText', { text: textFive });
            console.log(data)
            setTextFive(data.text)
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
            const {data} = await axios.put('http://localhost:5000/api/text/sixText', { text: textSix });
            console.log(data)
            setTextSix(data.text)
            setLoading(false)
            setShowForm(false); // Hide the form after updating text
            
        } catch (error) {
            console.log(error)
        }
        
        
      };























  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            <div className="w-full shadow-lg  pt-8 px-8 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4 ">
                    <FaMapLocation size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-4">{high}</h1>
                    
                </div>
                <p className="font-medium">
                        {textOne}


                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4">
                    <RxAvatar size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-4">{ded}</h1>
                    
                </div>
                <p className="font-medium">
                {textTwo}                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4">
                    <FaDollarSign size={45} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3">
                    {highly}</h1>
                    
                </div>
                <p className="font-medium">
                    {textThree}                    </p>
            

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4 ">
                    <BsFillCarFrontFill size={50} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3">
                    {access}</h1>
                    
                </div>
                <p className="font-medium">
                    {textFour}
                    </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex justify-between items-center py-4">
                    <FaRegThumbsUp size={50} className='text-blue-900' />
                    <h1 className="font-bold text-lg pl-3">
                    {success}</h1>
                    
                </div>
                <p className="font-medium">
                    {textFive}                </p>

            </div>

            <div className="w-full shadow-lg  pt-8 px-4 pb-12 rounded-md mb-3">
                <div className="flex font-bold text-lg pl-3">
                    <PiSealCheckFill size={60} className='text-blue-900' />
                    <h1 className="ont-bold text-lg">
                        {fac}</h1>
                    
                </div>
                <p className="font-medium">
                {textSix}                </p>

            </div>
          

        </div>
        {/* edit button*/}
        <div className="flex items-center justify-center mb-16">
      <button onClick={() => setShowForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  items-center w-3/4 block"
      ><div className="flex items-center justify-center">
          <FaPencilAlt size={18}/><p className='text-center'>Edit This Section</p>
        </div></button>

    </div>

            {/* update form*/ }
            {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto"> {/* Increased width to 96 */}
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={high}
              onChange={handlehighChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateHigh}
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
              value={ded}
              onChange={handleDedChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateDed}
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
              value={highly}
              onChange={handlehighlyChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdatehighlyText}
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
              value={access}
              onChange={handleAccessChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateAccess}
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
              value={success}
              onChange={handleSuccessChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateSuccess}
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
              value={fac}
              onChange={handleFacChange}
              className="w-full h-36 mb-4 p-2 border border-gray-300 rounded" // Increased height to 36
            />
            <div className="flex justify-end">
              <button
                onClick={handleUpdateFac}
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

            <br></br>

           
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={textOne}
              onChange={handleTextOneChange}
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
            
             <br></br>

           
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
              value={textTwo}
              onChange={handleTextTwoChange}
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
            <br></br>

           
            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
            value={textThree}
            onChange={handleTextThreeChange}
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
            <br></br>

            <h2 className="text-lg font-semibold mb-4">Update Text</h2>
            <textarea
            value={textFour}
            onChange={handleTextFourChange}
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
            value={textFive}
            onChange={handleTextFiveChange}
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
            value={textSix}
            onChange={handleTextSixChange}
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



          </div>
        </div>
      )} 


    </div>
  )
}

export default VenueInfoCardComponent