// src/components/Contact.jsx
import React from "react";
import ContactHero from "../Components/ContactHero";
import MapSection from "../Components/MapSection";
import contactBg from "../assets/images/contact-hero.jpg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Get in Touch
            </h2>

            <div className="w-20 h-[3px] bg-gradient-to-r from-[#B8962E] to-[#F5C842] mb-6 rounded-full" />

            <p className="text-[#CFCFCF] leading-relaxed mb-10 max-w-xl">
              Rapid Rise Construction is a trusted construction company
              delivering residential, commercial, and turnkey projects with
              engineering precision, premium materials, and modern execution.
              Reach out to us for consultations, site discussions, or project
              planning.
            </p>

            {/* INFO BLOCKS */}
            <div className="space-y-8">

              {/* ADDRESS */}
              <div className="flex items-start gap-4 border-b border-[#2A2A2A] pb-6">
                <FaMapMarkerAlt className="text-[#D4AF37] text-xl mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Office Address</h4>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">
                    1st Floor, Building Incholi House, Plot No. 4/1484, <br />
                    Medical Road, Nearby Jamia Urdu, S.S Nagar, <br />
                    Aligarh, Uttar Pradesh – 202001
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4 border-b border-[#2A2A2A] pb-6">
                <FaPhoneAlt className="text-[#D4AF37] text-lg mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-[#9A9A9A] text-sm">
                    +91 98971 01492 <br />
                    +91 98979 18698
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#D4AF37] text-lg mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-[#9A9A9A] text-sm">
                    info@rapidriseconstruction.co.in <br />
                    rapidriseconstructions4@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="relative rounded-xl overflow-hidden shadow-2xl"
            id="enquiry-form"
            style={{
              backgroundImage: `url(${contactBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0F0F0F]/85" />

            <div className="relative p-8 md:p-10">
              <h3 className="text-2xl font-semibold mb-6">
                Enquiry Form
              </h3>

              <form
                action="https://formsubmit.co/info@rapidriseconstruction.co.in"
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Enquiry - Rapid Rise Construction"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-b border-[#2A2A2A] py-3 text-[#FFFFFF] placeholder-[#9A9A9A] focus:outline-none focus:border-[#F5C842]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-transparent border-b border-[#2A2A2A] py-3 text-[#FFFFFF] placeholder-[#9A9A9A] focus:outline-none focus:border-[#F5C842]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border-b border-[#2A2A2A] py-3 text-[#FFFFFF] placeholder-[#9A9A9A] focus:outline-none focus:border-[#F5C842]"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full bg-transparent border-b border-[#2A2A2A] py-3 text-[#FFFFFF] placeholder-[#9A9A9A] focus:outline-none focus:border-[#F5C842]"
                />

                <button
                  type="submit"
                  className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold
                  bg-gradient-to-r from-[#D4AF37] to-[#F5C842]
                  text-[#0F0F0F]
                  hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 mt-16 text-xl">
          <a href="https://www.facebook.com/Rapidriseconstruction/" target="_blank" rel="noreferrer" className="text-[#1877F2]">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/rapidriseconstructions/" target="_blank" rel="noreferrer" className="text-[#E1306C]">
            <FaInstagram />
          </a>
          <a href="https://x.com/Rapidriseconst" target="_blank" rel="noreferrer" className="text-[#FFFFFF]">
            <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/rapidriseconstruction/" target="_blank" rel="noreferrer" className="text-[#0A66C2]">
            <FaLinkedinIn />
          </a>
          <a href="https://www.pinterest.com/rapidriseconstruction/" target="_blank" rel="noreferrer" className="text-[#E60023]">
            <FaPinterestP />
          </a>
          <a href="https://www.youtube.com/@rapidriseconstructions" target="_blank" rel="noreferrer" className="text-[#FF0000]">
            <FaYoutube />
          </a>
        </div>
      </section>

      <MapSection />
    </>
  );
};

export default Contact;
