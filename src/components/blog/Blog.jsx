import React from 'react'
import img1 from '../../assets/imgg1.png'
import img2 from '../../assets/imgg2.png'
import img3 from '../../assets/imgg3.png'
import img4 from '../../assets/img4.png'
import right from '../../assets/rightside.png'
import { FaSearch } from 'react-icons/fa'
const Blog = () => {
    const blogData = [
        {
            img:img1,
            date:"July 12, 2025",
            desc:"See how data and creativity combine to create high-impact marketing campaigns."
        },
                {
            img:img2,
            date:"July 12, 2025",
            desc:"See how data and creativity combine to create high-impact marketing campaigns."
        },
                {
            img:img3,
            date:"July 12, 2025",
            desc:"See how data and creativity combine to create high-impact marketing campaigns."
        },
                {
            img:img4,
            date:"July 12, 2025",
            desc:"See how data and creativity combine to create high-impact marketing campaigns."
        },

    ]
  return (
    <div className=' md:mt-[400px] mt-[350px] mb-[100px] flex flex-col md:flex-row  justify-between w-[90%] mx-auto'>
        <div className=' flex flex-col gap-y-5 md:w-[65%]'>
            <img src={right} alt="" />
            <h1 className=' text-[24px] font-bold text-black'>Did you just SHOOT yourself?</h1>
            <div  className=' text-[14px] font-[400] text-[#4E4E4E] flex items-center gap-5'><span>by admin</span> <span>Nov 29, 2024</span> <span>Uncategorized</span></div>
            <p  className=' text-[14px] font-[400] text-[#4E4E4E]'>Is Cryotherapy Right for You? When to See Your Pharmacist
Is Cryotherapy Right for You? When to See Your Pharmacist
Cryotherapy has emerged as a popular treatment option in recent years, garnering both media attention and enthusiastic endorsements from many in the healthcare community. As a private service offered at Your Local Pharmacy, cryotherapy provides a non-invasive method to manage pain and reduce inflammation, among other benefits. In this FAQ, we address common questions about cryotherapy, helping you understand whether it might be the right treatment for you—and when it makes sense to speak with your pharmacist.
</p>
        </div>

         <div className='border-[#0000000e] border-[1px] flex flex-col gap-y-5 rounded-md py-3 px-5 md:w-[30%] mt-5 md:mt-0'>
                    <div className='flex outline focus-within:outline-[#80E900] border-none py-3 px-5 rounded-md bg-[#F8F8F888] items-center justify-between '>
         <input className=' focus:outline-none border-none' type="text" placeholder='search' />
         <FaSearch size={20} className=' text-[#80E900]' />
        </div>
        <div className=' flex flex-col gap-y-4'>
          {
            blogData.map((item, index)=>(
                            <div key={index} className='border-[#0000000e] gap-4 border-[1px] flex items-center justify-between rounded-md py-3 px-5'>
                <img src={item.img} alt="" />
                <div>
                    <h1 className=' text-[16px] font-bold text-[#000000be]'>{item.date}</h1>
                    <p className=' text-[14px] font-medium'>{item.desc}</p>
                </div>
            </div>
            ))
          }
        </div>
         </div>
    </div>
  )
}

export default Blog