import React, { useEffect, useState } from "react";
import { projects } from "../../contents";

const Work = () => {
  const [projectOpen, setProjectOpen] = useState(null);

  const openProject = (project) => setProjectOpen(project);
  const closeProject = () => setProjectOpen(null);

  return (
    <section
      id="work"
      className="py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#ADE8F4]">PROJECTS</h2>
        <div className="w-40 h-1 bg-[#0077B6] mx-auto mt-4"></div>
        <p className="text-[#E0F1FF] mt-4 text-lg font-semibold">
          A collection of my work that reflects my journey as a developer and
          my passion for building impactful solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openProject(project)}
            className="border border-[#0077B6] rounded-3xl bg-[#050414] backdrop-blur-md shadow-[0_8px_10px_5px_rgba(0,119,182,0.3)] overflow-hidden cursor-pointer hover:shadow-[0_0_15px_5px_rgba(0,119,182,0.3)] hover:-translate-y-2 transition-transform duration-300 text-[#E0F1FF] p-5"
          >
            <div className="p-2 bg-white rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>
            <div className="p-2">
              <h2 className="text-2xl font-bold mb-5">{project.title}</h2>
              <p className="text-[#ADE8F4] line-clamp-2 mb-1">
                {project.description}
              </p>
              <div>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#16393a] rounded-full text-[#cfdede] px-2 py-1 mr-2 font-semibold text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {projectOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative bg-[#050414] rounded w-[90%] max-w-3xl overflow-hidden border border-[#0077B6]">
            {/* Close */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeProject}
                className="text-3xl text-[#E0F1FF] hover:text-[#48CAE4] transition-transform hover:scale-110"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col px-6 pb-6">
              <div className="w-full mb-4">
                <img
                  src={projectOpen.image}
                  alt={projectOpen.title}
                  className="w-full max-h-[300px] object-contain rounded-2xl"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#ADE8F4] mb-2">
                {projectOpen.title}
              </h2>

              <p className="text-[#E0F1FF] text-sm md:text-base mb-4">
                {projectOpen.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projectOpen.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1a1f2a] text-[#ADE8F4] text-xs px-3 py-1 rounded-full border border-[#0077B6]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-center">
                <a
                  href={projectOpen.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#1a1f2a] border border-[#0077B6] text-[#ADE8F4] px-4 py-2 rounded-lg hover:bg-[#0077B6] hover:text-[#E0F1FF] transition"
                >
                  View Code
                </a>
                <a
                  href={projectOpen.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#0077B6] text-white px-4 py-2 rounded-lg hover:bg-[#48CAE4] hover:text-black transition"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;