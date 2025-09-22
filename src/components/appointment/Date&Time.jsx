import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar-custom.css'; 
import { IoMdArrowForward } from 'react-icons/io';

const DateTime = () => {
  const [value, setValue] = useState(new Date());
   const morningTime = [
    {
      startDate:"09:00 am",
      endData:"10:00 am",
      slot:"1 slot left"
    },
  {
      startDate:"09:00 am",
      endData:"10:00 am",
      slot:"1 slot left"
    },
  {
      startDate:"09:00 am",
      endData:"10:00 am",
      slot:"1 slot left"
    },
  {
      startDate:"09:00 am",
      endData:"10:00 am",
      slot:"1 slot left"
    },
   ]
  return (
    <div className="border-2 rounded-xl relative  h-full  border-black/10 px-6 pt-6 pb-20 w-full  mx-auto bg-white ">
      <h1 className="text-2xl font-bold  mb-4 text-black">
        Date &amp; Time
      </h1>
         <div className=' w-full flex justify-between gap-6'>
            <div className='border-2 w-[50%] rounded-xl p-12 border-black/10'>
                <Calendar
        onChange={setValue}
        value={value}
        prevLabel="<"
        nextLabel=">"
        calendarType="gregory"
      />
        </div>

        <div className='border-2 w-[50%] h-[400px] overflow-y-scroll rounded-xl flex flex-col gap-y-5 p-4 border-black/10'>
           <h1 className=' text-[20px] font-medium text-black'>Time Slot</h1>
             <h2 className=' text-[#4E4E4E] text-[16px] font-[700]'>Morning</h2>
              <div className=' grid grid-cols-2 gap-4'>
                {
                  morningTime.map((item,index)=>(
                     <div key={index} className=' flex-col gap-y-1 bg-[#F8F8F8] p-4 rounded-md flex'>
              <h1 className=' text-[#4E4E4E] text-[14px] font-normal'>{item.startDate} - {item.endData}</h1>
              <p className=' text-[10px] font-normal text-[#4E4E4E]'>{item.slot}</p>
             </div>
                  ))
                }
              </div>

                 <h2 className=' text-[#4E4E4E] text-[16px] font-[700]'>Afternoon</h2>
              <div className=' grid grid-cols-2 gap-4'>
                {
                  morningTime.map((item,index)=>(
                     <div key={index} className=' flex-col gap-y-1 bg-[#F8F8F8] p-4 rounded-md flex'>
              <h1 className=' text-[#4E4E4E] text-[14px] font-normal'>{item.startDate} - {item.endData}</h1>
              <p className=' text-[10px] font-normal text-[#4E4E4E]'>{item.slot}</p>
             </div>
                  ))
                }
              </div>
        </div>
         </div>
         
                     <button className=' absolute bottom-3 right-3 flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Next</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
    </div>
  );
};

export default DateTime;
