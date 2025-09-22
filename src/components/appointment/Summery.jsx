import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoMdArrowForward } from 'react-icons/io';
const Summery = () => {
  return (
     <div className='border-[2px] rounded-md rela border-[#00000013] relative p-4 flex flex-col gap-y-4 w-full h-full'>
        <h1 className=' text-[24px] font-bold text-black'>Summary</h1>
        <div className='border-[2px] border-[#00000013] flex flex-col gap-y-5 rounded-md p-3 '>
               <div className=' flex items-center gap-3'>
                  <button className=' flex gap-1 items-center w-full hover:bg-[#80E9001A] transform transition-all duration-100 ease-in p-3 border-[1px] border-[#0000001b] rounded-md'>
              <span className=' bg-[#fff] w-[50px] h-[50px] rounded-full shadow-sm flex items-center justify-center'><CgProfile /></span>
              <span className=' flex flex-col items-start  gap-y-1 text-[10px] font-[400] text-black/50'>Customer <span className=' text-[14px] text-[#000] font-medium'>Ali Hassan</span></span>
            </button>
            <button className=' flex gap-1 items-center w-full hover:bg-[#80E9001A] transform transition-all duration-100 ease-in p-3 border-[1px] border-[#0000001b] rounded-md'>
              <span className=' bg-[#fff] w-[50px] h-[50px] rounded-full shadow-sm flex items-center justify-center'><CgProfile /></span>
              <span className=' flex flex-col items-start  gap-y-1 text-[10px] font-[400] text-black/50'>Service <span className=' text-[14px] text-[#000] font-medium'>Ear Wax Removal 1 ear - £35</span></span>
            </button>

            <button className=' flex gap-1 items-center w-full hover:bg-[#80E9001A] transform transition-all duration-100 ease-in p-3 border-[1px] border-[#0000001b] rounded-md'>
              <span className=' bg-[#fff] w-[50px] h-[50px] rounded-full shadow-sm flex items-center justify-center'><CgProfile /></span>
              <span className=' flex flex-col items-start  gap-y-1 text-[10px] font-[400] text-black/50'>Date & Time <span className=' text-[14px] text-[#000] font-medium'>18/09/2025, 11:30am-12:00pm</span></span>
            </button>
               </div>
              
              <button className=' flex items-center justify-between w-full'><span className=' text-[#4E4E4E] text-[14px] font-normal'>Subtotal</span> <span className=' text-[#4E4E4E] p-4 rounded-md bg-[#F8F8F8]'>£35.00</span></button>

                            <button className=' flex items-center justify-between w-full'><span className=' text-[#4E4E4E] text-[14px] font-normal'>Total Amount Payable</span> <span className=' text-[#4E4E4E] p-4 rounded-md bg-[#F8F8F8]'>£35.00</span></button>

                            <div className=' flex items-center justify-between'>
                              <h2 className=' text-[#80E900] font-normal text-[10px]'>Select Payment Method</h2>
                              <div className=' flex items-center gap-4'>
                                <button className=' text-[#4E4E4E] border-[1px] border-black/10 py-3 px-5 rounded-md'>Pay Locally</button>
                                <button className=' text-[#4E4E4E] border-[1px] border-black/10 py-3 px-5 rounded-md'>Credit Card</button>
                              </div>
                            </div>
        </div>
          <button className=' flex absolute bottom-3 right-3  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Send</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
        </div>
  )
}

export default Summery