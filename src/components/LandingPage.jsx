
import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const colors = [
  "bg-pink-400",
  "bg-yellow-300",
  "bg-blue-400",
  "bg-green-300",
  "bg-red-400",
  "bg-purple-400",
];
const getTailwindColor = (className) => {
  switch (className) {
    case "bg-pink-400": return "#f472b6";
    case "bg-blue-400": return "#60a5fa";
    case "bg-yellow-300": return "#fde68a";
    case "bg-green-300": return "#86efac";
    case "bg-red-400": return "#f87171";
    case "bg-purple-400": return "#c084fc";
    default: return "#999";
  }
};


const generateBalloon = (index) => {
  const randomLeft = Math.floor(Math.random() * 100);
  const size = Math.floor(Math.random() * 30) + 50;
  const color = colors[index % colors.length];
  const duration = Math.random() * 5 + 10;

  return (
    <motion.div
        key={index}
        initial={{ y: "100vh", opacity: 0 }}
        animate={{
            y: "-150vh",
            x: [0, -20, 20, -15, 15, 0],
            rotate: [0, 5, -5, 3, -3, 0],
            opacity: 1,
        }}
        transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration,
            delay: index * 1.2,
            ease: "easeInOut",
        }}
        className="absolute flex flex-col items-center"
        style={{
            left: `${randomLeft}%`,
            bottom: 0,
            width: `${size}px`,
            pointerEvents: "none",
        }}
        >
      {/* Balloon */}
      <div
        className={`w-full ${color} rounded-full relative`}
        style={{
          height: `${size * 1.3}px`,
          borderRadius: "50% 50% 45% 45%",
          position: "relative",
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        }}
      >
        {/* Shine spot */}
        <div className="absolute top-3 left-3 w-3 h-5 bg-white opacity-40 rounded-full rotate-12"></div>

        {/* Knot */}
        <div
          className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: `10px solid ${getTailwindColor(color)}`,
          }}
        ></div>
      </div>

      {/* String */}
      <div className="w-0.5 h-16 bg-gray-500 mt-1 opacity-100"></div>
    </motion.div>
  );
};




const LandingPage = () => {
const imagePath = process.env.REACT_APP_IMAGE_PATH;
console.log(imagePath)
  return (
<div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-6 flex items-center justify-center relative overflow-hidden">
  {/* 🔮 Background Overlay */}
  <div className="absolute inset-0 bg-purple-100/60 backdrop-blur-sm z-0"></div>

  {/* 🎈 Balloons */}
  {Array.from({ length: 12 }).map((_, i) => generateBalloon(i))}

  {/* 📦 Content Wrapper */}
  <div className="z-10 flex flex-col items-center">
    {/* 📦 Feature Boxes Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-x-16 sm:gap-y-14 mb-12">
      {/* Box 1 - Tickets */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={`${imagePath}/wedding.jpeg`}
            alt="Tickets"
            className="w-full h-full object-content"
          />
        </motion.div>

      {/* Box 2 - Events */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl"
      >
        <img
          src= {`${imagePath}/noretakes.jpeg`}
          alt="Events"
          className="w-full h-full object-content"
        />
      </motion.div>
    </div>

    {/* 🚀 Start Button (Below Boxes) */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
    >
      <Link to="/Options">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.8)",
            rotate: [0, 2, -2, 2, 0],
          }}
          transition={{ duration: 0.4 }}
          className="relative px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-extrabold text-lg tracking-wider shadow-xl overflow-hidden"
        >
          <span className="absolute inset-0 bg-white opacity-10 blur-md animate-pulse" />
          <span className="relative z-10 flex items-center gap-2">
            🚀 Let's Start
          </span>
        </motion.button>
      </Link>
    </motion.div>
  </div>
</div>


  );
};

export default LandingPage;
