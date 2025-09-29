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
import weight from '../../assets/weight.png'
const VitaminB12 = () => {
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

      const medications = [
  { 
    disease: "Mounjaro 2.5mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£180" 
  },
  { 
    disease: "Mounjaro 5mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£195" 
  },
  { 
    disease: "Mounjaro 7.5mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£255" 
  },
  { 
    disease: "Mounjaro 10mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£280" 
  },
  { 
    disease: "Mounjaro 12.5mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£300" 
  },
  { 
    disease: "Mounjaro 15mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£325" 
  },
  { 
    disease: "Wegovy 0.25mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£130" 
  },
  { 
    disease: "Wegovy 0.5mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£140" 
  },
  { 
    disease: "Wegovy 1mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£150" 
  },
  { 
    disease: "Wegovy 1.7mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£200" 
  },
  { 
    disease: "Wegovy 2.4mg", 
    schedule: "1 pen every 4 weeks", 
    price: "£250" 
  }
];
  return (
    <div>
        <Title title="Weight Management" />
          <div className=' md:mt-[450px] mt-[333px] w-[80%] mx-auto object-cover'>
            <img src={weight} alt="" />
          </div>
        <OtherServices data={data}  title="Weight Management"  desc1="Lose weight, boost your confidence, and improve your overall health with Your Local Erdington Pharmacy’s weight loss programme." desc2="Our experienced team provides personalised support, effective medication options, and practical lifestyle advice to help you achieve lasting results." desc3="Your Local Erdington Pharmacy is committed to providing personalised weight management support. Our programme combines expert guidance, lifestyle advice, and, when appropriate, medication to help you achieve sustainable weight loss."  />

        
        <div className="md:p-20 p-4 bg-black rounded-[3rem] mb-20 ">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-[#ffffff1e] text-white">
              <th className="border px-4 py-2 w-1/5">Disease / Item</th>
              <th className="border px-4 py-2 w-1/5">	Schedule / Comment</th>
              <th className="border px-4 py-2 w-1/5">Price</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((v, i) => (
              <tr key={i} className=" align-top">
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.disease}</td>
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.schedule}</td>
                <td className="border-[1px] border-white text-white px-4 py-2 whitespace-pre-line">{v.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default VitaminB12