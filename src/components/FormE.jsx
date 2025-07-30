import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FormE = () => {
  const navigate = new useNavigate()

  const imagePath = process.env.REACT_APP_IMAGE_PATH || "/images";
  
  const pdfPath = process.env.REACT_APP_PDF_PATH || "/pdf";
   const [isOpen, setIsOpen] = useState(false);
const [isPdfOpen, setIsPdfOpen] = useState(false);
 
  const handleOpenPdf = () => {
    setIsOpen(true);
  };
   const handleOpenWeddingPdf = () => {
    setIsPdfOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsPdfOpen(false);
  };
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
            onClick={handleOpenWeddingPdf}
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
            onClick={handleOpenPdf}
           >
            <img
              src={`${imagePath}/noretakes.jpeg`}
              alt="NoRetakes"
              className="w-full h-full object-container"
            />
          </motion.button>
          {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 w-[100vw] max-w-5xl h-[90vh] relative shadow-lg"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-0 right-2 text-2xl text-gray-500 hover:text-red-600"
            >
              &times;
            </button>

            {/* PDF Viewer */}
            <iframe
             src={`${pdfPath}/NoRetakes_Credentials.pdf`}
              title="PDF Viewer"
              className="w-full h-full border-0 rounded"
              allow="autoplay"
            />
          </motion.div>
        </div>
      )}
       {isPdfOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 w-[100vw] max-w-5xl h-[90vh] relative shadow-lg"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-0 right-2 text-2xl text-gray-500 hover:text-red-600"
            >
              &times;
            </button>

            {/* PDF Viewer */}
            <iframe
             src={`${pdfPath}/WeddingGenieCredentials.pdf`}
              // src="https://drive.google.com/file/d/1Wdb2IAeTJ1HMFvO0zTSyyU-A-39kn-Z3/preview"
              title="PDF Viewer"
              className="w-full h-full border-0 rounded"
              allow="autoplay"
            />
          </motion.div>
        </div>
      )}

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
