"use client";

import type React from "react";
import { useNavigate } from "react-router-dom";

const CardsSection: React.FC = () => {
  const navigate = useNavigate();

  const linuxDistros = [
    {
      name: "Ubuntu",
      description:
        "User-friendly, widely popular Linux, ideal for desktops, servers, cloud computing, programming, and supported by a huge active community.",
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      ),
      key: "ubuntu",
    },
    {
      name: "Debian",
      description:
        "Stable, reliable Linux, base for many distros, excellent for servers, development, and long-term support in various environments.",
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transform rotate-45">
            <div className="w-4 h-4 bg-gradient-to-br from-red-600 to-pink-600 rounded-sm transform -rotate-45"></div>
          </div>
        </div>
      ),
      key: "debian",
    },
    {
      name: "Fedora",
      description:
        "Cutting-edge, developer-focused Linux, featuring latest software, great for testing, learning, and integrating with Red Hat ecosystems.",
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="text-blue-600 font-bold text-lg">f</div>
          </div>
        </div>
      ),
      key: "fedora",
    },
    {
      name: "Arch Linux",
      description:
        "Lightweight, highly customizable Linux, preferred by advanced users seeking full control, rolling updates, and deep Linux learning experience.",
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent transform rotate-45"></div>
          </div>
        </div>
      ),
      key: "arch",
    },
    {
      name: "CentOS / Rocky / AlmaLinux",
      description:
        "Enterprise-grade Linux, extremely stable, perfect for servers, cloud deployments, enterprise applications, and long-term reliability in production.",
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full"></div>
          </div>
        </div>
      ),
      key: "centos",
    },
    {
      name: "Kali Linux",
      description:
        "Specialized Linux for cybersecurity, penetration testing, ethical hacking, digital forensics, and security research in professional environments.",
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-sm transform rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full transform -rotate-45"></div>
            </div>
          </div>
        </div>
      ),
      key: "kali",
    },
  ];

  const handleCardClick = (distroKey: string) => {
    navigate(`/distro?distro=${distroKey}`);
  };

  const goToQuiz = () => {
    navigate("/quiz");
  };

  return (
    <section id="cards" className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Popular Linux Distributions
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Explore the most popular Linux distributions and find the perfect
            one for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {linuxDistros.map((distro, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(distro.key)}
              className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-gray-600 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {distro.logo}
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-xl sm:text-2xl font-bold group-hover:text-gray-100 transition-colors duration-300">
                  {distro.name}
                </h3>
                <div className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                {distro.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div id="quiz" className="text-center mt-12 sm:mt-16">
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            Can't decide which distribution to choose?
          </p>
          <button
            onClick={goToQuiz}
            className="bg-white text-black px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 mx-auto">
            Take Our Quiz
            <span className="text-sm">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
