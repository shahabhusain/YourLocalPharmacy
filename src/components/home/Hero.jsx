import React from 'react'
import people from '../../assets/peaple.png'
import { IoMdArrowForward } from 'react-icons/io'
const Hero = () => {
  return (
    <div className=' bg1 absolute top-0 z-[-1] h-full flex flex-col items-center justify-center gap-y-5 w-full '>
        <h1 className=' text-[80px] font-bold text-black text-center leading-[6rem] max-w-[1055px]'>Your Trusted Local Independent Pharmacy</h1>
        <p className=' text-[14px] font-medium text-black text-center'>Serving Eddington, Gravelly Hill, Washroom Heath, Sutton Cloudfield, Aston & beyond with modern healthcare services.</p>
           <button className=' flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Booking Appointment</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
            <div className=' flex items-center gap-2 mt-4'>
              <img className=' w-[115px]' src={people} alt="" />
              <button className='  items-start text-[16px] font-semibold flex flex-col gap-y-0.4 text-[#333333]'><span className=' text-[#80E900]'>4.9+ Ratings</span> Trusted by 5k customers</button>
            </div>
    </div>
  )
}

export default Hero