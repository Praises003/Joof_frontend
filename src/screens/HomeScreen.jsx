import React from 'react'
import eventImg from "../assets/ev bg.jpg"
import NavComponent from '../components/NavComponent'
import FaqComponent from '../components/FaqComponent'
import AboutComponent from '../components/AboutComponent'
import VenueComponent from '../components/VenueComponent'
import ContactComponent from '../components/ContactComponent'
import VenueInfoCardComponent from '../components/VenueInfoCardComponent'
const HomeScreen = () => {
  return (
    <section className="">
        <NavComponent /> 

    <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "90vh",}} className={``}>
          <p className='uppercase text-4xl font-bold md:text-5xl text-white mx-auto w-3/4 md:w-3/4 pt-44 md:pt-40'>JOOF Multipurpose event center</p>
        </div>

  
    <AboutComponent />
    <div className="">
      <p className='text-3xl font-bold w-2/5  lg:w-1/4 mx-auto mt-20 md:text-4xl'>What We Offer</p>
    </div>
    <VenueInfoCardComponent />
    
    <FaqComponent />
    <ContactComponent />
    
    </section>
    
    
  )
}

export default HomeScreen