import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-white text-xl font-bold">
            Hillary Kuria
          </h2>

          <p className="mt-2">
            Full Stack Web Developer
          </p>
        </div>

        <div className="flex gap-5 my-6 md:my-0">

          <a
            href="https://github.com/"
            className="hover:text-cyan-400"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/"
            className="hover:text-cyan-400"
          >
            <FaLinkedin size={24} />
          </a>

        </div>

        <p className="flex items-center gap-2">
          Made with <FaHeart className="text-red-500" /> by Hillary Kuria
        </p>

      </div>
    </footer>
  );
};

export default Footer;