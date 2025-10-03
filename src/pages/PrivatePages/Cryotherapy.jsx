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
import right from '../../assets/cryp.png'
import Main from '../../components/Cryotherapy/Main'
import { ScrollRestoration } from 'react-router-dom'
const Cryotherapy = () => {
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
            title:"What conditions are treated?",
            desc:"Cryotherapy can be used for a number of different skin conditions such as: Warts and verucca Seborrheic wart Basal cell carcinomas Sun damage (solar keratoses Small fleshy growths and similar small ‘lumps and bumps’ on the skin that are ideal for liquid nitrogen treatment If you have any problems such as severe pain, swelling that does not respond to simple painkillers, you are concerned about infection, or if any change occurs that has not been covered by the above explanations"         },         {
            icon:icons2,
            title:"What are the risks and side effects of this treatment?",
            desc:"Cryotherapy is a safe and reliable treatment, and the cosmetic result is usually very good. However . Cryotherapy may not completely destroy the abnormal cells. Depending on the nature of the lesion, more than one treatment may be necessary, and this is usually repeated at regular intervals Very rarely, a scar may form, especially if a deep freeze has been necessary (such as to treat a basal cell carcinoma) Pigmentation changes – the skin on and around the treatment site may lighten or darken in colour, especially in dark skinned people."         },
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
        <Title title="Cryotherapy" />
        <OtherServices data={data}  title="Cryotherapy"  desc1="Cryotherapy is a method of freezing which uses a substance called liquid nitrogen. A carefully controlled amount of liquid nitrogen is applied to the affected area of skin. This has the affect of freezing the targeted cells and destroying the lesion." desc2="The liquid nitrogen is usually applied using a spray gun or cotton bud for about 10 to 30 seconds. It feels cold, but most people find the discomfort quite bearable. A doctor or nurse may carry out your treatment." desc3="The redness and swelling usually lasts for a few days. Sometimes, a blister will form (blood in a blister is not sinister) just as with a burn. If this happens, keep the area clean. If necessary, do this using a dry dressing. If the blister becomes uncomfortable, use a clean needle to release the fluid."  />
        <ServiceWork data={data1}  />
        <Main />
         <Cards data={data2} image={right} />
    </div>
  )
}

export default Cryotherapy