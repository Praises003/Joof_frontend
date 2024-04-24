import React, {useState, useEffect} from 'react'
import axios from "axios"



const TransactionScreen = () => {
  const [loading, setLoading] = useState(false)
  const [transactions, setTransactions] = useState([])

    const getTransactions = async() => {
        try {
            setLoading(true)
            const { data } = await axios.get("http://localhost:5000/transaction",  {withCredentials: true})
            setLoading(false)
            console.log(data)
            setTransactions(data)

            

        } catch (err) {
          console.log(err)

        }
    }

    useEffect(() => {
      getTransactions()
    }, [])
  return (
    <div>

      <div style={{background: "#202020"}} className="p-4 ">
              <p className="text-center text-white text-2xl mt-8 mb-4 font-semibold">Transactions</p>

              <div style={{background:"#272E36", borderColor:"#FE8D01"}} className="border border-x-2 border-y-2 border-yellow-500 p-3 rounded-xl mb-5">
                <div className="grid grid-cols-3 gap-10 mb-2.5">
                  <div className="">
                  <p className="text-white font-semibold">NAME</p>
                  <div className="">
                    {transactions.map(data => <div key={data.id} className=""> 
                      
                      <p className='text-white'>{data.billing_details.name}</p> </div>)}
                    </div>

                  </div>
                    <div className="">
                    <p className="text-white font-semibold">AMOUNT</p>
                    {transactions.map(data => <div key={data.id} className="">
                      <p className="text-white">${data.amount}</p>
                    </div>)}

                    </div>

                    <div className="">
                      <p className="text-white font-semibold">STATUS</p> 
                      <div className="">
                        {transactions.map(data => <div key={data.id}>
                          <p className="text-white">{data.status}</p>
                        </div>)}
                      
                      </div> 

                    </div>
                    
                    
                </div>
            </div>
          

      </div>

    </div>
  )
}

export default TransactionScreen