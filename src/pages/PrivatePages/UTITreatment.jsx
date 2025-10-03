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
import right from '../../assets/uti.png'
import Main from '../../components/UIT/Main'
import { ScrollRestoration } from 'react-router-dom'
const UTITreatment = () => {
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
            title:"Children with UTIs may also:",
            desc:"have a high temperature – your child is feeling hotter than usual if you touch their neck, back or tummy appear generally unwell – babies and young children may be irritable and not feed or eat properly wet the bed or wet themselves be sick"         },
        {
            icon:icons2,
            title:"Further investigations",
            desc:"You may be referred to a specialist urology or uro-gynecology department if the UTI (s) do not resolve for further investigations. These investigations may include: Ultrasound scan of the bladder and/ or kidney(s Urine flow tests +/- post void bladder scans (portable Cystoscope to examine inside the bladder."         },
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
        <Title title="UTI Treatment" />
        <OtherServices data={data}  title="UTI Treatment"  desc1="Urinary tract infections (UTIs) are common infections that affect the bladder, the kidneys and the tubes connected to them.Anyone can get them, but they’re particularly common in women. Some women experience them regularly (called recurrent UTIs).UTIs can be painful and uncomfortable, but usually pass within a few days and can be treated with antibiotics." desc2="pain or a burning sensation when peeing (dysuria)
needing to pee more often than usual during the night (nocturia)
pee that looks cloudy, dark or has a strong smell
needing to pee suddenly or more urgently than usual
needing to pee more often than usual
blood in your pee
lower tummy pain or pain in your back, just under the ribs
a high temperature, or feeling hot and shivery
a very low temperature below 36C"  />
        <ServiceWork data={data1}  />
        <Main />
         <Cards data={data2} image={right} />
    </div>
  )
}

export default UTITreatment