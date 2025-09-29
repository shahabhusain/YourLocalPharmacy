import React from 'react'
import icon from '../../assets/right.png'

const Cards = ({data, image}) => {

  return (
    <div className=' flex flex-col md:flex-row justify-between w-[90%] mx-auto my-20'>
     <div className=' flex flex-col gap-y-5 md:w-[60%]'>
            {
        data.map((item, index)=>(
            <button key={index} className=' text-[14px] flex items-center gap-5  text-start font-semibold text-black bg-[#1e1e1e12] p-5 rounded-md'><img className=' object-contain' src={icon} alt="" />  <span>{item.desc}</span></button>
        ))
      }
     </div>
        {!image ? null :  <img className=' md:w-[35%] object-cover rounded-xl mt-5 md:mt-0' src={image} alt="" />}
    </div>
  )
}

export default Cards