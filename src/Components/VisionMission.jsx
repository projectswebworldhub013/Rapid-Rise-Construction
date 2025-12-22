// src/components/VisionMission.jsx
import React from "react";
import visionBg from "../assets/images/vision.jpg";

const VisionMission = () => {
  return (
    <section
      className="relative w-full py-24 px-6 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${visionBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F0F0F]/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-[#9A9A9A] mb-2">
            Our Direction
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFFFFF]">
            Vision & <span className="text-[#D4AF37]">Mission</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-[3px] bg-gradient-to-r from-[#B8962E] to-[#F5C842] rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="relative bg-[#141414]/90 backdrop-blur-md border border-[#2A2A2A] rounded-3xl p-8 md:p-10 shadow-xl hover:border-white transition-all duration-500">
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-[#D4AF37]/40 transition duration-500 pointer-events-none"></div>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#FFFFFF] mb-4">
              Our <span className="text-[#D4AF37]">Vision</span>
            </h3>

            <p className="text-[#CFCFCF] leading-relaxed text-sm md:text-base">
              To become a leading name in the construction industry by delivering
              structurally sound, aesthetically refined, and future-ready
              buildings that stand as symbols of trust, innovation, and
              engineering excellence across residential, commercial, and
              industrial sectors.
            </p>

            {/* Accent Line */}
            <div className="mt-6 h-[2px] w-20 bg-gradient-to-r from-[#D4AF37] to-[#F5C842] rounded-full"></div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-[#141414]/90 backdrop-blur-md border border-[#2A2A2A] rounded-3xl p-8 md:p-10 shadow-xl hover:border-white transition-all duration-500">
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-[#D4AF37]/40 transition duration-500 pointer-events-none"></div>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#FFFFFF] mb-4">
              Our <span className="text-[#D4AF37]">Mission</span>
            </h3>

            <p className="text-[#CFCFCF] leading-relaxed text-sm md:text-base">
              To deliver end-to-end construction solutions with uncompromising
              quality, transparent execution, and strict safety standards —
              combining skilled craftsmanship, modern technology, and efficient
              project management to exceed client expectations on every project.
            </p>

            {/* Accent Line */}
            <div className="mt-6 h-[2px] w-20 bg-gradient-to-r from-[#D4AF37] to-[#F5C842] rounded-full"></div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-[#9A9A9A]">
            Built on integrity, driven by precision, and powered by experience —
            Rapid Rise Construction is committed to shaping strong foundations
            for a better tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
