"use client";

import type React from "react";
import { useState } from "react";

interface DistroData {
  name: string;
  logo: React.ReactNode;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  packageManager: string;
  desktopEnvironment: string[];
  releaseModel: "Fixed" | "Rolling" | "LTS";
  systemRequirements: {
    ram: string;
    storage: string;
    processor: string;
  };
  bestFor: string[];
  pros: string[];
  cons: string[];
  popularity: number;
  stability: number;
  performance: number;
  community: number;
  documentation: number;
}

const ComparisonTool: React.FC = () => {
  const [selectedDistros, setSelectedDistros] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const distrosData: Record<string, DistroData> = {
    ubuntu: {
      name: "Ubuntu",
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      ),
      difficulty: "Beginner",
      packageManager: "APT (Advanced Package Tool)",
      desktopEnvironment: ["GNOME", "KDE", "XFCE", "MATE"],
      releaseModel: "LTS",
      systemRequirements: {
        ram: "4GB minimum, 8GB recommended",
        storage: "25GB minimum",
        processor: "2 GHz dual core",
      },
      bestFor: ["Desktop users", "Beginners", "Development", "Gaming"],
      pros: [
        "Large community",
        "Excellent hardware support",
        "User-friendly",
        "Regular updates",
      ],
      cons: [
        "Can be resource heavy",
        "Some proprietary software",
        "Snap packages controversy",
      ],
      popularity: 95,
      stability: 85,
      performance: 80,
      community: 95,
      documentation: 90,
    },
    debian: {
      name: "Debian",
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center transform rotate-45">
            <div className="w-3 h-3 bg-gradient-to-br from-red-600 to-pink-600 rounded-sm transform -rotate-45"></div>
          </div>
        </div>
      ),
      difficulty: "Intermediate",
      packageManager: "APT (Advanced Package Tool)",
      desktopEnvironment: ["GNOME", "KDE", "XFCE", "LXDE", "Cinnamon"],
      releaseModel: "Fixed",
      systemRequirements: {
        ram: "1GB minimum, 4GB recommended",
        storage: "10GB minimum",
        processor: "1 GHz processor",
      },
      bestFor: ["Servers", "Stable systems", "Advanced users", "Development"],
      pros: [
        "Extremely stable",
        "Free software focus",
        "Lightweight",
        "Secure",
      ],
      cons: [
        "Older packages",
        "Complex installation",
        "Less beginner-friendly",
      ],
      popularity: 75,
      stability: 95,
      performance: 85,
      community: 80,
      documentation: 85,
    },
    fedora: {
      name: "Fedora",
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="text-blue-600 font-bold text-sm">f</div>
          </div>
        </div>
      ),
      difficulty: "Intermediate",
      packageManager: "DNF (Dandified YUM)",
      desktopEnvironment: ["GNOME", "KDE", "XFCE", "MATE", "Cinnamon"],
      releaseModel: "Fixed",
      systemRequirements: {
        ram: "2GB minimum, 4GB recommended",
        storage: "20GB minimum",
        processor: "2 GHz dual core",
      },
      bestFor: [
        "Developers",
        "Latest software",
        "Testing",
        "Red Hat ecosystem",
      ],
      pros: [
        "Cutting-edge software",
        "Strong security",
        "Good hardware support",
        "Active development",
      ],
      cons: ["Frequent updates", "Can be unstable", "Shorter support cycle"],
      popularity: 70,
      stability: 75,
      performance: 85,
      community: 85,
      documentation: 80,
    },
    arch: {
      name: "Arch Linux",
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent transform rotate-45"></div>
          </div>
        </div>
      ),
      difficulty: "Advanced",
      packageManager: "Pacman",
      desktopEnvironment: ["Custom", "i3", "GNOME", "KDE", "XFCE"],
      releaseModel: "Rolling",
      systemRequirements: {
        ram: "512MB minimum, 2GB recommended",
        storage: "2GB minimum",
        processor: "x86_64 compatible",
      },
      bestFor: [
        "Advanced users",
        "Customization",
        "Learning",
        "Minimal systems",
      ],
      pros: [
        "Highly customizable",
        "Rolling release",
        "Excellent documentation",
        "Lightweight",
      ],
      cons: [
        "Steep learning curve",
        "Manual configuration",
        "Can break",
        "Time-consuming",
      ],
      popularity: 60,
      stability: 70,
      performance: 95,
      community: 90,
      documentation: 95,
    },
    centos: {
      name: "CentOS / Rocky / AlmaLinux",
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full"></div>
          </div>
        </div>
      ),
      difficulty: "Intermediate",
      packageManager: "YUM / DNF",
      desktopEnvironment: ["GNOME", "KDE", "XFCE", "Server (No GUI)"],
      releaseModel: "LTS",
      systemRequirements: {
        ram: "2GB minimum, 4GB recommended",
        storage: "20GB minimum",
        processor: "2 GHz dual core",
      },
      bestFor: ["Servers", "Enterprise", "Production", "Cloud deployments"],
      pros: [
        "Enterprise-grade",
        "Long-term support",
        "Stable",
        "Red Hat compatible",
      ],
      cons: [
        "Older packages",
        "Less desktop-friendly",
        "Complex for beginners",
      ],
      popularity: 65,
      stability: 95,
      performance: 80,
      community: 75,
      documentation: 80,
    },
    kali: {
      name: "Kali Linux",
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-sm transform rotate-45 flex items-center justify-center">
              <div className="w-1 h-1 bg-black rounded-full transform -rotate-45"></div>
            </div>
          </div>
        </div>
      ),
      difficulty: "Advanced",
      packageManager: "APT (Advanced Package Tool)",
      desktopEnvironment: ["XFCE", "GNOME", "KDE", "MATE"],
      releaseModel: "Rolling",
      systemRequirements: {
        ram: "2GB minimum, 4GB recommended",
        storage: "20GB minimum",
        processor: "2 GHz dual core",
      },
      bestFor: [
        "Penetration testing",
        "Security research",
        "Ethical hacking",
        "Digital forensics",
      ],
      pros: [
        "Security tools included",
        "Regular updates",
        "Professional support",
        "Specialized",
      ],
      cons: [
        "Not for general use",
        "Overkill for beginners",
        "Security-focused only",
      ],
      popularity: 50,
      stability: 80,
      performance: 75,
      community: 70,
      documentation: 85,
    },
  };

  const handleDistroToggle = (distroKey: string) => {
    setSelectedDistros((prev) => {
      if (prev.includes(distroKey)) {
        return prev.filter((d) => d !== distroKey);
      } else if (prev.length < 3) {
        return [...prev, distroKey];
      }
      return prev;
    });
  };

  const handleCompare = () => {
    if (selectedDistros.length >= 2) {
      setShowComparison(true);
    }
  };

  const resetComparison = () => {
    setSelectedDistros([]);
    setShowComparison(false);
  };

  const getRatingBar = (value: number) => (
    <div className="flex items-center gap-2">
      <div className="w-24 bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${value}%` }}></div>
      </div>
      <span className="text-sm text-gray-400 w-8">{value}%</span>
    </div>
  );

  if (showComparison) {
    return (
      <section className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Distribution Comparison
            </h2>
            <button
              onClick={resetComparison}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              ← Back to Selection
            </button>
          </div>

          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-6 text-gray-400 font-medium">
                      Feature
                    </th>
                    {selectedDistros.map((distroKey) => (
                      <th
                        key={distroKey}
                        className="text-center p-6 min-w-[200px]">
                        <div className="flex flex-col items-center gap-2">
                          {distrosData[distroKey].logo}
                          <span className="text-white font-bold">
                            {distrosData[distroKey].name}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">
                      Difficulty Level
                    </td>
                    {selectedDistros.map((distroKey) => (
                      <td key={distroKey} className="p-6 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            distrosData[distroKey].difficulty === "Beginner"
                              ? "bg-green-900 text-green-300"
                              : distrosData[distroKey].difficulty ===
                                "Intermediate"
                              ? "bg-yellow-900 text-yellow-300"
                              : "bg-red-900 text-red-300"
                          }`}>
                          {distrosData[distroKey].difficulty}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">
                      Package Manager
                    </td>
                    {selectedDistros.map((distroKey) => (
                      <td
                        key={distroKey}
                        className="p-6 text-center text-white">
                        {distrosData[distroKey].packageManager}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">
                      Release Model
                    </td>
                    {selectedDistros.map((distroKey) => (
                      <td
                        key={distroKey}
                        className="p-6 text-center text-white">
                        {distrosData[distroKey].releaseModel}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">
                      RAM Requirements
                    </td>
                    {selectedDistros.map((distroKey) => (
                      <td
                        key={distroKey}
                        className="p-6 text-center text-white">
                        {distrosData[distroKey].systemRequirements.ram}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">
                      Storage Requirements
                    </td>
                    {selectedDistros.map((distroKey) => (
                      <td
                        key={distroKey}
                        className="p-6 text-center text-white">
                        {distrosData[distroKey].systemRequirements.storage}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">Best For</td>
                    {selectedDistros.map((distroKey) => (
                      <td key={distroKey} className="p-6">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {distrosData[distroKey].bestFor.map((use, index) => (
                            <span
                              key={index}
                              className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">
                              {use}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">
                      Popularity
                    </td>
                    {selectedDistros.map((distroKey) => (
                      <td key={distroKey} className="p-6">
                        <div className="flex justify-center">
                          {getRatingBar(distrosData[distroKey].popularity)}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">Stability</td>
                    {selectedDistros.map((distroKey) => (
                      <td key={distroKey} className="p-6">
                        <div className="flex justify-center">
                          {getRatingBar(distrosData[distroKey].stability)}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">
                      Performance
                    </td>
                    {selectedDistros.map((distroKey) => (
                      <td key={distroKey} className="p-6">
                        <div className="flex justify-center">
                          {getRatingBar(distrosData[distroKey].performance)}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="p-6 text-gray-400 font-medium">
                      Community Support
                    </td>
                    {selectedDistros.map((distroKey) => (
                      <td key={distroKey} className="p-6">
                        <div className="flex justify-center">
                          {getRatingBar(distrosData[distroKey].community)}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-400 font-medium">
                      Documentation
                    </td>
                    {selectedDistros.map((distroKey) => (
                      <td key={distroKey} className="p-6">
                        <div className="flex justify-center">
                          {getRatingBar(distrosData[distroKey].documentation)}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
            {selectedDistros.map((distroKey) => (
              <div
                key={distroKey}
                className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-6">
                  {distrosData[distroKey].logo}
                  <h3 className="text-xl font-bold text-white">
                    {distrosData[distroKey].name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-green-400 font-medium mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {distrosData[distroKey].pros.map((pro, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-1">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-red-400 font-medium mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {distrosData[distroKey].cons.map((con, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-red-400 mt-1">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Compare Linux Distributions
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Select 2-3 distributions to compare their features, requirements,
            and characteristics side by side.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>Selected: {selectedDistros.length}/3</span>
            {selectedDistros.length >= 2 && (
              <button
                onClick={handleCompare}
                className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Compare Now →
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(distrosData).map(([key, distro]) => (
            <div
              key={key}
              onClick={() => handleDistroToggle(key)}
              className={`group cursor-pointer bg-gray-900/50 border-2 rounded-2xl p-6 transition-all duration-300 ${
                selectedDistros.includes(key)
                  ? "border-blue-500 bg-blue-900/20 scale-105"
                  : "border-gray-800 hover:border-gray-600 hover:bg-gray-900/70"
              } ${
                selectedDistros.length >= 3 && !selectedDistros.includes(key)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {distro.logo}
                  <h3 className="text-white text-xl font-bold">
                    {distro.name}
                  </h3>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    selectedDistros.includes(key)
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-600 group-hover:border-gray-400"
                  }`}>
                  {selectedDistros.includes(key) && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Difficulty:</span>
                  <span
                    className={`font-medium ${
                      distro.difficulty === "Beginner"
                        ? "text-green-400"
                        : distro.difficulty === "Intermediate"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}>
                    {distro.difficulty}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Release:</span>
                  <span className="text-white">{distro.releaseModel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">RAM:</span>
                  <span className="text-white">
                    {distro.systemRequirements.ram.split(",")[0]}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1">
                {distro.bestFor.slice(0, 3).map((use, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                    {use}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Click on distributions to select them for comparison. You can
            compare 2-3 distributions at once.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTool;
