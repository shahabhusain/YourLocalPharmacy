import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const workingHours = [
    { day: 'Monday', hours: '9:00 AM - 5:30 PM', isOpen: true },
    { day: 'Tuesday', hours: '9:00 AM - 5:30 PM', isOpen: true },
    { day: 'Wednesday', hours: '9:00 AM - 7:00 PM', isOpen: true },
    { day: 'Thursday', hours: '9:00 AM - 5:30 PM', isOpen: true },
    { day: 'Friday', hours: '9:00 AM - 5:30 PM', isOpen: true },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false }
  ];

  const serviceLinks = [
    'Our Services',
    'Health A to Z',
    'Medicine A-Z',
    'Cookie Policy',
    'Terms and Condition'
  ];

  const practiceLinks = [
    'Home',
    'About',
    'Our Services',
    'Prescription',
    'Flu Vaccination',
    'Blogs',
    'Health A to Z',
    'Medicine A-Z'
  ];

  return (
    <footer className="bg-[#0C0F16] px-6 pt-16 w-full rounded-t-[3rem]   text-white">
      <div className="w-[90%] mx-auto rounded-2xl  border-[6px] border-[#ffffff2c]">
        <div className="grid grid-cols-1 p-12  md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-1">
          
          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-[20px] font-medium text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  <p className=' text-[14px] font-semibold'>238 Wheelwright Road, Erdington,</p>
                  <p className=' text-[14px] font-semibold'>Birmingham, B24 8EH</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-pointer">
                <a href="tel:01213778811" className="text-gray-300  text-[14px] font-semibold  hover:text-white transition-colors">
                  0121 377 8811
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-pointer">
                <a href="mailto:info@yourlocal-pharmacy.co.uk" className="text-gray-300  text-[14px] font-semibold hover:text-white transition-colors break-all">
                  info@yourlocal-pharmacy.co.uk
                </a>
              </div>
              
              <div className="pt-4 space-y-2">
                <p className=" text-[14px] font-semibold text-gray-400">
                  <span className=" text-gray-300">Premises GPhC Number:</span> 1038170
                </p>
                <p className=" text-[14px] font-semibold text-gray-400">
                  <span className=" text-gray-300">Superintendent Pharmacist:</span> Zainab Master (2060641)
                </p>
              </div>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="space-y-6">
            <h3 className="text-[20px] font-medium text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="group-hover:border-b  text-[14px] font-semibold group-hover:border-lime-400 transition-all">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Practice Section */}
          <div className="space-y-6">
            <h3 className="text-[20px] font-medium text-white mb-6">Our Practice</h3>
            <ul className="space-y-3">
              {practiceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="group-hover:border-b  text-[14px] font-semibold group-hover:border-lime-400 transition-all">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours Section */}
          <div className="space-y-3 bg-[#ffffff18] px-5 py-6 rounded-2xl">
            <h3 className="text-[20px] font-medium text-white mb-6 flex items-center space-x-2">
              Working Hours
            </h3>
            
            <div className="">
              <div className="space-y-1">
                {workingHours.map((schedule, index) => (
                  <div key={index} className={`flex justify-between items-center py-2 border-b border-gray-700/30 last:border-b-0 group ${!schedule.isOpen ? 'opacity-60' : ''}`}>
                    <span className="font-medium text-[14px] text-gray-200 group-hover:text-white transition-colors">
                      {schedule.day}
                    </span>
                    <span className={`text-[14px] font-medium  text-white group-hover:text-opacity-80 transition-all`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
                 <button className=' flex mt-6  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Booking Appointment</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              yourlocal-pharmacy © {currentYear} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}