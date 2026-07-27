import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Software Development Student",
    company: "Multimedia University of Kenya",
    period: "2023 – Present",
    description:
      "Pursuing a Bachelor's Degree in Computer Science while building full-stack applications, exploring AI technologies, backend development, and cybersecurity concepts through academic and personal projects.",
  },
  {
    title: "Personal Software Projects",
    company: "Independent Developer",
    period: "2024 – Present",
    description:
      "Designed and developed modern web applications including a developer portfolio, an AI assistant, Resolve cybersecurity platform, and the Knowledge Hub educational website using React, Node.js, Express, MongoDB, and Tailwind CSS.",
  },
  {
    title: "Software Development & Design",
    company: "Freelance",
    period: "2024 – Present",
    description:
      "Creating responsive websites, posters, branding materials, and user interfaces while continuously improving software engineering, UI/UX, and deployment skills.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            My Journey
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            My academic and practical experience in software development,
            modern web technologies, and building real-world projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500 ml-5 md:ml-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative mb-14 ml-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[49px] md:-left-[53px] top-2 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-slate-950 text-lg" />
              </div>

              {/* Card */}
              <div className="bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300 rounded-2xl p-8">
                <span className="text-cyan-400 font-semibold text-sm uppercase">
                  {exp.period}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {exp.title}
                </h3>

                <h4 className="text-slate-300 mt-1">
                  {exp.company}
                </h4>

                <p className="text-slate-400 leading-8 mt-5">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;