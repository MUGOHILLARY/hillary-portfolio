import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaJava,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFastapi,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaReact />,
      name: "React",
      level: 90,
      color: "text-cyan-400",
    },
    {
      icon: <FaJsSquare />,
      name: "JavaScript",
      level: 90,
      color: "text-yellow-400",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      level: 88,
      color: "text-cyan-400",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      level: 85,
      color: "text-green-500",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      level: 82,
      color: "text-gray-300",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      level: 82,
      color: "text-green-500",
    },
    {
      icon: <FaPython />,
      name: "Python",
      level: 87,
      color: "text-yellow-300",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
      level: 80,
      color: "text-emerald-400",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
      level: 80,
      color: "text-blue-400",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      level: 80,
      color: "text-blue-500",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      level: 90,
      color: "text-orange-500",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      level: 90,
      color: "text-white",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: 95,
      color: "text-orange-500",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      level: 92,
      color: "text-blue-500",
    },
    {
      icon: <FaJava />,
      name: "Java",
      level: 75,
      color: "text-red-500",
    },
    {
      icon: <FaCode />,
      name: "VS Code",
      level: 95,
      color: "text-cyan-400",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
      level: 85,
      color: "text-orange-400",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-900 py-24 text-white"
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
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Technical Expertise
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build modern, scalable and secure
            applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-slate-950 border border-slate-800 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] rounded-2xl p-6 transition-all duration-300"
            >
              <div className={`text-5xl mb-5 ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {skill.name}
              </h3>

              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-cyan-400 h-full rounded-full"
                />
              </div>

              <div className="flex justify-between mt-3">
                <span className="text-slate-400 text-sm">
                  Proficiency
                </span>

                <span className="text-cyan-400 font-semibold">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;