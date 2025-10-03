import React from 'react'

const AtYourLocal = () => {
        const data = [
        {
            title:"You must be a law abiding us citizen 21 years of age or older.",
            button:"Available NOW"
        },
          {
            title:"You must be a law abiding us citizen 21 years of age or older.",
            button:"Available NOW"
        },
          {
            title:"You must be a law abiding us citizen 21 years of age or older.",
            button:"Available NOW"
        },
          {
            title:"You must be a law abiding us citizen 21 years of age or older.",
            button:"Available NOW"
        },
          {
            title:"You must be a law abiding us citizen 21 years of age or older.",
            button:"Available NOW"
        },
    ]
  return (
    <div className=' w-[90%] mx-auto md:mt-[400px] mt-[300px] mb-[100px] flex flex-col gap-y-12'>
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="text-start text-black text-[46px] font-semibold flex flex-col">
              <span className="text-[16px] font-medium">At Your Manor Pharmacy</span>
             Easily handle your repeat prescriptions
            </div>
            <div className="text-[16px] text-black font-light max-w-md">
          At Your Manor Pharmacy, your health and well-being are at the heart of everything we do. We understand that each patient is unique, and we are dedicated to providing personalized, compassionate care tailored to your specific needs.
                 {/* <div className=' flex items-center gap-2'>
                     <span className="block border-b-2 border-[#80E900] text-black text-[12px] font-bold mt-2 cursor-pointer">
                 LOGIN
              </span>
              <span className="block border-b-2 border-[#80E900] text-black text-[12px] font-bold mt-2 cursor-pointer">
                 REGISTER
              </span>
                 </div> */}
            </div>
          </div>

          <div className=' flex flex-col gap-y-5'>
               {
                data.map((item, index)=>(
                    <div key={index} className='border-[#00000025] flex items-center justify-between border-[1px] py-3 px-5 rounded-md'>
                 <h2 className=' md:text-[14px] text-[10px] font-[400] text-[#4E4E4E]'>{item.title}</h2>
                 <button className=' md:text-[16px] text-[12px] font-[500] bg-[#F8F8F8] py-3 px-5 rounded-md flex items-center gap-2'> <span className='border-[#00000092] border-[1px] p-1 flex items-center justify-center rounded-full'><span className=' h-2 w-2 rounded-full bg-[#80E900] '></span></span> {item.button}</button>
              </div>
                ))
               }
          </div>

          <p className=' text-[20px] font-[500] text-black'>We offer a flu vaccination, in-store, for anyone over the age of 18. If you’re 65 and over, have a medical condition or are pregnant, catching flu can be more serious and therefore your vaccination is FREE on the NHS</p>
          <p className=' text-[20px] font-[500] text-[#4E4E4E]'>Walk In Service — No Appointment Required</p>
    </div>
  )
}

export default AtYourLocal