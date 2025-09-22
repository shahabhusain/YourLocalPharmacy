import React from 'react'
import Hero from '../components/home/Hero'
import WeSolve from '../components/home/WeSolve'
import WeAreOffering from '../components/home/WeAreOffering'
import Unlock from '../components/home/Unlock'
import WeSolveDigital from '../components/home/WeSolveDigital'
import LatestNews from '../components/home/LatestNews'
import { ScrollRestoration } from 'react-router-dom'

const Home = () => {
  return (
    <div className=''>
      <ScrollRestoration />
      <Hero />
      <WeSolve />
      <WeAreOffering />
      <Unlock />
      <WeSolveDigital />
      <LatestNews />
    </div>
  )
}

export default Home