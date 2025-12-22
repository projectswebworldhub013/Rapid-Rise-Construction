import React from "react";
import leftImage from "../assets/images/about.jpg"; // construction image
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section className="relative bg-[#0F0F0F] py-14 px-6 md:px-12 overflow-hidden">

      {/* ===== GRID BACKGROUND ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.5]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#2A2A2A"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.div
        className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#2A2A2A]"
        >
          <img
            src={leftImage}
            alt="Rapid Rise Construction Site"
            className="w-full h-[500px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* TRUST BADGE */}
          <div className="absolute bottom-6 left-6 bg-[#141414]/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg border-l-4 border-[#D4AF37]">
            <p className="text-sm text-[#CFCFCF] italic">
              “Building homes that last for generations.”
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              — Rapid Rise Construction
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left">

          <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-4">
            About Rapid Rise Construction
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight text-white">
            Crafting Foundations
            <br />
            <span className="text-[#D4AF37] font-normal">
              Of Trust & Excellence
            </span>
          </h2>

          <p className="mt-6 text-[#CFCFCF] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            <span className="font-medium text-[#D4AF37]">
              Rapid Rise Construction
            </span>{" "}
            is a full-service construction company delivering premium residential,
            commercial, and turnkey solutions across Aligarh and surrounding
            regions of Uttar Pradesh.
          </p>

          <p className="mt-4 text-[#CFCFCF] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Backed by <strong>20+ years of leadership experience</strong>, we
            combine architectural creativity, structural precision, and modern
            construction technologies to transform visions into enduring
            realities.
          </p>

          <p className="mt-4 text-[#9A9A9A] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            From luxury mansions and custom homes to commercial buildings and
            complete turnkey execution, every project is delivered with
            transparency, safety, and uncompromising quality.
          </p>

          {/* CTA */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              to="/about"
              className="
                px-10 py-3 rounded-full text-sm md:text-base font-medium
                text-black bg-[#D4AF37]
                hover:bg-[#ffffff]
                
                transition-all duration-300
              "
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </motion.div>

      {/* CENTER STATEMENT */}
      <div className="relative mt-10 text-center max-w-3xl mx-auto">
        <p className="text-lg md:text-xl font-light text-[#CFCFCF]">
          Strong structures begin with strong values.
        </p>
        <p className="text-lg md:text-xl font-light text-[#CFCFCF] mt-1">
          Precision in planning. Excellence in execution.
        </p>
        <p className="text-lg md:text-xl font-medium text-[#D4AF37] mt-3">
          We don’t just construct buildings — we build trust.
        </p>
      </div>

    </section>
  );
}
