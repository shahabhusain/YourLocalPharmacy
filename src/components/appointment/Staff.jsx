import React, { useState } from 'react'
import sum from '../../assets/sum.png'
import { IoMdArrowForward } from 'react-icons/io'
const Staff = () => {
        const [selectService, setSelectService] = useState(0)
        const service = [
            {
                icon:sum,
                title:"Any Staff",
            },
             {
                icon:sum,
                title:"Their Master",
            },
                         {
                icon:sum,
                title:"Their Master",
            },
        ]
  return (
    <div className='border-[2px] rounded-md border-[#00000013] relative p-12 flex flex-col gap-y-4 w-full h-full'>
        <h1 className=' text-[24px] font-bold text-black'>Staff</h1>
                <div className=' flex items-center gap-6'>
                       {
                service.map((item,index)=>(
                         <div onClick={()=>setSelectService(index)} className={`border-[2px] w-full flex flex-col gap-y-6 ${selectService === index ? "border-[#80E900]" : "border-[#00000017]"} p-6 rounded-md flex flex-col gap-y-5`}>
        <span className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${selectService === index ? "bg-[#80E900]" : " bg-[#F8F8F8]"}`}><img src={item.icon} alt="" /></span>
        <h1 className=' text-[#4E4E4E] text-[20px] font-[500]'>{item.title}</h1>
      </div>
                ))
              }
                </div>

                     <button className=' absolute bottom-3 right-3 flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Next</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
         </div>
  )
}

export default Staff