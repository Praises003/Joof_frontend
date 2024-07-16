import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { BrowserRouter, Route, Routes,  useLocation } from 'react-router-dom'
// import "react-datetime/css/react-datetime.css";
import { ToastContainer } from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import {useSelector, useDispatch} from "react-redux"
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
import SeatListComponent from './components/SeatListComponent'
import ProfileComponent from './components/ProfileComponent'
import CartScreen from './screens/CartScreen'
import PaymentSuccessScreen from './screens/PaymentSuccessScreen'
import PaymentFailedScreen from './screens/PaymentFailedScreen'
import ReminderComponent from './components/ReminderComponent'
import AdminScreen from './screens/AdminScreen'
import UserListComponent from './components/UserListComponent'
import GuestListComponent from './components/GuestListComponent'
import EventListComponent from './components/EventListComponent'
import AdminLayout from './screens/AdminLayout'
import AdminSectionComponent from './components/AdminSectionComponent'
import ManagementScreen from './screens/ManagementScreen'
import BoardOfTrusteesScreen from './screens/BoardOfTrusteesScreen'
import TicketScreen from './screens/TicketScreen'
import AuditScreen from './screens/AuditScreen'
import MediaScreen from './screens/MediaScreen'
import YoutubeScreen from './screens/YoutubeScreen'
import EventCardComponent from './components/EventCardComponent'
import EventMoreComponent from './components/EventMoreComponent'
import TransactionScreen from './screens/TransactionScreen'
import FounderScreen from './screens/FounderScreen'
import TestScreen from './screens/TestScreen'
import SeatSelScreen from './screens/seatSelScreen'
import AdminEventPackageScreen from './screens/AdminEventPackageScreen'
import AddEventPackageScreen from './screens/AddEventPackageScreen'

function App() {
  const location = useLocation();
  const showNav = ['/dashboard', '/dash_event', '/seat_list', '/seat', '/profile', "/cart", "/event_package", "/reminder", "/media", "/create_ticket"].includes(location.pathname);
  const showAdminNav = ['/admin', '/guests', '/users', '/events', '/ticket', "/transaction", "/admin_eventpackage", "/add_event"  ].includes(location.pathname);
  const { eventPackage } = useSelector(state => state.eventPackage)
  //console.log(import.meta.env.VITE_SECRET)
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
  const [genUser, setGenUser] = useState([])
  //console.log(genUser)
  //console.log(eventPackage)

  
  return (
    <>
        <ScrollToTop />
        <NavComponent />
        
        {showAdminNav && <AdminScreen>
          <Routes>
            <Route path="/admin" element={<AdminSectionComponent /> } />
            <Route path="/admin_eventpackage" element={<AdminEventPackageScreen /> } />
            <Route path="/users" element={<UserListComponent /> } />
            <Route path='/add_event' element={<AddEventPackageScreen />} />
            <Route path="/events" element={<EventListComponent /> } />
            <Route path="/ticket" element={<TicketScreen /> } />
            <Route path="/transaction" element={<TransactionScreen /> } />
           



            
            
          
          </Routes>
        </AdminScreen>}
       {showNav && <LayoutScreen>
          <Routes>
            <Route path="/dashboard" element={<DashboardScreen /> } /> 
          <Route path='/dash_event' element={<DashEvent />}/>
          <Route path="/ve" element={<VenueComponent />}/>
          {/* <Route path="/seat_list" element={<SeatListComponent genUser={genUser} />} />  */}
          <Route path="/seat" element={<SeatSelectionComponent setGenUser  /> } />
          <Route path="/profile" element={<ProfileComponent /> } />

          <Route path="/event_package" element={<EventPackageScreen />} />

          <Route path="/cart" element={<CartScreen />} />

          <Route path="/reminder" element={<ReminderComponent /> } />

          <Route path="/media" element={<MediaScreen /> } />

          <Route path="/create_ticket" element={<EventCardComponent /> } />


        


          
                    
          





            
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

            
            
            <Route path="/corporate" element={<CorporateScreen />} />

             <Route path="/register" element={<RegisterScreen />} /> 

             <Route path="/login" element={<LoginScreen /> } /> 

             <Route path="/success" element={<PaymentSuccessScreen /> } /> 

             <Route path="/fail" element={<PaymentFailedScreen /> } /> 
             <Route path="/youtube" element={<YoutubeScreen /> } /> 

             <Route path="/eventmore" element={<EventMoreComponent /> } /> 

             <Route path="/test" element={ <TestScreen /> } /> 



             {/* <Route path="/admin" element={<AdminScreen /> } /> */}

             

             {/* <Route path="/guests" element={<GuestListComponent /> } /> */}

             

             <Route path="/management" element={<ManagementScreen /> } />

             <Route path="/audit" element={<AuditScreen /> } />

             <Route path="/board" element={<BoardOfTrusteesScreen /> } />

             <Route path="/founder" element={<FounderScreen /> } />







             
             

             {/* <Route path="/dash_event" element={<DashEvent /> } /> */}



        </Routes>

        
       
        <ToastContainer />
        <EmailComponent />
        <ContactComponent />
      
      
    

    </>
  )
}

export default App
