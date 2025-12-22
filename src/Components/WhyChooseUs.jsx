import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaHardHat, FaBuilding, FaTools, FaUsers } from "react-icons/fa";

import imgTop from "../assets/images/hero/h1.jpg";
import imgBottom from "../assets/images/hero/h2.jpg";
import bgImage from "../assets/images/bg1.jpg";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-10 overflow-hidden bg-[#0F0F0F]"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <img
          src={bgImage}
          alt="Construction Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE STACK */}
        <div className="grid gap-5">
          {[imgTop, imgBottom].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 + i * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-xl"
            >
              <img
                src={img}
                alt="RR Construction Work"
                className="w-full h-[240px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#9A9A9A] mb-3">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            Why Choose RR Construction
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight text-white">
            Building Strength
            <br />
            <span className="text-[#D4AF37] font-normal">
              With Precision & Trust
            </span>
          </h2>

          <p className="mt-5 text-[#CFCFCF] text-base md:text-lg leading-relaxed max-w-xl">
            We engineer durable structures through disciplined execution,
            premium materials, and strict quality control — ensuring confidence
            in every project we deliver.
          </p>

          {/* PROGRESS BARS */}
          <div className="mt-7 space-y-5">
            <AnimatedProgress title="Project Planning & Execution" value={95} />
            <AnimatedProgress title="Material Quality & Safety" value={90} />
            <AnimatedProgress title="Client Satisfaction Rate" value={98} />
          </div>

          {/* CTA */}
          <button className="cursor-pointer mt-7 inline-flex items-center gap-3 px-9 py-3 rounded-full bg-[#D4AF37] text-black font-medium hover:bg-[#ffffff] transition-all shadow-md">
            About Us →
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="relative z-10 mt-14 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatBox icon={<FaBuilding />} value="300+" label="Projects Delivered" />
        <StatBox icon={<FaUsers />} value="120+" label="Skilled Professionals" />
        <StatBox icon={<FaHardHat />} value="98%" label="Client Satisfaction" />
        <StatBox icon={<FaTools />} value="20+" label="Years Experience" />
      </div>
    </section>
  );
}

/* ================= PROGRESS BAR ================= */
function AnimatedProgress({ title, value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm text-[#CFCFCF] mb-1">
        <span>{title}</span>
        <span className="text-[#D4AF37]">{value}%</span>
      </div>

      <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${value}%` : 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-[#B8962E] via-[#D4AF37] to-[#F5C842]"
        />
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */
function StatBox({ icon, value, label }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-[#141414]/90 backdrop-blur border border-[#2A2A2A] rounded-2xl py-4 px-2 flex flex-col items-center gap-2 hover:border-[#D4AF37] transition-all"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xl">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white">{value}</h3>
      <p className="text-xs text-[#9A9A9A] text-center">{label}</p>
    </motion.div>
  );
}
