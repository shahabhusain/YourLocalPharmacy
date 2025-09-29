import React from 'react'

const ServiceWork = ({data}) => {

  return (
    <div className=' bg-[#0c0c0c] mb-20 md:p-20 p-4 flex flex-col items-center rounded-b-[3rem]  gap-y-6'>
        <h1 className=' text-[24px] font-bold text-white text-center'>How this service works?</h1>
         <div className=' grid md:grid-cols-2 grid-cols-1 gap-5 mt-6'>
           {
            data.map((item, index)=>(
                <div key={index} className=' bg-[#ffffff08] p-5 rounded-2xl'>
                    <div className=' flex items-center justify-between'><h1 className=' text-[24px] font-[700] text-white'>{item.title}</h1> <img src={item.icon} alt="" /></div>
                    <p className=' text-[14px] font-normal text-[#ffffff9e] mt-6'>{item.desc}</p>
                </div>
            ))
           }
         </div>
         <p className=' text-[14px] font-normal text-[#ffffff9e] text-center max-w-[705px] mt-12'>Please note: This service is only available to people using certain medicines. In some cases where there’s a problem and a solution cannot be found between you and the pharmacist, you’ll be referred back to your doctor.</p>
    </div>
  )
}

export default ServiceWork