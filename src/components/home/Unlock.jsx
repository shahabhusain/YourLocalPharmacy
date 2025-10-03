import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Unlock = () => {
  return (
    <div className="flex flex-col md:flex-row w-[100%]">
      {/* Left Section */}
      <div className="bg3 px-12 md:w-1/2 h-[690px] flex flex-col items-start gap-y-6 justify-center">
        <h1 className="text-[46px] font-[600] text-[#20265B] leading-[3.5rem]">
          Your Trusted Local Pharmacy
        </h1>
        <p className="text-[14px] text-[#20265B] font-semibold max-w-[344px]">
          From prescriptions to health checks, vaccinations, and everyday advice,
          we’re here to support your health every step of the way. Book your consultation today.
        </p>
              <Link
  to="/appointment"
  className="flex items-center  text-white group"
>
  <span className="bg-[#80E900] rounded-full py-3 px-6
                   transition-all duration-300 
                   group-hover:scale-105 group-hover:shadow-lg">
    Booking Appointment
  </span>
  <span className="h-[45px] w-[45px] rotate-[320deg] flex items-center justify-center 
                   bg-[#80E900] rounded-full 
                   transition-transform duration-300 
                   group-hover:translate-x-1 group-hover:rotate-[360deg]">
    <IoMdArrowForward size={20} />
  </span>
</Link>
      </div>

      {/* Right Section */}
      <div className="bg2 px-12 md:w-1/2 h-[690px] flex flex-col items-start gap-y-6 justify-center">
        <h1 className="text-[46px] font-[600] text-[#20265B] leading-[3.5rem]">
          Healthcare Made Simple
        </h1>
        <p className="text-[14px] text-[#20265B] font-semibold max-w-[344px]">
          Access trusted pharmacy services including blood tests, travel vaccines,
          ear care, and prescription advice—all in one place. Your health matters to us.
        </p>
              <Link
  to="/appointment"
  className="flex items-center  text-white group"
>
  <span className="bg-[#80E900] rounded-full py-3 px-6
                   transition-all duration-300 
                   group-hover:scale-105 group-hover:shadow-lg">
    Booking Appointment
  </span>
  <span className="h-[45px] w-[45px] rotate-[320deg] flex items-center justify-center 
                   bg-[#80E900] rounded-full 
                   transition-transform duration-300 
                   group-hover:translate-x-1 group-hover:rotate-[360deg]">
    <IoMdArrowForward size={20} />
  </span>
</Link>
      </div>
    </div>
  )
}

export default Unlock
