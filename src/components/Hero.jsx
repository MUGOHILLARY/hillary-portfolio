import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroContent />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9 }}
            className="flex justify-center"
          >
            <HeroImage />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;