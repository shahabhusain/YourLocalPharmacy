import React from 'react'

const Title = ({title, desc}) => {
  return (
    <div className='bg5 w-full flex flex-col gap-y-2 items-center justify-center h-[450px] absolute top-0'>
        <h1 className=' text-[80px] font-bold text-black'>{title}</h1>
        <p className=' text-[14px] font-medium text-black'>{desc}</p>
    </div>
  )
}

export default Title