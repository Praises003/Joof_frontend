import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TicketScreen = () => {
    const { user } = useSelector(state => state.user)

  const navigate = useNavigate()
  useEffect(() => {
      if ( !user.isAdmin ) {
          navigate("/register")
      }
  }, [])
  return (
    <div>
        <div style={{background: "#202020"}} className="p-4 ">
            <p className="text-center text-white text-2xl mt-8 mb-4 font-semibold">Tickets</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
                <div style={{background:"#272E36", borderColor:"#FE8D01"}} className="border border-x-2 border-y-2 border-yellow-500 p-8 rounded-xl">
                    <p className="text-center text-white text-3xl font-semibold">83457</p>
                    <p className="text-center text-white">Total Tickets</p>

                </div>            

                <div style={{background:"#272E36", borderColor:"#FE8D01"}} className="border border-x-2 border-y-2 border-yellow-500 p-8 rounded-xl">
                    <p className="text-center text-white text-3xl font-semibold">3457</p>
                    <p className="text-center text-white">Closed Tickets</p>

                </div>

                <div style={{background:"#272E36", borderColor:"#FE8D01"}} className="border border-x-2 border-y-2 border-yellow-500 p-8 rounded-xl">
                    <p className="text-center text-white text-3xl font-semibold">457</p>
                    <p className="text-center text-white">Deleted Tickets</p>

                </div>
            </div>

            <div style={{background:"#272E36", borderColor:"#FE8D01"}} className="border border-x-2 border-y-2 border-yellow-500 p-3 rounded-xl">
                <div className="grid grid-cols-5 gap-10 mb-2.5">
                    <p className="text-white font-semibold">ID</p>
                    <p className="text-white font-semibold">Created By</p>
                    <p className="text-white font-semibold">Event Title</p>
                    <p className="text-white font-semibold">Date</p>
                    <p  className='text-white font-semibold'>Status</p>
                </div>

                <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                <div className="">
                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#6623</p>
                        <p className="text-white">Jane Doe</p>
                        <p className="text-white">Finance Conference</p>
                        <p className="text-white">03/04/2024</p>
                        <p className="text-red-600 font-black">Closed</p>
                    </div>

                    
                <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#42323</p>
                        <p className="text-white">Jim Depp</p>
                        <p className="text-white">Birthday Event</p>
                        <p className="text-white">22/03/2024</p>
                        <p className="text-green-500 font-black">Opened</p>
                    </div>

                    
                    <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#23323</p>
                        <p className="text-white">Peter Pan</p>
                        <p className="text-white">Exhibition</p>
                        <p className="text-white">01/02/2024</p>
                        <p className="text-green-500  font-black">Opened</p>
                    </div>

                    
                <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#42323</p>
                        <p className="text-white">Simeon Doe</p>
                        <p className="text-white">Seminar</p>
                        <p className="text-white">09/05/2024</p>
                        <p className="text-red-600 font-black">Closed</p>
                    </div>

                    
                    <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#46623</p>
                        <p className="text-white">Jonas John</p>
                        <p className="text-white">Gala Party</p>
                        <p className="text-white">14/03/2024</p>
                        <p className="text-green-500 font-black">Opened</p>
                    </div>

                    
                    <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#42323</p>
                        <p className="text-white">Christopher Jin</p>
                        <p className="text-white">Variety Party</p>
                        <p className="text-white">11/03/2024</p>
                        <p className="text-green-500 font-black">Opened</p>
                    </div>

                    
                    <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#42323</p>
                        <p className="text-white">Daniel Pitt</p>
                        <p className="text-white">Fundraising</p>
                        <p className="text-white">01/03/2024</p>
                        <p className="text-red-600 font-black">Closed</p>
                    </div>

                    
                    <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#88323</p>
                        <p className="text-white">James Guy</p>
                        <p className="text-white">Trade Fair</p>
                        <p className="text-white">01/03/2024</p>
                        <p className="text-green-500 font-black">Opened</p>
                    </div>

                    
                    <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#00323</p>
                        <p className="text-white">Gwen Tracy</p>
                        <p className="text-white">Wedding Event</p>
                        <p className="text-white">01/03/2024</p>
                        <p className="text-green-500 font-black">Opened</p>
                    </div>

                    
                    <div className="w-full h-0.5 bg-yellow-500 mb-2.5"></div>

                    <div className="grid grid-cols-5 gap-10 mb-2.5">
                        <p className="text-white">#07323</p>
                        <p className="text-white">Smith Tan</p>
                        <p className="text-white">Reunion Event</p>
                        <p className="text-white">01/06/2024</p>
                        <p className="text-green-500 font-black">Opened</p>
                    </div>









                </div>

            </div>
        </div>
    </div>
  )
}

export default TicketScreen