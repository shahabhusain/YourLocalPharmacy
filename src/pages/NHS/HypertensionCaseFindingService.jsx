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
import right from '../../assets/hype.png'
import Main from '../../components/HypertensionService/Main'
import { ScrollRestoration } from 'react-router-dom'
const HypertensionCaseFindingService = () => {
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
            title:"Inclusion criteria",
            desc:"Adults who are 40 years old or over, who do not have a current diagnosis of hypertension; Patients, by exception, under the age of 40 who request the service because they have a recognized family history of hypertension may be provided the service at the pharmacist’s discretion; Patients between 35 and 39 years old who are approached about or request the service may be tested at the pharmacist’s discretion; and Adults specified by a general practice for the measurement of blood pressure (clinic and ambulatory blood pressure checks). This process should be agreed locally with general practices."         },
        {
            icon:icons2,
            title:"Exclusion criteria",
            desc:"people who are unable to give consent to participate; People under the age of 40 years old, unless at the discretion of the pharmacist or unless they have been specified by a general practice for the measurement of blood pressure; and People who have their blood pressure regularly monitored by a healthcare professional, unless the general practice requests the service is provided for the patient. Requests should be sent via a process which is agreed locally with general practices."         },
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
        <Title title="Hypertension Case Finding Service" />
        <OtherServices data={data}  title="Hypertension Case Finding Service"  desc1="The NHS Community Pharmacy Hypertension Case-Finding Advanced Service was announced on 24 August 2021 as part of the Year 3 Community Pharmacy Contractual Framework and was launched on 1st October 2021." desc2="The aims and objectives of this service are to: identify people aged 40 years or older with high blood pressure, who have previously not had a confirmed diagnosis of hypertension, and to refer them to general practice to confirm diagnosis and for appropriate management (this can include people under 40 years, at the discretion of a pharmacist)
undertake clinic and ambulatory blood pressure checks when necessary, at the request of a general practice.
promote healthy behaviours to service users."  />
        <ServiceWork data={data1}  />
        <Main />
         <Cards data={data2} image={right} />
    </div>
  )
}

export default HypertensionCaseFindingService