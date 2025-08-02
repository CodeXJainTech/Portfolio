import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050414] text-[#E0F1FF] py-10 px-6 text-center">
      {/* Name */}
      <h2 className="text-2xl font-bold text-[#0077B6] mb-4">Anchal Jain</h2>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-xl mb-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#0077B6] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#0077B6] transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:jainanchal0611@gmail.com"
          className="hover:text-[#0077B6] transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="inline-flex items-center text-sm text-[#ADE8F4] hover:text-[#0077B6] transition-colors duration-300 mb-4"
      >
        <FaArrowUp className="mr-2" /> Back to Top
      </button>

      {/* Bottom Text */}
      <p className="text-sm text-[#ADE8F4]">
        © {new Date().getFullYear()} Anchal Jain. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;