import React from 'react'
import icon1 from '../../assets/icons1.png'
import icon2 from '../../assets/icons2.png'
import icon3 from '../../assets/icons3.png'
import icon4 from '../../assets/icons4.png'
import icon5 from '../../assets/icons5.png'
import icon6 from '../../assets/icons6.png'
import icon7 from '../../assets/icons7.png'
import { FaArrowRight } from 'react-icons/fa'
const OtherServices = () => {
    const data = [
        {
            icon:icon1,
            title:"Vitamin B12"
        },
        {
            icon:icon2,
            title:"Flu Vaccination Service"
        },
        {
            icon:icon3,
            title:"UTI Treatment"
        },
        {
            icon:icon4,
            title:"Cryotherapy"
        },
        {
            icon:icon5,
            title:"Weight Management"
        },
        {
            icon:icon6,
            title:"Blood Testing"
        },
    ]
  return (
    <div className=' bg-black p-20 rounded-t-[3rem] flex justify-between mt-[350px]'>
        <div className=' bg-[#ffffff12] px-5 py-12 rounded-2xl w-[60%] flex flex-col gap-y-4'>
           <div className=' flex items-center justify-between'>
               <h1 className=' text-[24px] font-bold text-white'>Ear Wax Removal</h1>
           <img src={icon7} alt="" />
           </div>
           <p className=' text-[16px] font-[300] text-[#ffffff9c] mt-6'>Here at Your Local Erdington Pharmacy, it is our top priority to ensure that our patients are taking their medication correctly and effectively. That is why we provide the new medicine service in Birmingham.</p>
           <p className=' text-[16px] font-[300] text-[#ffffff9c]'>The service is for people who have received their first prescription for a medicine to treat any of the following conditions, Asthma, Lung conditions such as chronic bronchitis and emphysema, Type 2 diabetes, High blood pressure, or any conditions where you take a medicine to control the
way your blood clots.</p>
           <p className=' text-[16px] font-[300] text-[#ffffff9c]'>The service is for people who have received their first prescription for a medicine to treat any of the following conditions, Asthma, Lung conditions such as chronic bronchitis and emphysema, Type 2 diabetes, High blood pressure, or any conditions where you take a medicine to control the
way your blood clots.</p>
        </div>

        <div className='bg-[#ffffff12] p-5 rounded-2xl w-[35%] flex flex-col gap-y-5'>
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