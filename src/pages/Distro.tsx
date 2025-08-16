"use client";

import type React from "react";
import { useState, useEffect } from "react";

interface DistroData {
  name: string;
  logo: React.ReactNode;
  tagline: string;
  overview: {
    whatItIs: string;
    whyUseIt: string;
    userBase: string;
  };
  features: string[];
  installation: {
    quickSteps: string[];
    platforms: string[];
    fullGuideLink: string;
  };
  usage: {
    dailyTasks: string[];
    tips: string[];
    videoTutorials: string[];
  };
  resources: {
    documentation: { name: string; link: string }[];
    community: { name: string; link: string }[];
    tools: { name: string; link: string }[];
  };
  comparisons: {
    similarDistros: string[];
    idealFor: string[];
    notIdealFor: string[];
  };
}

export default function DistroPage() {
  const [selectedDistro, setSelectedDistro] = useState<string>("ubuntu");

  useEffect(() => {
    // Get distro from URL parameter or default to ubuntu
    const urlParams = new URLSearchParams(window.location.search);
    const distro = urlParams.get("distro") || "ubuntu";
    setSelectedDistro(distro);
  }, []);

  const distroData: Record<string, DistroData> = {
    ubuntu: {
      name: "Ubuntu",
      logo: (
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      ),
      tagline: "The world's most popular Linux desktop operating system",
      overview: {
        whatItIs:
          "Ubuntu is a free, open-source Linux distribution based on Debian. It's designed to be user-friendly and accessible to both beginners and experienced users.",
        whyUseIt:
          "Ubuntu offers excellent hardware support, a polished user interface, regular updates, and one of the largest Linux communities. It's perfect for desktop computing, development, and server deployments.",
        userBase:
          "Over 25 million users worldwide, including individuals, enterprises, and cloud providers.",
      },
      features: [
        "GNOME desktop environment with modern UI",
        "Snap package management for easy software installation",
        "Long Term Support (LTS) releases every 2 years",
        "Excellent hardware compatibility",
        "Built-in security features and regular updates",
        "Ubuntu Software Center for easy app discovery",
        "Strong community support and documentation",
        "Multiple flavors (Kubuntu, Xubuntu, Lubuntu)",
      ],
      installation: {
        quickSteps: [
          "Download Ubuntu ISO from official website",
          "Create bootable USB drive using Rufus or Etcher",
          "Boot from USB and select 'Try Ubuntu' or 'Install Ubuntu'",
          "Follow the installation wizard",
          "Set up user account and partitioning",
          "Complete installation and restart",
        ],
        platforms: [
          "Desktop/Laptop",
          "Server",
          "Virtual Machines",
          "Cloud (AWS, Azure, GCP)",
          "IoT devices",
        ],
        fullGuideLink: "https://ubuntu.com/tutorials/install-ubuntu-desktop",
      },
      usage: {
        dailyTasks: [
          "Web browsing with Firefox",
          "Office work with LibreOffice",
          "Media playback and editing",
          "Software development with built-in tools",
          "Gaming through Steam and Lutris",
          "System administration via terminal",
        ],
        tips: [
          "Use 'sudo apt update && sudo apt upgrade' to keep system updated",
          "Install additional codecs for media playback",
          "Enable firewall with 'sudo ufw enable'",
          "Use Timeshift for system backups",
          "Customize GNOME with extensions",
          "Learn basic terminal commands for efficiency",
        ],
        videoTutorials: [
          "Ubuntu 22.04 Complete Tutorial - TechHut",
          "Ubuntu for Beginners - ExplainLinux",
          "Ubuntu Desktop Customization - OMG Ubuntu",
        ],
      },
      resources: {
        documentation: [
          {
            name: "Official Ubuntu Documentation",
            link: "https://help.ubuntu.com/",
          },
          {
            name: "Ubuntu Server Guide",
            link: "https://ubuntu.com/server/docs",
          },
          {
            name: "Ubuntu Desktop Guide",
            link: "https://help.ubuntu.com/stable/ubuntu-help/",
          },
        ],
        community: [
          { name: "Ubuntu Forums", link: "https://ubuntuforums.org/" },
          {
            name: "Ask Ubuntu (Stack Exchange)",
            link: "https://askubuntu.com/",
          },
          {
            name: "Ubuntu Reddit Community",
            link: "https://www.reddit.com/r/Ubuntu/",
          },
          { name: "Ubuntu Discord Server", link: "https://discord.gg/ubuntu" },
        ],
        tools: [
          { name: "Ubuntu Software Center", link: "snap://snap-store" },
          { name: "GNOME Tweaks", link: "https://wiki.gnome.org/Apps/Tweaks" },
          {
            name: "Timeshift Backup Tool",
            link: "https://github.com/teejee2008/timeshift",
          },
        ],
      },
      comparisons: {
        similarDistros: ["Linux Mint", "Pop!_OS", "Elementary OS", "Zorin OS"],
        idealFor: [
          "Linux beginners and newcomers",
          "Desktop users switching from Windows/macOS",
          "Developers and programmers",
          "Students and educational institutions",
          "Small to medium businesses",
        ],
        notIdealFor: [
          "Users wanting bleeding-edge software",
          "Minimalist system preferences",
          "Advanced users seeking complete customization",
          "Very old or low-spec hardware",
        ],
      },
    },
    debian: {
      name: "Debian",
      logo: (
        <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center transform rotate-45">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-pink-600 rounded-sm transform -rotate-45"></div>
          </div>
        </div>
      ),
      tagline:
        "The universal operating system - stable, secure, and completely free",
      overview: {
        whatItIs:
          "Debian is one of the oldest and most respected Linux distributions, known for its stability, security, and commitment to free software principles.",
        whyUseIt:
          "Debian provides rock-solid stability, extensive package repositories, and serves as the foundation for many other distributions including Ubuntu. It's ideal for servers and users who prioritize reliability.",
        userBase:
          "Millions of users worldwide, including major corporations, universities, and government institutions.",
      },
      features: [
        "Extremely stable and reliable",
        "Massive software repository (59,000+ packages)",
        "Multiple desktop environments available",
        "Strong security focus with regular updates",
        "Completely free and open-source",
        "Excellent server performance",
        "Multiple architecture support",
        "Debian Social Contract commitment",
      ],
      installation: {
        quickSteps: [
          "Download Debian ISO (stable release recommended)",
          "Create installation media",
          "Boot from installation media",
          "Choose installation type (graphical or text)",
          "Configure network and partitions",
          "Select software packages and desktop environment",
          "Complete installation and reboot",
        ],
        platforms: [
          "Desktop",
          "Server",
          "Embedded systems",
          "Virtual machines",
          "Cloud platforms",
        ],
        fullGuideLink: "https://www.debian.org/releases/stable/installmanual",
      },
      usage: {
        dailyTasks: [
          "Server administration and hosting",
          "Development and programming",
          "Desktop computing with various DEs",
          "Network services and infrastructure",
          "Database and web servers",
          "Scientific computing and research",
        ],
        tips: [
          "Use 'apt update && apt upgrade' for system updates",
          "Enable non-free repositories for additional software",
          "Consider testing or unstable for newer packages",
          "Use 'sudo' or configure as needed",
          "Learn systemd for service management",
          "Backup configurations before major changes",
        ],
        videoTutorials: [
          "Debian Installation Guide - TechHut",
          "Debian Server Setup - LearnLinuxTV",
          "Debian Desktop Customization - DistroTube",
        ],
      },
      resources: {
        documentation: [
          {
            name: "Debian Administrator's Handbook",
            link: "https://debian-handbook.info/",
          },
          { name: "Debian Wiki", link: "https://wiki.debian.org/" },
          {
            name: "Debian Reference",
            link: "https://www.debian.org/doc/manuals/debian-reference/",
          },
        ],
        community: [
          { name: "Debian Forums", link: "https://forums.debian.net/" },
          { name: "Debian Mailing Lists", link: "https://lists.debian.org/" },
          { name: "Debian Reddit", link: "https://www.reddit.com/r/debian/" },
          {
            name: "Debian IRC Channels",
            link: "https://www.debian.org/support#irc",
          },
        ],
        tools: [
          { name: "APT Package Manager", link: "https://wiki.debian.org/Apt" },
          {
            name: "Synaptic Package Manager",
            link: "https://www.nongnu.org/synaptic/",
          },
          {
            name: "Debian Configuration Tool",
            link: "https://packages.debian.org/stable/debconf",
          },
        ],
      },
      comparisons: {
        similarDistros: ["Ubuntu", "Linux Mint", "MX Linux", "Devuan"],
        idealFor: [
          "Server administrators",
          "Advanced Linux users",
          "Developers seeking stability",
          "Organizations requiring long-term support",
          "Users prioritizing free software",
        ],
        notIdealFor: [
          "Complete Linux beginners",
          "Users wanting latest software versions",
          "Gaming enthusiasts",
          "Users needing extensive hardware support",
        ],
      },
    },
    fedora: {
      name: "Fedora",
      logo: (
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="text-blue-600 font-bold text-3xl">f</div>
          </div>
        </div>
      ),
      tagline:
        "Innovation, freedom, and features - the cutting-edge Linux experience",
      overview: {
        whatItIs:
          "Fedora is a community-driven Linux distribution sponsored by Red Hat, focusing on innovation and incorporating the latest technologies and software.",
        whyUseIt:
          "Fedora provides cutting-edge software, strong security features, and serves as a testing ground for technologies that eventually make it into Red Hat Enterprise Linux. Perfect for developers and tech enthusiasts.",
        userBase:
          "Millions of developers, system administrators, and technology enthusiasts worldwide.",
      },
      features: [
        "Latest software packages and kernel versions",
        "GNOME desktop with modern workflow",
        "Strong security with SELinux enabled by default",
        "Wayland display server by default",
        "DNF package manager with excellent dependency resolution",
        "Flatpak support for sandboxed applications",
        "Multiple spins with different desktop environments",
        "6-month release cycle with latest technologies",
      ],
      installation: {
        quickSteps: [
          "Download Fedora Workstation ISO",
          "Create bootable USB with Fedora Media Writer",
          "Boot from USB and start installation",
          "Configure language, keyboard, and timezone",
          "Set up disk partitioning",
          "Create user account with admin privileges",
          "Complete installation and reboot",
        ],
        platforms: [
          "Workstation (Desktop)",
          "Server",
          "IoT",
          "CoreOS",
          "Silverblue (Immutable)",
        ],
        fullGuideLink:
          "https://docs.fedoraproject.org/en-US/fedora/latest/install-guide/",
      },
      usage: {
        dailyTasks: [
          "Software development with latest tools",
          "Content creation and multimedia work",
          "System administration and DevOps",
          "Web browsing and productivity",
          "Gaming with Steam and native games",
          "Containerization with Podman",
        ],
        tips: [
          "Use 'sudo dnf update' for system updates",
          "Enable RPM Fusion for additional software",
          "Install media codecs for multimedia support",
          "Use Flatpak for additional applications",
          "Configure firewall with firewall-cmd",
          "Learn about SELinux for security management",
        ],
        videoTutorials: [
          "Fedora 38 Complete Guide - TechHut",
          "Fedora for Developers - Red Hat Developer",
          "Fedora Customization Tips - DistroTube",
        ],
      },
      resources: {
        documentation: [
          {
            name: "Fedora Documentation",
            link: "https://docs.fedoraproject.org/",
          },
          {
            name: "Fedora Quick Docs",
            link: "https://docs.fedoraproject.org/en-US/quick-docs/",
          },
          {
            name: "Fedora System Administrator's Guide",
            link: "https://docs.fedoraproject.org/en-US/fedora/latest/system-administrators-guide/",
          },
        ],
        community: [
          {
            name: "Fedora Discussion",
            link: "https://discussion.fedoraproject.org/",
          },
          { name: "Fedora Reddit", link: "https://www.reddit.com/r/Fedora/" },
          {
            name: "Fedora Matrix Chat",
            link: "https://chat.fedoraproject.org/",
          },
          { name: "Ask Fedora", link: "https://ask.fedoraproject.org/" },
        ],
        tools: [
          { name: "DNF Package Manager", link: "https://dnf.readthedocs.io/" },
          {
            name: "GNOME Software Center",
            link: "https://wiki.gnome.org/Apps/Software",
          },
          {
            name: "Fedora Toolbox",
            link: "https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/",
          },
        ],
      },
      comparisons: {
        similarDistros: ["openSUSE Tumbleweed", "Ubuntu", "Manjaro", "Pop!_OS"],
        idealFor: [
          "Software developers and programmers",
          "System administrators",
          "Technology enthusiasts",
          "Users wanting latest software",
          "Red Hat ecosystem users",
        ],
        notIdealFor: [
          "Users prioritizing maximum stability",
          "Complete beginners to Linux",
          "Users with very old hardware",
          "Those avoiding frequent updates",
        ],
      },
    },
    arch: {
      name: "Arch Linux",
      logo: (
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white rounded-full border-t-transparent transform rotate-45"></div>
          </div>
        </div>
      ),
      tagline:
        "A simple, lightweight distribution - for users who want complete control",
      overview: {
        whatItIs:
          "Arch Linux is a lightweight, flexible Linux distribution that follows the KISS (Keep It Simple, Stupid) principle and provides users with complete control over their system.",
        whyUseIt:
          "Arch offers a rolling release model, minimal base installation, and the freedom to build your system exactly as you want it. Perfect for advanced users who want to learn Linux deeply.",
        userBase:
          "Advanced Linux users, developers, system administrators, and Linux enthusiasts worldwide.",
      },
      features: [
        "Rolling release model with latest software",
        "Minimal base installation",
        "Pacman package manager with AUR support",
        "Extensive and detailed documentation (Arch Wiki)",
        "Complete user control and customization",
        "No pre-installed bloatware",
        "Cutting-edge kernel and software",
        "Strong community-driven development",
      ],
      installation: {
        quickSteps: [
          "Download Arch Linux ISO",
          "Boot from installation media",
          "Partition disks manually",
          "Mount filesystems and install base system",
          "Configure system (locale, timezone, hostname)",
          "Install and configure bootloader",
          "Set root password and create user",
          "Install desktop environment (optional)",
        ],
        platforms: [
          "Desktop",
          "Server",
          "Embedded systems",
          "Virtual machines",
        ],
        fullGuideLink: "https://wiki.archlinux.org/title/Installation_guide",
      },
      usage: {
        dailyTasks: [
          "Custom desktop environment setup",
          "Software development and programming",
          "System administration and scripting",
          "Learning Linux internals",
          "Building minimal, efficient systems",
          "Package management with pacman and AUR",
        ],
        tips: [
          "Read the Arch Wiki before asking questions",
          "Use 'pacman -Syu' for system updates",
          "Install AUR helper like 'yay' for AUR packages",
          "Keep system updated regularly",
          "Backup important configurations",
          "Learn to read and understand error messages",
        ],
        videoTutorials: [
          "Arch Linux Installation Guide - DistroTube",
          "Arch Linux for Beginners - Mental Outlaw",
          "Arch Linux Desktop Setup - Luke Smith",
        ],
      },
      resources: {
        documentation: [
          { name: "Arch Wiki", link: "https://wiki.archlinux.org/" },
          {
            name: "Arch Linux Installation Guide",
            link: "https://wiki.archlinux.org/title/Installation_guide",
          },
          {
            name: "General Recommendations",
            link: "https://wiki.archlinux.org/title/General_recommendations",
          },
        ],
        community: [
          { name: "Arch Linux Forums", link: "https://bbs.archlinux.org/" },
          {
            name: "Arch Linux Reddit",
            link: "https://www.reddit.com/r/archlinux/",
          },
          {
            name: "Arch Linux IRC",
            link: "https://wiki.archlinux.org/title/IRC_channels",
          },
          { name: "Arch Linux Telegram", link: "https://t.me/archlinuxgroup" },
        ],
        tools: [
          {
            name: "Pacman Package Manager",
            link: "https://wiki.archlinux.org/title/Pacman",
          },
          {
            name: "AUR (Arch User Repository)",
            link: "https://aur.archlinux.org/",
          },
          { name: "Yay AUR Helper", link: "https://github.com/Jguer/yay" },
        ],
      },
      comparisons: {
        similarDistros: ["Manjaro", "EndeavourOS", "Artix Linux", "Parabola"],
        idealFor: [
          "Advanced Linux users",
          "System administrators",
          "Developers and programmers",
          "Users wanting to learn Linux deeply",
          "Minimalist system preferences",
        ],
        notIdealFor: [
          "Linux beginners",
          "Users wanting stability over latest features",
          "Those preferring pre-configured systems",
          "Users uncomfortable with command line",
        ],
      },
    },
    centos: {
      name: "CentOS / Rocky / AlmaLinux",
      logo: (
        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full"></div>
          </div>
        </div>
      ),
      tagline:
        "Enterprise-class Linux distribution for servers and production environments",
      overview: {
        whatItIs:
          "CentOS, Rocky Linux, and AlmaLinux are enterprise-grade Linux distributions that provide stability, security, and long-term support for production environments.",
        whyUseIt:
          "These distributions offer Red Hat Enterprise Linux compatibility, long-term support, and are perfect for servers, cloud deployments, and enterprise applications requiring maximum stability.",
        userBase:
          "Enterprises, web hosting companies, cloud providers, and system administrators worldwide.",
      },
      features: [
        "Red Hat Enterprise Linux compatibility",
        "Long-term support (10+ years)",
        "Enterprise-grade security and stability",
        "YUM/DNF package management",
        "SELinux security framework",
        "Minimal desktop or server-only installations",
        "Extensive enterprise software support",
        "Professional support options available",
      ],
      installation: {
        quickSteps: [
          "Download Rocky Linux or AlmaLinux ISO",
          "Create installation media",
          "Boot and start installation process",
          "Configure network and security settings",
          "Choose minimal or server installation",
          "Set up disk partitioning for servers",
          "Configure user accounts and root access",
          "Complete installation and configure services",
        ],
        platforms: [
          "Servers",
          "Cloud instances",
          "Virtual machines",
          "Containers",
          "Enterprise workstations",
        ],
        fullGuideLink: "https://docs.rockylinux.org/guides/installation/",
      },
      usage: {
        dailyTasks: [
          "Web server hosting (Apache, Nginx)",
          "Database server management",
          "Cloud and virtualization platforms",
          "Enterprise application hosting",
          "Network services and infrastructure",
          "Container orchestration with Kubernetes",
        ],
        tips: [
          "Use 'dnf update' for system updates",
          "Configure firewalld for network security",
          "Enable EPEL repository for additional packages",
          "Use systemctl for service management",
          "Regular security updates are crucial",
          "Monitor system logs with journalctl",
        ],
        videoTutorials: [
          "Rocky Linux Server Setup - LearnLinuxTV",
          "AlmaLinux Installation Guide - TechHut",
          "CentOS Server Administration - Linux Academy",
        ],
      },
      resources: {
        documentation: [
          {
            name: "Rocky Linux Documentation",
            link: "https://docs.rockylinux.org/",
          },
          { name: "AlmaLinux Wiki", link: "https://wiki.almalinux.org/" },
          {
            name: "Red Hat Enterprise Linux Documentation",
            link: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/",
          },
        ],
        community: [
          {
            name: "Rocky Linux Forums",
            link: "https://forums.rockylinux.org/",
          },
          {
            name: "AlmaLinux Community",
            link: "https://almalinux.org/community/",
          },
          { name: "CentOS Reddit", link: "https://www.reddit.com/r/CentOS/" },
          {
            name: "Enterprise Linux Telegram",
            link: "https://t.me/rockylinux",
          },
        ],
        tools: [
          { name: "DNF Package Manager", link: "https://dnf.readthedocs.io/" },
          { name: "Cockpit Web Console", link: "https://cockpit-project.org/" },
          { name: "Firewalld", link: "https://firewalld.org/" },
        ],
      },
      comparisons: {
        similarDistros: [
          "Red Hat Enterprise Linux",
          "Oracle Linux",
          "SUSE Linux Enterprise",
        ],
        idealFor: [
          "Enterprise server deployments",
          "Web hosting and cloud providers",
          "System administrators",
          "Production environments",
          "Organizations requiring long-term support",
        ],
        notIdealFor: [
          "Desktop users",
          "Users wanting latest software versions",
          "Gaming and multimedia",
          "Beginners learning Linux",
        ],
      },
    },
    kali: {
      name: "Kali Linux",
      logo: (
        <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-sm transform rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full transform -rotate-45"></div>
            </div>
          </div>
        </div>
      ),
      tagline:
        "The most advanced penetration testing distribution ever created",
      overview: {
        whatItIs:
          "Kali Linux is a Debian-based Linux distribution specifically designed for digital forensics, penetration testing, and cybersecurity research.",
        whyUseIt:
          "Kali comes pre-installed with hundreds of security tools, making it the go-to choice for cybersecurity professionals, ethical hackers, and security researchers worldwide.",
        userBase:
          "Cybersecurity professionals, ethical hackers, penetration testers, and security researchers globally.",
      },
      features: [
        "600+ pre-installed security tools",
        "Regular updates with latest security tools",
        "Multiple desktop environments available",
        "Live boot capability for forensics",
        "ARM and mobile device support",
        "Cloud and container images available",
        "Professional penetration testing framework",
        "Extensive documentation and tutorials",
      ],
      installation: {
        quickSteps: [
          "Download Kali Linux ISO",
          "Create bootable USB or run in VM",
          "Boot from installation media",
          "Choose installation type (live or persistent)",
          "Configure network and partitions",
          "Set up user accounts (avoid using root)",
          "Install additional tools as needed",
          "Configure for specific security testing needs",
        ],
        platforms: [
          "Desktop/Laptop",
          "Virtual Machines",
          "ARM devices",
          "Cloud instances",
          "Mobile devices",
        ],
        fullGuideLink: "https://www.kali.org/docs/installation/",
      },
      usage: {
        dailyTasks: [
          "Network penetration testing",
          "Web application security testing",
          "Digital forensics and incident response",
          "Vulnerability assessment and scanning",
          "Wireless security auditing",
          "Social engineering testing",
        ],
        tips: [
          "Don't use Kali as your main desktop OS",
          "Run Kali in a virtual machine for safety",
          "Keep tools updated with 'apt update && apt upgrade'",
          "Learn ethical hacking principles first",
          "Practice on your own networks only",
          "Document all testing activities",
        ],
        videoTutorials: [
          "Kali Linux Tutorial for Beginners - NetworkChuck",
          "Ethical Hacking with Kali Linux - Cybrary",
          "Kali Linux Tools Overview - HackerSploit",
        ],
      },
      resources: {
        documentation: [
          {
            name: "Kali Linux Documentation",
            link: "https://www.kali.org/docs/",
          },
          { name: "Kali Linux Tools", link: "https://www.kali.org/tools/" },
          { name: "Kali Linux Training", link: "https://kali.training/" },
        ],
        community: [
          { name: "Kali Linux Forums", link: "https://forums.kali.org/" },
          { name: "Kali Linux Discord", link: "https://discord.gg/kali-linux" },
          {
            name: "Kali Linux Reddit",
            link: "https://www.reddit.com/r/Kalilinux/",
          },
          {
            name: "Offensive Security Community",
            link: "https://www.offensive-security.com/community/",
          },
        ],
        tools: [
          { name: "Metasploit Framework", link: "https://www.metasploit.com/" },
          { name: "Nmap Network Scanner", link: "https://nmap.org/" },
          {
            name: "Wireshark Network Analyzer",
            link: "https://www.wireshark.org/",
          },
        ],
      },
      comparisons: {
        similarDistros: [
          "Parrot Security OS",
          "BlackArch Linux",
          "Pentoo",
          "BackBox",
        ],
        idealFor: [
          "Cybersecurity professionals",
          "Ethical hackers and penetration testers",
          "Digital forensics investigators",
          "Security researchers",
          "Students learning cybersecurity",
        ],
        notIdealFor: [
          "General desktop computing",
          "Programming and development",
          "Gaming and entertainment",
          "Business productivity tasks",
        ],
      },
    },
  };

  const currentDistro = distroData[selectedDistro];
  const otherDistros = Object.keys(distroData).filter(
    (key) => key !== selectedDistro
  );

  const handleDistroChange = (distro: string) => {
    setSelectedDistro(distro);
    // Update URL without page reload
    const newUrl = `${window.location.pathname}?distro=${distro}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">{currentDistro.logo}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {currentDistro.name}
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            {currentDistro.tagline}
          </p>
          <a
            href={currentDistro.installation.fullGuideLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2">
            Get Started
            <span className="text-sm">→</span>
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Overview</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">What it is</h3>
              <p className="text-gray-300 leading-relaxed">
                {currentDistro.overview.whatItIs}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Why use it</h3>
              <p className="text-gray-300 leading-relaxed">
                {currentDistro.overview.whyUseIt}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">User Base</h3>
              <p className="text-gray-300 leading-relaxed">
                {currentDistro.overview.userBase}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentDistro.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Installation Guide
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Steps</h3>
              <ol className="space-y-2">
                {currentDistro.installation.quickSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Supported Platforms
              </h3>
              <div className="space-y-2">
                {currentDistro.installation.platforms.map((platform, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">{platform}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={currentDistro.installation.fullGuideLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium">
                  View Full Installation Guide →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage & Tutorials */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Usage & Tutorials
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Daily Tasks</h3>
              <div className="space-y-2">
                {currentDistro.usage.dailyTasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">{task}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Tips & Tricks
              </h3>
              <div className="space-y-2">
                {currentDistro.usage.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-gray-300 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Video Tutorials
            </h3>
            <div className="space-y-2">
              {currentDistro.usage.videoTutorials.map((video, index) => (
                <div key={index} className="text-blue-400 hover:text-blue-300">
                  📺 {video}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Documentation
              </h3>
              <div className="space-y-2">
                {currentDistro.resources.documentation.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 text-sm">
                    {doc.name} →
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <div className="space-y-2">
                {currentDistro.resources.community.map((community, index) => (
                  <a
                    key={index}
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 text-sm">
                    {community.name} →
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Tools</h3>
              <div className="space-y-2">
                {currentDistro.resources.tools.map((tool, index) => (
                  <a
                    key={index}
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 text-sm">
                    {tool.name} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons & Suggestions */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Comparisons & Suggestions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Similar Distros
              </h3>
              <div className="space-y-2">
                {currentDistro.comparisons.similarDistros.map(
                  (distro, index) => (
                    <div key={index} className="text-gray-300 text-sm">
                      • {distro}
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Ideal For
              </h3>
              <div className="space-y-2">
                {currentDistro.comparisons.idealFor.map((use, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">+</span>
                    <span className="text-gray-300 text-sm">{use}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">
                Not Ideal For
              </h3>
              <div className="space-y-2">
                {currentDistro.comparisons.notIdealFor.map((use, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">-</span>
                    <span className="text-gray-300 text-sm">{use}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Distros */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Explore Other Distributions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {otherDistros.map((distroKey) => (
              <button
                key={distroKey}
                onClick={() => handleDistroChange(distroKey)}
                className="bg-black border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-200 group">
                <div className="flex flex-col items-center gap-3">
                  <div className="transform group-hover:scale-110 transition-transform duration-200">
                    {distroData[distroKey].logo}
                  </div>
                  <span className="text-white font-medium text-sm group-hover:text-gray-300">
                    {distroData[distroKey].name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
