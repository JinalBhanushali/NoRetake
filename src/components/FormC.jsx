import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FormC = () => {
    const navigate= new useNavigate()
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
        className="bg-white p-10 rounded-3xl shadow-xl max-w-xl w-full text-center border border-blue-100"
      >
        <h2 className="text-3xl font-extrabold text-blue-700 mb-3">
          🚀 Startup Sprint 2025
        </h2>
        <p className="text-md text-gray-600 mb-8">
          Network with innovators, pitch your ideas, and unlock growth in 48 hours!
        </p>

        <div className="flex justify-center gap-4">
          <motion.button
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
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default FormC;
