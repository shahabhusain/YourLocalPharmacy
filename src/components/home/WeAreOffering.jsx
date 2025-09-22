import React from 'react';
import { CheckCircle, ArrowRight, Star, Users, MapPin } from 'lucide-react';
import offer from '../../assets/offer.png'
import right from '../../assets/right.png'
import { IoMdArrowForward } from 'react-icons/io';
export default function WeAreOffering() {
  return (
    <div className="min-h-screen bg-[#171717] py-32 rounded-b-[3rem]">
      <div className="w-[90%] mx-auto">
        <div className=" flex  gap-12">
          {/* Left Column - Image Section */}
               
                 <img className='w-[505px] h-[750px]' src={offer} alt="" />
           

          {/* Right Column - Content */}
          <div className="space-y-4">
            <div className="space-y-6">
              <h1 className=" text-[46px] text-white leading-[4rem] font-bold">
                  We Are Offering Innovative And Modern Ways To Deliver High Quality Healthcare To The Community.
              </h1>
              
              <p className="text-[16px] font-normal text-gray-300 leading-relaxed max-w-2xl">
                We provide weight management, Flu vaccinations, travel health services 
                (including the supply of Malarone and Doxycycline without prescription) and the 
                new medicine service.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {[
                "Order your NHS Prescriptions",
                "Avoid waiting for your GP, book NHS and private appointments via the app today.",
                "Get your NHS prescriptions delivered.",
                "Manage your loved ones Health care needs."
              ].map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-2 rounded-2xl bg-[#ffffff0e] backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <img src={right} alt="" />
                  </div>
                  <span className="text-gray-200 text-[14px] font-semibold group-hover:text-white transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Company Description */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                We founded the company with the aim to serve the local community and 
                provide a wide range of healthcare services to our community of Erdington, 
                Gravelly Hill, Washwood Heath, Sutton Coldfield, Aston and the surrounding areas.
              </p>
            </div>
                   <button className=' flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Booking Appointment</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
          </div>
        </div>

      </div>
    </div>
  );
}