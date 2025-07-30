import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FormE = () => {
  const navigate = new useNavigate()

  const imagePath = process.env.REACT_APP_IMAGE_PATH || "/images";
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 p-6">
    // <div className="min-h-screen bg-blue-50 flex items-center justify-center">
    /* <div className="min-h-screen bg-white flex items-center justify-center border-t border-gray-200"> */
    /* <div className="min-h-screen bg-yellow-50 flex items-center justify-center"> */
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-300 p-6 flex items-center justify-center">
      {/* 🏠 Home Button - Top Right */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 2 }}
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
      >
        🏠 Home
      </motion.button>

      {/* ⬅️ Back Button - Top Left */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: -2 }}
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
      >
        ⬅️ Back
      </motion.button>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white p-12 sm:p-16 rounded-3xl shadow-2xl max-w-3xl w-full text-center border border-blue-100"
      >
        <h2 className="text-3xl font-extrabold text-blue-700 mb-10">
          🚀 Click below to know more about us
        </h2>
        {/* <p className="text-md text-gray-600 mb-8">
          Network with innovators, pitch your ideas, and unlock growth in 48 hours!
        </p> */}

        <div className="flex justify-center gap-6 mb-3">

          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-2xl"
             onClick={() => window.open("https://drive.google.com/file/d/182SSiQyZ3frkfENyEVbySJAtsjoOCSNr/view", "_blank", "noopener,noreferrer")}
          >
            <img
              src={`${imagePath}/wedding.jpeg`}
              alt="Wedding"
              className="w-full h-full object-container"
            />
          </motion.button>

          {/* Box 2 */}
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-[400px] h-[220px] rounded-3xl overflow-hidden shadow-2xl"
           onClick={() => window.open("https://drive.google.com/file/d/1Wdb2IAeTJ1HMFvO0zTSyyU-A-39kn-Z3/view", "_blank", "noopener,noreferrer")}
          >
            <img
              src={`${imagePath}/noretakes.jpeg`}
              alt="NoRetakes"
              className="w-full h-full object-container"
            />
          </motion.button>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg"
          >
            🔥 Join the Sprint
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full border border-blue-400 text-blue-600 font-semibold hover:bg-blue-100 shadow-sm"
          >
            📄 Event Guide
          </motion.button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default FormE;
