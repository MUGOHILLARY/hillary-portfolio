import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFastapi } from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Artificial Intelligence", icon: <FaRobot /> },
  { name: "Cybersecurity", icon: <FaShieldAlt /> },
];

const TechStack = () => {
  return (
    <section className="bg-slate-950 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-5"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .08 }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-all shadow-lg"
            >
              <div className="text-2xl text-cyan-400">
                {tech.icon}
              </div>

              <span className="font-medium text-slate-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;