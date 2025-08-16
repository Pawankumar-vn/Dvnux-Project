"use client";

import type React from "react";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "TRY DVNUX ON",
      links: ["Web", "iOS", "Android"],
    },
    {
      title: "FEATURES",
      links: ["Distro Explorer", "Recommendation Quiz", "Comparison Tool"],
    },
    {
      title: "ABOUT",
      links: [
        { name: "About Dvnux", href: "/about" },
        { name: "Contact", href: "#" },
        { name: "News & Updates", href: "#" },
      ],
    },
    {
      title: "RESOURCES",
      links: ["Documentation", "Privacy policy", "Security", "Legal", "Status"],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4 sm:space-y-6">
              <h3 className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={typeof link === "string" ? "#" : link.href}
                      className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base block">
                      {typeof link === "string" ? link : link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 Dvnux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
