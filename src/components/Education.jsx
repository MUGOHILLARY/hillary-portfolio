import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold">
            Education
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mt-3 mb-16"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
          >
            <FaGraduationCap className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-bold">
              Bachelor of Computer Science
            </h3>

            <p className="text-slate-400 mt-2">
              Multimedia University of Kenya
            </p>

            <p className="text-slate-500 mt-3">
              2022 – 2026
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
          >
            <FaCertificate className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-bold">
              Microsoft Cybersecurity Analyst
            </h3>

            <p className="text-slate-400 mt-2">
              Microsoft Professional Certification
            </p>

            <p className="text-slate-500 mt-3">
              2024
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;