import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: <FaBrain />,
    skills: [
      "Python",
      "Machine Learning",
      "AI Applications",
      "Automation",
    ],
  },
  {
    title: "Developer Tools",
    icon: <FaTools />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
      "Figma",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-28 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            My Skills
          </p>

          <h2 className="text-5xl font-black mt-4">
            Technologies & Expertise
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .12 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl bg-slate-950 border border-slate-800 p-8 shadow-xl hover:border-cyan-500 transition-all"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl mb-6">

                {category.icon}

              </div>

              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.skills.map((skill) => (

                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >

                    <FaCheckCircle className="text-cyan-400" />

                    <span className="text-slate-300">

                      {skill}

                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;