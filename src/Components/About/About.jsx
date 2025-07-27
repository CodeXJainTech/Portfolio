import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpg';
import { codingProfiles } from '../../contents';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-40 py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-35">
        
        {/* ------------ Left Content: Text ------------ */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Anchal Jain
          </h2>

          {/* ------------ Typewriter Heading ------------ */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#00FFFF] leading-tight">
            <span className="text-white">I am </span>
            <span className="text-[#00FFFF]">
              <Typewriter
                words={[
                  'a Full-Stack Developer',
                  'an AI/ML Developer',
                  'a Competitive Programmer',
                  'a Software Innovator',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* ------------ About Description ------------ */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mt-8 leading-relaxed">
            I’m an IIITian and Computer Science student passionate about building impactful tech solutions. I specialize in full-stack development and explore AI/ML to solve real-world problems. As an active competitive programmer, I continuously sharpen my problem-solving and algorithmic skills.
          </p>

          {/* -----------Coding profiles---------------- */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 mb-6">
            {codingProfiles.map((profile, idx) => (
              <a
                key={idx}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-md transition-transform duration-300 hover:scale-105 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              >
                <img
                  src={profile.logo}
                  alt={profile.name}
                  className="w-18 h-10 object-contain"
                />
              </a>
            ))}
          </div>


          {/* ------------ View CV Button ------------ */}
          <a
            href="https://docs.google.com/document/d/107bevycFl-VfOp2S3TYI41Uqo1-UX1sHsmSL3oZikDA/edit?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
            background: 'linear-gradient(90deg, #00caca, #007d7d)',
            boxShadow: '0 0 6px rgba(0, 255, 255, 0.5), 0 0 12px rgba(0, 255, 255, 0.5)',
            color: '#fff',
            textShadow: '0 0 4px #000, 0 0 8px #000',
          }}
          >
            VIEW CV
          </a>
        </div>

        {/* ------------ Right Content: Profile Image ------------ */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltEnable={true}
            tiltMaxAngle={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-[#00FFFF] rounded-full"
          >
            <img
              src={profileImage}
              alt="Anchal Jain"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(0,255,255,0.5)]"
            />
          </Tilt>
        </div>
      </div>

    </section>
  );
};

export default About;