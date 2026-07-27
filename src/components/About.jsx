import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaShieldAlt,
  FaServer,
} from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Building responsive, accessible and interactive user interfaces using React, JavaScript and Tailwind CSS.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Developing scalable REST APIs, authentication systems and databases with Node.js, Express and MongoDB.",
    },
    {
      icon: <FaBrain />,
      title: "Artificial Intelligence",
      description:
        "Exploring AI-powered applications, intelligent assistants and automation solutions using modern AI technologies.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description:
        "Passionate about secure software development, authentication, threat awareness and protecting digital systems.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-950 py-24 text-white"
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
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Who I Am
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-8">
              Building Modern Digital Experiences
            </h3>

            <p className="text-slate-400 leading-8 mb-6 text-lg">
              I am Hillary Kuria, a passionate Full Stack Developer dedicated
              to creating high-quality software solutions that combine
              functionality, performance and beautiful user experiences.
            </p>

            <p className="text-slate-400 leading-8 mb-6 text-lg">
              My interests span frontend development, backend engineering,
              Artificial Intelligence and Cybersecurity. I enjoy solving
              complex problems and continuously learning emerging technologies.
            </p>

            <p className="text-slate-400 leading-8 text-lg">
              My goal is to build innovative software that creates meaningful
              impact while maintaining clean architecture, secure systems and
              exceptional user experience.
            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {highlights.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-slate-900 border border-slate-800 hover:border-cyan-400 rounded-2xl p-6 transition-all duration-300"
              >

                <div className="text-4xl text-cyan-400 mb-5">
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold mb-3">
                  {item.title}
                </h4>

                <p className="text-slate-400 leading-7">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;