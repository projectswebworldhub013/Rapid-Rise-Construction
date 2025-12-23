// src/pages/RapidGallery.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryHero from "../Components/GalleryHero";
import { FaHardHat, FaBuilding, FaDraftingCompass } from "react-icons/fa";

// Import your construction project images
import img1 from "../assets/images/gallery/g1.jpg";
import img2 from "../assets/images/gallery/g2.jpg";
import img3 from "../assets/images/gallery/g3.jpg";
import img4 from "../assets/images/gallery/g4.jpg";
import img5 from "../assets/images/gallery/g5.jpg";
import img6 from "../assets/images/gallery/g6.jpg";
import img7 from "../assets/images/gallery/g7.jpg";
import img8 from "../assets/images/gallery/g8.jpg";
import img9 from "../assets/images/gallery/g9.jpg";
import img10 from "../assets/images/gallery/g10.jpg";
import img11 from "../assets/images/gallery/g11.jpg";
import img12 from "../assets/images/gallery/g12.jpg";


const COLORS = {
  primaryBg: "#0F0F0F",
  secondaryBg: "#1A1A1A",
  primaryAccent: "#D4AF37",
  secondaryAccent: "#B8962E",
  highlight: "#F5C842",
  primaryText: "#FFFFFF",
  secondaryText: "#CFCFCF",
  mutedText: "#9A9A9A",
  cardBg: "#141414",
  border: "#2A2A2A",
};

export default function RapidGallery() {
  const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
];


  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <GalleryHero />

      {/* Gallery Section */}
      <section
        className="w-full py-16 px-6 md:px-12"
        style={{ backgroundColor: COLORS.primaryBg }}
      >
        <div className="max-w-7xl mx-auto text-center" id="gallery">

<div className="text-center max-w-4xl mx-auto mb-12 px-4">
  {/* Decorative Top Lines */}
  <div className="flex items-center justify-center mb-4">
    <div className="w-16 h-[2px] bg-[#B8962E] mr-3 rounded-full"></div>
    <FaDraftingCompass className="text-[#D4AF37] text-lg sm:text-xl" />
    <div className="w-16 h-[2px] bg-[#B8962E] ml-3 rounded-full"></div>
  </div>

  {/* Heading */}
  <h2
    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug"
    style={{ color: COLORS.primaryText }}
  >
    Explore Our{" "}
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: `linear-gradient(to right, ${COLORS.primaryAccent}, ${COLORS.highlight})`,
      }}
    >
      Work
    </span>
  </h2>

  {/* Description */}
  <p
    className="text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8 leading-relaxed"
    style={{ color: COLORS.secondaryText }}
  >
    At <span className="font-semibold text-[#D4AF37]">Rapid Rise Construction</span>, we craft spaces that balance 
    <span className="text-[#F5C842] font-semibold"> innovation, durability,</span> and 
    <span className="text-[#D4AF37] font-semibold"> aesthetic appeal</span>. Browse our curated gallery to witness the 
    <span className="text-[#F5C842] font-semibold"> precision, expertise,</span> and modern design principles behind each completed project.
  </p>  
</div>


          {/* Grid Layout: 3 per row for all screen sizes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {images.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative w-full overflow-hidden rounded-xl cursor-pointer shadow-lg"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-40 md:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-white text-3xl p-2 rounded-full hover:opacity-80 transition"
              style={{ backgroundColor: "rgba(20,20,20,0.7)" }}
            >
              <X size={28} />
            </button>

            {/* Image Slider */}
            <div className="relative max-w-4xl w-full">
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex].src}
                className="w-full max-h-[70vh] object-contain rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
             

              {/* Prev/Next Controls */}
              <button
  onClick={handlePrev}
  className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 p-2 sm:p-3 rounded-full hover:opacity-80 transition"
  style={{
    backgroundImage: `linear-gradient(to right, ${COLORS.primaryAccent}, ${COLORS.highlight})`,
    color: "white",
  }}
>
  <ChevronLeft size={20} sm={28} />
</button>

<button
  onClick={handleNext}
  className="absolute top-1/2 right-0 md:-right-10 transform -translate-y-1/2 p-2 sm:p-3 rounded-full hover:opacity-80 transition"
  style={{
    backgroundImage: `linear-gradient(to right, ${COLORS.primaryAccent}, ${COLORS.highlight})`,
    color: "white",
  }}
>
  <ChevronRight size={20} sm={28} />
</button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
