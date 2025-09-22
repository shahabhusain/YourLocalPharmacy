import React, { useState } from 'react'
import icon1 from '../../assets/pre.png'
import { IoMdArrowForward } from 'react-icons/io'

const EasilyHandle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const data = [
    { icon: icon1, title: 'GET RE-ORDER REMINDERS', desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
    { icon: icon1, title: 'GET RE-ORDER REMINDERS', desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
        { icon: icon1, title: 'GET RE-ORDER REMINDERS', desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
  ]

  return (
    <div className="w-[90%] mx-auto mt-[400px] mb-[100px]">
      <div className=" rounded-t-[3rem] text-black">
          {/* Heading */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="text-start text-black text-[46px] font-semibold flex flex-col">
              <span className="text-[16px] font-medium">At Your Local Eddington Pharmacy</span>
             Easily handle your repeat prescriptions
            </div>
            <div className="text-[16px] text-black font-light max-w-md">
          At Your Local Eddington Pharmacy, your health and well-being are at the heart of everything we do. We understand that each patient is unique, and we are dedicated to providing personalized, compassionate care tailored to your specific needs.
                 <div className=' flex items-center gap-2'>
                     <span className="block border-b-2 border-[#80E900] text-black text-[12px] font-bold mt-2 cursor-pointer">
                 LOGIN
              </span>
              <span className="block border-b-2 border-[#80E900] text-black text-[12px] font-bold mt-2 cursor-pointer">
                 REGISTER
              </span>
                 </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {data.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="
                  bg-transparent border-[1px] border-[#00000042] p-6 rounded-2xl flex flex-col gap-y-6
                  transform transition-all duration-300 ease-in-out
                  hover:scale-105 
                "
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-[24px] font-bold">{item.title}</h1>
                  <img src={item.icon} alt={item.title} />
                </div>
                <p className="text-[16px] font-light text-black">{item.desc}</p>

                {/* Smooth button fade/slide */}
       

                     <button className={` flex transform transition-all duration-300 ease-in-out  ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}  text-[#fff] items-center `}> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Booking Appointment</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default EasilyHandle
