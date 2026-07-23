import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[420px] h-[420px] rounded-full border border-cyan-500/30"
      />

      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Hillary Kuria"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-[360px] h-[360px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(6,182,212,0.4)]"
      />

      {/* React Badge */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-4 -left-8 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl"
      >
        ⚛ React
      </motion.div>

      {/* Python Badge */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 -right-10 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl"
      >
        🐍 Python
      </motion.div>

      {/* Node Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-10 -left-10 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl"
      >
        🟢 Node.js
      </motion.div>

      {/* FastAPI Badge */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-0 right-0 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl"
      >
        ⚡ FastAPI
      </motion.div>

    </div>
  );
};

export default HeroImage;