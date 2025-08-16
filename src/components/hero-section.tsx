"use client";

import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const scrollToIntro = () => {
    const introSection = document.querySelector("#intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on home, navigate and then scroll
      navigate("/#intro");
    }
  };

  const goToLearn = () => {
    navigate("/learn");
  };

  return (
    <section
      id="hero"
      className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
            backgroundSize: "30px 30px, 50px 50px",
            backgroundPosition: "0 0, 25px 25px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4">
          Gateway to the Linux World
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
          Dvnux make Linux choice less overwhelming by helping you learn,
          compare, and{" "}
          <span className="text-white font-medium">
            choose your distro confidently
          </span>{" "}
          through a clean, fast, and intuitive way to explore Linux distros.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <button
            onClick={scrollToIntro}
            className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-medium text-base sm:text-lg hover:bg-gray-100 transition-colors duration-200 min-w-[140px]">
            Get Started
          </button>
          <button
            onClick={goToLearn}
            className="w-full sm:w-auto border border-gray-600 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-medium text-base sm:text-lg hover:border-gray-400 hover:bg-gray-900 transition-all duration-200 min-w-[140px]">
            Learn Linux
          </button>
        </div>
      </div>

      {/* Additional subtle grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
