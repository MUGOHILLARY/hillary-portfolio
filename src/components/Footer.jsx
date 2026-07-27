import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Left */}

          <div>
            <h2 className="text-3xl font-black">
              Hillary<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Full Stack Developer passionate about building modern web
              applications, AI-powered solutions, backend systems and secure
              digital experiences.
            </p>
          </div>

          {/* Center */}

          <div className="text-center">

            <h3 className="font-bold text-xl mb-5">
              Quick Links
            </h3>

            <div className="flex flex-wrap justify-center gap-5 text-slate-400">

              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col items-center md:items-end gap-5">

            <div className="flex gap-4">

              <a
                href="https://github.com/MUGOHILLARY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 flex items-center justify-center hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hillary-kuria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="bg-cyan-500 hover:bg-cyan-600 w-12 h-12 rounded-full flex items-center justify-center"
            >
              <FaArrowUp />
            </motion.button>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">

          <p>
            © {year} Hillary Kuria. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm">
            Designed & Developed with React, Tailwind CSS and Framer Motion.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;