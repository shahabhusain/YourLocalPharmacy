import React from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon3.png'
import icon3 from '../../assets/icon8.png'
import icon4 from '../../assets/icon6.png'
const ServiceWork = () => {
    const data = [
        {
            icon:icon1,
            title:"Start your medication",
            desc:"Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers."
        },
        {
            icon:icon2,
            title:"Your second appointment",
            desc:"Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers."
        },
        {
            icon:icon3,
            title:"Your third appointment",
            desc:"Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers."
        },
        {
            icon:icon4,
            title:"How long will each appointment take?",
            desc:"Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers."
        },
    ]
  return (
    <div className=' bg-[#0c0c0c] p-20 flex flex-col items-center rounded-b-[3rem]  gap-y-6'>
        <h1 className=' text-[24px] font-bold text-white text-center'>How this service works?</h1>
         <div className=' grid grid-cols-2 gap-5 mt-6'>
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