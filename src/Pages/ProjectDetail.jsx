// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaImages,
  FaBuilding,
} from "react-icons/fa";

import projectsData from "../assets/data/projectsData";

export default function ProjectDetail() {
  const { projectSlug } = useParams();

  const project = projectsData.find(
    (item) => item.path.split("/").pop() === projectSlug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="w-full bg-[#F9FAFB]">
      {/* ================= HERO SECTION ================= */}
      <div
        className="relative h-[70vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mb-6 text-sm hover:text-[#D4AF37]"
          >
            <FaArrowLeft /> Back to Projects
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="max-w-2xl text-lg text-gray-200">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* -------- Overview -------- */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FaBuilding className="text-[#D4AF37]" />
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>

          {/* Features Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border">
            <h3 className="text-xl font-semibold mb-6">
              Key Highlights
            </h3>
            <ul className="space-y-4">
              {project.keyFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <FaCheckCircle className="text-[#D4AF37] mt-1" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* -------- Divider -------- */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* -------- Image Gallery -------- */}
        <div>
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <FaImages className="text-[#D4AF37]" />
            Project Gallery
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* -------- CTA -------- */}
        <div className="relative bg-[#0F172A] rounded-3xl p-12 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Want a Similar Project?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Get in touch with Rapid Rise Construction to plan and execute
              your next project with unmatched quality and precision.
            </p>

            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full bg-[#D4AF37] text-black font-semibold hover:bg-[#c9a634] transition"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
