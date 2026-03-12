"use client";

import { projectsData } from "@/utils/data/projects-data";
// import ProjectCard from './project-card';
import ProjectShowcase from "./project-showcase";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <section className="relative my-12 lg:my-24">
        <div className="pt-24">
          <div className="flex flex-col gap-24">
            {projectsData.slice(0, 4).map((project, index) => (
              <motion.div
                id={`sticky-card-${index + 1}`}
                key={index}
                style={{ zIndex: 20 + index }}
                // className="sticky-card w-full mx-auto max-w-8xl sticky"
                // className="sticky top-28 w-full max-w-6xl mx-auto bg-[#070b22] z-10"
                className="sticky top-28 w-full max-w-6xl mx-auto bg-[#070b22] z-10 rounded-2xl"
                // className="w-full max-w-6xl mx-auto bg-[#070b22] rounded-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                viewport={{ once: true, amount: 0.18 }}
              >
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                  {/* <ProjectCard project={project} /> */}
                  {/* <ProjectShowcase project={project} /> */}
                  <ProjectShowcase project={project} index={index} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
