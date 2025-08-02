import React from "react";
import { experiences } from "../../contents";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-20 mx-10 bg-white/5 rounded-3xl"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#ADE8F4]">EXPERIENCE</h2>
        <div className="w-48 h-1 bg-[#0077B6] mx-auto mt-4"></div>
        <p className="text-[#E0F1FF] mt-4 text-lg font-semibold">
          This section highlights my professional experience across various
          organizations, along with the roles, responsibilities, and
          achievements I have accomplished during my journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-[#0077B6] h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {/* Circle with Logo */}
            <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 bg-white border-4 border-[#0077B6] w-12 h-12 lg:w-16 lg:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Experience Card */}
            <div
              className={`w-full lg:max-w-md p-4 lg:p-8 rounded-2xl border border-[#0077B6] bg-[#050414] shadow-[0_0_25px_5px_rgba(0,119,182,0.3)] transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "lg:ml-10" : "lg:mr-10"
              } lg:ml-0 ml-12`}
            >
              {/* Header */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-[#E0F1FF]">
                      {experience.role}
                    </h3>
                    <h4 className="text-md lg:text-sm text-[#ADE8F4]">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-sm text-[#90AFC0] mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-[#E0F1FF]">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-[#ADE8F4]">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#0077B6] text-black font-bold px-4 py-1 text-xs lg:text-sm rounded-lg mr-2 mb-2 border border-white hover:bg-[#48CAE4] transition"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;