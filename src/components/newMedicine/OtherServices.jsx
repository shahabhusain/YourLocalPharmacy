import React from 'react'

import icon7 from '../../assets/icons7.png'
import { FaArrowRight } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import icon from '../../assets/right.png'
const OtherServices = ({data, title, desc1, desc2, desc3}) => {

const location = useLocation().pathname
        const data2 = [
            {
                desc:"For more contact us:"
            },
                {
                desc:"238 Wheelwright Road, Erdington, Birmingham, B24 8EH 0121 377 8811"
            },
                    {
                desc:"info@yourlocal-pharmacy.co.uk"
            },
                
        ]
  return (
    <div className={` bg-black md:p-20 rounded-t-[3rem] flex flex-col md:flex-row justify-between   ${location === "/weight-management" ? "md:mt-[130px] mt-[50px]" : " md:mt-[450px] mt-[350px]"}`}>
        <div className=' bg-[#ffffff12] px-5 py-12 rounded-2xl md:w-[60%] flex flex-col gap-y-4'>
           <div className=' flex items-center justify-between'>
               <h1 className=' text-[24px] font-bold text-white'>{title}</h1>
           <img src={icon7} alt="" />
           </div>
           <p className=' text-[16px] font-[300] text-[#ffffff9c] mt-6'>{desc1}</p>
           <p className=' text-[16px] font-[300] text-[#ffffff9c]'>{desc2}</p>
           <p className=' text-[16px] font-[300] text-[#ffffff9c]'>{desc3}</p>
             {location === "/independent-prescriber" ? <>     <div className=' flex flex-col gap-y-5 w-[60%]'>
                    {
                data2.map((item, index)=>(
                    <button key={index} className=' text-[14px] flex items-center gap-5  text-start font-semibold text-white bg-[#1e1e1e12] p-5 rounded-md'><img className=' object-contain' src={icon} alt="" />  <span>{item.desc}</span></button>
                ))
              }
             </div></> : null}
        </div>

      
        <div className='bg-[#ffffff12] p-5 rounded-2xl md:w-[35%] flex flex-col gap-y-5'>
         <h1 className=' text-[24px] font-bold text-white'>Others Services</h1>
           {
            data.map((item, index)=>(
                 <button key={index} className=' flex items-center rounded-md text-white justify-between bg-[#ffffff13] py-3 px-5'><span className=' flex items-center gap-4'><img src={item.icon} alt="" /> {item.title}</span> <span><FaArrowRight /></span></button>
            ))
           }
        </div>
    </div>
  )
}

export default OtherServices