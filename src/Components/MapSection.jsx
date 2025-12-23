// src/components/MapSection.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-10 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#FFFFFF] mb-4">
          Visit Our Office
        </h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-[#B8962E] mx-auto rounded-full mb-6"></div>

        {/* Subheading */}
        <p className="text-[#CFCFCF] max-w-2xl mx-auto leading-relaxed">
          Step into{" "}
          <span className="font-semibold text-[#D4AF37]">
            Rapid Rise Construction
          </span>{" "}
          and experience our professional construction planning and project
          management. Visit our Aligarh office to discuss your project and
          explore our quality solutions in person.
        </p>
      </div>

      {/* Map Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#2A2A2A]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d131879.96292432692!2d78.08311582339842!3d27.89828990495111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3974a5a24cba3a41%3A0x86cfec2d1d322827!2s1st%20Floor%2C%20Building%20Incholi%20House%2C%20Plot%20No.%204%2F1484%2C%20Medical%20Rd%2C%20nearby%20Jamia%20Urdu%2C%20Jamia%20Urdu%2C%20S.S%20Nagar%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001!3m2!1d27.911564199999997!2d78.08454549999999!5e0!3m2!1sen!2sin!4v1766510640170!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rapid Rise Construction Office Location"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
