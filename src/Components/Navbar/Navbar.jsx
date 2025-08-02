import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { menuItems } from '../../contents';

const Navbar = () => {
  const [activeSec, setActiveSec] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSec(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${
        isScrolled && !isOpen
          ? "bg-[#050414] bg-opacity-80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="text-[#E0F1FF] py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold cursor-pointer">
          <span className="text-[#0077B6]">&lt;</span>
          <span className="text-[#E0F1FF]">Code</span>
          <span className="text-[#0077B6]">X</span>
          <span className="text-[#E0F1FF]">JainTech</span>
          <span className="text-[#0077B6]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#ADE8F4]">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-200 hover:text-[#0077B6] ${
                activeSec === item.id ? "text-[#0077B6]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons Desktop */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/codexjaintech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ADE8F4] hover:text-[#0077B6] transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anchal-jain-59406a294/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ADE8F4] hover:text-[#0077B6] transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="fixed top-5 right-6 z-50 text-3xl text-[#0077B6] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#0077B6] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="fixed top-0 left-0 w-full h-screen  backdrop-blur-lg bg-white/15 z-40 md:hidden">
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/90 rounded-lg shadow-lg">
      <ul className="flex flex-col items-center space-y-4 py-4 text-[#ADE8F4]">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer transition-colors duration-200 hover:text-[#0077B6] ${
              activeSec === item.id ? "text-[#0077B6]" : ""
            }`}
          >
            <button onClick={() => handleMenuItemClick(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
        <div className="flex space-x-4">
          <a
            href="https://github.com/codexjaintech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ADE8F4] hover:text-[#0077B6]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anchal-jain-59406a294/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ADE8F4] hover:text-[#0077B6]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </ul>
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;
