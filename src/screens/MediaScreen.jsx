import React from 'react'
import birthday from '../assets/conference.jpg'
import fundraising from '../assets/fundraising.jpg'
import graduation from '../assets/graduation.jpg'
import meeting from '../assets/meeting.jpg'
import event from '../assets/event2.jpeg'
import eventImg from "../assets/ev bg.jpg"
import wedding from "../assets/wedding_pic.jpg"
import seminar from "../assets/seminar.jpg"
import exhibition from "../assets/Exhibition.jpg"
import christopher from "../assets/christopher.jpg"
import sergio from "../assets/sergio.jpg"
import stefan from "../assets/stefan.jpg"
import jonas from "../assets/jonas.jpg"

const MediaScreen = () => {
  return (
    <div>
        <div className="">
            <div className="">
                <p className="text-center font-semibold text-2xl">Pictures and Videos</p>
                <p className="text-center">These multimedia is downloadable and remains here for 30days</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-2">
                <div className="">
                    <img src={birthday} alt="" srcset="" />
                    <button className="w-full mt-2 rounded-xl px-2.5 py-2.5 bg-black text-white">Download</button>
                </div>

                <div className="">
                    <img src={fundraising} alt="" srcset="" />
                    <button className="w-full mt-2 rounded-xl px-2.5 py-2.5 bg-black text-white">Download</button>
                </div>

                <div className="">
                    <img src={graduation} alt="" srcset="" />
                    <button className="w-full mt-2 rounded-xl px-2.5 py-2.5 bg-black text-white">Download</button>
                </div>

                <div className="">
                    <img src={meeting} alt="" srcset="" />
                    <button className="w-full mt-2 rounded-xl px-2.5 py-2.5 bg-black text-white">Download</button>
                </div>

                <div className="">
                    <img src={event} alt="" srcset="" />
                    <button className="w-full mt-2 rounded-xl px-2.5 py-2.5 bg-black text-white">Download</button>
                </div>

                <div className="">
                    <img src={wedding} alt="" srcset="" />
                    <button className="w-full mt-2 rounded-xl px-2.5 py-2.5 bg-black text-white">Download</button>
                </div>

                
                <div className="">
                    <img src={seminar} alt="" srcset="" />
                    <button className="w-full mt-2 rounded-xl px-2.5 py-2.5 bg-black text-white">Download</button>
                </div>

                
                <div className="">
                    <img src={eventImg} alt="" srcset="" />
                    <button className="w-full mt-2 rounded-xl px-2.5 py-2.5 bg-black text-white">Download</button>
                </div>

                
                <div className="">
                    <img src={exhibition} alt="" srcset="" />
                    <button className="w-full mt-2 rounded-xl px-2.5 py-2.5 bg-black text-white">Download</button>
                </div>               




            </div>

        </div>
    </div>
  )
}

export default MediaScreen