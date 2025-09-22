import React from 'react'
import Title from '../components/Title'
import Main from '../components/appointment/Main'
import { ScrollRestoration } from 'react-router-dom'

const Appointment = () => {
  return (
    <div className=''>
      <ScrollRestoration />
        <Title title="Appointment" />
        <Main />
    </div>
  )
}

export default Appointment