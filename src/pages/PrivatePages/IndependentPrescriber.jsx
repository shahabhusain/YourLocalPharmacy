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
import ind from '../../assets/ind.png'
import Main from '../../components/Independent/Main'
const IndependentPrescriber = () => {
      const data = [
          {
              icon:icon1,
              title:"Vitamin B12"
          },
          {
              icon:icon2,
              title:"Flu Vaccination Service"
          },
          {
              icon:icon3,
              title:"UTI Treatment"
          },
          {
              icon:icon4,
              title:"Cryotherapy"
          },
          {
              icon:icon5,
              title:"Weight Management"
          },
          {
              icon:icon6,
              title:"Blood Testing"
          },
      ]

  return (
    <div>
        <Title title="Independent Prescriber" />
        <OtherServices data={data}  title="Independent Prescriber"  desc1="We are able to treat a range of illnesses with prescription strength medication, at the discretion of the Prescriber. Consultation fee is £25.Independent prescribing is prescribing by a practitioner, who is responsible and accountable for the assessment of service users with undiagnosed or diagnosed conditions and for decisions about the clinical management required.
"   />  
<Main />
         <img className=' w-[90%] object-cover mx-auto rounded-2xl my-20' src={ind} alt="" />
         
    </div>
  )
}

export default IndependentPrescriber