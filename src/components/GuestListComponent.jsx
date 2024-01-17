import React from 'react'

const GuestListComponent = () => {
  return (
    <div>
      <div style={{background: "#202020"}} className="p-4">
        <div className="">
          <div className="flex justify-between  bg-black text-white rounded-xl mb-3">
            <p className="py-2 px-4 ">Client</p>
            <p className='py-2 px-4 '>Guest</p>
            <p className="py-2 px-4 ">Seat Number</p>
            <p className="py-2 px-4 ">Confirmed</p>
          </div>
        </div>

        <div className="">

          <div className="flex justify-between bg-yellow-500 rounded-xl mb-3">
            <p className="py-2 px-4 ">Ben White</p>
            <p className='py-2 px-4 '>Joseph Brown</p>
            <p className="py-2 px-4 ">05</p>
            <p className="py-2 px-4 ">Confirmed</p>
          </div>


        </div>

        <div className="">

          <div className="flex justify-between bg-yellow-500 rounded-xl mb-3">
            <p className="py-2 px-4 ">Jim Jay</p>
            <p className='py-2 px-4 '>Lyke Ike</p>
            <p className="py-2 px-4 ">10</p>
            <p className="py-2 px-4 ">Confirmed</p>
          </div>


        </div>

        <div className="">

          <div className="flex justify-between bg-yellow-500 rounded-xl mb-3">
            <p className="py-2 px-4 ">Jeffrey grey</p>
            <p className='py-2 px-4 '>John Doe</p>
            <p className="py-2 px-4 ">08</p>
            <p className="py-2 px-4 ">Confirmed</p>
          </div>


        </div>

        <div className="">

          <div className="flex justify-between bg-yellow-500 rounded-xl mb-3">
            <p className="py-2 px-4 ">Jane Doe</p>
            <p className='py-2 px-4 '>Brad Trad</p>
            <p className="py-2 px-4 ">07</p>
            <p className="py-2 px-4 ">Confirmed</p>
          </div>


        </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 ">Name</th>
            <th className="py-2 px-4 ">Seat Number</th>
            <th className="py-2 px-4 ">Status</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
         
            <tr key={1}>
              <td className="py-2 px-4 ">{"name"}</td>
              <td className="py-2 px-4 ">{"A10"}</td>
              <td className="py-2 px-4 ">{"confirmed"}</td>
              {/* Add more cells with guest details */}
            </tr>
         
        </tbody>
      </table>
    </div>
 




      </div>
    </div>
  )
}

export default GuestListComponent