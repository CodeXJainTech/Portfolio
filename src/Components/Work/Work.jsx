import React, { useEffect, useState } from 'react';
import { projects } from '../../contents';

const Work = () => {
  const [projectOpen,setProjectOpen] = useState(null);

  const openProject = (project) =>{
    setProjectOpen(project);
  }
  const closeProject = () => {
    setProjectOpen(null);
  }

  return (
    <section
      id='work'
      className='py-20 pb-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-20'
    >
      {/* section heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-40 h-1 bg-[#00FFFF] mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          A collection of my work that reflects my journey as a developer and my passion for building impactful solutions.
        </p>
      </div>

      {/* --------------------Projects box-------------------- */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openProject(project)}
            className='border rounded-3xl bg-[#0a0a1a] backdrop-blur-md shadow-2xl overflow-hidden cursor-pointer hover:shadow-[0_8px_10px_5px_rgba(0,255,255,0.2)] hover:-translate-y-2 transition-transform duration-300 text-white p-5'
          >
            <div className='p-2 bg-white'>
              <img 
                src={project.image}
                alt={project.title}
                className='w-full h-40 object-cover rounded-xl'
              />
            </div>
            <div className='p-2'>
              <h2 className='text-2xl font-bold mb-5'>{project.title}</h2>  
              <p className='text-pink line-clamp-2 mb-1'>{project.description}</p>
              <div>
                {project.tags.map((tag,index) => (
                  <span key= {index} className='inline-block bg-[#16393a] rounded-full text-[#cfdede] px-2 py-1 mr-2 font-semibold text-xs'>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* -----------------Project Showcase Model------------------ */}
      {projectOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {/* Modal Container */}
          <div className="relative bg-[#1e1e1e] rounded w-[90%] max-w-3xl overflow-hidden">
            
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeProject}
                className="text-3xl text-gray-400 hover:text-[#00FFFF] transition-transform hover:scale-110"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col px-6 pb-6">
              {/* Project Image */}
              <div className="w-full mb-4">
                <img
                  src={projectOpen.image}
                  alt={projectOpen.title}
                  className="w-full max-h-[300px] object-contain rounded-2xl"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {projectOpen.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base mb-4">
                {projectOpen.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projectOpen.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#2c2c2c] text-[#00FFFF] text-xs px-3 py-1 rounded-full border border-[#00FFFF]/40"
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
                  className="flex-1 text-center bg-[#2c2c2c] border border-[#00FFFF]/40 text-[#00FFFF] px-4 py-2 rounded-lg hover:bg-[#00FFFF] hover:text-black transition"
                >
                  View Code
                </a>
                <a
                  href={projectOpen.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#00FFFF] text-black px-4 py-2 rounded-lg hover:bg-[#00e6e6] transition"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Work