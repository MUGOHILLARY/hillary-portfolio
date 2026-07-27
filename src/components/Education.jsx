import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

const education = [
  {
    institution: "Multimedia University of Kenya",
    qualification: "Bachelor of Science in Computer Science",
    period: "2023 – Present",
    description:
      "Currently pursuing a Bachelor's Degree in Computer Science with a focus on software engineering, full-stack web development, artificial intelligence, cybersecurity, database systems, networking, and software architecture.",
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Object-Oriented Programming",
  "Software Engineering",
  "Computer Networks",
  "Artificial Intelligence",
  "Cybersecurity",
  "Operating Systems",
];

const Education = () => {
  return (
    <section
      id="education"
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
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Academic Background
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            My academic journey has provided a strong foundation in computer
            science while allowing me to develop practical software engineering
            skills through projects and continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Education Card */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] rounded-3xl p-8 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-500 w-14 h-14 rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-2xl text-slate-950" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {education[0].qualification}
                </h3>

                <p className="text-cyan-400">
                  {education[0].institution}
                </p>
              </div>
            </div>

            <p className="text-sm uppercase text-cyan-400 font-semibold mb-4">
              {education[0].period}
            </p>

            <p className="text-slate-400 leading-8">
              {education[0].description}
            </p>
          </motion.div>

          {/* Coursework Card */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] rounded-3xl p-8 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-cyan-500 w-14 h-14 rounded-full flex items-center justify-center">
                <FaBookOpen className="text-2xl text-slate-950" />
              </div>

              <h3 className="text-2xl font-bold">
                Relevant Coursework
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {coursework.map((course) => (
                <div
                  key={course}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center text-slate-300 hover:border-cyan-400 transition-all duration-300"
                >
                  {course}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;