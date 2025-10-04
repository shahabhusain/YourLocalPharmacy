import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // desktop hover
  const [servicesOpen, setServicesOpen] = useState(false);
  const [nhsOpen, setNhsOpen] = useState(false);
  const [privateOpen, setPrivateOpen] = useState(false);

  // mobile
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileNHS, setMobileNHS] = useState(false);
  const [mobilePrivate, setMobilePrivate] = useState(false);

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
    { pathName: "https://www.nhs.uk/health-a-to-z/", title: "Health AtoZ" },
    { pathName: "https://www.nhs.uk/medicines/", title: "Medicine AtoZ" },
     { pathName: "/contact-us", title: "Contact Us" },
  ];

  /** ---------------- MOBILE ACCORDION ---------------- */
  const MobileServicesMenu = () => (
    <div className="pl-4 mt-2 space-y-2">
      {/* NHS */}
      <button
        onClick={() => setMobileNHS(!mobileNHS)}
        className="flex justify-between w-full text-left font-medium py-2"
      >
        NHS{" "}
        <IoChevronDown
          className={`transition-transform duration-300 ${
            mobileNHS ? "rotate-180" : ""
          }`}
        />
      </button>
      {mobileNHS && (
        <ul className="pl-4 space-y-2">
          <li>
            <Link onClick={() => setMobileOpen(false)} to="/new-medicine-service">
              New Medicine Service
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMobileOpen(false)}
              to="/hypertension-case-finding-service"
            >
              Hypertension Case Finding
            </Link>
          </li>
          <li>
            <a target="_blank" href="https://111.nhs.uk/emergency-prescription">
              Emergency Supply
            </a>
          </li>
          <li>
            <Link
              onClick={() => setMobileOpen(false)}
              to="/nhs-contraception-service"
            >
              NHS Contraception
            </Link>
          </li>
          <li>
            <Link onClick={() => setMobileOpen(false)} to="/pharmacy-first">
              Pharmacy First
            </Link>
          </li>
        </ul>
      )}

      {/* PRIVATE */}
      <button
        onClick={() => setMobilePrivate(!mobilePrivate)}
        className="flex justify-between w-full text-left font-medium py-2"
      >
        Private{" "}
        <IoChevronDown
          className={`transition-transform duration-300 ${
            mobilePrivate ? "rotate-180" : ""
          }`}
        />
      </button>
      {mobilePrivate && (
        <ul className="pl-4 space-y-2">
          <li><Link to="/travel-clinic">Travel Clinic</Link></li>
          <li><Link to="/hajj-umrah-vaccination">Hajj & Umrah Vaccination</Link></li>
          <li><Link to="/non-travel-vaccination">Non Travel Vaccination</Link></li>
          <li><Link to="/blood-test">Blood Testing</Link></li>
          <li><Link to="/bcg-scar-checks">BCG Scar Checks</Link></li>
          <li><Link to="/ear-wax-removal-microsuction">Ear Wax Removal</Link></li>
          <li><Link to="/cryotherapy">Cryotherapy</Link></li>
          <li><Link to="/vitamin-b12">Vitamin B12</Link></li>
          <li><Link to="/weight-management">Weight Management</Link></li>
          <li><Link to="/uti-treatment">UTI Treatment</Link></li>
          <li><Link to="/independent-prescriber">Independent Prescriber</Link></li>
          <li><Link to="/ear-piercing">Ear Piercing</Link></li>
          <li><Link to="/altitude-sickness-treatment">Altitude Sickness</Link></li>
        </ul>
      )}
    </div>
  );

  /** ---------------- DESKTOP MENU ---------------- */
  const DesktopServicesDropdown = () => (
    <div
      onMouseEnter={() => setServicesOpen(true)}
      onMouseLeave={() => {
        setServicesOpen(false);
        setNhsOpen(false);
        setPrivateOpen(false);
      }}
      className="relative"
    >
      <span
        className={`cursor-pointer text-[14px] font-semibold ${
          location.pathname === "/services"
            ? "border-b-2 border-[#80E900] pb-1"
            : ""
        }`}
      >
        <Link to="/services">Services</Link>
      </span>

      {/* main dropdown */}
      {servicesOpen && (
        <div className="absolute bottom-[-92px] left-0 mt-3 w-56 bg-white rounded-md shadow-lg p-2 z-50">
          {/* NHS */}
          <div
            onMouseEnter={() => setNhsOpen(true)}
            onMouseLeave={() => setNhsOpen(false)}
            className="relative"
          >
            <button className="flex justify-between w-full px-3 py-2 hover:bg-gray-100 font-medium">
              NHS{" "}
              <IoChevronDown
                className={`transition-transform duration-300 ${
                  nhsOpen ? "rotate-270" : ""
                }`}
              />
            </button>
            {nhsOpen && (
              <ul className="absolute left-full top-0 w-56 flex flex-col gap-y-3 bg-white rounded-md shadow-lg p-2">
                <li><Link to="/new-medicine-service">New Medicine Service</Link></li>
                <li><Link to="/hypertension-case-finding-service">Hypertension Case Finding</Link></li>
                <li><a href="https://111.nhs.uk/emergency-prescription">Emergency Supply</a></li>
                <li><Link to="/nhs-contraception-service">NHS Contraception</Link></li>
                   <li><Link to="/pharmacy-first">Pharmacy First</Link></li>
              </ul>
            )}
          </div>

          {/* PRIVATE */}
          <div
            onMouseEnter={() => setPrivateOpen(true)}
            onMouseLeave={() => setPrivateOpen(false)}
            className="relative"
          >
            <button className="flex justify-between w-full px-3 py-2 hover:bg-gray-100 font-medium">
              Private{" "}
              <IoChevronDown
                className={`transition-transform duration-300 ${
                  privateOpen ? "rotate-270" : ""
                }`}
              />
            </button>
            {privateOpen && (
              <ul className="absolute left-full top-0 w-64 flex flex-col gap-y-3 bg-white rounded-md shadow-lg p-2">
                <li><Link to="/travel-clinic">Travel Clinic</Link></li>
                <li><Link to="/hajj-umrah-vaccination">Hajj & Umrah Vaccination</Link></li>
                <li><Link to="/non-travel-vaccination">Non Travel Vaccination</Link></li>
                <li><Link to="/blood-test">Blood Testing</Link></li>
                <li><Link to="/bcg-scar-checks">BCG Scar Checks</Link></li>
                <li><Link to="/ear-wax-removal-microsuction">Ear Wax Removal</Link></li>
                <li><Link to="/cryotherapy">Cryotherapy</Link></li>
                <li><Link to="/vitamin-b12">Vitamin B12</Link></li>
                <li><Link to="/weight-management">Weight Management</Link></li>
                <li><Link to="/uti-treatment">UTI Treatment</Link></li>
                <li><Link to="/independent-prescriber">Independent Prescriber</Link></li>
                <li><Link to="/ear-piercing">Ear Piercing</Link></li>
                <li><Link to="/altitude-sickness-treatment">Altitude Sickness</Link></li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );

  /** ---------------- NAV LIST ---------------- */
  const NavList = (isMobile = false) => (
    <ul
      className={`${
        isMobile ? "flex flex-col gap-4" : "flex flex-row items-center gap-6"
      }`}
    >
      {NavLinks.map((item, i) =>
        item.title === "Services" ? (
          <li key={i}>
            {isMobile ? (
              <>
                <button
                  onClick={() => setMobileServices(!mobileServices)}
                  className="flex justify-between w-full text-left font-semibold"
                >
                  Services{" "}
                  <IoChevronDown
                    className={`transition-transform duration-300 ${
                      mobileServices ? "rotate-270" : ""
                    }`}
                  />
                </button>
                {mobileServices && <MobileServicesMenu />}
              </>
            ) : (
              <DesktopServicesDropdown />
            )}
          </li>
        ) : (
          <li key={i}>
            <Link
              to={item.pathName}
              onClick={() => isMobile && setMobileOpen(false)}
              className={`text-[14px] font-semibold ${
                location.pathname === item.pathName
                  ? "border-b-2 border-[#80E900] pb-1"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );

  return (
    <div
      className={`flex items-center shadow bg-white z-[1000] py-3 px-5 text-black justify-between transition-all duration-300 ${
        scrolled
          ? "w-full sticky top-0"
          : "w-[90%] sticky top-6 rounded-full mx-auto mt-6"
      }`}
    >
      <Link to="/">
        <img className="w-[103px]" src={logo} alt="Logo" />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6">
        {NavList()}
        <Link to="/appointment" className="flex items-center text-white group">
          <span className="bg-[#80E900] rounded-full py-3 px-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
            Book Appointment
          </span>
          <span className="h-[45px] w-[45px] rotate-[320deg] flex items-center justify-center bg-[#80E900] rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[360deg]">
            <IoMdArrowForward size={20} />
          </span>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-black"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white h-[450px] overflow-y-scroll shadow-md md:hidden p-6 z-[999]">
          {NavList(true)}
          <Link
            to="/appointment"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block text-center text-white bg-[#80E900] rounded-full py-3 px-6"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
