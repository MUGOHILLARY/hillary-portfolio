import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-scroll";

const HeroContent = () => {
  return (
    <div>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-cyan-300 mb-8">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
        Available for Internship
      </div>

      {/* Heading */}

      <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white">
        Building
        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Intelligent
        </span>

        <br />

        Software.
      </h1>

      {/* Animated Roles */}

      <div className="mt-8 text-xl md:text-2xl font-semibold text-slate-300 h-10">
        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            "AI Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Cybersecurity Enthusiast",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Description */}

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        I'm <span className="text-white font-semibold">Hillary Kuria</span>,
        a Computer Science student at Multimedia University of Kenya with
        hands-on experience in full-stack development, AI applications and
        secure software systems. I enjoy creating modern digital experiences
        that solve real-world problems.
      </p>

      {/* Buttons */}

      <div className="flex flex-wrap gap-5 mt-10">

        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-70}
          className="cursor-pointer"
        >
          <button className="group flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold transition hover:bg-cyan-600 hover:scale-105">

            Explore Projects

            <FaArrowRight className="transition group-hover:translate-x-1" />

          </button>
        </Link>

        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-3 rounded-xl border border-cyan-500 px-7 py-4 font-semibold transition hover:bg-cyan-500 hover:text-white hover:scale-105"
        >
          <FaDownload />

          Download CV
        </a>

      </div>

      {/* Social Links */}

      <div className="flex items-center gap-5 mt-12">

        <a
          href="https://github.com/MUGOHILLARY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-2xl transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/hillary-kuria/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-2xl transition hover:border-cyan-400 hover:text-cyan-400 hover:scale-110"
        >
          <FaLinkedin />
        </a>

      </div>

      {/* Quick Stats */}

      <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg">

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center backdrop-blur">
          <h2 className="text-3xl font-bold text-cyan-400">10+</h2>
          <p className="mt-2 text-sm text-slate-400">
            Technologies
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center backdrop-blur">
          <h2 className="text-3xl font-bold text-cyan-400">5+</h2>
          <p className="mt-2 text-sm text-slate-400">
            Projects
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center backdrop-blur">
          <h2 className="text-3xl font-bold text-cyan-400">100%</h2>
          <p className="mt-2 text-sm text-slate-400">
            Dedication
          </p>
        </div>

      </div>

    </div>
  );
};

export default HeroContent;