import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="hero"
            smooth
            duration={600}
            className="cursor-pointer"
          >
            <h1 className="text-3xl font-black tracking-tight">
              <span className="text-white">H</span>
              <span className="text-cyan-400">K.</span>
            </h1>
          </Link>

          {/* Desktop */}

          <nav className="hidden md:flex items-center gap-10">

            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                spy
                offset={-80}
                duration={600}
                activeClass="text-cyan-400"
                className="cursor-pointer text-slate-300 hover:text-cyan-400 transition font-medium"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download
              className="rounded-xl bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 font-semibold"
            >
              Resume
            </a>

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="flex flex-col py-6">

              {links.map((link) => (

                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="px-8 py-4 text-slate-300 hover:text-cyan-400 cursor-pointer"
                >
                  {link.name}
                </Link>

              ))}

              <a
                href="/resume.pdf"
                download
                className="mx-8 mt-4 text-center rounded-xl bg-cyan-500 py-3 font-semibold"
              >
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
};

export default Navbar;