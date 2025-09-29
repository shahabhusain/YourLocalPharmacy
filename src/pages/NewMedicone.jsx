import React from 'react'
import Title from '../components/Title'
import OtherServices from '../components/newMedicine/OtherServices'
import ServiceWork from '../components/newMedicine/ServiceWork'
import Cards from '../components/newMedicine/Cards'
import icon1 from '../assets/icons1.png'
import icon2 from '../assets/icons2.png'
import icon3 from '../assets/icons3.png'
import icon4 from '../assets/icons4.png'
import icon5 from '../assets/icons5.png'
import icon6 from '../assets/icons6.png'
import icons1 from '../assets/icon1.png'
import icons2 from '../assets/icon3.png'
import icons3 from '../assets/icon8.png'
import icons4 from '../assets/icon6.png'
const NewMedicone = () => {
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
          const data1 = [
        {
            icon:icons1,
            title:"Start your medication",
            desc:"Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers."
        },
        {
            icon:icons2,
            title:"Your second appointment",
            desc:"Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers."
        },
        {
            icon:icons3,
            title:"Your third appointment",
            desc:"Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers."
        },
        {
            icon:icons4,
            title:"How long will each appointment take?",
            desc:"Our proprietary tech taps into a 260M+ customer database and 2,000+ variables to build smarter predictive models—bringing you only high-value customers."
        },
    ]

        const data2 = [
            {
                desc:"Here at Your Local Erdington Pharmacy, it is our top priority to ensure that our patients are taking their medication correctly and effectively. That is why we provide the new medicine service in Birmingham."
            },
                    {
                desc:"The New Medicine Service provides early support to patients to identify any problems they may be having with their medicines and identify solutions to these problems. As part of the service, any further information you may need is also provided. This should enable you to maximite the benefits of the medication they have been prescribed. This consultation is based on three discussions with the pharmacist based on different times after starting the new medication prescribed to you."
            },
                    {
                desc:"The service is for people who have received their first prescription for a medicine to treat any of the following conditions, Asthma, Lung conditions such as chronic bronchitis and emphysema, Type 2 diabetes, High blood pressure, or any conditions where you take a medicine to control the way your blood clots."
            },
                    {
                desc:"Our pharmacist will have a chat to you about everything you need to know before taking your new medication."
            },
        ]
  return (
    <div>
        <Title title="New Medicine Service" />
        <OtherServices data={data}  title="Ear Wax Removal"  desc1="The service is for people who have received their first prescription for a medicine to treat any of the following conditions, Asthma, Lung conditions such as chronic bronchitis and emphysema, Type 2 diabetes, High blood pressure, or any conditions where you take a medicine to control the
way your blood clots." desc2="The service is for people who have received their first prescription for a medicine to treat any of the following conditions, Asthma, Lung conditions such as chronic bronchitis and emphysema, Type 2 diabetes, High blood pressure, or any conditions where you take a medicine to control the
way your blood clots." desc3="The service is for people who have received their first prescription for a medicine to treat any of the following conditions, Asthma, Lung conditions such as chronic bronchitis and emphysema, Type 2 diabetes, High blood pressure, or any conditions where you take a medicine to control the
way your blood clots." />
        <ServiceWork data={data1}  />
        <Cards data={data2} />
    </div>
  )
}

export default NewMedicone