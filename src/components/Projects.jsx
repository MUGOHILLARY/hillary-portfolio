import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl font-black mt-4">
            Featured Projects
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Projects */}

        <div className="space-y-28">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* Image */}

              <div>

                <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl hover:border-cyan-500 duration-300">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[350px] object-cover hover:scale-105 duration-500"
                  />

                </div>

              </div>

              {/* Content */}

              <div>

                <h3 className="text-4xl font-bold mb-6">

                  {project.title}

                </h3>

                <p className="text-slate-400 text-lg leading-8 mb-8">

                  {project.description}

                </p>

                <div className="flex flex-wrap gap-3 mb-10">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex flex-wrap gap-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-slate-800 hover:bg-cyan-500 duration-300 px-6 py-4 rounded-xl"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 border border-cyan-500 hover:bg-cyan-500 duration-300 px-6 py-4 rounded-xl"
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;