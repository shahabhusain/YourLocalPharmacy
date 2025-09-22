import React from 'react'
import Title from '../components/Title'
import AtYourLocal from '../components/fluVaccination/AtYourLocal'
import FluVaccineInfo from '../components/fluVaccination/FluVaccineInfo'
import { ScrollRestoration } from 'react-router-dom'

const FluVaccination = () => {
  return (
    <div>
      <ScrollRestoration />
        <Title title="Flu Vaccination Service" />
        <AtYourLocal />
        <FluVaccineInfo />
    </div>
  )
}

export default FluVaccination