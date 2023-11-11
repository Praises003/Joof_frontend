import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name:"",
        address:"",
        phone: "",
        email:"",
        text:""

    })

    const initialFormData = {
        name: '',
        address: '',
        phone: '',
        email: '',
        text: ''
      };

    const onchangeFunc = (e) => {
        setFormData((prevData) => ({
            ...prevData, [e.target.name] : e.target.value
        }))
    }
    console.log(formData)

    const submitFunc = (e) => {
        e.preventDefault()
        console.log("submitted")
        setFormData(initialFormData)
    }

    const {name, phone, email, text} = formData
  return (
    
    <div>
        <div className="bg-black h-full w-full mb-10 p-9">
            <p className="text-white w-3/4 md:w-1/4 mx-auto font-bold text-3xl  md:text-5xl mb-8 uppercase">Contact Us</p>
            <div className="flex flex-col lg:flex-row ">
                <div className="w-full">
                    <h1 className='text-white font-bold text-xl mb-8 uppercase'>Our Location</h1>
                    <p className='text-white font-medium text-lg mb-4'><span>ADDRESS:</span> Isheri- Igando Road, opposite Iron Market, Igando, Lagos State, Nigeria</p>
                    <p className='text-white font-medium text-lg mb-4'><span>PHONE:</span> +234 (0) 8083625784</p>
                    <p className='text-white font-medium text-lg mb-16'><span>EMAIL:</span> 
info@joof.com</p>
                </div>
                <div className=' bg-white py-10 px-10 w-full   '>
                    <form onSubmit={submitFunc} >
                        <div className="w-11/12 mx-auto">
                        <div className='mb-8 w-full mx-auto'>
                            <h1 className='text-2xl md:text-3xl font-bold text-center sm:text-lg '>Contact Us</h1>
                            <label className="block mb-3 font-medium text-gray-900 " htmlFor=''>Name</label>
                            <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4' type='text' id='name' name='name' value={name} placeholder='Name' required onChange={onchangeFunc}/>
                        </div>
                    
                    

                    <div className='mb-8'>
                            <label className="block text-md font-medium" htmlFor="">Phone No</label>
                            <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4' type={"number"} id='number' name='phone' value={phone}  placeholder='Phone Number' onChange={onchangeFunc} 
                            />
                        
                    </div>

                    <div className='mb-8'>
                        <label className="block text-md font-medium"  htmlFor="">Email</label>
                        <input className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-sky-500 focus:bg-white focus:outline-blue-500 focus:border-sky-500 block w-full p-4' type="email" name="email" id="email" value={email} placeholder='Email' onChange={onchangeFunc} />
                       
                        
                    </div>

                    <div className="">
                        <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="text" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How can we help you?" name='text' value={text} onChange={onchangeFunc}></textarea>
                    </div>

                    
                    <div>
                            <button type="submit" className='bg-blue-900 text-white py-2.5 px-4 w-full mt-2 rounded-md  '>Submit</button>
                        </div>     

                        </div>
                                
                    </form>
            </div>
                
            </div>

        </div>
    </div>
  )
}

export default ContactComponent