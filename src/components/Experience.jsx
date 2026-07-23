import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRobot,
  FaBriefcase,
} from "react-icons/fa";

const timeline = [
  {
    year: "2022",
    title: "Started Computer Science",
    icon: <FaGraduationCap />,
    description:
      "Began my Bachelor of Science in Computer Science at Multimedia University of Kenya, building a strong foundation in software engineering, algorithms, networking, and databases.",
  },
  {
    year: "2024",
    title: "Full Stack Development",
    icon: <FaLaptopCode />,
    description:
      "Focused on modern web development using React, JavaScript, Node.js, Tailwind CSS, Express, and REST APIs while creating practical applications.",
  },
  {
    year: "2025",
    title: "AI & Cybersecurity Projects",
    icon: <FaRobot />,
    description:
      "Developed projects including Aura Assistant, Resolve, Knowledge Hub, and my personal portfolio while exploring Artificial Intelligence and Cybersecurity.",
  },
  {
    year: "2026",
    title: "Industrial Attachment",
    icon: <FaBriefcase />,
    description:
      "Actively seeking a Software Development internship to apply my technical skills, collaborate with experienced developers, and contribute to impactful software projects.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-28 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-black mt-4">
            My Journey
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-1 bg-cyan-500 rounded-full"></div>

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * .15 }}
                viewport={{ once: true }}
                className="relative flex gap-8"
              >

                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white z-10">
                  {item.icon}
                </div>

                <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 flex-1 hover:border-cyan-500 transition">

                  <span className="text-cyan-400 font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-8">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;