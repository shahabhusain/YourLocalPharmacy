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
import right from '../../assets/ear.png'
import Main from '../../components/Piercing/Main'
import { ScrollRestoration } from 'react-router-dom'
const EarPiercing = () => {
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
            title:"How common are ear infections from piercings?"  ,
              desc:"Millions of people get their ears pierced every year, and most of them have no serious complications. Mild irritation and infections are common, however, for new piercings. In most cases, infections aren’t serious and clear up quickly. In one study, as many as 35% of people with pierced ears had one or more of the following complications: Minor infection: 77% Allergic reaction: 43% Scar tissue (keloid) formation: 2.5% Traumatic tearing: 2.5%."       },
        {
            icon:icons2,
            title:"Taking good care of your piercings is key to preventing infection. You should:",
            desc:"Leave your earrings in day and night until the piercings fully heal, which could take up to six weeks. Wash your hands before touching your earlobes or cartilage. Wash your piercing twice daily with a mild soap or cleanser. Carefully rinse your piercing after you wash it. Apply rubbing alcohol and/or antibiotic ointment to the area twice daily. Gently rotate your earrings daily after applying antibiotic ointment or petroleum jelly to lubricate the piercings."         },
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
    <div>
        <ScrollRestoration />
        <Title title="Ear Piercing" />
        <OtherServices data={data}  title="Ear Piercing"  desc1="If you’re thinking about getting a piercing, ask the piercer at Your Local Erdington Pharmacy.

An ear piercing is a hole through your earlobe or the cartilage in your middle or upper ear. Ear piercing infections may be red, swollen, sore, warm, itchy or tender. Sometimes, piercings ooze blood or white, yellow or green pus."
desc2="According to the NHS website there is no legal age restriction on most body piercings, but performing genital or nipple piercing on someone under the age of 16 could be considered an offense. Some local authorities and piercing businesses may have their own regulations concerning age limits and consent for body piercings."  />
        <ServiceWork data={data1}  />
        <Main />
         <Cards data={data2} image={right} />
    </div>
  )
}

export default EarPiercing