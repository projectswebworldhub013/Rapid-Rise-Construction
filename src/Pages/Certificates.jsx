import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { motion } from "framer-motion";

// PDFs
import udyam from "../assets/certificates/udyam.pdf";
import udyamAnnexure from "../assets/certificates/udyam-anexture.pdf";
import gst from "../assets/certificates/gst.pdf";

/* ================= COLOR SCHEME ================= */
const COLORS = {
  primaryBg: "#0F0F0F",
  secondaryBg: "#1A1A1A",
  cardBg: "#141414",
  primaryAccent: "#D4AF37",
  secondaryAccent: "#B8962E",
  highlight: "#F5C842",
  primaryText: "#FFFFFF",
  secondaryText: "#CFCFCF",
  mutedText: "#9A9A9A",
  border: "#2A2A2A",
  success: "#16A34A",
};

/* ================= CERTIFICATE DATA ================= */
const certificates = [
  {
    id: 1,
    name: "UDYAM Registration Certificate",
    description:
      "This certificate establishes Rapid Rise Construction as a government-recognized MSME, ensuring operational authenticity, credibility, and regulatory compliance.",
    file: udyam,
  },
  {
    id: 2,
    name: "UDYAM Annexure",
    description:
      "The annexure provides detailed official business information, reinforcing transparency, legitimacy, and trust for clients and partners.",
    file: udyamAnnexure,
  },
  {
    id: 3,
    name: "GST Registration Certificate",
    description:
      "Our GST registration guarantees lawful billing practices, tax compliance, and eligibility to execute commercial and turnkey construction projects.",
    file: gst,
  },
];

const Certificates = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      {/* ================= CUSTOM HERO ================= */}
      <section
  className="relative w-full flex items-center justify-center text-center px-6 py-20 md:py-24 mt-24"
  style={{ backgroundColor: COLORS.primaryBg }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black" />

  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="relative z-10 max-w-4xl"
  >
    {/* Top Label */}
    <p
      className="uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-3"
      style={{ color: COLORS.mutedText }}
    >
      Trust • Compliance • Credibility
    </p>

    {/* Heading */}
    <h1
      className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-4"
      style={{ color: COLORS.primaryText }}
    >
      Our{" "}
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${COLORS.primaryAccent}, ${COLORS.highlight})`,
        }}
      >
        Certifications
      </span>
    </h1>

    {/* Divider */}
    <div
      className="w-16 h-[2px] mx-auto rounded-full mb-4"
      style={{
        backgroundImage: `linear-gradient(to right, ${COLORS.secondaryAccent}, ${COLORS.highlight})`,
      }}
    />

    {/* Description */}
    <p
      className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
      style={{ color: COLORS.secondaryText }}
    >
      Rapid Rise Construction is fully certified and compliant with government
      and industry standards. Our credentials reflect transparency, reliability,
      and a commitment to delivering projects with integrity and trust.
    </p>
  </motion.div>
</section>


      {/* ================= CERTIFICATES GRID ================= */}
      <section
        className="w-full py-20 px-6 md:px-16"
        style={{ backgroundColor: COLORS.secondaryBg }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {certificates.map(({ id, name, description, file }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-3xl p-8 border shadow-xl"
              style={{
                backgroundColor: COLORS.cardBg,
                borderColor: COLORS.border,
              }}
            >
              {/* Accent Strip */}
              <div
                className="absolute top-0 left-0 w-full h-[3px] rounded-t-3xl"
                style={{ backgroundColor: COLORS.primaryAccent }}
              />

              {/* Tag */}
              

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-5">
                <HiDocumentText
                  className="text-5xl"
                  style={{ color: COLORS.primaryAccent }}
                />
                <h3
                  className="text-xl font-semibold"
                  style={{ color: COLORS.primaryText }}
                >
                  {name}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: COLORS.secondaryText }}
              >
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setPreviewFile(file)}
                  className="flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
                  style={{
                    backgroundColor: COLORS.primaryAccent,
                    color: COLORS.primaryBg,
                  }}
                >
                  <FaEye /> View
                </button>

                <a
                  href={file}
                  download
                  className="flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 border transition-all"
                  style={{
                    borderColor: COLORS.primaryAccent,
                    color: COLORS.primaryAccent,
                  }}
                >
                  <FaDownload /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section
        className="py-20"
        style={{ backgroundColor: COLORS.primaryBg }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center">
          {[
            {
              icon: <FaShieldAlt />,
              title: "Government Authorized",
              text: "All certifications are issued and verified by Indian authorities.",
            },
            {
              icon: <FaCheckCircle />,
              title: "Legally Compliant",
              text: "Registered under MSME & GST frameworks for transparent operations.",
            },
            {
              icon: <FaUserTie />,
              title: "Trusted Construction Partner",
              text: "Recognized for professionalism, reliability, and quality execution.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="p-6 rounded-2xl border"
              style={{
                borderColor: COLORS.border,
                backgroundColor: COLORS.cardBg,
              }}
            >
              <div
                className="text-5xl mb-4 flex justify-center"
                style={{ color: COLORS.primaryAccent }}
              >
                {item.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: COLORS.primaryText }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: COLORS.secondaryText }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MODAL PREVIEW ================= */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 text-black p-2 rounded-full"
              style={{ backgroundColor: COLORS.primaryAccent }}
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
