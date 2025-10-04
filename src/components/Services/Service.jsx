import React, { useState } from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import icon8 from '../../assets/icon8.png'
import { IoMdArrowForward } from 'react-icons/io'

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const data = [
    { icon: icon1, title: 'Weight Management', desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
    { icon: icon2, title: 'Travel Clinic',      desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
    { icon: icon3, title: 'Pharmacy First',     desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
    { icon: icon4, title: 'Vitamin B12',        desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
    { icon: icon5, title: 'Ear Wax Removal',    desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
    { icon: icon6, title: 'Blood Testing',      desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
    { icon: icon7, title: 'Cryotherapy',        desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
    { icon: icon8, title: 'Independent Prescriber', desc: 'Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers.' },
  ]

  return (
    <div className="mt-[350px]">
      <div className="bg-black rounded-[3rem] text-white">
        <div className="w-[90%] mx-auto py-32">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {data.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="
                  bg-[#ffffff17] p-6 rounded-2xl flex flex-col gap-y-6
                  transform transition-all duration-300 ease-in-out
                  hover:scale-105 hover:bg-[#ffffff25]
                "
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-[24px] font-bold">{item.title}</h1>
                  <img src={item.icon} alt={item.title} />
                </div>
                <p className="text-[16px] font-light text-[#f1eeee90]">{item.desc}</p>

                {/* Smooth button fade/slide */}
       

                     <button className={` flex transform transition-all duration-300 ease-in-out  ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}  text-[#fff] items-center `}> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Book Appointment</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
