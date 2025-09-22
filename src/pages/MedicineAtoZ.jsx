import React from 'react'
import Title from '../components/Title'
import Links from '../components/medicine/Links'
import { ScrollRestoration } from 'react-router-dom'

const MedicineAtoZ = () => {
  return (
    <div>
      <ScrollRestoration />
        <Title title="Medicine A-Z" />
        <Links />
    </div>
  )
}

export default MedicineAtoZ