import React, { useState } from 'react'
import sum from '../../assets/sum.png'
import { IoMdArrowForward } from 'react-icons/io'
const SelectCategory = () => {
    const [select, setSelect] = useState(0)
    const [selectService, setSelectService] = useState(0)
    const button = [
        {button:"All"},
        {button:"NHS"},
        {button:"Weight Management"},
        {button:"Ear Wax removal"},
    ]
    const service = [
        {
            icon:sum,
            title:"Ear Wax Removal 1 ear - £35",
            desc:"Duration: 15 m"
        },
         {
            icon:sum,
            title:"Ear Wax Removal 1 ear - £35",
            desc:"Duration: 15 m"
        },
    ]
  return (
    <div className=' border-[2px] rounded-md border-[#00000013] relative px-12 pt-12 pb-20 flex flex-col gap-y-4'>
      <h1 className=' text-[24px] font-bold text-black'>Select Category</h1>
      <div className=' flex items-center gap-6'>
        {
            button.map((item,index)=>(
                <button onClick={()=>setSelect(index)} key={index} className={`border-[2px] ${select === index ? " bg-[#80E900] text-white" : ""} border-[#00000013] text-[#4E4E4E] text-[20px] font-medium py-2 px-4 rounded-md`}>{item.button}</button>
            ))
        }
      </div>

         <div className=' flex flex-col gap-y-4 mt-12'>
            <h1 className=' text-[26px] font-bold text-black'>Select Service</h1>
                <div className=' flex items-center gap-6'>
                       {
                service.map((item,index)=>(
                         <div onClick={()=>setSelectService(index)} className={`border-[2px] w-full flex flex-col gap-y-6 ${selectService === index ? "border-[#80E900]" : "border-[#00000017]"} p-6 rounded-md flex flex-col gap-y-5`}>
        <span className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${selectService === index ? "bg-[#80E900]" : " bg-[#F8F8F8]"}`}><img src={item.icon} alt="" /></span>
        <h1 className=' text-[#4E4E4E] text-[20px] font-[500]'>{item.title}</h1>
        <h2 className=' text-[#4E4E4E] text-[20px] font-[500]'>{item.desc}</h2>
      </div>
                ))
              }
                </div>
         </div>

            <button className=' absolute bottom-3 right-3 flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Next</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
    </div>
  )
}

export default SelectCategory