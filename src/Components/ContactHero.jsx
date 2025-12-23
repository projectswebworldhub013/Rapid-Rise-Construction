// src/components/ContactHero.jsx
import React from "react";
import { ChevronDown } from "lucide-react";
import { FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa";
import contactHeroImg from "../assets/images/contact-hero.jpg"; // Replace with your image

const ContactHero = () => {
  return (
    <section
      className="mt-28 relative w-full flex items-center justify-center text-[#FFFFFF]"
      style={{
        minHeight: "80vh",
        backgroundImage: `url(${contactHeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0">
        {/* Top fade */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0F0F0F] to-transparent" />
        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-[#0F0F0F]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 max-w-6xl text-center flex flex-col items-center">
        {/* Tagline */}
        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-[#9A9A9A] mb-3 sm:mb-4">
          Get in Touch with Rapid Rise Construction
        </p>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight md:leading-tight">
          Let’s Discuss Your{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5C842] bg-clip-text text-transparent">
            Next Project
          </span>
        </h1>

        {/* Divider */}
        <div className="w-20 sm:w-24 h-[2px] sm:h-[3px] bg-gradient-to-r from-[#B8962E] to-[#F5C842] mt-4 mb-5 sm:mb-6 rounded-full" />

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#CFCFCF] max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed sm:leading-relaxed mb-6 sm:mb-8">
          Whether you’re planning a residential build, commercial project, or complete turnkey solution, our experts are ready to guide you with precision, transparency, and unmatched construction quality.
        </p>

        {/* CTA Buttons */}
        <div className="flex  flex-row flex-wrap gap-4 sm:gap-6 justify-center mb-4 sm:mb-6 w-full">
          {/* Enquiry Button */}
          <a href="#enquiry-form" className="sm:w-auto">
            <button
              className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 font-semibold rounded-full
              bg-gradient-to-r from-[#D4AF37] to-[#F5C842]
              text-[#0F0F0F] shadow-lg
              hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <FaEnvelopeOpenText className="text-sm sm:text-base" />
              <span className="text-sm sm:text-base">Get Enquiry</span>
            </button>
          </a>

          {/* Call Button */}
          <a href="tel:+919897101492" className="sm:w-auto">
            <button
              className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 font-semibold rounded-full
              bg-[#1A1A1A] border border-[#B8962E]
              text-[#FFFFFF] shadow-lg
              hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#F5C842]
              hover:text-[#0F0F0F]
              hover:scale-105 hover:shadow-2xl
              transition-all duration-200 cursor-pointer"
            >
              <FaPhoneAlt className="text-sm sm:text-base" />
              <span className="text-sm sm:text-base">Call Now</span>
            </button>
          </a>
        </div>

        {/* Supporting Line */}
        <p className="text-xs sm:text-sm text-[#9A9A9A] max-w-xs sm:max-w-md md:max-w-lg">
          Trusted construction expertise. Clear communication. Reliable execution.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6">
        <ChevronDown
          size={28}
          className="text-[#D4AF37] animate-bounce"
        />
      </div>
    </section>
  );
};

export default ContactHero;
