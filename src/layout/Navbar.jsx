import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = [
    { pathName: "/", title: "Home" },
    { pathName: "/about-us", title: "About" },
    { pathName: "/services", title: "Services" },
    { pathName: "/prescription", title: "Prescription" },
    { pathName: "/flu-Vaccination-service", title: "Flu Vaccination" },
    { pathName: "/blogs", title: "Blogs" },
    { pathName: "/health", title: "Health AtoZ" },
    { pathName: "/medicine", title: "Medicine AtoZ" },
  ];

  return (
    <div
      className={`flex items-center bg-white z-[1000] py-3 px-5 text-black justify-between transform transition-all duration-300 ease-in ${
        scrolled
          ? "w-full sticky top-0"
          : "w-[90%] sticky top-6 rounded-full mx-auto mt-6"
      }`}
    >
      <img className="w-[103px]" src={logo} alt="Logo" />

      <ul className="flex items-center gap-6 relative">
        {NavLinks.map((item, index) =>
          item.title === "Services" ? (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => {
                setAboutOpen(false);
                setTeamOpen(index);
              }}
            >
              <Link
                to={item.pathName}
                className={`text-[14px] font-semibold ${
                  location.pathname === item.pathName
                    ? "border-b-[3px] border-b-[#80E900] pb-2"
                    : ""
                }`}
              >
                {item.title}
              </Link>

              {/* 1st level dropdown */}
              <ul
                className={`absolute top-[12px] left-0 mt-3 w-48 bg-white shadow-lg rounded-md transition-all duration-300 transform ${
                  aboutOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
                }`}
              >
               <li
                  className="px-4 py-2 hover:bg-gray-100 relative"
                  onMouseEnter={() => setTeamOpen(0)}
                  onMouseLeave={() => setTeamOpen(1)}
                >
                  NHS ▸
                  {/* 2nd level dropdown */}
                  <ul
                    className={`absolute top-[12px] left-[132px] ml-1 w-[350px] bg-white shadow-lg rounded-md transition-all duration-300 transform ${
                      teamOpen  === 0
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-3 pointer-events-none"
                    }`}
                  >
                    <li className="px-6 py-3 hover:bg-gray-100">
                      <Link to="/about-us/team/designers">New Medicine Service</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Hypertension Case Finding Service</Link>
                    </li>
                                        <li className="px-4 py-2 uppercase hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Emergency Supply of Prescription medication</Link>
                    </li>

                              <li className="px-4 py-2 uppercase hover:bg-gray-100">
                      <Link to="/about-us/team/developers">NHS Contraception Service</Link>
                    </li>

                        <li className="px-4 py-2 uppercase hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Pharmacy First</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 relative"
                  onMouseEnter={() => setTeamOpen(1)}
                  onMouseLeave={() => setTeamOpen(0)}
                >
                  PRIVATE ▸
                  {/* 2nd level dropdown */}
                  <ul
                    className={`absolute top-[12px] left-[132px] ml-1 w-[350px]  bg-white shadow-lg rounded-md transition-all duration-300 transform ${
                      teamOpen === 1
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-3 pointer-events-none"
                    }`}
                  >
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/designers">Travel Clinic</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Hajj & Umrah Vaccination</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Non Travel Vaccination</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Blood Testing</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">BCG Scar Checks</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Ear Wax Removal</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Cryotherapy</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Vitamin B12</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Weight Management</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">UTI Treatment</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Independent Prescriber</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Ear Piercing</Link>
                    </li>

                        <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about-us/team/developers">Altitude Sickness Treatment</Link>
                    </li>


                  </ul>
                </li>
              </ul>
            </li>
          ) : (
            <li key={index}>
              <Link
                className={`text-[14px] font-semibold ${
                  location.pathname === item.pathName
                    ? "border-b-[3px] border-b-[#80E900] pb-2"
                    : ""
                }`}
                to={item.pathName}
              >
                {item.title}
              </Link>
            </li>
          )
        )}
      </ul>

      <Link to="/appointment" className=' flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Booking Appointment</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></Link>
    </div>
  );
};

export default Navbar;
