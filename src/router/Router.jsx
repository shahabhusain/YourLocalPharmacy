import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Precription from '../pages/Precription'
import Blogs from '../pages/Blogs'
import FluVaccination from '../pages/FluVaccination'
import HealthAtoZ from '../pages/HealthAtoZ'
import MedicineAtoZ from '../pages/MedicineAtoZ'
import Appointment from '../pages/Appointment'
import NewMedicone from '../pages/NewMedicone'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Layout />}>
         <Route index  element={<Home />}/>
         <Route path='/about-us'  element={<About />}/>
          <Route path='/services'  element={<Services />}/>
           <Route path='/prescription'  element={<Precription />}/>
            <Route path='/blogs'  element={<Blogs />}/>
             <Route path='/flu-Vaccination-service'  element={<FluVaccination />}/>
              <Route path='/health'  element={<HealthAtoZ />}/>
               <Route path='/medicine'  element={<MedicineAtoZ />}/>
                 <Route path='/appointment'  element={<Appointment />}/>
                  <Route path='/new-medicine'  element={<NewMedicone />}/>
        </Route>
        </>
    )
)