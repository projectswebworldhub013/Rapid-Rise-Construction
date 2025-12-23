import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../assets/data/servicesData";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Hammer,
  ShieldCheck,
  Clock,
  Award,
  Star,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SectionHeading = ({ icon: Icon, title }) => (
  <div className="flex items-center justify-center gap-6 mb-14">
    <div className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent to-[#D4AF37]" />
    <div className="flex items-center gap-3 text-center">
      <Icon className="w-7 h-7 text-[#D4AF37]" />
      <h2 className="text-3xl md:text-4xl font-semibold text-[#FFFFFF] tracking-wide">
        {title}
      </h2>
    </div>
    <div className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent to-[#D4AF37]" />
  </div>
);

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((item) => item.path.endsWith(id));
  const [openFAQ, setOpenFAQ] = useState(null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] text-xl text-[#FFFFFF]">
        Service not found
      </div>
    );
  }

  return (
    <div className="mt-28 bg-[#0F0F0F] text-[#FFFFFF]">
      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 h-full flex flex-col justify-end pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] uppercase tracking-widest mb-4"
          >
            Rapid Rise Construction
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-2xl text-lg text-[#CFCFCF]"
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-[#FFFFFF]">
          Service Overview
        </h2>
        <p className="text-lg leading-relaxed text-[#CFCFCF] border-l-4 border-[#D4AF37] pl-6">
          {service.longDescription}
        </p>
      </section>

      {/* ================= EXCEPTIONAL ================= */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <SectionHeading
            icon={Star}
            title="What Makes This Service Exceptional"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.quickPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-[#141414] rounded-xl px-5 py-5 border border-[#2A2A2A]"
              >
                <CheckCircle className="text-[#16A34A] w-6 h-6 shrink-0 mt-0.5" />
                <span className="text-sm text-[#CFCFCF]">{point}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#9A9A9A]">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#B8962E]" /> End-to-End Execution
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#B8962E]" /> Premium Materials
            </span>
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <SectionHeading
          icon={Award}
          title="Our Commitment to Excellence"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Hammer,
              title: "Superior Craftsmanship",
              desc: "Precision-driven execution",
            },
            {
              icon: ShieldCheck,
              title: "Safety & Compliance",
              desc: "Regulation-first approach",
            },
            {
              icon: Clock,
              title: "On-Time Delivery",
              desc: "Strict timeline control",
            },
            {
              icon: Award,
              title: "Quality Assurance",
              desc: "Multi-stage inspections",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] rounded-xl p-6 text-center border border-[#2A2A2A]"
            >
              <item.icon className="w-10 h-10 mx-auto text-[#D4AF37] mb-4" />
              <p className="font-semibold mb-1">{item.title}</p>
              <p className="text-sm text-[#9A9A9A]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#1A1A1A] py-20">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <SectionHeading icon={ChevronDown} title="Frequently Asked Questions" />

    <div className="space-y-5">
      {service.faqs.map((faq, index) => {
        const isOpen = openFAQ === index;

        return (
          <motion.div
            key={index}
            layout
            transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
            className="bg-[#141414] rounded-xl border border-[#2A2A2A] overflow-hidden"
          >
            {/* QUESTION */}
            <button
              onClick={() => setOpenFAQ(isOpen ? null : index)}
              className="cursor-pointer w-full flex justify-between items-center px-6 py-5 text-left font-medium text-[#FFFFFF]"
            >
              <span className="pr-6">{faq.question}</span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown
                  className={`${
                    isOpen ? "text-[#D4AF37]" : "text-[#9A9A9A]"
                  }`}
                />
              </motion.span>
            </button>

            {/* ANSWER */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.45, ease: "easeInOut" },
                    opacity: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[#CFCFCF]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="relative py-14 bg-gradient-to-br from-[#0F0F0F] via-[#141414] to-[#1A1A1A] overflow-hidden">
  {/* Decorative Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_65%)]" />

  <div className="relative max-w-4xl mx-auto px-6 text-center">
    {/* Small Label */}
    <p className="text-sm uppercase tracking-[0.3em] text-[#9A9A9A] mb-3">
      Let’s Build Together
    </p>

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold text-[#FFFFFF] leading-tight mb-4">
      Start Your{" "}
      <span className="text-[#D4AF37]">{service.title}</span>{" "}
      Project
    </h2>

    {/* Divider */}
    <div className="mx-auto mb-6 flex items-center justify-center gap-4">
      <span className="h-px w-12 bg-[#2A2A2A]" />
      <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
      <span className="h-px w-12 bg-[#2A2A2A]" />
    </div>

    {/* Subtitle */}
    <p className="text-sm md:text-base text-[#CFCFCF] max-w-xl mx-auto mb-8 leading-relaxed">
      Precision-engineered execution with transparent processes and
      long-term reliability.
    </p>

    {/* CTA Button */}
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#D4AF37] text-[#0F0F0F] text-sm font-semibold tracking-wide hover:bg-[#F5C842] transition-all"
    >
      Get Consultation
      <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
</section>

    </div>
  );
};

export default ServiceDetail;
