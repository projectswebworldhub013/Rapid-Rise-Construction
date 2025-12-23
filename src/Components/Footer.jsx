// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaArrowRight,
  FaPhoneAlt,
  FaLinkedinIn,
  FaPinterestP,
  FaHome,
  FaInfoCircle,
  FaImages,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/bg3.avif";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= SERVICES ================= */
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

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-20 pb-10 px-6 md:px-16 overflow-hidden bg-[#0F0F0F]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F0F0F]/70"></div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-[#CFCFCF]">

        {/* ABOUT */}
        <div className="space-y-4">
          <h4 className="text-3xl font-bold text-white font-[italiana]">
            About Rapid Rise Construction
          </h4>

          <p className="leading-relaxed text-[#CFCFCF]">
            Rapid Rise Construction is a trusted construction and infrastructure
            company delivering premium residential, commercial, and turnkey
            projects. With a focus on quality, safety, and innovation, we build
            strong, sustainable spaces designed for long-term value.
          </p>

          {/* Webmail (unchanged) */}
          <a
            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-5 py-2 rounded-full bg-[#D4AF37] text-black font-semibold shadow-md hover:bg-[#F5C842] transition"
          >
            Access Webmail
          </a>

          {/* SOCIAL ICONS */}
          <div className="hidden md:flex gap-5 text-lg mt-4">
            <a href="https://www.facebook.com/Rapidriseconstruction/" target="_blank" rel="noreferrer" className="text-[#1877F2]">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/rapidriseconstructions/" target="_blank" rel="noreferrer" className="text-[#E1306C]">
              <FaInstagram />
            </a>
            <a href="https://x.com/Rapidriseconst" target="_blank" rel="noreferrer" className="text-white">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/rapidriseconstruction/" target="_blank" rel="noreferrer" className="text-[#0A66C2]">
              <FaLinkedinIn />
            </a>
            <a href="https://www.pinterest.com/rapidriseconstruction/" target="_blank" rel="noreferrer" className="text-[#E60023]">
              <FaPinterestP />
            </a>
            <a href="https://www.youtube.com/@rapidriseconstructions" target="_blank" rel="noreferrer" className="text-[#FF0000]">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4 font-[italiana]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/", icon: <FaHome /> },
              { name: "About", path: "/about", icon: <FaInfoCircle /> },
              { name: "Gallery", path: "/gallery", icon: <FaImages /> },
              { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
              { name: "Certificates", path: "/certificates", icon: <FaArrowRight /> },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition"
                >
                  <span className="text-[#B8962E]">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* EMAILS */}
          <h4 className="mt-6 text-2xl font-bold text-white font-[italiana]">
            Email
          </h4>
          <ul className="mt-3 space-y-2">
            {[
              "info@rapidriseconstruction.co.in",
              "rapidriseconstructions4@gmail.com",
            ].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition"
                >
                  <FaEnvelope className="text-[#B8962E]" /> {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
  <h4 className="text-2xl font-bold text-white mb-4 font-[italiana]">
    Our Services
  </h4>

  <ul className="space-y-2">
    {services.map((service, i) => (
      <li key={i}>
        <Link
          to={service.path}
          className="group flex items-center text-[#E5E5E5] hover:text-[#D4AF37] transition"
        >
          <FaArrowRight className="mr-2 text-[#B8962E] group-hover:translate-x-1 transition-transform" />
          {service.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

        {/* ADDRESS & CONTACT */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4 font-[italiana]">
            Address & Contact
          </h4>

          <address className="not-italic leading-relaxed mb-4 text-[#CFCFCF]">
            1st Floor, Building Incholi House, Plot No. 4/1484,
            Medical Rd, nearby Jamia Urdu, S.S Nagar,
            Aligarh, Uttar Pradesh – 202001
          </address>

          <p className="mb-2">
            <FaPhoneAlt className="inline mr-2 text-[#16A34A]" />
            +91 98971 01492
          </p>
          <p className="mb-4">
            <FaPhoneAlt className="inline mr-2 text-[#16A34A]" />
            +91 98979 18698
          </p>

          <div className="mb-4 flex">
            <Translator />
            <div className="w-44"></div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 mt-10 pt-6 border-t border-[#2A2A2A] text-center text-xs text-[#9A9A9A] space-y-2">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Rapid Rise Construction. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#D4AF37]"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
