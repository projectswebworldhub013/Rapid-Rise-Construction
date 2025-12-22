// src/components/OurStory.jsx
import React from "react";
import {
  FaHardHat,
  FaCheckCircle,
  FaClock,
  FaTools,
} from "react-icons/fa";
import imgLeft from "../assets/images/about2.jpg";
import imgRight from "../assets/images/about3.jpg";

const OurStory = () => {
  return (
    <section className="bg-[#0F0F0F] text-[#FFFFFF] px-6 md:px-12 lg:px-20 py-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="flex flex-col justify-start">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug text-[#FFFFFF]">
            Building Dreams with <br />
            <span className="text-[#D4AF37]">
              Strength, Trust & Precision
            </span>
          </h2>

          {/* Content */}
          <p className="mt-6 max-w-xl text-[#CFCFCF] leading-relaxed">
            Rapid Rise Construction was founded with a clear purpose — to create
            strong, reliable, and beautifully designed structures that stand the
            test of time. What began as a vision has grown into a trusted name in
            residential and commercial construction.
          </p>

          <p className="mt-4 max-w-xl text-[#CFCFCF] leading-relaxed">
            Guided by decades of industry experience, we focus on quality
            craftsmanship, transparent processes, and customer-first execution.
            Every project reflects our promise of safety, durability, and long-term value.
          </p>

          {/* Small Image */}
          <div className="mt-8 w-[90%] overflow-hidden">
            <img
              src={imgLeft}
              alt="Rapid Rise Construction Work"
              className="w-full h-full object-cover rounded-lg shadow-md border border-[#2A2A2A]"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          {/* Image */}
          <img
            src={imgRight}
            alt="Rapid Rise Construction Project"
            className="w-full h-auto object-cover rounded-lg shadow-xl border border-[#2A2A2A]"
          />

          {/* Caption */}
          <p className="mt-4 text-sm italic text-[#9A9A9A] max-w-md">
            Every structure we build is engineered with precision, supervised
            with care, and delivered with pride.
          </p>

          {/* Added Heavy Content */}
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold text-[#FFFFFF]">
              Why Choose Rapid Rise Construction
            </h3>

            {/* Point 1 */}
            <div className="flex items-start gap-4">
              <FaHardHat className="text-[#D4AF37] text-2xl mt-1" />
              <p className="text-[#CFCFCF] leading-relaxed">
                <span className="font-semibold text-[#FFFFFF]">
                  Expert Leadership:
                </span>{" "}
                Backed by over 20 years of hands-on industry experience, every
                project is guided with technical expertise and smart
                decision-making.
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-4">
              <FaTools className="text-[#B8962E] text-2xl mt-1" />
              <p className="text-[#CFCFCF] leading-relaxed">
                <span className="font-semibold text-[#FFFFFF]">
                  Quality Craftsmanship:
                </span>{" "}
                We use premium materials, modern tools, and skilled workmanship
                to ensure long-lasting strength and flawless finishing.
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-4">
              <FaClock className="text-[#F5C842] text-2xl mt-1" />
              <p className="text-[#CFCFCF] leading-relaxed">
                <span className="font-semibold text-[#FFFFFF]">
                  On-Time Delivery:
                </span>{" "}
                Strict planning and professional supervision allow us to
                complete projects within committed timelines — without
                compromise.
              </p>
            </div>

            {/* Point 4 */}
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-[#16A34A] text-2xl mt-1" />
              <p className="text-[#CFCFCF] leading-relaxed">
                <span className="font-semibold text-[#FFFFFF]">
                  Client Satisfaction:
                </span>{" "}
                Transparent costing, honest communication, and personalized
                solutions help us build long-term relationships based on trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2A2A2A] mt-12"></div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#2A2A2A] text-center mt-12">
        <div className="py-6 px-6">
          <h3 className="text-4xl font-bold text-[#D4AF37]">20+</h3>
          <p className="mt-2 text-sm text-[#9A9A9A] leading-relaxed">
            Years of Leadership Experience <br />
            Driving excellence under expert guidance.
          </p>
        </div>

        <div className="py-6 px-6">
          <h3 className="text-4xl font-bold text-[#D4AF37]">100+</h3>
          <p className="mt-2 text-sm text-[#9A9A9A] leading-relaxed">
            Projects Delivered <br />
            Residential, commercial & interior developments.
          </p>
        </div>

        <div className="py-6 px-6">
          <h3 className="text-4xl font-bold text-[#D4AF37]">100%</h3>
          <p className="mt-2 text-sm text-[#9A9A9A] leading-relaxed">
            Client Satisfaction <br />
            Built on trust, transparency & timely delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
