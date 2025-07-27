import React from "react";
import { motion } from "framer-motion";
import { useNavigate,Link } from "react-router-dom";

const FormA = () => {

  
  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-300 p-6 flex items-center justify-center relative">
      
      {/* 🎈 Back Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: -2 }}
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
      >
        ⬅️ Back
      </motion.button>

      {/* ✨ Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">✨ Annual TechFest 2025 ✨</h1>
        <p className="text-lg text-gray-600 mb-6">
          Join us for an unforgettable experience with talks, workshops, and more!
        </p>

        <div className="flex justify-center gap-4">
            <Link to="/UserForm">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-700"
                >
                    🎫 Register Now
                </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-300"
          >
            📅 View Events
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default FormA;
