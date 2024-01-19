import React from 'react'

const UserListComponent = () => {
  return (
    <div>
        <div style={{background: "#202020"}}  className='p-4'>
            <div className="bg-white p-4 mt-8 lg:mt-0">

            
          <div className="flex justify-between mb-1.5 bg-black text-white font-bold rounded-md p-2.5 text-lg">
            <p className="text-center">ID No</p>
            <p className="text-center">Name</p>
            <p className="">Email/Phone</p>
            <p className=""></p>

          </div>

          <div style={{background: "#EFF0F2"}} className="flex justify-between items-center py-2.5 text-black    rounded-md mb-2">
            <p className="text-center">#3265</p>
            <p className="text-center lg:pl">Harry Porter</p>
            {/* <p style={{background: "#414B42", color: "#37D146", fontSize: "15.9px" }} className=" text-center rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5">Approved</p> */}
            <p className="">harry@gmail.com</p>
            {/* <button className="bg-red-600 text-white px-4 py.0.5 rounded-2xl">Delete</button> */}
          </div>

          <div style={{background: "#EFF0F2"}} className="flex justify-between text-black  py-2.5 rounded-md mb-2">
            <p className="text-center">#3112</p>
            <p className="text-center lg:pl">Lary go</p>
            {/* <p style={{background: "#544B3A", color: "#F98732", fontSize: "15.9px"}} className=" text-center rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5">Pending</p> */}
            <p className="">lary@gmail.com</p>
            {/* <button className="bg-red-600 text-white px-4 py.0.5 rounded-2xl">Delete</button> */}

            
          </div>

          <div style={{background: "#EFF0F2"}} className="flex justify-between text-black  py-2.5 rounded-md mb-3">
            <p className="text-center">#4232</p>
            <p className="text-center lg:pl">Sumona Gang</p>
            {/* <p style={{background: "#3A4F4F", color: "#14C8C8", fontSize: "15.9px"}} className=" text-start rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5  lg:mr-10">Paid</p> */}
            <p className="">sumo@gmail.com</p>
            {/* <button className="bg-red-600 text-white px-4 py-0.5 rounded-2xl">Delete</button> */}

            
          </div>

          <div style={{background: "#EFF0F2"}} className="flex justify-between text-black  py-2.5 rounded-md mb-3">
            <p className="text-center">#5532</p>
            <p className="text-center lg:pl">David Morph</p>
            {/* <p style={{background: "#4F3C3C", color: "#AF251C", fontSize: "15.9px"}} className=" text-start rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5  lg:mrr-10">Unpaid</p> */}
            <p className="">david@gmail.com</p>
            {/* <button className="bg-red-600 text-white px-4 py.0.5 rounded-2xl">Delete</button> */}

          </div>

          <div style={{background: "#EFF0F2"}} className="flex justify-between text-black  py-2.5 rounded-md mb-3">
            <p className="text-center">#1932</p>
            <p className="text-center lg:pl">Willium Cany</p>
            {/* <p style={{background: "#414B42", color: "#37D146", fontSize: "15.9px" }} className=" text-center rounded- rounded-3xl bg-blue-900 px-2.5 py-0.5">Approved</p>
             */}
             <p className="">wil@gmail.com</p>
             {/* <button className="bg-red-600 text-white px-4 py.0.5 rounded-2xl">Delete</button> */}

          </div>
          </div>
        </div>
    

    </div>
  )
}

export default UserListComponent