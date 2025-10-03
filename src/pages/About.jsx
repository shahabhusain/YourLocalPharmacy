import React from 'react'
import Title from '../components/Title'
import WeAreOffering from '../components/home/WeAreOffering'
import Unlock from '../components/home/Unlock'
import Form from '../components/about/Form'
import { ScrollRestoration } from 'react-router-dom'

const About = () => {
  return (
    <div>
       <ScrollRestoration />
        <Title title="About Us" />
          <div className=' pt-[345px] mb-[100px]'>
             <WeAreOffering />
        <Unlock />
        {/* <Form /> */}
          </div>
    </div>
  )
}

export default About