import React from 'react'

const VenueInfoComponent = ({ data }) => {
    console.log(data)
  return (
    <div className="">
     
     <img src={data.image} alt="" className='w-full h-3/4 rounded-md'  />
     <p className="text-lg md:text-2xl font-bold">{data.text}</p>

    </div>
  //   <div className="flex">
    
  //        <div className="flex">
  //   <div className="flex items-center">
  //     <p>{data.text}</p>
  //   </div>
  //   <div className="flex items-center">
  //     <img src={data.image} alt={data.text} className="w-32 h-32" />
  //   </div>
  // </div>
  //   </div>

  //   <div className="flex">
  //   <div className="flex items-center">
  //     <p>{data.text}</p>
  //   </div>
  //   <div className="flex items-center">
  //     <img src={data.image} alt={data.text} className="w-32 h-32" />
  //   </div>
  // </div>
  )
}

export default VenueInfoComponent
