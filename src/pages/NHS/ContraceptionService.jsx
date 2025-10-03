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
import right from '../../assets/cons.jpg'
import { ScrollRestoration } from 'react-router-dom'
const ContraceptionService = () => {
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
            title:"Will my information be passed on to my GP?",
            desc:"The consultation is confidential, so the pharmacist will not talk to your GP or share your information without your consent. If you agree, the pharmacist will send a record of the consultation and the details of any contraception supplied to your GP surgery If the pharmacist identifies any health problems, for example, raised blood pressure, they will talk to you about sharing this information with your GP."         },         {
            icon:icons2,
            title:"Would I be able to start or switch to a new contraception method?",
            desc:"Yes, the pharmacist can talk through your options and where suitable, is able to start or issue you a different contraceptive pill. Where necessary, the pharmacist can refer you to your GP surgery or sexual health clinic for other options."         },

             {
            icon:icons2,
            title:"I already use contraceptive pills and have it prescribed, why use this service?",
            desc:"This pharmacy service may be more convenient and accessible than booking an appointment with your GP surgery or at a sexual health clinic for your annual pill check or to get a new prescription. You can choose a time that suits you, and the service is free and confidential. The NHS has put this pharmacy service in place as a way to reduce demand on GP surgeries."         },
             {
            icon:icons2,
            title:"Who can use this service?",
            desc:"You can use the service if: You are considering your choice of contraception and would like advice on your option You would like to start taking or restart contraceptive pill You are already taking a contraceptive pill that has been prescribed for you by your pharmacy, GP surgery or a sexual health clinic and you need your next supply of contraception."         },              {
            icon:icons2,
            title:"How do I access this service?",
            desc:"You can be referred by your GP surgery or sexual health clinic or simply walk in and speak to the pharmacy team about the service. We may ask you to book an appointment or it may be possible to just turn up and have a consultation with the pharmacist. The pharmacist will always be able to advise and support you."         },
             {
            icon:icons2,
            title:"What will the consultation include?",
            desc:"A trained pharmacist will carry out your consultation. They will ask you the same sort of questions as the healthcare professional at your general practice would ask. An appropriately trained member of the pharmacy team might also carry out some checks – such as"         },
            
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
        <Title title="NHS Contraception Service" />
        <OtherServices data={data}  title="NHS Contraception Service"  desc1="Are you considering your choices or do you need your next supply of your contraceptive pill? You can now arrange to speak to a pharmacist to help you consider your contraception choices, get started on contraceptive pills or get your next supply directly from Your Local Erdington Pharmacy." desc2="Taking your blood pressure, weight, height and asking about your medical history. The pharmacist will discuss any concerns you have. For example, you can tell them if you have side effects from your contraception. If you have side effects, the pharmacist will be able to help identify ways of managing these and, if needed, refer you to your GP surgery or sexual health clinic for further support." desc3="I want to understand what my choices of contraception are, how can this pharmacy service help me? Yes, the pharmacist can talk through your options and where suitable, is able to start or issue you a different contraceptive pill. Where necessary, the pharmacist can refer you to your GP surgery or sexual health clinic for other options."  />
        <ServiceWork data={data1}  />
         <Cards data={data2} image={right} />
    </div>
  )
}

export default ContraceptionService