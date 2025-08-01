import React from 'react';
import { SkillsInfo } from '../../contents';

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans text-[#E0F1FF]"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#ADE8F4]">SKILLS</h2>
        <div className="w-24 h-1 bg-[#023E8A] mx-auto mt-4"></div>
        <p className="text-[#ADE8F4] mt-4 text-lg font-semibold">
          A showcase of the skills I've developed through learning and experience.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {SkillsInfo.map((headline, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#050414] text-center w-full transition-transform transform hover:scale-105 border border-[#0077B6] shadow-[0_0_20px_1px_rgba(0,119,182,0.3)]"
          >
            {/* Skill Category Title */}
            <h3 className="text-2xl font-semibold mb-6 text-[#ADE8F4]">{headline.title}</h3>

            {/* Individual Skills */}
            <div className="flex flex-wrap justify-center gap-4">
              {headline.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="border border-[#0077B6] px-4 py-2 rounded-full bg-[#ffffff0a] flex items-center gap-3 hover:bg-[#48CAE433] transition"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-sm text-[#E0F1FF] whitespace-nowrap">
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