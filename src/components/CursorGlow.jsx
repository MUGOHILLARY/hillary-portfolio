import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.4,
      }}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(34,211,238,0.08) 35%, transparent 70%)",
        filter: "blur(30px)",
      }}
    />
  );
};

export default CursorGlow;