// src/components/Testimonials.jsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  FaUserCircle,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

/* ===========================
   Rapid Rise Construction Testimonials
=========================== */

const testimonials = [
  {
    name: "Arjun Mehta",
    rating: 5,
    text:
      "Rapid Rise Construction delivered our residential project with exceptional quality and on-time completion. The workmanship truly exceeded expectations.",
  },
  {
    name: "Kavita Sharma",
    rating: 4.5,
    text:
      "From planning to execution, everything was handled professionally. Transparent communication and excellent finishing work.",
  },
  {
    name: "Rohit Malhotra",
    rating: 5,
    text:
      "Their structural expertise and site supervision gave us complete confidence. A highly reliable construction company.",
  },
  {
    name: "Neha Verma",
    rating: 4.5,
    text:
      "Rapid Rise transformed our commercial space beautifully. Premium materials, skilled team, and flawless execution.",
  },
  {
    name: "Sanjay Khanna",
    rating: 4,
    text:
      "Very disciplined project management and strong attention to detail. The project was completed within budget.",
  },
  {
    name: "Pooja Agarwal",
    rating: 5,
    text:
      "Outstanding experience from start to finish. Their design suggestions and build quality were top-class.",
  },
];

/* ===========================
   Star Renderer
=========================== */

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return stars;
};

export default function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: true,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-[#0F0F0F] py-14 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Trusted by Clients of{" "}
            <span className="text-[#D4AF37]">Rapid Rise Construction</span>
          </h2>

          <p className="text-[#CFCFCF] text-sm sm:text-base">
            Real feedback from homeowners and businesses who trusted us with their projects.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">

          {/* Desktop Arrows */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 
            w-11 h-11 rounded-full bg-[#141414] 
            border border-[#2A2A2A] 
            text-[#D4AF37] 
            hover:bg-[#D4AF37] hover:text-black transition z-10"
          >
            <FaChevronLeft className="m-auto" />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 
            w-11 h-11 rounded-full bg-[#141414] 
            border border-[#2A2A2A] 
            text-[#D4AF37] 
            hover:bg-[#D4AF37] hover:text-black transition z-10"
          >
            <FaChevronRight className="m-auto" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, i) => (
              <div key={i} className="px-2">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-[#141414] rounded-xl p-6 
                  border border-[#2A2A2A] 
                  shadow-lg flex flex-col min-h-[240px]"
                >
                  {/* Accent Stripe */}
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#D4AF37] rounded-l-xl" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-3 text-[#16A34A] text-sm">
                    {renderStars(item.rating)}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-[#CFCFCF] leading-relaxed mb-5">
                    “{item.text}”
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#1A1A1A] 
                    text-[#D4AF37] flex items-center justify-center text-lg">
                      <FaUserCircle />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#9A9A9A]">
                        Verified Client
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <button
              className="px-8 py-3 rounded-full 
              bg-[#D4AF37] text-black font-semibold 
              hover:bg-[#F5C842] transition shadow-lg"
            >
              Request a Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
