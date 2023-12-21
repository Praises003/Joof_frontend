import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { BrowserRouter, Route, Routes,  useLocation } from 'react-router-dom'
//import "react-datetime/css/react-datetime.css";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import EventPackageScreen from './screens/EventPackageScreen'
import CorporateScreen from './screens/CorporateScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import DashEvent from './components/DashEvent'
import LayoutScreen from './screens/LayoutScreen'
import SeatSelectionComponent from './components/SeatSelectionComponent'
function App() {
  const location = useLocation();
  const showNav = ['/dashboard', '/dash_event'].includes(location.pathname);
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
       {showNav && <LayoutScreen>
          <Routes>
            <Route path="/dashboard" element={<DashboardScreen /> } /> 
          <Route path='/dash_event' element={<DashEvent />}/>
          <Route path="/ve" element={<VenueComponent />}/>
            
          </Routes>
        </LayoutScreen>}
        
        <Routes>
          
          
            <Route path='/' element={<HomeScreen />}/>
            <Route path='/event' element={<EventScreen />} />
          
            <Route path="/venue_info" element={<VenueComponent />}/>
            
            <Route path="/calendar" element={<CalendarComponent />}/>
            <Route path="/event-registration" element={<EventComponent />} />

            <Route path="/gallery" element={<GalleryComponent />} />

            <Route path="/about" element={<AboutScreen />} />

            <Route path="/contact" element={<ContactScreen /> } />

            <Route path="/event_package" element={<EventPackageScreen />} />

            
            <Route path="/corporate" element={<CorporateScreen />} />

             <Route path="/register" element={<RegisterScreen />} /> 

             <Route path="/login" element={<LoginScreen /> } /> 

             <Route path="/seat" element={<SeatSelectionComponent/> } />

             

             {/* <Route path="/dash_event" element={<DashEvent /> } /> */}



        </Routes>
        <ToastContainer />
        <EmailComponent />
        <ContactComponent />
      
      
    

    </>
  )
}

export default App
