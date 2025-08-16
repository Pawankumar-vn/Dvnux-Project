"use client";

import type React from "react";

import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

interface DistroResult {
  name: string;
  score: number;
  logo: React.ReactNode;
  tagline: string;
  description: string;
  features: string[];
  installationLink: string;
  learnMoreLink: string;
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({
    ubuntu: 0,
    debian: 0,
    fedora: 0,
    arch: 0,
    centos: 0,
    kali: 0,
  });

  const questions: Question[] = [
    {
      id: 1,
      question: "What will you primarily use Linux for?",
      options: [
        {
          text: "Desktop / Daily computing",
          scores: { ubuntu: 3, fedora: 2, debian: 1 },
        },
        {
          text: "Server / Web hosting",
          scores: { debian: 3, centos: 3, ubuntu: 1 },
        },
        {
          text: "Development / Programming",
          scores: { ubuntu: 2, fedora: 3, arch: 2 },
        },
        { text: "Security / Penetration testing", scores: { kali: 5 } },
        {
          text: "Learning Linux deeply",
          scores: { arch: 3, debian: 2, fedora: 1 },
        },
      ],
    },
    {
      id: 2,
      question: "What's your experience level with Linux?",
      options: [
        { text: "Complete beginner", scores: { ubuntu: 3, fedora: 1 } },
        {
          text: "Some experience",
          scores: { ubuntu: 2, fedora: 2, debian: 1 },
        },
        {
          text: "Intermediate user",
          scores: { fedora: 2, debian: 2, arch: 1 },
        },
        {
          text: "Advanced / Expert",
          scores: { arch: 3, debian: 2, centos: 1 },
        },
      ],
    },
    {
      id: 3,
      question: "Do you prefer stability or cutting-edge features?",
      options: [
        {
          text: "Maximum stability",
          scores: { debian: 3, centos: 3, ubuntu: 1 },
        },
        { text: "Balanced approach", scores: { ubuntu: 2, fedora: 1 } },
        { text: "Latest features", scores: { fedora: 3, arch: 2 } },
        { text: "Bleeding edge", scores: { arch: 3, fedora: 1 } },
      ],
    },
    {
      id: 4,
      question: "How important is community support to you?",
      options: [
        { text: "Very important", scores: { ubuntu: 3, fedora: 2, arch: 1 } },
        {
          text: "Somewhat important",
          scores: { debian: 2, ubuntu: 1, fedora: 1 },
        },
        { text: "I prefer documentation", scores: { arch: 2, debian: 1 } },
        {
          text: "I can figure things out myself",
          scores: { arch: 2, debian: 1 },
        },
      ],
    },
    {
      id: 5,
      question: "How much do you want to customize your system?",
      options: [
        {
          text: "Minimal - just works out of the box",
          scores: { ubuntu: 3, fedora: 1 },
        },
        {
          text: "Some customization",
          scores: { ubuntu: 1, fedora: 2, debian: 1 },
        },
        { text: "Significant customization", scores: { arch: 2, debian: 1 } },
        { text: "Complete control over everything", scores: { arch: 3 } },
      ],
    },
    {
      id: 6,
      question: "How important is security and privacy?",
      options: [
        {
          text: "Extremely important",
          scores: { kali: 2, debian: 2, arch: 1 },
        },
        { text: "Very important", scores: { debian: 2, fedora: 1, ubuntu: 1 } },
        { text: "Somewhat important", scores: { ubuntu: 1, fedora: 1 } },
        { text: "Standard security is fine", scores: { ubuntu: 2, fedora: 1 } },
      ],
    },
    {
      id: 7,
      question: "What kind of hardware are you using?",
      options: [
        { text: "Old / Low-spec computer", scores: { debian: 3, arch: 2 } },
        {
          text: "Average / Mid-range",
          scores: { ubuntu: 2, fedora: 2, debian: 1 },
        },
        {
          text: "Modern / High-performance",
          scores: { fedora: 2, ubuntu: 2, arch: 1 },
        },
        {
          text: "Server / Enterprise hardware",
          scores: { centos: 3, debian: 2 },
        },
      ],
    },
    {
      id: 8,
      question: "How do you prefer to install software?",
      options: [
        { text: "Graphical app store", scores: { ubuntu: 3, fedora: 2 } },
        {
          text: "Package manager commands",
          scores: { debian: 2, arch: 2, fedora: 1 },
        },
        { text: "Compile from source", scores: { arch: 3, debian: 1 } },
        {
          text: "Whatever works best",
          scores: { ubuntu: 1, fedora: 1, debian: 1 },
        },
      ],
    },
  ];

