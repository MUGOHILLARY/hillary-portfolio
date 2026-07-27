import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Subtitle */}
      <p className="text-cyan-400 font-semibold tracking-[4px] uppercase">
        Full Stack Developer
      </p>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        Building
        <br />

        <span className="text-cyan-400">
          Intelligent
        </span>

        <br />

        Software.
      </h1>

      {/* Animated Roles */}
      <div className="text-xl md:text-2xl font-semibold text-slate-300 min-h-[40px]">
        <TypeAnimation
          sequence={[
            "AI Developer",
            2000,
            "React Developer",
            2000,
            "Backend Engineer",
            2000,
            "Cybersecurity Enthusiast",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Description */}
      <p className="max-w-xl text-base md:text-lg text-slate-400 leading-8">
        I'm <span className="text-white font-semibold">Hillary Kuria</span>, a
        passionate Full Stack Developer focused on building modern web
        applications, scalable backend systems, AI-powered solutions, and secure
        digital experiences.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a
          href="#projects"
          className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold"
        >
          Explore Projects
          <FaArrowRight />
        </a>

        <a
          href="/Hillary_Kuria_CV.pdf"
          download
          className="w-full sm:w-auto border border-cyan-500 hover:bg-cyan-500 transition-all duration-300 px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold"
        >
          <FaDownload />
          Download CV
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 pt-4">
        <a
          href="https://github.com/MUGOHILLARY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-slate-300 hover:text-cyan-400 transition duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/hillary-kuria"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-slate-300 hover:text-cyan-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
};

export default HeroContent;