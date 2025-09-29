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
import NewMedicineService from '../pages/NHS/NewMedicineService'
import HypertensionCaseFindingService from '../pages/NHS/HypertensionCaseFindingService'
import ContraceptionService from '../pages/NHS/ContraceptionService'
import PharmacyFirst from '../pages/NHS/PharmacyFirst'
import TravelClinic from '../pages/PrivatePages/TravelClinic'
import UmrahVaccination from '../pages/PrivatePages/UmrahVaccination'
import NonTravelVaccination from '../pages/PrivatePages/NonTravelVaccination'
import BloodTesting from '../pages/PrivatePages/BloodTesting'
import BCGScarChecks from '../pages/PrivatePages/BCGScarChecks'
import EarWaxRemoval from '../pages/PrivatePages/EarWaxRemoval'
import Cryotherapy from '../pages/PrivatePages/Cryotherapy'
import VitaminB12 from '../pages/PrivatePages/VitaminB12'
import WeightManagement from '../pages/PrivatePages/WeightManagement'
import MounjaroPrice from '../pages/PrivatePages/MounjaroPrice'
import UTITreatment from '../pages/PrivatePages/UTITreatment'
import IndependentPrescriber from '../pages/PrivatePages/IndependentPrescriber'
import EarPiercing from '../pages/PrivatePages/EarPiercing'
import AltitudeSicknessTreatment from '../pages/PrivatePages/AltitudeSicknessTreatment'

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

                  <Route path='/new-medicine-service'  element={<NewMedicineService />}/>
                  <Route path='/hypertension-case-finding-service'  element={<HypertensionCaseFindingService />}/>
                  <Route path='/nhs-contraception-service'  element={<ContraceptionService />}/>
                  <Route path='/pharmacy-first'  element={<PharmacyFirst />}/>

                   <Route path='/travel-clinic'  element={<TravelClinic />}/>
                    <Route path='/hajj-umrah-vaccination'  element={<UmrahVaccination />}/>
                     <Route path='/non-travel-vaccination'  element={<NonTravelVaccination />}/>
                      <Route path='/blood-test'  element={<BloodTesting />}/>
                       <Route path='/bcg-scar-checks'  element={<BCGScarChecks />}/>
                        <Route path='/ear-wax-removal-microsuction'  element={<EarWaxRemoval />}/>
                         <Route path='/cryotherapy'  element={<Cryotherapy />}/>
                          <Route path='/vitamin-b12'  element={<VitaminB12 />}/>
                           <Route path='/weight-management'  element={<WeightManagement />}/>
                            <Route path='/switching-from-mounjaro-to-wegovy'  element={<MounjaroPrice />}/>
                             <Route path='/uti-treatment'  element={<UTITreatment />}/>
                              <Route path='/independent-prescriber'  element={<IndependentPrescriber />}/>
                               <Route path='/ear-piercing'  element={<EarPiercing />}/>
                               <Route path='/altitude-sickness-treatment'  element={<AltitudeSicknessTreatment />}/>
        </Route>
        </>
    )
)