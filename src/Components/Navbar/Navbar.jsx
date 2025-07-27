import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { menuItems } from '../../contents';

const Navbar = () => {
  const [activeSec, setActiveSec] = useState(""); // Tracks which section is active
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isScrolled, setIsScrolled] = useState(false); // Navbar background on scroll

  // Add scroll listener to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle menu item click and scroll to section
  const handleMenuItemClick = (sectionId) => {
    setActiveSec(sectionId);
    setIsOpen(false); // Close mobile menu when clicked

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${
        isScrolled
          ? "bg-[#001f1f] bg-opacity-70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* ----------- Logo ----------- */}
        <div className="text-2xl font-semibold cursor-pointer">
          <span className="text-[#00FFFF]">&lt;</span>
          <span className="text-white">Code</span>
          <span className="text-[#00FFFF]">X</span>
          <span className="text-white">JainTech</span>
          <span className="text-[#00FFFF]">&gt;</span>
        </div>

        {/* ----------- Desktop Menu ----------- */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-200 hover:text-[#00FFFF] ${
                activeSec === item.id ? "text-[#00FFFF]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ----------- Social Icons (Desktop) ----------- */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/codexjaintech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#00FFFF] transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anchal-jain-59406a294/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#00FFFF] transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* ----------- Mobile Menu Toggle ----------- */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#00FFFF] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#00FFFF] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* ----------- Mobile Menu ----------- */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#001f1f] bg-opacity-80 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-colors duration-200 hover:text-[#00FFFF] ${
                  activeSec === item.id ? "text-[#00FFFF]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            {/* Social Icons in Mobile Menu */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codexjaintech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00FFFF]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anchal-jain-59406a294/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00FFFF]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
