import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "react-datetime/css/react-datetime.css";
import './App.css'
import HomeScreen from './screens/HomeScreen'
import VenueComponent from './components/VenueComponent'
import ScrollToTop from './components/ScrollToTop'
import NavComponent from './components/NavComponent'
import ContactComponent from './components/ContactComponent'
import CalendarComponent from './components/CalendarComponent'
import EventScreen from './screens/EventScreen'
import EventComponent from './components/EventComponent'
import GalleryComponent from './components/GalleryComponent'
import EmailComponent from './components/EmailComponent'
function App() {
  // const [count, setCount] = useState(0)

  // const [test, setTest] = useState([])
  // const [loading, setLoading] = useState(true)

  // const fetchTest = async() => {
  //   const {data} = await axios.get('/api/invoice')

    //setTest(prev => [...prev, data])
    
  //   setTest(data)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchTest()
  //    },[])
  
//   useEffect(() => {
// if(test.getAll) {
//   console.log(test)
// } 
       
//   }, [test])
  // const {getAll} = test
  return (
    <>
        <ScrollToTop />
        <NavComponent />
        <Routes>
          
            <Route path='/' element={<HomeScreen />}/>
            <Route path='/event' element={<EventScreen />} />
          
            <Route path="/venue_info" element={<VenueComponent />}/>
            
            <Route path="/calendar" element={<CalendarComponent />}/>
            <Route path="/event-registration" element={<EventComponent />} />

            <Route path="/gallery" element={<GalleryComponent />} />
        </Routes>
        <EmailComponent />
        <ContactComponent />
      
      
    

    </>
  )
}

export default App
