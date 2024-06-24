import React from 'react'

const AuditScreen = () => {
    
    const pdfFunc = () => {
        const pdfPath = "https://drive.google.com/file/d/1Mcu1gUEpIWA3gun_-E_cJQzjWiA5RGpq/view?usp=sharing"

        window.open(pdfPath, '_blank');

    }
  return (
    <div>
        <div className="">
            <p className="text-center font-bold">JANET OLUFUNMILAYO OLUWASANMI FOUNDATION</p>
            <p className="text-center font-bold">Audited Financial Statements fo the period ended in june 2022</p>
        </div>

        <div className="mt-5 lg:w-2/4 lg:mx-auto" >
            <button onClick={pdfFunc} className="bg-blue-500 text-white font-semibold  px-4 py-2 rounded- rounded-3xl block text-center hover:bg-yellow-500 hover:text-white hover:font-semibold mb-10">
                View Audited Financial Statements fo the period ended in june 2022
            </button>

        </div>
    </div>
  )
}

export default AuditScreen