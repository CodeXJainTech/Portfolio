import React from "react";
import { experiences } from "../../contents"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-20"
    >
      {/* ------------------- Section Title ------------------- */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-48 h-1 bg-[#00FFFF] mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          This section highlights my professional experience across various
          organizations, along with the roles, responsibilities, and
          achievements I have accomplished during my journey.
        </p>
      </div>

      {/* ------------------- Experience Timeline ------------------- */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-[#00FFFF] h-full"></div>

        {/* ------------------- Experience Entries ------------------- */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {/* Timeline Circle (with company logo) */}
            <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 bg-white border-4 border-[#00FFFF] w-12 h-12 lg:w-16 lg:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* ------------------- Experience Card ------------------- */}
            <div
              className={`w-full lg:max-w-md p-4 lg:p-8 rounded-2xl border border-white bg-[#0a0a1a] backdrop-blur-md shadow-[0_0_25px_5px_rgba(0,255,255,0.2)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "lg:ml-10" : "lg:mr-10"
              } lg:ml-0 ml-12`}
            >
              {/* -------- Card Header (Logo + Info) -------- */}
              <div className="flex items-center space-x-6">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company, Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md lg:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* -------- Role Description -------- */}
              <p className="mt-4 text-gray-300">{experience.desc}</p>

              {/* -------- Skills Tags -------- */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#00FFFF] text-[#001214] px-4 py-1 text-xs lg:text-sm rounded-lg mr-2 mb-2 border border-white hover:bg-[#00e6e6] transition"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* ------------------- End of Experience Card ------------------- */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
