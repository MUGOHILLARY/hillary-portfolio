import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold">
            Get In Touch
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mt-3 mb-16"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-semibold mb-8">
              Let's Build Something Amazing
            </h3>

            <p className="text-slate-400 leading-8 mb-10">
              I'm always open to internship opportunities,
              freelance work, collaborations, and exciting software
              development projects.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-5">
                <FaPhone className="text-cyan-400 text-2xl" />
                <span>0115632367</span>
              </div>

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span>hillarymugo04@gmail.com</span>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <span>Nairobi, Kenya</span>
              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={24} />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <motion.form
            whileHover={{ scale: 1.01 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-6 p-4 rounded-lg bg-slate-800 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-6 p-4 rounded-lg bg-slate-800 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full mb-6 p-4 rounded-lg bg-slate-800 outline-none resize-none"
            />

            <button
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;