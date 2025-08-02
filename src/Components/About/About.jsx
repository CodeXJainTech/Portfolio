import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpg';
import { codingProfiles } from '../../contents';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-40 py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-20 text-[#E0F1FF]"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-35">

        {/* ------------ Left Content: Text ------------ */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight text-[#E0F1FF]">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-[#ADE8F4]">
            Anchal Jain
          </h2>

          {/* ------------ Typewriter Heading ------------ */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight text-[#E0F1FF]">
            I am{' '}
            <span className="text-[#0077B6]">
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
          <p className="text-base sm:text-lg md:text-lg mt-8 leading-relaxed text-[#E0F1FF]">
            I’m an IIITian and Computer Science student passionate about building impactful tech
            solutions. I specialize in full-stack development and explore AI/ML to solve real-world
            problems. As an active competitive programmer, I continuously sharpen my problem-solving
            and algorithmic skills.
          </p>

          {/* -----------Coding Profiles---------------- */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 mb-6">
            {codingProfiles.map((profile, idx) => (
              <a
                key={idx}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#050414] backdrop-blur-md transition-transform duration-300 hover:scale-105 shadow-[0_0_10px_rgba(0,119,182,0.3)]"
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
              background: 'linear-gradient(90deg, #023E8A, #0077B6)',
              boxShadow: '0 0 6px rgba(0, 119, 182, 0.5), 0 0 12px rgba(2, 62, 138, 0.6)',
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
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={8000}
            scale={1.02}
            transitionSpeed={3000}
            gyroscope={true}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-[#0077B6] rounded-full"
          >
            <img
              src={profileImage}
              alt="Anchal Jain"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(0,119,182,0.4)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
