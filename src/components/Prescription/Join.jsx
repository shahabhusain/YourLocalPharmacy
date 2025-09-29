import React from 'react'
import join from '../../assets/join.png'
import { IoMdArrowForward } from 'react-icons/io'
const Join = () => {
  return (
    <div className=' flex  items-center bg-[#0303030b] md:px-20 px-4 py-10 rounded-t-[3rem]'>
    <div className=' flex flex-col md:flex-row items-center justify-between '>
               <div className=' flex flex-col gap-y-5  md:w-1/2 text-black'>
            <h1 className=' ld:text-[56px] md:text-[46px] text-[36px] font-bold'>Why Join Your Local Eddington Pharmacy?</h1>
            <p className=' text-[14px] font-medium'>Serving Eddington, Gravelly Hill, Washroom Heath, Sutton Cloudfield, Aston & beyond with modern healthcare services.</p>
            <button className=' flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Contact us now </span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
        </div>
                <img className='md:w-[45%]' src={join} alt="" />
 
    </div>
    </div>
  )
}

export default Join