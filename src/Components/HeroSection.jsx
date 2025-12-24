import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaHardHat,
  FaBuilding,
  FaCogs,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

import hero1 from "../assets/images/hero/h1.jpg";
import hero2 from "../assets/images/hero/h3.jpg";
import hero3 from "../assets/images/hero/h4.avif";

/* ---------------- BACKGROUND SLIDES ---------------- */

const slides = [hero1, hero2, hero3];

/* ---------------- RIGHT PANEL QUOTES ---------------- */

const featurePoints = [
  {
    icon: <FaHardHat />,
    text: (
      <>
        Over <strong>20+ years of industry experience</strong> delivering
        structurally strong, future-ready constructions.
      </>
    ),
  },
  {
    icon: <FaBuilding />,
    text: (
      <>
        Expertise in <strong>luxury homes, commercial buildings, hospitals,
        offices & institutions</strong>.
      </>
    ),
  },
  {
    icon: <FaCogs />,
    text: (
      <>
        Powered by <strong>modern construction technology</strong>, premium
        materials and transparent costing.
      </>
    ),
  },
  {
    icon: <FaTools />,
    text: (
      <>
        Skilled engineers and supervisors ensuring
        <strong> flawless execution</strong>.
      </>
    ),
  },
  {
    icon: <FaCheckCircle />,
    text: (
      <>
        Commitment to <strong>on-time delivery</strong>, safety compliance and
        long-term reliability.
      </>
    ),
  },
];

export default function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);

  /* 🔁 Background Image Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* 🔁 Right Quote Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % featurePoints.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const activePoint = featurePoints[featureIndex];

  return (
    <section className="mt-28 relative w-full h-[85vh] overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[bgIndex]})` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-white"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Building Strong <br />
              <span className="text-[#D4AF37]">Foundations</span> <br />
              For Tomorrow
            </h1>

            <p className="mt-6 text-lg text-[#CFCFCF] max-w-xl">
              Rapid Rise Construction delivers premium residential, commercial,
              and turnkey construction solutions with unmatched quality,
              precision, and long-term reliability.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#F5C842] transition"
              >
                Get Free Consultation <FaArrowRight />
              </a>

              <a
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 rounded-full hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>

        {/* RIGHT PANEL – TOP RIGHT (DESKTOP ONLY) */}

       </div>
      </div>
    </section>
  );
}
