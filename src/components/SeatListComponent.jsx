import React from 'react'

const SeatListComponent = ({ seat }) => {
  return (
    <div>
        <div className="flex">
          <div className="">
            <p className="">Section</p>
            <p className="">B</p>
          </div>

          <div className="">
            <p className="">ROW</p>
            <p className="">3</p>
          </div>

          <div className="">
            <p className="">SEAT</p>
            <p className="">10</p>
          </div>

        </div>

    </div>
  )
}

export default SeatListComponent