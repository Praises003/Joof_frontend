import React from 'react'

import bod1 from "../assets/bod1.jpg"
import bod2 from "../assets/bod2.jpg"
import bod3 from "../assets/bod3.jpg"
import bod4 from "../assets/bod4.jpg"
import bod5 from "../assets/bod5.jpg"
import bod6 from "../assets/bod6.jpg"
import bod7 from "../assets/bod7.jpg"
import bod8 from "../assets/bod8.jpg"
import bod9 from "../assets/bod9.jpg"
import sergio from "../assets/sergio.jpg"
import christopher from "../assets/christopher.jpg"
import stefan from "../assets/stefan.jpg"
import jonas from "../assets/jonas.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
//import jonas from "../assets/jonas.jpg"



const ManagementScreen = () => {
  return (
    <div>
        <div className="p-4">
            <p className="text-center text-2xl font-semibold uppercase">The Board of Trustees</p>
            <div className="mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-2 ">
                    <div className="">
                        <img src={bod1} alt="" srcset="" />
                        <p className="">Craig Johnson
                        </p>
                        <p className="">CEO</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>

                    </div>
                    
                    <div className="">
                        <img src={bod2} alt="" srcset="" />
                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>


                        
                    </div>
                    
                    <div className="">
                        <img src={bod3} alt="" srcset="" />

                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>


                        
                    </div>
                    <div className="">
                        <img src={bod4} alt="" srcset="" />
                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>


                        
                    </div>
                    
                    <div className="">
                        <img src={bod5} alt="" srcset="" />
                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>



                        
                    </div>
                    <div className="">
                        <img src={jonas} alt="" srcset="" />
                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>



                        
                    
                        
                    </div>
                    
                </div>

            </div>
            <div className="">
                <p className="text-center text-2xl font-semibold">MANAGEMENT COUNCIL</p>
            
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-2">
                        <div className="">
                            <img src={sergio} alt="" srcset="" />
                            <p className="">Blake Howard</p>
                            <p className="">Member</p>
                            <div className="flex justify-between items-center">
                                <p className="">social links:</p>
                                <FaFacebookSquare size={30} />
                                <FaLinkedin size={30} />
                                <FaInstagramSquare size={30} />
                            </div>
                        </div>



                        
                    
                    <div className="">
                        <img src={christopher} alt="" srcset="" />
                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>



                        
                    </div>
                    <div className="">
                        <img src={bod6} alt="" srcset="" />
                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>



                        
                    </div>
                    <div className="">
                        <img src={bod7} alt="" srcset="" />
                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>



                        
                    </div>
                    <div className="">
                        <img src={bod8} alt="" srcset="" />

                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>



                        
                    </div>
                    <div className="">
                        <img src={bod9} alt="" srcset="" />
                        <p className="">Blake Howard</p>
                        <p className="">Member</p>
                        <div className="flex justify-between items-center">
                            <p className="">social links:</p>
                            <FaFacebookSquare size={30} />
                            <FaLinkedin size={30} />
                            <FaInstagramSquare size={30} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ManagementScreen
