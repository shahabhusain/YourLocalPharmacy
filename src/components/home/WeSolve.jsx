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
import { Link } from 'react-router-dom'
import { FaWeight, FaPlane, FaPrescriptionBottleAlt, FaSyringe, FaDeaf } from "react-icons/fa";
import { MdBloodtype, MdAcUnit, MdMedicalServices } from "react-icons/md";

const WeSolve = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
const data = [
  { 
    icon: <FaWeight size={28} />, 
    path: "/weight-management", 
    title: "Weight Management", 
    desc: "Achieve your health and fitness goals with our pharmacy-led weight management program. We provide tailored advice, diet guidance, and lifestyle support to help you safely lose or maintain weight while improving your overall wellbeing." 
  },
  { 
    icon: <FaPlane size={28} />, 
    path: "/travel-clinic", 
    title: "Travel Clinic", 
    desc: "Planning a trip abroad? Our travel health experts offer vaccinations, antimalarial tablets, and personalized travel advice to keep you safe from region-specific illnesses. Convenient, quick, and all from your trusted local pharmacy." 
  },
  { 
    icon: <FaPrescriptionBottleAlt size={28} />, 
    path: "/pharmacy-first", 
    title: "Pharmacy First", 
    desc: "Avoid long GP waiting times with our Pharmacy First service. Our trained pharmacists can diagnose and treat common conditions like sore throats, ear infections, and urinary tract infections, giving you quicker access to care." 
  },
  { 
    icon: <FaSyringe size={28} />, 
    path: "/vitamin-b12", 
    title: "Vitamin B12 Injections", 
    desc: "Boost your energy levels and reduce fatigue with our Vitamin B12 injection service. Essential for healthy red blood cell production and nervous system function, these injections are a quick and effective way to support your overall health." 
  },
  { 
    icon: <FaDeaf size={28} />, 
    path: "/ear-wax-removal-microsuction", 
    title: "Ear Wax Removal", 
    desc: "Suffering from blocked ears or hearing difficulties? Our safe and gentle ear wax removal using microsuction technology provides immediate relief, improves hearing, and protects your ear health." 
  },
  { 
    icon: <MdBloodtype size={28} />, 
    path: "/blood-test", 
    title: "Blood Testing", 
    desc: "We offer a wide range of blood tests, including cholesterol, diabetes, thyroid, and vitamin deficiency checks. Get fast results and expert advice, helping you take proactive steps in managing your health." 
  },
  { 
    icon: <MdAcUnit size={28} />, 
    path: "/cryotherapy", 
    title: "Cryotherapy", 
    desc: "Cryotherapy is a quick and effective treatment that uses cold technology to safely remove warts, verrucae, and other minor skin lesions. A professional and painless procedure available in our pharmacy." 
  },
  { 
    icon: <MdMedicalServices size={28} />, 
    path: "/independent-prescriber", 
    title: "Independent Prescriber", 
    desc: "Our qualified independent prescribers can issue prescriptions for a range of conditions, ensuring you receive the right treatment quickly without the need for a GP appointment." 
  },
];


  return (
    <div className="mt-[600px]">
      <div className="bg-black rounded-t-[3rem] text-white">
        <div className="w-[90%] mx-auto py-32">
          {/* Heading */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
  <div className="text-start text-[46px] font-semibold flex flex-col">
    <span className="text-[16px] font-medium text-[#ffffff]">What we do</span>
    Caring for Your Health, Every Day
  </div>
  <div className="text-[16px] font-light text-[#ffffffb5] max-w-md">
    From prescriptions to health checks, vaccinations, and wellness support, our pharmacy team is here to provide trusted healthcare services for you and your family. 
    We combine professional care with modern services to keep your health on track.
    <Link to="/about-us" className="block border-b-2 w-fit border-[#80E900] text-white text-[12px] font-bold mt-2 cursor-pointer">
      More about us
    </Link>
  </div>
</div>


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
                   <span>{item.icon}</span>
                </div>
                <p className="text-[16px] font-light text-[#f1eeee90]">{item.desc}</p>

                {/* Smooth button fade/slide */}
       

                     <Link to={item.path} className={` flex transform transition-all duration-300 ease-in-out  ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}  text-[#fff] items-center `}> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Booking Appointment</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeSolve
