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
import Main from '../../components/TravelClinic/Main'
import { ScrollRestoration } from 'react-router-dom'
const TravelClinic = () => {
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
            title:"Planning for Hajj or Umrah?",
            desc:"We have extensive experience serving Hajj and Umrah pilgrims and can provide the necessary vaccinations and health advice to ensure a safe and worry-free pilgrimage."         },
        {
            icon:icons2,
            title:"Embarking on an Adventure Trip?",
            desc:"Whether you’re backpacking through Southeast Asia or trekking in the Himalayas, we can help you prepare for your adventure with the right vaccinations and essential travel health supplies."         },
                    {
            icon:icons3,
            title:"Preparing for Healthy Travel",
            desc:"General advice for travellers Food and water hygiene Insect and tick bite avoidance First aid kits Medicines and travel Personal safety Snake bites and avoidance Summer travel Sun protection Travel Insurance Venous thromboembolism"         },
                    {
            icon:icons4,
            title:"Conveniently located in Erdington, we’re easily accessible for residents in:",
            desc:"Erdington (B23, B24, B72, B73) Gravelly Hill (B23, B24, B7) Washwood Heath (B7, B8) Ward End (B36, B7, B8) Hodge Hill (B10, B33) Pype Hayes (B24, B35) Nechells (B24, B4, B5, B6, B7, B8) Alum Rock (B8) Castle Vale (B24, B35, B36, B76) Castle Bromwich (B36) Aston (B19, B20, B6) Saltley (B8) Short Heath (B23) Wylde Green (B72, B73, B76)"         },
    ]

    const vaccines = [
  {
    disease: "Diphtheria Tetanus, Polio Vaccine",
    vaccine: "REVAXIS",
    schedule: "Single dose if vaccinated as a child\nIf never vaccinated 0,1 and 2 months",
    booster: "10 years",
    price: "£45",
  },
  {
    disease: "Dengue Fever",
    vaccine: "-",
    schedule: "2 dose",
    booster: "-",
    price: "£125",
  },
  {
    disease: "Hepatitis A Vaccine",
    vaccine: "AVAXIM VAQTA VAQTA PAED",
    schedule: "1 dose",
    booster: "2nd dose 6–12 months later will give 25 years immunity",
    price: "£65",
  },
  {
    disease: "Typhoid vaccine",
    vaccine: "TYPHIM Vi",
    schedule: "1 dose",
    booster: "3 years",
    price: "£45",
  },
  {
    disease: "Yellow Fever Vaccine",
    vaccine: "STAMARIL",
    schedule: "1 dose",
    booster: "Life long\nCertificate valid for life.",
    price: "£82",
  },
  {
    disease: "Hepatitis B vaccine",
    vaccine: "ENGERIX B ENGERIX B PAED",
    schedule: "0,7,21 days and 12 months\n0,1,2,12 months\n0,1,6 months",
    booster:
      "Single booster 5 years after primary immunization may be required for those at high risk or occupational risk",
    price: "£55",
  },
  {
    disease: "Rabies Vaccine",
    vaccine: "RABIES BP / RABIPUR / VERORAB",
    schedule:
      "0,7,21 days or rapid schedule day 0, day 3, day 7 and 4th dose at 12 months",
    booster:
      "Booster dose depends on risk. For travellers: 1 year after completion of standard schedule. For occupational/high risk: depends on antibody levels.",
    price: "£85",
  },
  {
    disease: "Cholera vaccine",
    vaccine: "DUKORAL",
    schedule:
      "2 doses at 0 and 1–6 weeks for adults and children over 6 years.",
    booster: "2 years for adults and children over 6 years",
    price: "£60",
  },
  {
    disease: "Japanese Encephalitis vaccine",
    vaccine: "IXIARO",
    schedule: "7–28 days apart",
    booster: "12–24 months depending on risk",
    price: "£110",
  },
  {
    disease: "MMR",
    vaccine: "-",
    schedule: "1 dose",
    booster: "-",
    price: "£55",
  },
  {
    disease: "Meningitis ACWY (Hajj/Umrah)",
    vaccine: "-",
    schedule: "1 dose",
    booster: "-",
    price: "£45",
  },
  {
    disease: "Malaria Tablets - Adult",
    vaccine: "Atovaquone and Proguanil",
    schedule: "Total days going + 9 days",
    booster: "1 tablet once daily",
    price: "£2 per tablet",
  },
  {
    disease: "Malaria Tablets - Child",
    vaccine: "Atovaquone and Proguanil",
    schedule: "Total days going + 9 days",
    booster: "Dose dependent on weight",
    price: "£1 per tablet",
  },
  {
    disease: "Whooping cough (pertussis)",
    vaccine: "-",
    schedule: "1 dose",
    booster: "-",
    price: "£95",
  },
];

  return (
    <div>
      <ScrollRestoration />
        <Title title="Travel Clinic" />
        <OtherServices data={data}  title="Travel Clinic"  desc1="Planning a trip abroad, whether it’s a family vacation, a religious pilgrimage, or a backpacking adventure, requires careful preparation, especially regarding your health. At Your Local Erdington Pharmacy Travel Clinic in Erdington, Birmingham, we understand the unique needs of travelers and are committed to providing expert advice and essential vaccinations to ensure a safe and healthy journey." desc2="Convenience: Easily accessible location in Erdington, Birmingham, close to B24, B23, B8, and B7 postcodes.
Expertise:Our pharmacists are knowledgeable about travel health and can advise on the necessary vaccinations and medications for your destination.
Wide Range of Services: We offer a comprehensive range of travel vaccinations, including:
Routine vaccinations like measles, mumps, and rubella (MMR) and tetanus
Destination-specific vaccinations like yellow fever and Japanese encephalitis
Antimalarial medications
Travel advice and general health checks" desc3="We understand the importance of protecting your family’s health while traveling. Our pharmacists can advise on child-specific vaccinations and recommend ways to keep your family healthy throughout your trip."  />
        <ServiceWork data={data1}  />

          <Main />

        <div className="md:p-20 p-4 bg-black rounded-[3rem] ">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-[#ffffff1e] text-white">
              <th className="border px-4 py-2 w-1/5">Disease</th>
              <th className="border px-4 py-2 w-1/5">Vaccine</th>
              <th className="border px-4 py-2 w-1/5">Schedule</th>
              <th className="border px-4 py-2 w-1/5">Booster</th>
              <th className="border px-4 py-2 w-1/12">Price</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((v, i) => (
              <tr key={i} className=" align-top">
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.disease}</td>
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.vaccine}</td>
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.schedule}</td>
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.booster}</td>
                <td className="border-[1px] border-white text-white px-4 py-2">{v.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <img className=' md:p-20 my-4 md:my-0 rounded-[150px] object-cover' src={travel} alt="" />
    </div>
  )
}

export default TravelClinic