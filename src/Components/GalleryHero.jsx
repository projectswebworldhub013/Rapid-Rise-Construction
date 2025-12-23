// src/components/GalleryHero.jsx
import React from "react";
import { ChevronDown } from "lucide-react";
import galleryHeroImg from "../assets/images/gallery-hero.jpg"; // replace with gallery-related image
import { Link } from "react-router-dom";

const GalleryHero = () => {
  return (
    <section
      className="mt-28 relative w-full flex items-center justify-center text-[#FFFFFF]"
      style={{
        minHeight: "80vh",
        backgroundImage: `url(${galleryHeroImg})`,
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
          Explore Our Work
        </p>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight md:leading-tight">
          Showcasing Excellence.{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5C842] bg-clip-text text-transparent">
            Inspiring Projects.
          </span>
        </h1>

        {/* Divider */}
        <div className="w-20 sm:w-28 h-[2px] sm:h-[3px] bg-gradient-to-r from-[#B8962E] to-[#F5C842] mt-4 mb-5 sm:mb-6 rounded-full" />

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#CFCFCF] max-w-xs sm:max-w-xl md:max-w-3xl leading-relaxed sm:leading-relaxed mb-6 sm:mb-8">
          Our gallery showcases the diversity and quality of our construction projects — from residential marvels to commercial landmarks. Each project represents our commitment to precision, design, and durability.
        </p>

        {/* CTA Buttons */}
        <div className="flex sm:flex-row gap-4 sm:gap-6 justify-center mb-4 sm:mb-6 w-full">
          {/* About Page Button */}
          <Link to="/about" className="sm:w-auto ">
            <button className="w-full sm:w-auto px-6 sm:px-7 py-3 font-semibold rounded-full
              bg-gradient-to-r from-[#D4AF37] to-[#F5C842]
              text-[#0F0F0F] shadow-lg
              hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              About Us
            </button>
          </Link>

          {/* Scroll to Gallery Section */}
          <a href="#gallery" className="sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-7 py-3 font-semibold rounded-full
              bg-[#1A1A1A] border border-[#B8962E]
              text-[#FFFFFF] shadow-lg
              hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#F5C842]
              hover:text-[#0F0F0F]
              hover:scale-105 hover:shadow-2xl
              transition-all duration-200 cursor-pointer">
              View Gallery
            </button>
          </a>
        </div>

        {/* Supporting Line */}
        <p className="text-xs sm:text-sm text-[#9A9A9A] max-w-xs sm:max-w-md md:max-w-lg">
          Inspiring design. Reliable execution. Timeless quality.
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

export default GalleryHero;
