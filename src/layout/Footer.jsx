import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const workingHours = [
    { day: 'Monday', hours: '10:00 AM - 5:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '10:00 AM - 5:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '10:00 AM - 5:00 PM', isOpen: true },
    { day: 'Thursday', hours: '10:00 AM - 5:00 PM', isOpen: true },
    { day: 'Friday', hours: '10:00 AM - 5:00 PM', isOpen: true },
    { day: 'Saturday', hours: '10:00 AM - 5:00 PM', isOpen: true },
  ];

  const serviceLinks = [
    {title:'Our Services',
      path:"/services"
    },
     {title:'Health A to Z',
      path:"https://www.nhs.uk/health-a-to-z"
    },
     {title:'Medicine A-Z',
      path:"https://www.nhs.uk/medicines"
    },
     {title:'Cookie Policy',
      path:"/"
    },
      {title:'Terms and Condition',
      path:"/"
    }
  ];

  const practiceLinks = [
    {title:"Home",
      path:"/"
    },
     {title:"About",
      path:"/about-us"
    },
     {title:"Our Services",
      path:"/services"
    },
     {title:"Prescription",
      path:"/prescription"
    },
     {title:"Flu Vaccination",
      path:"/flu-Vaccination-service"
    },
     {title:"Blogs",
      path:"/blogs"
    },
     {title:"Health A to Z",
      path:"https://www.nhs.uk/health-a-to-z"
    },
     {title:"Medicine A to Z",
      path:"https://www.nhs.uk/medicines"
    },
  ];

  return (
    <footer className="bg-[#0C0F16] :px-6 pt-16 w-full rounded-t-[3rem]   text-white">
      <div className="w-[90%] mx-auto rounded-2xl  border-[6px] border-[#ffffff2c]">
        <div className="grid grid-cols-1 md:p-12 p-4  md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-1">
          
          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-[20px] font-medium text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  <p className=' text-[14px] font-semibold'>Unit 9 Manor Road Industrial Estate</p>
          
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-pointer">
                <a href="tel:01213778811" className="text-gray-300  text-[14px] font-semibold  hover:text-white transition-colors">
                  123 123 123 123
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-pointer">
                <a href="mailto:info@yourlocal-pharmacy.co.uk" className="text-gray-300  text-[14px] font-semibold hover:text-white transition-colors break-all">
                  info@manorpharmacy.co.uk
                </a>
              </div>
              
              <div className="pt-4 space-y-2">
                <p className=" text-[14px] font-semibold text-gray-400">
                  <span className=" text-gray-300">Premises GPhC Number:</span> 9012641
                </p>
                <p className=" text-[14px] font-semibold text-gray-400">
                  <span className=" text-gray-300">Superintendent Pharmacist:</span> Mr M Ayaz (Registration No 2059663 )
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
                  <button
                    className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <Link to={link.path} className="group-hover:border-b  text-[14px] font-semibold group-hover:border-lime-400 transition-all">
                      {link.title}
                    </Link>
                  </button>
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
                  <button
                    className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <Link to={link.path} className="group-hover:border-b  text-[14px] font-semibold group-hover:border-lime-400 transition-all">
                      {link.title}
                    </Link>
                  </button>
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
                      <Link
          to="/appointment"
          className="flex items-center  text-white group"
        >
          <span className="bg-[#80E900] rounded-full py-3 px-6
                           transition-all duration-300 
                           group-hover:scale-105 group-hover:shadow-lg">
            Book Appointment
          </span>
          <span className="h-[45px] w-[45px] rotate-[320deg] flex items-center justify-center 
                           bg-[#80E900] rounded-full 
                           transition-transform duration-300 
                           group-hover:translate-x-1 group-hover:rotate-[360deg]">
            <IoMdArrowForward size={20} />
          </span>
        </Link>
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
              manorpharmacy © {currentYear} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}