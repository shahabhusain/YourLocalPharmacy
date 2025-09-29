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
import Main from '../../components/Pharmacy/Main'
const PharmacyFirst = () => {
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
            title:"Accessibility",
            desc:"Pharmacies are often conveniently located, with longer opening hours than GP surgeries. No appointment needed, simply walk in and get seen quickly."
        },
        {
            icon:icons2,
            title:"Expert Care",
            desc:"Don’t underestimate the expertise of your pharmacist! They are highly trained healthcare professionals specialising in medications and minor ailments, capable of providing accurate diagnosis and effective treatment."
        },
        {
            icon:icons3,
            title:"Personalized Attention",
            desc:"Pharmacists have the time to listen to your concerns and answer your questions, offering personalised advice and support tailored to your needs."
        },
        {
            icon:icons4,
            title:"Reduced Pressure on GPs",
            desc:"The appointments are designed to fit around you, but a typical consultation will take around 10-15 minutes. Contact us today to book your appointment for the New Medicine Service in Birmingham."
        },

                {
            icon:icons4,
            title:"Cost- Effective",
            desc:"As part of the NHS, Pharmacy First services are completely free for eligible conditions, saving you money on unnecessary GP visits."
        },

                {
            icon:icons4,
            title:"Treatment",
            desc:"Treatments include Prescription-only medication without needing a GP visit"
        },
    ]

    const conditions = [
  {
    name: "Sinusitis",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/sinusitis",
    description: "Stuffy nose, facial pain, headache, sinus pressure.",
    link: "https://example.com/sinusitis",
  },
  {
    name: "Sore throat",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/sore-throat",
    description: "Painful or scratchy throat, difficulty swallowing.",
    link: "https://example.com/sore-throat",
  },
    {
    name: "Acute Otitis Media",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/sore-throat",
    description: "Ear pain, discomfort, hearing loss.",
    link: "https://example.com/sore-throat",
  },
    {
    name: "Infected insect bite",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/sore-throat",
    description: "Redness, swelling, pain, pus at the bite site.",
    link: "https://example.com/sore-throat",
  },
    {
    name: "Impetigo",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/sore-throat",
    description: "Redness, swelling, pain, pus at the bite site.",
    link: "https://example.com/sore-throat",
  },

      {
    name: "Shingles",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/sore-throat",
    description: "Painful rash with burning or tingling sensation, typically on one side of the body.",
    link: "https://example.com/sore-throat",
  },

      {
    name: "Uncomplicated urinary tract infections (women only)",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/sore-throat",
    description: "Burning sensation during urination, frequent urination, pain in the lower abdomen.",
    link: "https://example.com/sore-throat",
  },
];



  return (
    <div className=' mt-20'>
        <Title title="Pharmacy First" />
        <OtherServices data={data}  title="Pharmacy First"  desc1="Worried about a minor illness but don’t have time for a GP appointment? Look no further than Your Local Erdington Pharmacy !" desc2="Thanks to the innovative NHS Pharmacy First service, you can now seek treatment for seven common conditions directly from your friendly neighbourhood pharmacist, saving you valuable time and resources." />
        <ServiceWork data={data1}  />

         <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Treatable Conditions:</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 w-1/4">Condition</th>
              <th className="border px-4 py-2 w-1/4">QR Code</th>
              <th className="border px-4 py-2 w-1/2">Description</th>
            </tr>
          </thead>
          <tbody>
            {conditions.map((item) => (
              <tr key={item.name} className="hover:bg-gray-50">
                <td className="border px-4 py-4">{item.name}</td>
                <td className="border px-4 py-4 text-center">
                  {/* Clickable QR code */}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.qr}
                      alt={`${item.name} QR code`}
                      className="mx-auto w-32 h-32"
                    />
                  </a>
                </td>
                <td className="border px-4 py-4">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <Main />
    </div>
  )
}

export default PharmacyFirst