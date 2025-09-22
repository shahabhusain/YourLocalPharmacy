import React from 'react'
import icon from '../../assets/right.png'
import right from '../../assets/rights.png'
const Cards = () => {
    const data = [
        {
            desc:"Here at Your Local Erdington Pharmacy, it is our top priority to ensure that our patients are taking their medication correctly and effectively. That is why we provide the new medicine service in Birmingham."
        },
                {
            desc:"The New Medicine Service provides early support to patients to identify any problems they may be having with their medicines and identify solutions to these problems. As part of the service, any further information you may need is also provided. This should enable you to maximite the benefits of the medication they have been prescribed. This consultation is based on three discussions with the pharmacist based on different times after starting the new medication prescribed to you."
        },
                {
            desc:"The service is for people who have received their first prescription for a medicine to treat any of the following conditions, Asthma, Lung conditions such as chronic bronchitis and emphysema, Type 2 diabetes, High blood pressure, or any conditions where you take a medicine to control the way your blood clots."
        },
                {
            desc:"Our pharmacist will have a chat to you about everything you need to know before taking your new medication."
        },
    ]
  return (
    <div className=' flex justify-between w-[90%] mx-auto my-20'>
     <div className=' flex flex-col gap-y-5 w-[60%]'>
            {
        data.map((item, index)=>(
            <button key={index} className=' text-[14px] flex gap-5  text-start font-semibold text-black bg-[#1e1e1e12] p-5 rounded-md'><img className=' object-contain' src={icon} alt="" />  <span>{item.desc}</span></button>
        ))
      }
     </div>
      <img className=' w-[35%]' src={right} alt="" />
    </div>
  )
}

export default Cards