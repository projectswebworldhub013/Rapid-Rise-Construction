import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaProjectDiagram,
  FaImages,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaBuilding,
  FaCity,
  FaWarehouse,
  
  FaCouch,
  FaRedo,
  FaReceipt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {FaEnvelope, FaIdCard } from "react-icons/fa"
import logo from "../assets/images/rr-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);

  /* ---------------- DATA ---------------- */

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Gallery", path: "/gallery", icon: <FaImages /> },
    { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  // ✅ UPDATED SERVICES WITH PATHS
  const services = [
    {
      name: "Residential Construction",
      path: "/services/residential-construction",
    },
    {
      name: "Commercial Construction",
      path: "/services/commercial-construction",
    },
    {
      name: "Interior Designing",
      path: "/services/interior-designing",
    },
    {
      name: "Renovation & Remodeling",
      path: "/services/renovation-remodeling",
    },
    {
      name: "Architectural & 3D Design",
      path: "/services/architectural-3d-design",
    },
    {
      name: "Turnkey Construction Solutions",
      path: "/services/turnkey-construction-solutions",
    },
    {
      name: "Structural Engineering & Supervision",
      path: "/services/structural-engineering-supervision",
    },
    {
      name: "Project Management & Consultancy",
      path: "/services/project-management-consultancy",
    },
    {
      name: "Sustainable & Green Building Solutions",
      path: "/services/sustainable-green-building-solutions",
    },
  ];

  // Projects with routes and icons
 const projects = [
  { name: "Luxury Mansions", path: "/projects/luxury-mansions", icon: <FaBuilding /> },
  { name: "Residential Homes", path: "/projects/residential-homes", icon: <FaHome /> },
  { name: "Commercial Buildings", path: "/projects/commercial-buildings", icon: <FaCity /> },
  { name: "Office & Showrooms", path: "/projects/offices-showrooms", icon: <FaWarehouse /> },
  { name: "Interior Projects", path: "/projects/interior-projects", icon: <FaCouch /> },
  { name: "Renovation Projects", path: "/projects/renovation-projects", icon: <FaRedo /> },
];


  /* ---------------- SCROLL EFFECT ---------------- */

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowTop(window.scrollY <= lastScrollY || window.scrollY < 80);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- JSX ---------------- */

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔶 Top Marquee */}
<div
  className={`bg-[#0F0F0F] text-white text-xs overflow-hidden transition-all duration-500 ${
    showTop ? "h-9 opacity-100" : "h-0 opacity-0"
  }`}
>
  <div className="relative h-9 flex items-center overflow-hidden">

    {/* Marquee Wrapper */}
    <div className="flex w-max animate-marquee">

  {/* ================= CONTENT SET 1 ================= */}
  <div className="flex items-center gap-14 px-6 text-[#CFCFCF] whitespace-nowrap">

    {/* Welcome */}
    <div className="flex items-center gap-2 font-medium text-white">
  <span className="text-[#D4AF37]">Welcome to</span>
  <span>Rapid Rise Construction — Engineering Excellence in Every Project</span>
