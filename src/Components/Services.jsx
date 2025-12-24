// src/components/Services.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Icons
import {
  FaHome,
  FaBuilding,
  FaCouch,
  FaTools,
  FaDraftingCompass,
  FaKey,
  FaHardHat,
  FaTasks,
  FaLeaf,
} from "react-icons/fa";

// Images
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";
import s4 from "../assets/images/s4.jpg";
import s5 from "../assets/images/s5.jpg";
import s6 from "../assets/images/s6.jpg";
import s7 from "../assets/images/s7.jpg";
import s8 from "../assets/images/s8.jpg";
import s9 from "../assets/images/s9.jpg";

import bg from "../assets/images/bg2.avif";

/* 🔗 SERVICE ROUTES MAP */
const servicePaths = {
  "Residential Construction": "/services/residential-construction",
  "Commercial Construction": "/services/commercial-construction",
  "Interior Designing": "/services/interior-designing",
  "Renovation & Remodeling": "/services/renovation-remodeling",
  "Architectural & 3D Design": "/services/architectural-3d-design",
  "Turnkey Construction Solutions": "/services/turnkey-construction-solutions",
  "Structural Engineering & Supervision":
    "/services/structural-engineering-supervision",
  "Project Management & Consultancy":
    "/services/project-management-consultancy",
  "Sustainable & Green Building Solutions":
    "/services/sustainable-green-building-solutions",
};

/* 🏗️ SERVICES DATA */
const servicesData = [
  {
    id: 1,
    title: "Residential Construction",
    icon: <FaHome />,
    image: s1,
    description:
      "High-quality villas, bungalows, and custom homes built with modern planning and durable materials.",
  },
  {
    id: 2,
    title: "Commercial Construction",
    icon: <FaBuilding />,
    image: s2,
    description:
      "Strong and functional commercial spaces including offices, shops, hospitals, and institutions.",
  },
  {
    id: 3,
    title: "Interior Designing",
    icon: <FaCouch />,
    image: s3,
    description:
      "Elegant interior designs focused on comfort, space efficiency, and modern lifestyle aesthetics.",
  },
  {
    id: 4,
    title: "Renovation & Remodeling",
    icon: <FaTools />,
    image: s4,
    description:
      "Upgrade and modernize existing spaces with smart renovations and structural improvements.",
  },
  {
    id: 5,
    title: "Architectural & 3D Design",
    icon: <FaDraftingCompass />,
    image: s5,
    description:
      "Professional 2D layouts, 3D visualizations, elevations, and vastu-compliant planning.",
  },
  {
    id: 6,
    title: "Turnkey Construction Solutions",
    icon: <FaKey />,
    image: s6,
    description:
      "Complete construction solutions from design to final handover with zero hassle.",
  },
  {
    id: 7,
    title: "Structural Engineering & Supervision",
    icon: <FaHardHat />,
    image: s7,
    description:
      "Safe, strong structures ensured through expert engineering and on-site supervision.",
  },
  {
    id: 8,
    title: "Project Management & Consultancy",
    icon: <FaTasks />,
    image: s8,
    description:
      "Efficient project planning, cost control, and expert guidance for smooth execution.",
  },
  {
    id: 9,
    title: "Sustainable & Green Building Solutions",
    icon: <FaLeaf />,
    image: s9,
    description:
      "Eco-friendly construction using energy-efficient designs and sustainable materials.",
  },
];

export default function Services() {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section
      className="relative py-20 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F0F0F]/65" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="uppercase tracking-widest text-sm font-semibold text-[#9A9A9A]">
          What We Offer
        </h2>

        <h3 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] mt-3">
          Our <span className="text-[#D4AF37]">Construction Services</span>
        </h3>

        <p className="max-w-3xl mx-auto mt-5 mb-14 text-[#CFCFCF] text-sm sm:text-base">
          Rapid Rise Construction delivers reliable, modern, and future-ready
          construction solutions with uncompromising quality, safety, and trust.
        </p>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {servicesData.slice(0, visibleCount).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-[#141414] border border-[#2A2A2A] rounded-2xl w-80 overflow-hidden
                         hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]
                         transition-all duration-500 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-6 text-left flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[#D4AF37] text-xl mb-3">
                  {service.icon}
                  <h4 className="text-base font-bold text-[#FFFFFF] uppercase">
                    {service.title}
                  </h4>
                </div>

                <p className="text-sm text-[#CFCFCF] flex-1 leading-relaxed">
                  {service.description}
                </p>

                {/* KNOW MORE BUTTON */}
                <Link
                  to={servicePaths[service.title]}
                  className="mt-6 inline-block text-center px-5 py-2.5 rounded-full text-sm font-semibold
                             bg-[#D4AF37] text-[#0F0F0F]
                             hover:bg-[#F5C842] transition-all duration-300"
                >
                  Know More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < servicesData.length && (
          <div className="mt-14">
            <button
              onClick={() => setVisibleCount(servicesData.length)}
              className="px-8 py-3 rounded-full font-semibold text-sm
                         bg-[#1A1A1A] text-[#D4AF37] border border-[#B8962E]
                         hover:bg-[#D4AF37] hover:text-[#0F0F0F]
                         transition-all duration-300"
            >
              View All Services
            </button>
          </div>
        )}

        {/* CTA */}
        <p className="mt-16 text-[#CFCFCF] text-sm sm:text-base">
          Ready to build something exceptional?{" "}
          <Link
            to="/contact"
            className="text-[#F5C842] font-semibold underline hover:text-[#D4AF37]"
          >
            Get a Free Consultation
          </Link>
        </p>
      </div>
    </section>
  );
}
