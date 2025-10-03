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
import Main from '../../components/NonTravelVaccancies/Main'
import { ScrollRestoration } from 'react-router-dom'
const NonTravelVaccination = () => {
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

const vaccines = [
  {
    disease: "Chicken Pox",
    vaccine: "Varivax, Varilrix",
    schedule: "2 doses, 2nd dose 4–8 weeks after 1st",
    booster: "None",
  },
  {
    disease: "HPV",
    vaccine: "Gardisil 9",
    schedule:
      "2 doses, 2nd dose 5–13 months after 1st\n" +
      "3 doses, 2nd dose 2 months after 1st, 3rd dose 6 months after 2nd\n" +
      "3 doses, 2nd dose 2 months after 1st, 3rd dose 6 months after 2nd\n" +
      "3 doses, 2nd dose 1 month after 1st, 3rd dose 3 months after 2nd, all within 1 year of start",
    booster: "Unknown",
  },
  {
    disease: "Shingles",
    vaccine: "Zostavax, Shingrix",
    schedule: "1 dose",
    booster: "Unknown",
  },
  {
    disease: "MMR",
    vaccine: "MMR vax pro, Priorix",
    schedule: "2 doses, 2nd dose 1 month after 1st",
    booster: "",
  },
  {
    disease: "Meningitis B",
    vaccine: "Bexsero",
    schedule:
      "3 doses, at least 1 month between doses\n" +
      "2 doses, at least 2 months between doses\n" +
      "2 doses, at least 2 months between doses\n" +
      "2 doses, at least 2 months between doses\n" +
      "2 doses, at least 1 month between doses",
    booster:
      "Yes, 1 dose at 12–15 months of age\n" +
      "Yes, 1 dose given in 2nd year of life at least 2 months after 2nd dose\n" +
      "Yes – 1 further dose given 1–2 years after 2nd dose\n" +
      "Unknown\n" +
      "Unknown",
  },
];


  return (
    <div>
      <ScrollRestoration />
        <Title title="Non Travel Vaccination" />
        <OtherServices data={data}  title="Non Travel Vaccination"  desc1="PAt Your Local Erdington Pharmacy, we provide a full range of Non travel services We can administer vaccines to children as well as adults. Contact us to find out more about your trusted pharmacy in Birmingham." />
          <Main />
        <div className="md:p-20 p-4 bg-black rounded-[3rem] mt-20 ">
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

    <img className=' md:p-20 p-4 my-4 md:my-0 rounded-[150px] object-cover' src={travel} alt="" />
    </div>
  )
}

export default NonTravelVaccination