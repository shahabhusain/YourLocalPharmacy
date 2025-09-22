import React from 'react'
import Title from '../components/Title'
import OtherServices from '../components/newMedicine/OtherServices'
import ServiceWork from '../components/newMedicine/ServiceWork'
import Cards from '../components/newMedicine/Cards'

const NewMedicone = () => {
  return (
    <div>
        <Title title="New Medicine Service" />
        <OtherServices />
        <ServiceWork />
        <Cards />
    </div>
  )
}

export default NewMedicone