import React from "react";
import { motion } from "framer-motion";
import { FaHardHat, FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import imgTop from "../assets/images/hero/h1.jpg";
import imgBottom from "../assets/images/hero/h2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#0F0F0F] py-24 px-6 md:px-12 overflow-hidden">

      {/* GOLDEN GLOW */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#F5C842]/5 rounded-full blur-2xl" />

      <motion.div
        className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* LEFT IMAGE STACK */}
        <div className="grid gap-6">
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-[#2A2A2A] shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={imgTop}
              alt="Construction Planning"
              className="w-full h-[260px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden border border-[#2A2A2A] shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={imgBottom}
              alt="On Site Construction"
              className="w-full h-[260px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* LABEL */}
          <p className="flex items-center gap-3 text-sm uppercase tracking-widest text-[#9A9A9A] mb-4">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            Why Choose RR Construction
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight text-white">
            Building Strength
            <br />
            <span className="text-[#D4AF37] font-normal">
              Through Precision & Trust
            </span>
          </h2>

          <p className="mt-6 text-[#CFCFCF] text-base md:text-lg leading-relaxed max-w-xl">
            Rapid Rise Construction stands for structural integrity, disciplined
            execution, and uncompromised quality. We don’t just deliver projects —
            we deliver confidence.
          </p>

          {/* DIVIDER */}
          <div className="my-8 w-24 h-[1px] bg-[#2A2A2A]" />

          {/* PROGRESS BARS */}
          <div className="space-y-6">

            <ProgressItem
              title="Project Planning & Execution"
              percent="95%"
              width="w-[95%]"
            />

            <ProgressItem
              title="Material Quality & Safety Standards"
              percent="90%"
              width="w-[90%]"
            />

            <ProgressItem
              title="Client Satisfaction Rate"
              percent="98%"
              width="w-[98%]"
            />

          </div>

          {/* CTA */}
          <button className="mt-10 inline-flex items-center gap-3 px-10 py-3 rounded-full bg-[#D4AF37] text-black font-medium hover:bg-[#F5C842] transition-all shadow-lg hover:shadow-[0_15px_35px_rgba(212,175,55,0.35)]">
            About Us →
          </button>
        </div>
      </motion.div>

      {/* STATS */}
      <motion.div
        className="relative mt-24 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <StatBox icon={<FaBuilding />} value="300+" label="Projects Delivered" />
        <StatBox icon={<FaUsers />} value="120+" label="Skilled Professionals" />
        <StatBox icon={<FaHardHat />} value="98%" label="Client Satisfaction" />
        <StatBox icon={<FaTools />} value="20+" label="Years of Experience" />
      </motion.div>
    </section>
  );
}

/* PROGRESS ITEM */
function ProgressItem({ title, percent, width }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium text-[#CFCFCF] mb-2">
        <span>{title}</span>
        <span className="text-[#D4AF37]">{percent}</span>
      </div>
      <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
        <div className={`h-2 ${width} bg-gradient-to-r from-[#B8962E] to-[#F5C842] rounded-full`} />
      </div>
    </div>
  );
}

/* STAT BOX */
function StatBox({ icon, value, label }) {
  return (
    <div className="bg-[#141414] border border-[#2A2A2A] rounded-2xl py-8 px-4 flex flex-col items-center gap-3 hover:border-[#D4AF37] transition-all">
      <div className="text-[#D4AF37] text-3xl">{icon}</div>
      <h3 className="text-3xl font-semibold text-white">{value}</h3>
      <p className="text-sm text-[#9A9A9A] text-center">{label}</p>
    </div>
  );
}
