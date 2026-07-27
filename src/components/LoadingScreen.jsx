import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] bg-slate-950 flex flex-col items-center justify-center"
        >
          {/* Logo */}

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.7,
              type: "spring",
            }}
            className="w-28 h-28 rounded-full border-4 border-cyan-400 flex items-center justify-center text-4xl font-black text-cyan-400"
          >
            HK
          </motion.div>

          {/* Name */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-black mt-10"
          >
            Hillary Kuria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 mt-3"
          >
            Full Stack Developer
          </motion.p>

          {/* Loading Bar */}

          <div className="w-72 h-2 rounded-full bg-slate-800 overflow-hidden mt-12">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="h-full bg-cyan-400"
            />

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;