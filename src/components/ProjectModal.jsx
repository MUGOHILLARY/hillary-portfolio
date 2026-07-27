import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-5xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-slate-900 p-3 rounded-full hover:bg-cyan-500 transition"
            >
              <FaTimes />
            </button>

            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl"
            />

            <div className="bg-slate-900 p-6 rounded-b-2xl">
              <h2 className="text-3xl font-bold mb-3">
                {project.title}
              </h2>

              <p className="text-slate-400">
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;