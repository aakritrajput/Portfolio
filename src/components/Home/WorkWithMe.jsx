import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WorkWithMe = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16 bg-transparent text-white">
      <motion.h2 
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Interested in working with me?
      </motion.h2>

      <div className="flex gap-6">
        <motion.button
          onClick={() => navigate("/contact")}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>

        <motion.button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See My Projects
        </motion.button>
      </div>
    </div>
  );
};

export default WorkWithMe;
