import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const BasicDetail = () => {
  return (
       <div className='border-[2px] rounded-md border-[#00000013] relative p-12 flex flex-col gap-y-4 w-full h-full'>
        <h1 className=' text-[24px] font-bold text-black'>Basic Details</h1>
         <form className=' flex flex-col gap-y-4'>
                    <div className=' flex items-center gap-6'>
                         <input className=' text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="text" placeholder='First Name' />
                    <input className=' text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="text" placeholder='Last Name' />
                    </div>
                       <div className=' flex items-center gap-6'>
                         <input className=' text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="email" placeholder='Email Address' />
                    <input className=' text-[#4E4E4E] py-3 w-full px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' type="number" placeholder='Phone Number' />
                       </div>
                     <textarea className=' text-[#4E4E4E] py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]' rows={5} placeholder='Note'></textarea>
                </form>

                                      <button className=' flex absolute bottom-3 right-3  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Send</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
        </div>
  )
}

export default BasicDetail