import React from 'react'
import Title from '../components/Title'
import EasilyHandle from '../components/Prescription/EasilyHandle'
import Join from '../components/Prescription/Join'
import { ScrollRestoration } from 'react-router-dom'

const Precription = () => {
  return (
    <div>
      <ScrollRestoration />
        <Title title="Prescriptions" desc="Easily handle your repeat prescriptions" />
          <div className=''>
            <EasilyHandle />
            <Join />
          </div>
    </div>
  )
}

export default Precription