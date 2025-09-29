import React from 'react'
import about from '../../assets/about.png'
import { IoMdArrowForward } from 'react-icons/io'
const Form = () => {
  return (
    <div className=' flex items-center flex-col md:flex-row justify-between w-[90%] mx-auto mt-20'>
        <img className=' md:w-[45%]' src={about} alt="" />
        <form className=' md:w-1/2 flex flex-col gap-y-4'>
           <h1 className=' text-[56px] font-bold text-black'>NOMINATE US</h1>
            <div className=' flex items-center gap-6'>
                 <input className=' text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="text" placeholder='Patient Name' />
            <input className=' text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="date" />
            </div>
               <div className=' flex items-center gap-6'>
                 <input className=' text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="number" placeholder='Phone Number' />
            <input className=' text-[#4E4E4E] py-3 w-full px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="email" placeholder='Email Address' />
               </div>
                  <div className=' flex items-center gap-6'>
                    <input className=' text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="text" placeholder='Enter Gp Name' />
            <input className=' text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="text" placeholder='Enter Surgery Name / Town' />
                  </div>
             <textarea className=' text-[#4E4E4E] py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' rows={5} placeholder='Enter Your Message'></textarea>

              <button className=' flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Send</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
        </form>
    </div>
  )
}

export default Form