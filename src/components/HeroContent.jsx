import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center h-full text-center lg:text-left">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-4"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
      >
        Hi, I'm{" "}
        <span className="text-cyan-400">
          Hillary Kuria
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-2xl md:text-3xl font-semibold text-slate-300 h-12"
      >
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Node.js Developer",
            2000,
            "AI Enthusiast",
            2000,
            "Computer Science Student",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-slate-400 leading-8 max-w-2xl text-lg"
      >
        I am a Computer Science student at Multimedia University of Kenya,
        passionate about building modern web applications, AI-powered
        solutions, and secure software systems. I enjoy solving real-world
        problems through clean code, intuitive user experiences, and
        innovative technology.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start"
      >

        <a
          href="#contact"
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
        >
          Contact Me
        </a>

        <a
          href="/resume.pdf"
          download="Hillary_Kuria_CV.pdf"
          className="px-8 py-4 border-2 border-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
        >
          Download CV
        </a>

      </motion.div>

    </div>
  );
};

export default HeroContent;