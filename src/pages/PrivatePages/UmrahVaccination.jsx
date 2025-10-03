import React from 'react'
import Title from '../../components/Title'
import OtherServices from '../../components/newMedicine/OtherServices'
import ServiceWork from '../../components/newMedicine/ServiceWork'
import Cards from '../../components/newMedicine/Cards'
import icon1 from '../../assets/icons1.png'
import icon2 from '../../assets/icons2.png'
import icon3 from '../../assets/icons3.png'
import icon4 from '../../assets/icons4.png'
import icon5 from '../../assets/icons5.png'
import icon6 from '../../assets/icons6.png'
import icons1 from '../../assets/icon1.png'
import icons2 from '../../assets/icon3.png'
import icons3 from '../../assets/icon8.png'
import icons4 from '../../assets/icon6.png'
import umrah from '../../assets/umrah.jpg'
import Main from '../../components/Hajj&Umrah/Main'
import { ScrollRestoration } from 'react-router-dom'
const UmrahVaccination = () => {
   const data = [
          {
              icon:icon1,
              title:"Vitamin B12",
              path:"/vitamin-b12"
          },
          {
              icon:icon2,
              title:"Flu Vaccination Service",
              path:"/flu-Vaccination-service"
          },
          {
              icon:icon3,
              title:"UTI Treatment",
               path:"/uti-treatment"
          },
          {
              icon:icon4,
              title:"Cryotherapy",
               path:"/cryotherapy"
          },
          {
              icon:icon5,
              title:"Weight Management",
               path:"/weight-management"
          },
          {
              icon:icon6,
              title:"Blood Testing",
               path:"/blood-test"
          },
      ]
          const data1 = [
        {
            icon:icons1,
            title:"personalised Travel Health Consultations",
            desc:"Receive tailored advice based on your specific travel itinerary and health needs."         },
        {
            icon:icons2,
            title:"Convenient Online Booking",
            desc:"Easily schedule your vaccination appointment through our user-friendly online platform."         },
                    {
            icon:icons3,
            title:"Same-Day Appointments Available",
            desc:"For last-minute travelers, we offer same-day vaccination appointments when possible."         },
                    {
            icon:icons4,
            title:"Follow-Up Reminders",
            desc:"Receive reminders for any necessary follow-up vaccinations or health checks."         },
    ]

  return (
    <div>
        <ScrollRestoration />
        <Title title="Hajj & Umrah Vaccination" />
        <OtherServices data={data}  title="Hajj & Umrah Vaccination"  desc1="If you're preparing for Hajj or Umrah, remember that Saudi Arabia travel requirements include proof of the Meningococcal (Meningitis) ACWY vaccine." desc2="We offer the essential Meningococcal (Meningitis) ACWY vaccine and certificate service right here in Erdington. Book Online Now to avoid any last-minute stress and ensure you meet the Hajj and Umrah vaccination requirements." desc3="We recommend scheduling your appointment 6–8 weeks before your travel date to allow ample time for your body to develop immunity."  />
        <ServiceWork data={data1}  />
        <Main />
         <img className=' md:px-20  md:py-10 mb-4 md:mb-0 object-contain rounded-[150px]' src={umrah} alt="" />
    </div>
  )
}

export default UmrahVaccination