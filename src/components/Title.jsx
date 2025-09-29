import React from 'react'

const Title = ({title, desc}) => {
  return (
    <div className='bg5 w-full flex flex-col gap-y-2 items-center justify-center md:h-[450px] h-[350px] absolute top-0'>
        <h1 className=' lg:text-[80px] md:text-[60px] sm:text-[50px] text-center mt-20 text-[40px] font-bold text-black'>{title}</h1>
        <p className=' text-[14px] font-medium text-black'>{desc}</p>
    </div>
  )
}

export default Title