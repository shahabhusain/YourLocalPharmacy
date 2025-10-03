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
import Main from '../../components/VitB12/Main'
import { ScrollRestoration } from 'react-router-dom'
const VitaminB12 = () => {
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
            title:"What is the benefit of having a Vitamin B12 injection?",
            desc:"Vitamin B12 can provide an energy boost, which in turn promotes a positive impact on health and wellbeing."         },         {
            icon:icons2,
            title:"How often does one need a Vitamin B12 injection?",
            desc:"Following a comprehensive consultation with the Practitioner, the injection regime will be tailored according to the individual’s clinical needs and lifestyle."         },

              {
            icon:icons2,
            title:"Where is the Vitamin B12 injected?",
            desc:"Vitamin B12 is a muscular injection into the shoulder. Single Vitamin B12 Shot = £30"         },

              {
            icon:icons2,
            title:"Will I require a blood test prior to receiving a Vitamin B12 injection?",
            desc:"No, a blood test is not required before having this Vitamin B12 injection. As Vitamin B12 is a water-soluble vitamin, the body will simply excrete any excess amount out in the urine."         },

              {
            icon:icons2,
            title:"Is there anyone that can’t have a Vitamin B12 injection?",
            desc:"Unfortunately, there are a small number of groups of patients that are unsuitable for the service. These patients are: aged 18 years and young pregnant and breastfeeding mother kidney disease liver ideas Lebar’s disease"         },

              {
            icon:icons2,
            title:"How likely is it that something could go wrong?",
            desc:"It’s highly unlikely that something could go wrong as a result of a B12 injection. For your reassurance, we prescribe a licensed UK medicine that has been used for decades without incident. We only allow specially trained and experienced pharmacists to administer the injection to you."         },
             ]

  return (
    <div>
      <ScrollRestoration />
        <Title title="Vitamin B12" />
        <OtherServices data={data}  title="Vitamin B12"  desc1="Feeling run down and tired all of the time? Find it difficult to become motivated or stay focused? Feeling low in mood or energy levels? Struggle to sleep or fight off infections? You may be deficient in Vitamin B12. Good news though, you can get the Vitamin B12 Injection in Birmingham through Your Local Erdington Pharmacy." desc2="Vitamin B12 is a micronutrient called cobalamin. It is one of 13 essential vitamins that our bodies require to stay alive and remain healthy. Vitamin B12 plays a crucial role in a number of bodily functions:

– Essential in the composition of DNA

– Vital for the development and functioning of the brain and nerve cells

– Required to make red blood cells

Sub-optimal levels of B12 can lead to symptoms of tiredness, fatigue, poor memory, low mood and reduced mental function." desc3="Vitamin B12 is naturally found in meat, eggs, poultry, and milk. It is a water-soluble vitamin, and so it quickly and easily leaves our body in our urine. It is therefore uncommon to overdose in Vitamin B12"  />
<Main />
        <ServiceWork data={data1}  />
    </div>
  )
}

export default VitaminB12