import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const Unlock = () => {
  return (
    <div className=' flex w-[100%]'>
      <div className='bg3 px-12 w-1/2 h-[690px] flex flex-col items-start gap-y-6 justify-center'>
         <h1 className=' text-[46px] font-[600] text-[#20265B] leading-[3.5rem]'>Unlock Your Wellness Journey</h1>
         <p className=' text-[14px] text-[#20265B] font-semibold max-w-[344px]'>Your Health, Your Way. Secure Your Consultation
Appointment!</p>
  <button className=' flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Booking Appointment</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
      </div>
      <div className='bg2 px-12 w-1/2 h-[690px] flex flex-col items-start gap-y-6 justify-center'>
         <h1 className=' text-[46px] font-[600] text-[#20265B] leading-[3.5rem]'>Unlock Your Wellness Journey</h1>
         <p className=' text-[14px] text-[#20265B] font-semibold max-w-[344px]'>Your Health, Your Way. Secure Your Consultation
Appointment!</p>
  <button className=' flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Booking Appointment</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
      </div>
    </div>
  )
}

export default Unlock