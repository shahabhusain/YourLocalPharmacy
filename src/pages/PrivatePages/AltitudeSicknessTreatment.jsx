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
import right from '../../assets/tit.png'
import Main from '../../components/Altitude/Main'
import { ScrollRestoration } from 'react-router-dom'
const AltitudeSicknessTreatment = () => {
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
            title:"Our Pharmacy's Expertise",
            desc:"Our pharmacy in Erdington, Birmingham, UK, is dedicated to helping you stay healthy and safe at high altitudes. Our team of experienced pharmacists understands the challenges of altitude sickness and is equipped to provide effective treatment and advice. Whether you're planning a hiking trip to the Alps or a mountaineering expedition to the Himalayas, we can help you prepare and address any altitude-related concerns."         },
        {
            icon:icons2,
            title:"Personalized Care",
            desc:"At our pharmacy, we offer a personalised approach to altitude sickness care. Our pharmacists will carefully assess your individual needs, considering factors like your health history, the altitude you'll be reaching, and your personal tolerance. Based on this assessment, we'll provide tailored recommendations for prevention and treatment."         },
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
          const faqData = [
    {
      question: "What is altitude sickness?",
      answer: "Altitude sickness, also known as acute mountain sickness (AMS), is a condition that occurs when a person ascends to a high altitude too quickly. The body struggles to adjust to the reduced oxygen levels, leading to various symptoms."
    },
    {
      question: "What are the common symptoms of altitude sickness?",
      answer: "Common symptoms include headaches, nausea and vomiting, fatigue, dizziness, loss of appetite, difficulty sleeping, and shortness of breath."
    },
    {
      question: "How can I prevent altitude sickness?",
      answer: "To prevent altitude sickness, it's recommended to ascend gradually, stay hydrated, avoid alcohol and caffeine, and consider preventative medications like acetazolamide."
    },
    {
      question: "What should I do if I experience symptoms of altitude sickness?",
      answer: "If you experience symptoms, rest, hydrate, take over-the-counter medication, and descend if necessary."
    },
    {
      question: "When should I seek medical attention?",
      answer: "Seek immediate medical attention if you experience severe symptoms like difficulty breathing, confusion, or swelling. These could be signs of more serious conditions like high-altitude pulmonary oedema (HAPE) or high-altitude cerebral oedema (HACE)."
    }
  ];
  return (
    <div>
        <ScrollRestoration />
        <Title title="Altitude Sickness Treatment" />
        <OtherServices data={data}  title="Altitude Sickness Treatment"  desc1="Altitude sickness can put a dampener on your mountain adventure. Symptoms like headaches, nausea, and fatigue can quickly turn your trip into a challenge. In severe cases, altitude sickness can even be dangerous. It's essential to listen to your body and take precautions to avoid these uncomfortable and potentially harmful effects." desc2="Altitude sickness, also known as acute mountain sickness (AMS), is a condition that occurs when a person ascends to a high altitude too quickly. The body struggles to adjust to the reduced oxygen levels, leading to various symptoms."  />
        <ServiceWork data={data1}  />
        <Main />
                    <div className="w-[90%] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-start">Frequently Asked Questions:</h1>
      
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h2>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
         <Cards data={data2} image={right} />
    </div>
  )
}

export default AltitudeSicknessTreatment