import React from 'react'
import Title from '../components/Title'
import Service from '../components/Services/Service'
import Unlock from '../components/home/Unlock'
import WeSolveDigital from '../components/home/WeSolveDigital'
import { ScrollRestoration } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <ScrollRestoration />
        <Title title="Our Services" desc="Serving Eddington, Gravelly Hill, Washroom Heath, Sutton Cloudfield, Aston & beyond with modern healthcare services." />
        <Service />
        <Unlock />
        <WeSolveDigital />
    </div>
  )
}

export default Services