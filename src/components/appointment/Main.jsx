import React, { useState } from 'react'
import icon1 from '../../assets/sum.png'
import SelectCategory from './SelectCategory'
import Staff from './Staff'
import DateTime from './Date&Time'
import BasicDetail from './BasicDetail'
import Summery from './Summery'
const Main = () => {
  const [component, setComponent] = useState(0)
  const data = [
    {
      img:icon1,
      btn:"Services"
    },
        {
      img:icon1,
      btn:"Staff"
    },
        {
      img:icon1,
      btn:"Date & Time"
    },
        {
      img:icon1,
      btn:"Basic Detail"
    },
    {
      img:icon1,
      btn:"Summery"
    }
  ]
  return (
    <div className=' mt-[402px] mb-[100px] w-[90%] mx-auto flex justify-between'>
      <div className=' bg-[#f8f8f8] p-6 rounded-md w-[30%] flex flex-col gap-y-5'>
       {
        data.map((item, index)=>(
            <button onClick={()=>setComponent(index)} className={`${component === index ? "border-[#80E900] border-[2px]" : ""} w-full bg-white flex items-center gap-4 shadow-md py-3 px-5 rounded-md text-[20px] font-medium text-[#4E4E4E]`}><span className={`w-[50px] h-[50px] ${component === index ? "bg-[#80E900] " : "bg-[#f8f8f8]"}  rounded-full flex items-center justify-center`}><img src={item.img} alt="" /></span>{item.btn}</button>
        ))
       }
      </div>

      <div className=' w-[68%]'>
          {component === 0 ? <><SelectCategory /></> : component === 1 ? <><Staff /></> : component === 2 ? <><DateTime /></> : component === 3 ? <><BasicDetail /></> : component === 4 ? <><Summery /></> : null}
      </div>
    </div>
  )
}

export default Main