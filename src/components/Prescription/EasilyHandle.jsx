import React, { useState } from 'react'
import icon1 from '../../assets/pre.png'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const EasilyHandle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const data = [
    { 
      icon: icon1, 
      title: 'Prescription Reminders', 
      desc: 'Never miss your medication again. We’ll notify you when it’s time to reorder your prescription for a hassle-free experience.' 
    },
    { 
      icon: icon1, 
      title: 'Easy Prescription Refills', 
      desc: 'Refill your medicines quickly through our pharmacy with just a few clicks—no need to wait in long queues.' 
    },
    { 
      icon: icon1, 
      title: 'Free Health Advice', 
      desc: 'Our pharmacists are here to provide guidance on managing conditions, medication use, and overall well-being.' 
    },
  ]

  return (
    <div className="w-[90%] mx-auto mt-[400px] mb-[100px]">
      <div className="rounded-t-[3rem] text-black">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="text-start text-black text-[46px] font-semibold flex flex-col">
            <span className="text-[16px] font-medium">At Your Manor Pharmacy</span>
            Easily manage your repeat prescriptions
          </div>
          <div className="text-[16px] text-black font-light max-w-md">
            At Manor Pharmacy, we make your healthcare simpler and stress-free. 
            Whether you need prescription refills, reminders, or expert health advice, 
            we’re here to support you at every step.

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
      <Link
  to="/appointment"
  className="flex items-center  text-white group"
>
  <span className="bg-[#80E900] rounded-full py-3 px-6
                   transition-all duration-300 
                   group-hover:scale-105 group-hover:shadow-lg">
    Book Appointment
  </span>
  <span className="h-[45px] w-[45px] rotate-[320deg] flex items-center justify-center 
                   bg-[#80E900] rounded-full 
                   transition-transform duration-300 
                   group-hover:translate-x-1 group-hover:rotate-[360deg]">
    <IoMdArrowForward size={20} />
  </span>
</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EasilyHandle
