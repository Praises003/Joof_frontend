import React from 'react'

const EventCon = ({ info }) => {
    const { event } = info;
    return (
      <div className='bg-blue-900 w-full'>
        <p className='' style={{wordWrap: "wrap"}}>{event.title}</p>
      </div>
    )
}

export default EventCon