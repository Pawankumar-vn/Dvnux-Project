export default function LearnPage() {
  const sections = [
    {
      title: "Linux Distributions",
      subtitle: "Overview of Popular Distros",
      links: [
        { name: "Ubuntu", href: "/distros/ubuntu" },
        { name: "Debian", href: "/distros/debian" },
        { name: "Fedora", href: "/distros/fedora" },
        { name: "Arch", href: "/distros/arch" },
        { name: "Kali", href: "/distros/kali" },
        { name: "CentOS/Rocky/AlmaLinux", href: "/distros/enterprise" },
      ],
    },
    {
      title: "Basic Linux Commands",
      subtitle: "Essential commands every Linux user should know",
      links: [
        {
          name: "Navigation: ls, cd, pwd",
          href: "https://linuxcommand.org/lc3_lts0020.php",
        },
        {
          name: "File Operations: cp, mv, rm, touch, mkdir",
          href: "https://linuxcommand.org/lc3_lts0050.php",
        },
        {
          name: "Process & System: top, ps, kill, df, free",
          href: "https://linuxcommand.org/lc3_lts0100.php",
        },
      ],
    },
    {
      title: "Installation / Setup",
      subtitle: "Get Linux running on your system",
      links: [
        {
          name: "Install Linux in Virtual Machine",
          href: "https://www.virtualbox.org/wiki/Downloads",
        },
        {
          name: "Install Ubuntu Desktop",
          href: "https://ubuntu.com/tutorials/install-ubuntu-desktop",
        },
        {
          name: "Dual Boot Setup",
          href: "https://help.ubuntu.com/community/WindowsDualBoot",
        },
      ],
    },
    {
      title: "Learning Resources",
      subtitle: "Comprehensive tutorials and courses",
      links: [
        { name: "Linux Journey", href: "https://linuxjourney.com/" },
        { name: "Linux Survival", href: "https://linuxsurvival.com/" },
        {
          name: "TutorialsPoint Linux Fundamentals",
          href: "https://www.tutorialspoint.com/unix/index.htm",
        },
        {
          name: "FreeCodeCamp Linux for Beginners",
          href: "https://www.youtube.com/watch?v=sWbUDq4S6Y8",
        },
        {
          name: "The Linux Foundation – Intro Course",
          href: "https://training.linuxfoundation.org/",
        },
      ],
    },
    {
      title: "Practice & Exercises",
      subtitle: "Hands-on learning and projects",
      links: [
        {
          name: "OverTheWire Bandit",
          href: "https://overthewire.org/wargames/bandit/",
        },
        {
          name: "Set up a personal web server",
          href: "https://www.digitalocean.com/community/tutorials",
        },
        {
          name: "Create basic shell scripts",
          href: "https://www.shellscript.sh/",
        },
        {
          name: "File management exercises",
          href: "https://linuxcommand.org/lc3_learning_the_shell.php",
        },
      ],
    },
    {
      title: "Community & Help",
      subtitle: "Get help from the Linux community",
      links: [
        { name: "Ask Ubuntu", href: "https://askubuntu.com/" },
        { name: "LinuxQuestions.org", href: "https://www.linuxquestions.org/" },
        {
          name: "Reddit – r/linux4noobs",
          href: "https://www.reddit.com/r/linux4noobs/",
        },
        {
          name: "Arch Wiki – Beginner Guides",
          href: "https://wiki.archlinux.org/title/General_recommendations",
        },
        { name: "Ubuntu Documentation", href: "https://help.ubuntu.com/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-black py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Learn Linux: Beginner's Guide
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Step-by-step tutorials, commands, and resources to start your Linux
            journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/getting-started"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-200">
              Get Started
            </a>
            <a
              href="/tutorials"
              className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:border-gray-400 hover:bg-gray-900 transition-all duration-200">
              Tutorials
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                What is Linux?
              </h2>
              <p className="text-gray-300 mb-4">
                Linux is an open-source operating system kernel powering
                desktops, servers, and embedded systems.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Linux"
                className="text-blue-400 hover:text-blue-300">
                Wikipedia – Linux →
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Learn Linux?
              </h2>
              <p className="text-gray-300 mb-4">
                Essential for programming, servers, cybersecurity, and system
                administration.
              </p>
              <a
                href="https://www.linux.org/pages/download/"
                className="text-blue-400 hover:text-blue-300">
                Why Linux →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{section.subtitle}</p>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                        target={
                          link.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }>
                        {link.name} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Advanced Topics
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://tldp.org/LDP/Bash-Beginners-Guide/html/"
                    className="text-blue-400 hover:text-blue-300">
                    Learn Bash scripting →
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.digitalocean.com/community/tutorials"
                    className="text-blue-400 hover:text-blue-300">
                    Server administration →
                  </a>
                </li>
                <li>
                  <a
                    href="/distros/kali"
                    className="text-blue-400 hover:text-blue-300">
                    Security & penetration testing →
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Certifications
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://training.linuxfoundation.org/"
                    className="text-blue-400 hover:text-blue-300">
                    Linux Foundation Certified →
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.redhat.com/en/services/certification"
                    className="text-blue-400 hover:text-blue-300">
                    Red Hat Certification →
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-black rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Career Paths
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    System Administrator →
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    DevOps Engineer →
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Security Specialist →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
