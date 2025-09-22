import React from 'react'
import Title from '../components/Title'
import Links from '../components/health/Links'
import { ScrollRestoration } from 'react-router-dom'

const HealthAtoZ = () => {
  return (
    <div>
      <ScrollRestoration />
        <Title title="Health A to Z" />
        <Links />
    </div>
  )
}

export default HealthAtoZ