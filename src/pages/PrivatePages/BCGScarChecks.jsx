import React from 'react'
import Title from '../../components/Title'
import OtherServices from '../../components/newMedicine/OtherServices'
import Cards from '../../components/newMedicine/Cards'
import icon1 from '../../assets/icons1.png'
import icon2 from '../../assets/icons2.png'
import icon3 from '../../assets/icons3.png'
import icon4 from '../../assets/icons4.png'
import icon5 from '../../assets/icons5.png'
import icon6 from '../../assets/icons6.png'

import right from '../../assets/bcg.jpg'
import Main from '../../components/BCG/Main'
import { ScrollRestoration } from 'react-router-dom'
const BCGScarChecks = () => {
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

                const data2 = [
            {
                desc:"For more contact us:"
            },
                {
                desc:`Unit 9 Manor Road Industrial Estate`
            },
                    {
                desc:"Unit 9 Manor Road Industrial Estate"
            },
        ]
  return (
    <div className=' mt-20'>
        <ScrollRestoration />
        <Title title="BCG Scar Checks" />
        <OtherServices data={data}  title="BCG Scar Checks"  desc1="Your Local Erdington Pharmacy provide a BCG Scar Check Service, which involves a healthcare professional taking a vaccination history and physically checking the arm for a scar to see whether that person has received the BCG vaccination.
This service is suitable for all patients over 18+ years of age.
If a scar is visible, the healthcare professional will provide a certificate to confirm the presence of the BCG mark.
If a scar is not visible, they will provide advice on the next steps." desc2="A person may be required to undergo an occupational health BCG scar check if they are a starting a new role in (but not limited to) healthcare, at a prison, when working with specific animals, in a care home, or at a homeless or asylum seeker shelter." />
<Main />
        <Cards data={data2} image={right} />
    </div>
  )
}

export default BCGScarChecks