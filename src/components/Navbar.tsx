"use client";

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "#hero", isPage: false },
    { name: "LEARN", href: "/learn", isPage: true },
    { name: "DISTROS", href: "#cards", isPage: false },
    { name: "QUIZ", href: "/quiz", isPage: true },
    { name: "COMPARE", href: "#compare", isPage: false },
    { name: "ABOUT", href: "/about", isPage: true },
  ];

  const handleNavigation = (href: string, isPage: boolean) => {
    if (isPage) {
      navigate(href);
    } else if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/", { state: { scrollTo: href } });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "#hero" } });
    }
  };

  return (
    <nav className="bg-black w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
            <div className="text-white text-xl sm:text-2xl font-bold">🐧</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4 xl:space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.href, item.isPage)}
                  className="text-gray-400 hover:text-white px-2 xl:px-3 py-2 text-sm font-medium tracking-wider transition-colors duration-200">
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.href, item.isPage)}
                  className="text-gray-400 hover:text-white block px-3 py-2 text-base font-medium tracking-wider transition-colors duration-200 w-full text-left">
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
