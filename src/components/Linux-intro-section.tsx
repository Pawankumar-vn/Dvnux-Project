"use client";

import React from "react";
import { useNavigate } from "react-router-dom";

const LinuxIntroSection: React.FC = () => {
  const navigate = useNavigate();

  const linuxFeatures = [
    {
      title: "Open Source Freedom",
      description:
        "Complete access to source code, modify and distribute freely. Built by the community, for the community.",
      icon: (
        <div className="flex items-center justify-center h-16 sm:h-20">
          <div className="relative">
            <div className="w-12 sm:w-16 h-12 sm:h-16 border-2 border-green-500 rounded-lg bg-green-500/10"></div>
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-8 sm:w-10 h-8 sm:h-10 border-2 border-green-400 rounded-lg bg-green-400/20"></div>
            <div className="absolute top-4 sm:top-5 left-4 sm:left-5 w-4 sm:w-6 h-4 sm:h-6 bg-green-300 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Terminal Power",
      description:
        "Command-line interface that gives you complete control over your system with powerful scripting capabilities.",
      icon: (
        <div className="flex items-center justify-center h-16 sm:h-20">
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 sm:p-4 w-full max-w-xs">
            <div className="flex items-center gap-1 sm:gap-2 mb-2">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-1">
              <div className="h-1 sm:h-1.5 bg-green-400 rounded w-1/4"></div>
              <div className="h-1 sm:h-1.5 bg-blue-400 rounded w-3/4"></div>
              <div className="h-1 sm:h-1.5 bg-purple-400 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Multiple Distributions",
      description:
        "Choose from hundreds of distributions tailored for different needs - from beginner-friendly to advanced systems.",
      icon: (
        <div className="flex items-center justify-center h-16 sm:h-20">
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            <div className="w-4 sm:w-6 h-4 sm:h-6 bg-orange-500 rounded-full"></div>
            <div className="w-4 sm:w-6 h-4 sm:h-6 bg-blue-500 rounded-full"></div>
            <div className="w-4 sm:w-6 h-4 sm:h-6 bg-green-500 rounded-full"></div>
            <div className="w-4 sm:w-6 h-4 sm:h-6 bg-purple-500 rounded-full"></div>
            <div className="w-4 sm:w-6 h-4 sm:h-6 bg-red-500 rounded-full"></div>
            <div className="w-4 sm:w-6 h-4 sm:h-6 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Package Management",
      description:
        "Install, update, and remove software easily with powerful package managers like APT, YUM, and Pacman.",
      icon: (
        <div className="flex items-center justify-center h-16 sm:h-20">
          <div className="relative">
            <div className="w-8 sm:w-12 h-8 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 sm:w-6 h-4 sm:h-6 bg-white rounded opacity-80"></div>
            </div>
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Security & Privacy",
      description:
        "Built-in security features, regular updates, and complete control over your data and privacy settings.",
      icon: (
        <div className="flex items-center justify-center h-16 sm:h-20">
          <div className="relative">
            <div className="w-10 sm:w-14 h-12 sm:h-16 bg-gray-700 rounded-t-lg border-2 border-yellow-500"></div>
            <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-4 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Ready to Start Your Linux Journey?",
      description:
        "Discover the power of open-source computing. Read comprehensive guides, tutorials, and learn why millions choose Linux.",
      icon: (
        <div className="flex items-center justify-center h-16 sm:h-20">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">🐧</span>
          </div>
        </div>
      ),
      isCallToAction: true,
    },
  ];

  const goToLearn = () => {
    navigate("/learn");
  };

  return (
    <section id="intro" className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            What is Linux?
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Everything you need to know about the world's most powerful and
            flexible operating system.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {linuxFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-gray-700 transition-all duration-300 group ${
                feature.isCallToAction ? "lg:col-span-1" : ""
              }`}>
              {/* Icon */}
              <div className="mb-6">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Call to Action Button */}
              {feature.isCallToAction && (
                <button
                  onClick={goToLearn}
                  className="bg-white text-black px-6 py-3 rounded-lg font-medium text-base hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                  Read More
                  <span className="text-sm">→</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinuxIntroSection;
