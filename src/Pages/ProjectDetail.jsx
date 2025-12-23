// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaImages,
  FaBuilding,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaLayerGroup,
  FaStar,
} from "react-icons/fa";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";



import projectsData from "../assets/data/projectsData";

export default function ProjectDetail() {
  const { projectSlug } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
const [isClosing, setIsClosing] = useState(false);

const closeModal = () => {
  setIsClosing(true);
  setTimeout(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, 300);
};

  const project = projectsData.find(
    (item) => item.path.split("/").pop() === projectSlug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-white bg-[#0F0F0F]">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="mt-28 w-full bg-[#0F0F0F] text-[#CFCFCF]">
      {/* ================= HERO ================= */}
      <div
        className="relative h-[80vh] w-full bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-2xl px-8 md:px-12 pb-4 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-8 text-sm text-[#CFCFCF] hover:text-[#F5C842]"
          >
            <FaArrowLeft /> Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-[#FFFFFF]">
            {project.title}
          </h1>

          <p className="max-w-2xl text-lg text-[#CFCFCF]">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* -------- Overview + Meta -------- */}
        <div className="grid lg:grid-cols-3 gap-10">
  {/* ================= LEFT: OVERVIEW + QUICK HIGHLIGHTS ================= */}
<div className="lg:col-span-2 space-y-10">

  {/* ================= OVERVIEW ================= */}
  <div>
    <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-[#FFFFFF]">
      <FaBuilding className="text-[#D4AF37]" />
      Project Overview
    </h2>

    <p className="leading-relaxed text-[17px] text-[#CFCFCF]">
      {project.longDescription}
    </p>
  </div>

  {/* ================= QUICK HIGHLIGHTS (2 PER ROW) ================= */}
 <div>
  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-5">
    Quick Highlights
  </h3>

  <div className="grid sm:grid-cols-2 gap-5">
    {project.keyFeatures.map((feature, i) => {
      const descriptions = [
        "Implemented with strict adherence to industry benchmarks and execution standards.",
        "Designed to enhance long-term performance, safety, and operational efficiency.",
        "Carefully planned and executed to ensure durability and consistent results.",
        "Monitored and verified at every stage to maintain superior build quality.",
        "Optimized to deliver reliable outcomes under real-world usage conditions.",
        "Executed by skilled professionals using proven methodologies."
      ];

      return (
        <div
          key={i}
          className="group relative bg-[#141414] rounded-xl p-5 border border-[#2A2A2A] overflow-hidden transition-all duration-300 hover:border-[#D4AF37]"
        >
          {/* Glow */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

          <div className="relative z-10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#2A2A2A] flex items-center justify-center">
              <FaCheckCircle className="text-[#16A34A]" />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#FFFFFF]">
                {feature}
              </p>

              <p className="text-xs text-[#9A9A9A] mt-1 leading-relaxed">
                {descriptions[i % descriptions.length]}
              </p>

              <div className="mt-3 h-1.5 w-full bg-[#2A2A2A] rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-gradient-to-r from-[#D4AF37] to-[#F5C842]" />
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

</div>

{/* ================= RIGHT: STATIC META INFO ================= */}
<div className="bg-[#141414] rounded-2xl border border-[#2A2A2A] p-6 space-y-5">
  {[
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "India",
    },
    {
      icon: <FaLayerGroup />,
      label: "Project Type",
      value: project.title,
    },
    {
      icon: <FaRegCalendarAlt />,
      label: "Duration",
      value: "12 Months",
    },
    {
      icon: <FaCheckCircle />,
      label: "Quality Grade",
      value: "Premium",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="relative flex items-start gap-4 bg-[#1A1A1A] rounded-xl p-4 border border-[#2A2A2A]"
    >
      {/* Accent Line */}
      <span className="absolute left-0 top-0 h-full w-[3px] bg-[#D4AF37] rounded-l-xl" />

      <div
        className={`mt-1 ${
          item.success ? "text-[#16A34A]" : "text-[#D4AF37]"
        }`}
      >
        {item.icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-[#9A9A9A]">
          {item.label}
        </p>
        <p className="font-semibold text-[#FFFFFF] text-sm">
          {item.value}
        </p>
      </div>
    </div>
  ))}

  {/* Bottom Stats */}
 <div className="pt-5 border-t border-[#2A2A2A] grid grid-cols-3 gap-4 text-center">
  {[
    {
      label: "Execution",
      value: "100%",
      icon: <FaCheckCircle />,
      accent: "from-[#16A34A] to-[#22C55E]",
    },
    {
      label: "Quality Check",
      value: "Passed",
      icon: <FaLayerGroup />,
      accent: "from-[#D4AF37] to-[#F5C842]",
    },
    {
      label: "Client Rating",
      value: "5★",
      icon: <FaStar />,
      accent: "from-[#F59E0B] to-[#FACC15]",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="group relative mt-4 bg-[#141414] rounded-xl p-4 border border-[#2A2A2A] transition-all duration-300 hover:border-[#D4AF37]"
    >
      {/* Glow */}
      <span className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition from-[#D4AF37]/10 to-transparent rounded-xl" />

      <div className="relative z-10 flex flex-col items-center gap-2">
        {/* Icon */}
        {/* <div
          className={`w-9 h-9 rounded-full bg-[#0F0F0F] border border-[#2A2A2A] flex items-center justify-center text-sm bg-gradient-to-br ${item.accent}`}
        >
          <span className="text-black">{item.icon}</span>
        </div> */}

        {/* Value */}
        <p className="text-base font-bold text-[#FFFFFF]">
          {item.value}
        </p>

        {/* Label */}
        <p className="text-[11px] uppercase tracking-wide text-[#9A9A9A]">
          {item.label}
        </p>
      </div>
    </div>
  ))}
</div>

</div>


</div>


        {/* -------- Gallery -------- */}
       <div>
  <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-[#FFFFFF]">
    <FaImages className="text-[#D4AF37]" />
    Project Gallery
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
    {project.images.map((img, i) => (
      <div
        key={i}
        onClick={() => {
          setActiveIndex(i);
          setIsOpen(true);
        }}
        className="cursor-pointer overflow-hidden rounded-2xl border border-[#2A2A2A] group"
      >
        <img
          src={img}
          alt={`${project.title} ${i + 1}`}
          className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-700"
        />
      </div>
    ))}
  </div>
</div>


{isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
    
    {/* Backdrop */}
    <div
      className="absolute inset-0"
      onClick={closeModal}
    />

    {/* Modal */}
    <div
      className={`relative top-4 md:top-12 z-[60] w-full max-w-5xl bg-[#0F0F0F] border border-[#2A2A2A] rounded-3xl p-4 md:p-6
      transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
    >
      {/* ❌ Close Button (FIXED VISIBILITY) */}
      <button
        onClick={closeModal}
        className="absolute -top-4 -right-4 z-[70] bg-[#141414] border border-[#2A2A2A]
        p-3 rounded-full text-white shadow-lg
        hover:border-[#D4AF37] hover:scale-105 transition"
      >
        <FaTimes />
      </button>

      {/* Slider */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {project.images.map((img, i) => (
            <div
              key={i}
              className="min-w-full flex items-center justify-center bg-black"
            >
              <img
                src={img}
                alt={`Slide ${i}`}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() =>
          setActiveIndex(
            activeIndex === 0
              ? project.images.length - 1
              : activeIndex - 1
          )
        }
        className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-[60]
        bg-[#141414] border border-[#2A2A2A] p-3 rounded-full text-white
        hover:border-[#D4AF37] transition"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setActiveIndex(
            activeIndex === project.images.length - 1
              ? 0
              : activeIndex + 1
          )
        }
        className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-[60]
        bg-[#141414] border border-[#2A2A2A] p-3 rounded-full text-white
        hover:border-[#D4AF37] transition"
      >
        <FaChevronRight />
      </button>

      {/* Counter */}
      <div className="mt-4 text-center text-sm text-[#9A9A9A]">
        {activeIndex + 1} / {project.images.length}
      </div>
    </div>
  </div>
)}



        {/* -------- CTA -------- */}
    <div className="text-center py-4">
  <h3 className="text-xl md:text-2xl font-semibold text-[#FFFFFF] mb-2">
    Want a Similar Project?
  </h3>

  <p className="text-[#CFCFCF] text-sm md:text-base mb-5 max-w-xl mx-auto">
    Let’s plan and execute your project with precision and premium quality.
  </p>

  <Link
    to="/contact"
    className="inline-flex items-center gap-2 
    px-7 py-3 rounded-full 
    bg-[#D4AF37] text-black text-sm md:text-base font-semibold
    hover:bg-[#F5C842] transition-all duration-300
    "
  >
    Get Consultation
  </Link>
</div>



      </div>
    </section>
  );
}
