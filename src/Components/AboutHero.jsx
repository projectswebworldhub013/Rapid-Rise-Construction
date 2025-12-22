// src/components/AboutHero.jsx
import React from "react";
import { ChevronDown } from "lucide-react";
import aboutHeroImg from "../assets/images/about-hero.jpg"; // replace with construction-related image
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section
      className="mt-28 relative h-[80vh] w-full flex items-center justify-center text-[#FFFFFF]"
      style={{
        backgroundImage: `url(${aboutHeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0">
        {/* Top fade */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0F0F0F] to-transparent" />
        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-[#0F0F0F]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-6xl text-center flex flex-col items-center">
        {/* Tagline */}
        <p className="uppercase tracking-[0.35em] text-sm text-[#9A9A9A] mb-4">
          About Rapid Rise Construction
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Building Strength.{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5C842] bg-clip-text text-transparent">
            Creating Landmarks.
          </span>
        </h1>

        {/* Divider */}
        <div className="w-28 h-[3px] bg-gradient-to-r from-[#B8962E] to-[#F5C842] mt-5 mb-6 rounded-full" />

        {/* Description */}
        <p className="text-base sm:text-lg text-[#CFCFCF] max-w-3xl leading-relaxed mb-10">
          Rapid Rise Construction is a trusted name in residential, commercial,
          and turnkey construction solutions. With a strong foundation of
          engineering excellence, modern design, and uncompromising quality,
          we deliver projects that stand the test of time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <Link to="/contact">
            <button className="px-7 py-3 font-semibold rounded-full
              bg-gradient-to-r from-[#D4AF37] to-[#F5C842]
              text-[#0F0F0F] shadow-lg
              hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              Get Free Consultation
            </button>
          </Link>

          <Link to="/gallery">
            <button
              className="px-7 py-3 font-semibold rounded-full
              bg-[#1A1A1A] border border-[#B8962E]
              text-[#FFFFFF] shadow-lg
              hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#F5C842]
              hover:text-[#0F0F0F]
              hover:scale-105 hover:shadow-2xl
              transition-all duration-200 cursor-pointer"
            >
              View Our Work
            </button>
          </Link>
        </div>

        {/* Supporting Line */}
        <p className="text-sm text-[#9A9A9A]">
          Engineered with precision. Built with responsibility.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6">
        <ChevronDown
          size={32}
          className="text-[#D4AF37] animate-bounce"
        />
      </div>
    </section>
  );
};

export default AboutHero;
