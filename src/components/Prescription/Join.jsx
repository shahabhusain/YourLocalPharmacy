import React from 'react'
import join from '../../assets/join.png'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
const Join = () => {
  return (
    <div className=' flex  items-center bg-[#0303030b] md:px-20 px-4 py-10 rounded-t-[3rem]'>
    <div className=' flex flex-col md:flex-row items-center justify-between '>
               <div className=' flex flex-col gap-y-5  md:w-1/2 text-black'>
            <h1 className=' ld:text-[56px] md:text-[46px] text-[36px] font-bold'>Why Join Your Manor Pharmacy?</h1>
            <p className=' text-[14px] font-medium'>Serving Eddington, Gravelly Hill, Washroom Heath, Sutton Cloudfield, Aston & beyond with modern healthcare services.</p>
                                  <Link
  to="/contact-us"
  className="flex items-center  text-white group"
>
  <span className="bg-[#80E900] rounded-full py-3 px-6
                   transition-all duration-300 
                   group-hover:scale-105 group-hover:shadow-lg">
    Contact Us
  </span>
  <span className="h-[45px] w-[45px] rotate-[320deg] flex items-center justify-center 
                   bg-[#80E900] rounded-full 
                   transition-transform duration-300 
                   group-hover:translate-x-1 group-hover:rotate-[360deg]">
    <IoMdArrowForward size={20} />
  </span>
</Link>
        </div>
                <img className='md:w-[45%]' src={join} alt="" />
 
    </div>
    </div>
  )
}

export default Join