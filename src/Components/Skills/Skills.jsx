import React from 'react';
import { SkillsInfo } from '../../contents';

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#00FFFF] mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          A showcase of the skills I've developed through learning and experience.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {SkillsInfo.map((headline, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl shadow-[0_0_20px_1px_rgba(0,255,255,0.2)] bg-[#0a0a1a] text-white text-center w-full transition-transform transform hover:scale-105 border border-white"
          >
            {/* Skill Category Title */}
            <h3 className="text-2xl font-semibold mb-6">{headline.title}</h3>

            {/* Individual Skills */}
            <div className="flex flex-wrap justify-center gap-4">
              {headline.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="border border-white px-4 py-2 rounded-full bg-[#ffffff0a] flex items-center gap-3 hover:bg-[#00ffff22] transition"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-sm text-white whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;