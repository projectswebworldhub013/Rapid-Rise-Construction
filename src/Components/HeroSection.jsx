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

const slides = [hero1, hero2, hero3];

/* 🔹 Right Panel Points */
const featurePoints = [
  {
    icon: <FaHardHat />,
    text: (
      <>
        Over <strong>20+ years of industry experience</strong> delivering
        structurally strong, aesthetically refined, future-ready constructions.
      </>
    ),
  },
  {
    icon: <FaBuilding />,
    text: (
      <>
        Expertise in <strong>luxury homes, commercial buildings, hospitals,
        offices & institutions</strong> with end-to-end supervision.
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
        Skilled engineers, architects & supervisors ensuring
        <strong> flawless execution</strong> at every stage.
      </>
    ),
  },
  {
    icon: <FaCheckCircle />,
    text: (
      <>
        Commitment to <strong>on-time delivery</strong>, safety compliance and
        long-term structural reliability.
      </>
    ),
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);

  /* 🔁 Background Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* 🔁 Right Text Vertical Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % featurePoints.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const visiblePoints = [
    featurePoints[featureIndex % featurePoints.length],
    featurePoints[(featureIndex + 1) % featurePoints.length],
    featurePoints[(featureIndex + 2) % featurePoints.length],
  ];

  return (
    <section className="mt-28 relative w-full h-[85vh] overflow-hidden">
      {/* 🔥 Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index]})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
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

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#F5C842] transition-all duration-300"
              >
                Get Free Consultation <FaArrowRight />
              </a>

              <a
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 rounded-full hover:bg-white/10 transition"
              >
                View Our Projects
              </a>
            </div>
          </motion.div>

          {/* RIGHT – FIXED PANEL WITH SLIDING CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative left-32"
          >
            <div className="p-8 w-[28rem] overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={featureIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {visiblePoints.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="text-[#D4AF37] text-2xl mt-1">
                        {item.icon}
                      </div>
                      <p className="text-sm text-[#E5E5E5] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 mt-6 border-t border-white/10 text-sm text-[#CFCFCF]">
                Trusted by{" "}
                <span className="text-[#D4AF37] font-semibold">500+</span>{" "}
                satisfied clients across Uttar Pradesh.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
