import React from 'react'

const SeatListComponent = ({ seat }) => {
  return (
    <div>
        <div className="grid grid-cols-6">
            <p className="">{seat.no}</p>

        </div>
    </div>
  )
}

export default SeatListComponent