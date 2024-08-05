import React, { useState, useEffect } from 'react';
import axios from 'axios';
import eventImg from '../assets/joof.jpg';
import { FaLightbulb } from "react-icons/fa6";
import { GiTiedScroll, GiDrum } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { PiSealCheckFill } from 'react-icons/pi';

const CorporateScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentTextType, setCurrentTextType] = useState('');

    const [loading, setLoading] = useState(false)
  
    // Fetch corporate data
    const [corporateData, setCorporateData] = useState({});
 // Fetch corporate data
 const fetchCorporateData = async () => {
    try {
        setLoading(true);
        const response = await axios.get('https://joof-backend.onrender.com/api/corporate');
        setCorporateData(response.data);
    } catch (error) {
        console.error('Error fetching corporate data:', error);
    } finally {
        setLoading(false);
    }
};

useEffect(() => {
    fetchCorporateData();
}, []);
    const openModal = (type) => {
      setCurrentTextType(type);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

 
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('${eventImg}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "80vh",
        }}
        className="mb-5 relative"
      >
        <p className='uppercase text-4xl font-semibold left-60 md:text-5xl text-white absolute top-52 md:top-52 md:left-96 right-64 text-center'> CORPORATE </p>
      </div>

      <div className="">
        <p className="text-2xl md:text-3xl font-bold text-center">{corporateData.visionText}</p>
        <button onClick={() => openModal('visionText')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block mx-auto">Edit</button>
        <div className="flex flex-col md:flex-row justify-between p-4">
          <div className="w-full">
            <img src={corporateData.visionImage} alt="Vision" className='w-full md:w-10/12 bg-no-repeat bg-cover mx-auto' />
          </div>
          <div className="w-full p-2">
            <p className="text font-semibold">
              {corporateData.visionDes}
            </p>
            <button onClick={() => openModal('visionDes')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4">Edit</button>

          </div>
        </div>
        

        <div className="">
        <p className="text-2xl md:text-3xl font-bold text-center">{corporateData.mission}</p>
        <button onClick={() => openModal('mission')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block mx-auto">Edit</button>
          <div className="flex flex-col md:flex-row justify-between p-4">
            <div className="w-full">
              <img src={corporateData.missionImage} alt="Mission" className='w-full md:w-10/12 bg-no-repeat bg-cover mx-auto' />
            </div>
            <div className="w-full p-2">
              <p className="text-base font-semibold">
                {corporateData.missionDes}
              </p>
              <button onClick={() => openModal('missionDes')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
            </div>
          </div>
          
        </div>

        <div className="">
          <p className="text-2xl md:text-3xl font-bold text-center">{corporateData.value}</p>
          <button onClick={() => openModal('value')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block mx-auto">Edit</button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            <div className="w-full shadow-lg pt-8 px-8 pb-12 rounded-md mb-3">
              <div className="flex items-center py-4">
                <FaLightbulb size={45} className='text-blue-900' />
                <h1 className="font-bold text-lg pl-4">{corporateData?.community}</h1>
                <button onClick={() => openModal('community')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
              </div>

              <p className="font-medium">
                {corporateData.communityText}
              </p>
              <button onClick={() => openModal('communityText')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
            </div>
            <div className="w-full shadow-lg pt-8 px-4 pb-12 rounded-md mb-3">
              <div className="flex items-center py-4">
                <GiTiedScroll size={45} className='text-blue-900' />
                <h1 className="font-bold text-lg pl-4">EXCELLENCE</h1>
                <button onClick={() => openModal('excellence')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
              </div>
              <p className="font-medium">
                {corporateData.excellenceText}
              </p>
              <button onClick={() => openModal('excellenceText')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
            </div>
            <div className="w-full shadow-lg pt-8 px-4 pb-12 rounded-md mb-3">
              <div className="flex items-center py-4">
                <FaLightbulb size={45} className='text-blue-900' />
                <h1 className="font-bold text-lg pl-3">INNOVATION</h1>
                <button onClick={() => openModal('innovation')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
              </div>
              <p className="font-medium">
                {corporateData.innovationText}
              </p>
              <button onClick={() => openModal('innovationText')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
            </div>
            <div className="w-full shadow-lg pt-8 px-4 pb-12 rounded-md mb-3">
              <div className="flex items-center py-4">
                <GiDrum size={45} className='text-blue-900' />
                <h1 className="font-bold text-lg pl-3">Cultural Enrichment</h1>
                <button onClick={() => openModal('culture')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
              </div>
              <p className="font-medium">
                {corporateData.cultureText}
              </p>
              <button onClick={() => openModal('cultureText')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
            </div>
            <div className="w-full shadow-lg pt-8 px-4 pb-12 rounded-md mb-3">
              <div className="flex items-center py-4">
                <MdOutlineCastForEducation size={45} className='text-blue-900' />
                <h1 className="font-bold text-lg pl-3">EDUCATION</h1>
                <button onClick={() => openModal('education')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
              </div>
              <p className="font-medium">
                {corporateData.educationText}
              </p>
              <button onClick={() => openModal('educationText')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
            </div>
            <div className="w-full shadow-lg pt-8 px-4 pb-12 rounded-md mb-3">
              <div className="flex items-center py-4">
                <PiSealCheckFill size={45} className='text-blue-900' />
                <h1 className="font-bold text-lg pl-3">COLLABORATION</h1>
                <button onClick={() => openModal('collaboration')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
              </div>
              <p className="font-medium">
                {corporateData.collaborationText}
              </p>
              <button onClick={() => openModal('collaborationText')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mt-4 block">Edit</button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          type={currentTextType}
          currentValue={corporateData[currentTextType]}
          closeModal={closeModal}
          updateCorporateData={setCorporateData}
          fetchCorporateData={fetchCorporateData}
        />
      )}
    </div>

    
  );
};

const Modal = ({ type, currentValue, closeModal, updateCorporateData, fetchCorporateData }) => {
    const [textValue, setTextValue] = useState(currentValue);
  
    useEffect(() => {
      setTextValue(currentValue);
    }, [currentValue]);


  
    const handleTextChange = (e) => {
      setTextValue(e.target.value);
    };
  
    const handleUpdateText = async () => {
      try {
        await axios.put(`https://joof-backend.onrender.com/api/corporate/${type}`, { text: textValue });

        updateCorporateData(prevData => ({
          ...prevData,
          [type]: textValue,
        }));

       await fetchCorporateData()
        
        closeModal();
      } catch (error) {
        console.error(`Error updating ${type}:`, error);
      }
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg w-96 h-96 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Update {type}</h2>
          <textarea
            value={textValue}
            onChange={handleTextChange}
            className="w-full h-36 mb-4 p-2 border border-gray-300 rounded"
          />
          <div className="flex justify-end">
            <button
              onClick={handleUpdateText}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Update
            </button>
            <button
              onClick={closeModal}
              className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

export default CorporateScreen;
