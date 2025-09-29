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
import right from '../../assets/rights.png'
import Main from '../../components/NewMedicineService/Main'
const NewMedicineService = () => {
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
            desc:"You can talk to the pharmacist when you first start taking your medicine and ask any questions you may have about it. For example, you might want to know about side effects or how you can fit your treatment around your lifestyle."
        },
        {
            icon:icons2,
            title:"Your second appointment",
            desc:"You’ll have a follow-up appointment 2 weeks later, when you and our pharmacist can talk about any issues you might have experienced with the medicine. Our pharmacist can help you get back on track and work with you to find solutions to any issues."
        },
        {
            icon:icons3,
            title:"Your third appointment",
            desc:"You will have your last appointment a further 2 weeks later, when you can catch up with our pharmacist again to see how you’re getting on. The service then ends, but our pharmacist will always talk to you about your medicines when you need help."
        },
        {
            icon:icons4,
            title:"How long will each appointment take?",
            desc:"The appointments are designed to fit around you, but a typical consultation will take around 10-15 minutes. Contact us today to book your appointment for the New Medicine Service in Birmingham."
        },
    ]

        const data2 = [
            {
                desc:"Here at Your Local Erdington Pharmacy, it is our top priority to ensure that our patients are taking their medication correctly and effectively. That is why we provide the new medicine service in Birmingham."
            },
                {
                desc:"The service is for people who have received their first prescription for a medicine to treat any of the following conditions, Asthma, Lung conditions such as chronic bronchitis and emphysema, Type 2 diabetes, High blood pressure, or any conditions where you take a medicine to control the way your blood clots."
            },
                    {
                desc:"The New Medicine Service provides early support to patients to identify any problems they may be having with their medicines and identify solutions to these problems. As part of the service, any further information you may need is also provided. This should enable you to maximite the benefits of the medication they have been prescribed. This consultation is based on three discussions with the pharmacist based on different times after starting the new medication prescribed to you."
            },
                
                    {
                desc:"Our pharmacist will have a chat to you about everything you need to know before taking your new medication."
            },
        ]
  return (
    <div className=' mt-20'>
        <Title title="New Medicine Service" />
        <OtherServices data={data}  title="New Medicine Service"  desc1="Here at Your Local Erdington Pharmacy, it is our top priority to ensure that our patients are taking their medication correctly and effectively. That is why we provide the new medicine service in Birmingham." desc2="The service is for people who have received their first prescription for a medicine to treat any of the following conditions, Asthma, Lung conditions such as chronic bronchitis and emphysema, Type 2 diabetes, High blood pressure, or any conditions where you take a medicine to control the way your blood clots." desc3="The New Medicine Service provides early support to patients to identify any problems they may be having with their medicines and identify solutions to these problems. As part of the service, any further information you may need is also provided. This should enable you to maximite the benefits of the medication they have been prescribed. This consultation is based on three discussions with the pharmacist based on different times after starting the new medication prescribed to you." />
        <ServiceWork data={data1}  />
        <Main />
        <Cards data={data2} image={right} />
    </div>
  )
}

export default NewMedicineService