import React from "react";

export default function FluVaccineInfo() {
  return (
    <section className="bg-[#F8F8F8] px-20 py-10 rounded-[3rem] mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Who Can Have The Flu Vaccine?
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-800">
        <li>The Flu Vaccine Is Given Free On The NHS To People Who:</li>
        <li>Are 65 And Over (Including Those Who’ll Be 65 By 31 March 2025)</li>
        <li>Are Pregnant</li>
        <li>Are In Long-Stay Residential Care</li>
        <li>
          Receive A Carer’s Allowance, Or Are The Main Carer For An Older Or
          Disabled Person Who May Be At Risk If You Get Sick
        </li>
        <li>
          Live With Someone Who Is More Likely To Get Infections (Such As
          Someone Who Has HIV, Has Had A Transplant Or Is Having Certain
          Treatments For Cancer, Lupus Or Rheumatoid Arthritis)
        </li>
        <li>Frontline Health Or Social Care Workers</li>
        <li>18–64 Year Old And Have One Of The Following:</li>
        <li>Diabetes</li>
        <li>
          Chronic (Long Term) Respiratory Disease, Such As Severe Asthma,
          Chronic Obstructive Pulmonary Disease (COPD) Or Bronchitis
        </li>
        <li>Chronic Heart Disease, Such As Heart Failure</li>
        <li>Chronic Kidney Disease At Stage Three, Four Or Five</li>
        <li>Chronic Liver Disease</li>
        <li>
          Chronic Neurological Disease, Such As Parkinson’s Disease Or Motor
          Neurone Disease Or Learning Disability
        </li>
        <li>
          Immunosuppression, A Weakened Immune System Due To Disease (Such As
          HIV/AIDS) Or Treatment (Such As Cancer Treatment)
        </li>
        <li>Splenic Dysfunction Or Asplenia</li>
        <li>Morbid Obesity</li>
        <li>Service</li>
      </ul>
    </section>
  );
}
