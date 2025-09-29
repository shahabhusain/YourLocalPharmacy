import React from 'react'
import Title from '../../components/Title'
import OtherServices from '../../components/newMedicine/OtherServices'
import ServiceWork from '../../components/newMedicine/ServiceWork'
import icon1 from '../../assets/icons1.png'
import icon2 from '../../assets/icons2.png'
import icon3 from '../../assets/icons3.png'
import icon4 from '../../assets/icons4.png'
import icon5 from '../../assets/icons5.png'
import icon6 from '../../assets/icons6.png'
import icons1 from '../../assets/icon1.png'
import icons2 from '../../assets/icon3.png'
import Main from '../../components/Ear/Main'
const EarWaxRemoval = () => {
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
            title:"Why Choose Microsuction for Earwax Removal?",
            desc:"Unlike traditional methods like syringing or earwax removal kits, microsuction is a gentle, precise procedure that uses a low-powered vacuum to remove earwax gently and safely. This method offers several advantages: Safer: Microsuction minimizes the risk of ear drum damage, making it ideal for people with sensitive ears or existing ear conditions More effective: Microsuction removes even the most stubborn earwax buildup, ensuring long-lasting results Comfortable: The procedure is quick and painless, with minimal discomfort Convenient: No need for messy ear drops or lengthy appointments. Just walk into Your Local Erdington Pharmacy and get your ears treated by our qualified healthcare professionals."         } ,                 {
            icon:icons2,
            title:"Conveniently located in Erdington, we’re easily accessible for residents in:",
            desc:"Erdington (B23, B24, B72, B73) Gravelly Hill (B23, B24, B7) Washwood Heath (B7, B8) Ward End (B36, B7, B8) Hodge Hill (B10, B33) Pype Hayes (B24, B35) Nechells (B24, B4, B5, B6, B7, B8) Alum Rock (B8) Castle Vale (B24, B35, B36, B76) Castle Bromwich (B36) Aston (B19, B20, B6) Saltley (B8) Short Heath (B23) Wylde Green (B72, B73, B76)"         },

            {
              icon:icon2,
              title:"Erdington and Birmingham’s Trusted Earwax Removal Experts:",
              desc:"Your Local Erdington Pharmacy in Erdington is committed to providing convenient, high-quality healthcare services to the Birmingham community. Our team of friendly and experienced pharmacists are fully trained in microsuction earwax removal, ensuring you receive the best possible care."
            },

              {
              icon:icon2,
              title:"Affordable Earwax Removal Microsuction Prices:",
              desc:"One ear: £35 Both ears: £60 (discounted price) Call us now on 01213778811 or book your appointment online!"
            }
    ]

  const faqData = [
    {
      question: "Do I need a referral for microsuction?",
      answer: "No, you don't need a referral for our private clinic in Birmingham. However, the NHS route typically requires a GP referral, which can have long waiting times."
    },
    {
      question: "Does microsuction hurt?",
      answer: "In most cases, no. It's painless for most, though it can be slightly noisy like a hand dryer. In rare cases where the ear canal is sensitive, mild discomfort might occur."
    },
    {
      question: "Is microsuction successful?",
      answer: "Highly successful it removes 100% of wax in most cases, and at least 90-95% even in difficult situations. This usually restores hearing to pre-blockage levels."
    },
    {
      question: "How often do I need microsuction?",
      answer: "It depends on individual wax production. Some need it every 3-6 months, while others less frequently. Hearing aid users often benefit from regular microsuction (every 4-6 months)."
    },
    {
      question: "How long is the appointment?",
      answer: "Usually within 20 minutes, though we recommend allowing 30 minutes for consultation and procedure."
    },
    {
      question: "Who can have microsuction?",
      answer: "Our clinic provides microsuction for adults over 18 years old. We can provide the service for a child on a case-by-case basis."
    }
  ];



  return (
    <div>
        <Title title="Ear Wax Removal" />
        <OtherServices data={data}  title="Ear Wax Removal"  desc1="Are you struggling with clogged ears, muffled hearing, or even dizziness due to excessive earwax buildup? You’re not alone. Earwax buildup is a common problem, especially for older adults and those who wear hearing aids. But don’t worry, there’s a safe and effective solution right in your neighborhood: earwax removal microsuction at Your Local Erdington Pharmacy in Erdington, Birmingham!" />
        <ServiceWork data={data1}  /> 
        <Main />
            <div className="w-[90%] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-start">FAQ</h1>
      
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h2>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default EarWaxRemoval