</div>


    {/* Divider */}
    <span className="text-[#444]">|</span>

    {/* UDYAM */}
    <div className="flex items-center gap-2">
      <FaIdCard className="text-[#D4AF37]" />
      <span>UDYAM-UP-59-0063441</span>
    </div>

    <span className="text-[#444]">|</span>

    {/* Emails */}
    <div className="flex items-center gap-2">
      <FaEnvelope className="text-[#D4AF37]" />
      <span>rapidriseconstructions4@gmail.com</span>
    </div>

    <span className="text-[#444]">|</span>

    <div className="flex items-center gap-2">
      <FaEnvelope className="text-[#D4AF37]" />
      <span>info@rapidriseconstruction.co.in</span>
    </div>

    <span className="text-[#444]">|</span>

    {/* Phones */}
    <div className="flex items-center gap-2">
      <FaPhoneAlt className="text-[#D4AF37]" />
      <span>+91 98971 01492</span>
    </div>

    <span className="text-[#444]">|</span>

    <div className="flex items-center gap-2">
      <FaPhoneAlt className="text-[#D4AF37]" />
      <span>+91 98979 18698</span>
    </div>
  </div>

  {/* ================= CONTENT SET 2 (DUPLICATE) ================= */}
  <div className="flex items-center gap-14 px-6 text-[#CFCFCF] whitespace-nowrap">

    <div className="flex items-center gap-2 font-medium text-white">
      <span className="text-[#D4AF37]">Welcome to</span>
      <span>Rapid Rise Construction</span>
    </div>

    <span className="text-[#444]">|</span>

    <div className="flex items-center gap-2">
      <FaIdCard className="text-[#D4AF37]" />
      <span>UDYAM-UP-59-0063441</span>
    </div>

    <span className="text-[#444]">|</span>

    <div className="flex items-center gap-2">
      <FaEnvelope className="text-[#D4AF37]" />
      <span>rapidriseconstructions4@gmail.com</span>
    </div>

    <span className="text-[#444]">|</span>

    <div className="flex items-center gap-2">
      <FaEnvelope className="text-[#D4AF37]" />
      <span>info@rapidriseconstruction.co.in</span>
    </div>

    <span className="text-[#444]">|</span>

    <div className="flex items-center gap-2">
      <FaPhoneAlt className="text-[#D4AF37]" />
      <span>+91 98971 01492</span>
    </div>

    <span className="text-[#444]">|</span>

    <div className="flex items-center gap-2">
      <FaPhoneAlt className="text-[#D4AF37]" />
      <span>+91 98979 18698</span>
    </div>
  </div>

</div>

  </div>
</div>




      {/* 🔶 Main Navbar */}
      <nav className="bg-[#FFFFFF] border-b border-[#E5E7EB] shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Rapid Rise Construction" className="h-14" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-[#1A1A1A]">
            {navLinks.slice(0, 2).map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-2 hover:text-[#D4AF37]">
                <FaTools /> Services <FaChevronDown className="text-xs" />
              </button>
              <ul className="absolute left-0 mt-1 w-72 bg-[#141414] text-[#CFCFCF] border border-[#2A2A2A] rounded-xl shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      to={service.path}
                      className="block px-5 py-3 text-sm hover:bg-[#1A1A1A] hover:rounded-xl"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Projects */}
            <li className="relative group">
              <button className="flex items-center gap-2 hover:text-[#D4AF37]">
                <FaProjectDiagram /> Our Projects{" "}
                <FaChevronDown className="text-xs" />
              </button>
              <ul className="absolute left-0 mt-1 w-80 bg-[#141414] text-[#CFCFCF] border border-[#2A2A2A] rounded-xl shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                {projects.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 px-5 py-3 text-sm hover:bg-[#1A1A1A] hover:rounded-xl"
                    >
                      {item.icon} {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.slice(2).map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 hover:text-[#D4AF37]"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex gap-5 text-lg text-[#1A1A1A]">
            <a
              href="https://www.facebook.com/Rapidriseconstruction/"
              target="_blank"
              rel="noreferrer"
              className="text-[#1877F2]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/rapidriseconstructions/"
              target="_blank"
              rel="noreferrer"
              className="text-[#E1306C]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/Rapidriseconst"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/rapidriseconstruction/"
              target="_blank"
              rel="noreferrer"
              className="text-[#0A66C2]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.pinterest.com/rapidriseconstruction/"
              target="_blank"
              rel="noreferrer"
              className="text-[#E60023]"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://www.youtube.com/@rapidriseconstructions"
              target="_blank"
              rel="noreferrer"
              className="text-[#FF0000]"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars size={26} />
          </button>
        </div>
      </nav>

      {/* 🔶 Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#0F0F0F] z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2A2A2A]">
          <h2 className="font-bold text-white">Rapid Rise Construction</h2>
          <FaTimes className="text-white" onClick={() => setMenuOpen(false)} />
        </div>

        <div className="px-5 py-4 space-y-4 text-[#CFCFCF]">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:text-[#F5C842]"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-4">
            <p className="text-[#D4AF37] mb-2 font-semibold">Services</p>
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm hover:text-[#F5C842]"
              >
                {service.name}
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <p className="text-[#D4AF37] mb-2 font-semibold">Projects</p>
            {projects.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm flex items-center gap-2 hover:text-[#F5C842]"
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        .marquee-track { animation: marquee 14s linear infinite; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </header>
  );
}
