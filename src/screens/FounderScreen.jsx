import React from 'react'
import founder from "../assets/prof.jpg"

const FounderScreen = () => {
  return (
    <div>
        <p className="font-semibold text-2xl text-center">FOUNDER</p>
        <div className="flex lg:flex-row flex-col justify-between items-start">
            <div className="lg:w-1/4">
                <img src={founder} alt="" className="   bg-no-repeat bg-cover " />

            </div>
            <div className="lg:w-3/4 ">
                <p className="text-2xl font-bold mb-7 lg:text-center px-5">Professor Rufus Oladipo Elemo</p>

                <p className="mb-7 px-5">
                    Professor Rufus Oladipo Elemo, aka “Cracker Joe” is a 1968 Division One graduate of Anglican Grammar School, Igbara-Oke. He attended Adeola Odutola College, Ijebu-Ode for Higher School Certificate. All these were made possible per the kindness of his senior sister, Chief (Mrs.) Janet Olufunmilayo Oluwasanmi. After teaching Mathematics and Physics at Ibadan City Academy for one year, he proceeded to the United States of America in December 1971 with the aid of Federal Government of Nigeria scholarship. While there, he earned Bachelors, Masters, and Doctorate degrees in Petroleum Engineering from University of Missouri – Rolla, Louisiana State University, and the University of Texas at Austin, respectively. He returned to Nigeria in January 1979 and took up an appointment as a Lecturer in the Department of Petroleum Engineering, University of Ibadan. By 1982, he was a Senior Lecturer and Associate Dean of The Faculty of Technology. He returned to the United States on sabbatical leave in July 1985, taught and conducted research in the School of Petroleum and Geological Engineering at The University of Oklahoma in Norman. He resigned his appointment at UI in 1989 with a promise to come back there. He was also on the faculty of a new Department Petroleum Engineering at North Dakota State University, Fargo, as an Associate Professor from August 1986 till June 1994. He resettled in Maryland in July 1994, taught and became a full Professor at Prince George’s Community College and at Bowie State University. It has long been the wish and goal of Professor Oladipo Elemo to give back a little to his Alma Mater, Anglican Grammar School, Igbara-Oke (AGSI), and to honor and immortalize his senior sister, Chief (Mrs.) Janet Olufunmilayo Oluwasanmi, who transitioned into eternal glory on Palm Sunday, March 28, 1999. This Computer Center at AGSI is a manifestation of that goal and wish. It was dedicated and commissioned for use on Friday, August 23, 2019. It is for the benefit of current and future generations of young adults/students. To God be all the Honor, Adoration, and Glory.
                </p>

                <p className="text-lg font-semibold px-5">
                Email: roelemo@juno.com
                </p>

            </div>
                        
        </div>
    </div>
  )
}

export default FounderScreen