  const distroData: Record<string, Omit<DistroResult, "score">> = {
    ubuntu: {
      name: "Ubuntu",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      ),
      tagline: "The world's most popular Linux desktop",
      description:
        "Ubuntu is perfect for beginners and experienced users alike. It offers excellent hardware support, a user-friendly interface, and a massive community for support.",
      features: [
        "Beginner-friendly",
        "Excellent hardware support",
        "Large community",
        "Regular updates",
        "App store",
      ],
      installationLink: "https://ubuntu.com/tutorials/install-ubuntu-desktop",
      learnMoreLink: "/distros/ubuntu",
    },
    debian: {
      name: "Debian",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transform rotate-45">
            <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-pink-600 rounded-sm transform -rotate-45"></div>
          </div>
        </div>
      ),
      tagline: "The universal operating system",
      description:
        "Debian is renowned for its stability and is the foundation for many other distributions. It's perfect for servers and users who value reliability above all else.",
      features: [
        "Rock-solid stability",
        "Extensive package repository",
        "Free software focus",
        "Long-term support",
      ],
      installationLink: "https://www.debian.org/releases/stable/installmanual",
      learnMoreLink: "/distros/debian",
    },
    fedora: {
      name: "Fedora",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="text-blue-600 font-bold text-2xl">f</div>
          </div>
        </div>
      ),
      tagline: "Innovation, freedom, and features",
      description:
        "Fedora provides cutting-edge features and the latest software. It's ideal for developers and users who want to experience the newest Linux technologies.",
      features: [
        "Latest software",
        "Strong security",
        "Developer-friendly",
        "Red Hat backing",
        "Innovation focus",
      ],
      installationLink:
        "https://docs.fedoraproject.org/en-US/fedora/latest/install-guide/",
      learnMoreLink: "/distros/fedora",
    },
    arch: {
      name: "Arch Linux",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white rounded-full border-t-transparent transform rotate-45"></div>
          </div>
        </div>
      ),
      tagline: "A simple, lightweight distribution",
      description:
        "Arch Linux is for users who want complete control over their system. It follows a rolling release model and provides the latest software with minimal bloat.",
      features: [
        "Highly customizable",
        "Rolling release",
        "Minimal base system",
        "Excellent documentation",
        "DIY approach",
      ],
      installationLink: "https://wiki.archlinux.org/title/Installation_guide",
      learnMoreLink: "/distros/arch",
    },
    centos: {
      name: "CentOS / Rocky / AlmaLinux",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full"></div>
          </div>
        </div>
      ),
      tagline: "Enterprise-class Linux distribution",
      description:
        "Perfect for servers and enterprise environments. These distributions provide long-term stability and are compatible with Red Hat Enterprise Linux.",
      features: [
        "Enterprise-grade",
        "Long-term support",
        "Server optimized",
        "Red Hat compatible",
        "Production ready",
      ],
      installationLink: "https://rockylinux.org/download",
      learnMoreLink: "/distros/enterprise",
    },
    kali: {
      name: "Kali Linux",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-sm transform rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full transform -rotate-45"></div>
            </div>
          </div>
        </div>
      ),
      tagline: "The most advanced penetration testing distribution",
      description:
        "Kali Linux is specifically designed for cybersecurity professionals, ethical hackers, and penetration testers. It comes with hundreds of security tools pre-installed.",
      features: [
        "Security tools included",
        "Penetration testing",
        "Digital forensics",
        "Professional support",
        "Regular updates",
      ],
      installationLink: "https://www.kali.org/get-kali/",
      learnMoreLink: "/distros/kali",
    },
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    // Update scores
    const selectedOption = questions[currentQuestion].options[optionIndex];
    const newScores = { ...scores };
    Object.entries(selectedOption.scores).forEach(([distro, points]) => {
      newScores[distro] += points;
    });
    setScores(newScores);

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setScores({
      ubuntu: 0,
      debian: 0,
      fedora: 0,
      arch: 0,
      centos: 0,
      kali: 0,
    });
  };

  const getResults = (): DistroResult[] => {
    return Object.entries(scores)
      .map(([key, score]) => ({
        ...distroData[key],
        score,
      }))
      .sort((a, b) => b.score - a.score)
      .filter((result) => result.score > 0);
  };

  const results = getResults();
  const topResult = results[0];
  const secondResult = results[1];

  if (showResults) {
    return (
      <div className="min-h-screen bg-black">
        {/* Results Hero */}
        <section className="bg-black py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Your Recommended Linux Distro
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Based on your answers, here's what we recommend for you:
            </p>
          </div>
        </section>

        {/* Top Recommendation */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black rounded-2xl p-8 sm:p-12 border border-gray-800">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">{topResult.logo}</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {topResult.name}
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  {topResult.tagline}
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {topResult.description}
                </p>
              </div>

              {/* Why It Suits You */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Why It Suits You
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topResult.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={topResult.installationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-200 text-center">
                  Installation Guide →
                </a>
                <a
                  href={topResult.learnMoreLink}
                  className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:border-gray-400 hover:bg-gray-900 transition-all duration-200 text-center">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Second Choice */}
        {secondResult && (
          <section className="bg-black py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                Alternative Recommendation
              </h2>
              <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0">{secondResult.logo}</div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {secondResult.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{secondResult.tagline}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={secondResult.installationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm">
                        Installation Guide →
                      </a>
                      <a
                        href={secondResult.learnMoreLink}
                        className="text-blue-400 hover:text-blue-300 text-sm">
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Learn More Resources */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">
              Continue Your Linux Journey
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a
                href="/learn"
                className="bg-black rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200">
                <h3 className="text-lg font-bold text-white mb-2">
                  Documentation
                </h3>
                <p className="text-gray-400 text-sm">
                  Complete beginner guides and tutorials
                </p>
              </a>
              <a
                href="#compare"
                className="bg-black rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200">
                <h3 className="text-lg font-bold text-white mb-2">
                  Compare Distros
                </h3>
                <p className="text-gray-400 text-sm">
                  Side-by-side feature comparison
                </p>
              </a>
              <button
                onClick={resetQuiz}
                className="bg-black rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200">
                <h3 className="text-lg font-bold text-white mb-2">
                  Retake Quiz
                </h3>
                <p className="text-gray-400 text-sm">
                  Try again with different answers
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Quiz Hero */}
      <section className="bg-black py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Find the Best Linux Distro for You!
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Answer a few questions and we'll recommend the Linux distro that
            fits your needs.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="w-32 bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Question */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-2xl p-8 sm:p-12 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 text-left hover:border-gray-500 hover:bg-gray-800 transition-all duration-200 group">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 border-2 border-gray-600 rounded-full group-hover:border-blue-500 transition-colors duration-200 flex items-center justify-center">
                      <div className="w-2 h-2 bg-transparent group-hover:bg-blue-500 rounded-full transition-colors duration-200"></div>
                    </div>
                    <span className="text-white text-lg group-hover:text-gray-100">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
