import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaUserCheck,
} from "react-icons/fa";

const quickFacts = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    value: "BSc Computer Science",
  },
  {
    icon: <FaLaptopCode />,
    title: "Specialization",
    value: "Full Stack Development",
  },
  {
    icon: <FaBrain />,
    title: "Interest",
    value: "Artificial Intelligence",
  },
  {
    icon: <FaShieldAlt />,
    title: "Passion",
    value: "Cybersecurity",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Nairobi, Kenya",
  },
  {
    icon: <FaUserCheck />,
    title: "Status",
    value: "Available for Internship",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-black mt-4">
            Get To Know Me
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-cyan-500 blur-3xl opacity-20"></div>

              <img
                src={profile}
                alt="Hillary Kuria"
                className="relative w-[380px] rounded-3xl border border-slate-700 shadow-2xl"
              />

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold mb-8">
              Hillary Kuria
            </h3>

            <p className="text-slate-300 leading-8 text-lg mb-6">

              I'm a Computer Science student at
              <span className="text-cyan-400 font-semibold">
                {" "}Multimedia University of Kenya
              </span>
              , passionate about building modern software solutions that solve
              real-world problems.

            </p>

            <p className="text-slate-400 leading-8 mb-6">

              My interests span Full Stack Development, Artificial Intelligence,
              backend engineering, and cybersecurity. I enjoy transforming ideas
              into scalable, user-friendly applications while continuously
              learning emerging technologies.

            </p>

            <p className="text-slate-400 leading-8">

              I'm currently seeking internship opportunities where I can
              contribute to impactful software projects, collaborate with
              experienced developers, and continue growing both technically and
              professionally.

            </p>

          </motion.div>

        </div>

        {/* Quick Facts */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

          {quickFacts.map((fact, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur p-7"
            >

              <div className="text-cyan-400 text-3xl mb-5">
                {fact.icon}
              </div>

              <h4 className="font-bold text-xl mb-2">
                {fact.title}
              </h4>

              <p className="text-slate-400">
                {fact.value}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default About;