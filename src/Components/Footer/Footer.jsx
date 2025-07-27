import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='bg-[#050414] text-gray-300 py-10 px-6 text-center'>
      {/* Name */}
      <h2 className='text-2xl font-bold text-[#00ffff] mb-4'>Anchal Jain</h2>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-xl mb-4">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#00ffff]">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#00ffff]">
          <FaGithub />
        </a>
        <a href="mailto:jainanchal0611@gmail.com" className="hover:text-[#00ffff]">
          <FaEnvelope />
        </a>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="inline-flex items-center text-sm text-gray-400 hover:text-[#00ffff] transition-colors duration-300 mb-4"
      >
        <FaArrowUp className="mr-2" /> Back to Top
      </button>

      {/* Bottom Text */}
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Anchal Jain. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer