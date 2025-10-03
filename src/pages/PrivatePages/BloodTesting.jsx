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
import travel from '../../assets/tranvel.png'
import right from '../../assets/blood.jpg'
import Main from '../../components/BloodTesting/Main'
import { ScrollRestoration } from 'react-router-dom'
const BloodTesting = () => {
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
            title:"Preparing for a blood test",
            desc:"At Your Local Erdington Pharmacy we can arrange your blood test and will let you know whether there are any specific instructions you need to follow before your test such as: Avoid eating or drinking anything (fasting) apart from water, for up to 12 hour Stop taking certain medicine It’s important to follow the instructions you’re given, as it may affect the result of the test and mean it needs to be delayed or carried out again."         } ,     
            {
            icon:icons2,
            title:"After the test",
            desc:"Only a small amount of blood is taken during the test so you shouldn’t feel any significant after-effects. However, some people feel dizzy and faint during and after the test. If this has happened to you in the past, tell the person carrying out the test so they’re aware and can help you feel more comfortable. After the test, you may have a small bruise where the needle went in. Bruises can be painful, but are usually harmless and fade over the next few days."         },
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

const vaccines = [
  { test: "Basic Biochemistry", price: "£65.00", test2: "Malaria", price2: "£70.00" },
  { test: "BCG Scar Check", price: "£30.00", test2: "Measles Immunity", price2: "£55.00" },
  { test: "Blood Group", price: "£55.00", test2: "MMR Immunity", price2: "£110.00" },
  { test: "CRP", price: "£60.00", test2: "MMR/ HEP B/ Varicella /BCG Scar Check", price2: "£230.00" },
  { test: "Drugs of abuse", price: "£120.00", test2: "MSU (Urine check)", price2: "£40.00" },
  { test: "FBC/Biochemistry Profile", price: "£100.00", test2: "Mumps Immunity", price2: "£55.00" },
  { test: "Female hormone profile", price: "£190.00", test2: "Rubella Immunity", price2: "£55.00" },
  { test: "Ferritin", price: "£70.00", test2: "Sexually transmitted infections - urine", price2: "£210.00" },
  { test: "Folate", price: "£55.00", test2: "Sickle Cell (Genotype)", price2: "£100.00" },
  { test: "Full Blood Count", price: "£48.00", test2: "Syphilis", price2: "£70.00" },
  { test: "Gonorrhoea/Chlamydia PCR", price: "£125.00", test2: "Tuberculosis (TB) QuantIFERON", price2: "£130.00" },
  { test: "HBA1C", price: "£75.00", test2: "Thyroid", price2: "£70.00" },
  { test: "HEP B Surface antigen (SAG)", price: "£55.00", test2: "Varicella Zoster (Chicken Pox) Immunity", price2: "£65.00" },
  { test: "Hep B Viral load", price: "£385.00", test2: "Vit B12", price2: "£55.00" },
  { test: "HEP C antibody", price: "£75.00", test2: "Vit D", price2: "£100.00" },
  { test: "Hepatitis B Immunity Titre", price: "£55.00", test2: "Wellman Screen", price2: "£250.00" },
  { test: "HIV I & II", price: "£55.00", test2: "Wellwoman Screen", price2: "£250.00" },
  { test: "Iron Profile (Haematinics)", price: "£100.00", test2: "", price2: "" }
];

  return (
    <div>
      <ScrollRestoration />
        <Title title="Blood Testing" />
        <OtherServices data={data}  title="Blood Testing"  desc1="Blood tests have a wide range of uses and are one of the most common types of medical test.Most blood tests only take a few minutes to complete and are carried out at Your Local Erdington Pharmacy.
We give you service like Hep B, Varicella, MMR and other at Your Local Erdington Pharmacy.
For example, a blood test can be used to:

assess your general state of health
check if you have an infection
see how well certain organs, such as the liver and kidneys, are working
screen for certain genetic conditions" desc2="A blood test usually involves taking a blood sample from a blood vessel in your arm.
The arm is a convenient part of the body to use because it can be easily uncovered. The usual place for a sample to be taken from is the inside of the elbow or wrist, where the veins are relatively close to the surface." desc3="A needle attached to a syringe or special container is inserted into the vein. The syringe is used to draw out a sample of your blood. You may feel a slight pricking or scratching sensation as the needle goes in, but it shouldn’t be painful. If you don’t like needles and blood, tell the person who is taking the sample so they can make you more comfortable."   />
        <ServiceWork data={data1}  /> 

        <Main />

        <div className="md:p-20 p-4 bg-black rounded-[3rem] ">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-[#ffffff1e] text-white">
              <th className="border px-4 py-2 w-1/5">Disease / Item</th>
              <th className="border px-4 py-2 w-1/5">Price</th>
              <th className="border px-4 py-2 w-1/5">	Disease / Item</th>
              <th className="border px-4 py-2 w-1/5">Price</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((v, i) => (
              <tr key={i} className=" align-top">
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.test}</td>
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.price}</td>
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.test2}</td>
                <td className="border-[1px] border-white text-white px-4 py-2">{v.price2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

 <Cards data={data2} image={right} />
    </div>
  )
}

export default BloodTesting