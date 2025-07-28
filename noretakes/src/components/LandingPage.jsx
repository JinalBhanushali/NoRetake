// import React from "react";
// import { motion } from "framer-motion";

// const LandingPage = () => {
//   return (
//     // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 p-6">
//     // <div className="min-h-screen bg-blue-50 flex items-center justify-center">
// /* <div className="min-h-screen bg-white flex items-center justify-center border-t border-gray-200"> */
// /* <div className="min-h-screen bg-yellow-50 flex items-center justify-center"> */

//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-300 p-6 flex items-center justify-center relative overflow-hidden">
//       {/* 🎈 Animated Balloons */}
//       {["top-10 left-10", "top-20 right-10", "bottom-10 left-20", "bottom-20 right-20"].map((pos, i) => (
//         <motion.div
//           key={i}
//           initial={{ y: 100 }}
//           animate={{ y: -100 }}
//           transition={{
//             repeat: Infinity,
//             duration: 6 + i,
//             ease: "easeInOut",
//           }}
//           className={`absolute w-6 h-8 rounded-full bg-pink-300 opacity-70 ${pos}`}
//         ></motion.div>
//       ))}

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white p-10 rounded-3xl shadow-2xl max-w-xl w-full text-center relative z-10"
//       >
//         <h1 className="text-4xl font-extrabold text-purple-700 mb-3 tracking-tight">
//           🎉 FunFest 2025
//         </h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Celebrate creativity, colors, and connection with live shows, games & surprises!
//         </p>

//         <div className="flex justify-center gap-4">
//           <motion.button
//             whileHover={{ scale: 1.07 }}
//             className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-500 transition-all"
//           >
//             🎟️ Grab Tickets
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.07 }}
//             className="bg-gray-200 text-yellow-800 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-50 transition"
//           >
//             📅 Activities
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>

//     )
// };

// export default LandingPage;
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
  return (
<div
  className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-6 flex items-center justify-center relative overflow-hidden"
//   className="min-h-screen p-8 flex items-center justify-center relative overflow-hidden bg-cover bg-center"
//   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')" }}
>
  {/* Overlay to darken background for readability */}
  <div className="absolute inset-0 bg-purple-100/60 backdrop-blur-sm z-0"></div>

  {/* 🎈 Flying Balloons */}
  {Array.from({ length: 12 }).map((_, i) => generateBalloon(i))}

  {/* 📦 4 Creative Feature Boxes */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-x-16 sm:gap-y-14 z-10">
  {/* Box 1 - Get Tickets */}
  <Link to="/FormA">
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 w-80 h-60 text-center flex flex-col items-center"
    >
        <img
        src="https://cdn-icons-png.flaticon.com/512/5971/5971864.png"
        alt="Tickets"
        className="w-16 h-16 mb-4"
        />
        <h2 className="text-2xl font-bold text-purple-700 mb-2">🎟️ Get Tickets</h2>
        <p className="text-base text-gray-600">Secure your spot and join the fun!</p>
    </motion.div>
  </Link>
  {/* Box 2 - Explore Events */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 w-80 h-60 text-center flex flex-col items-center"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
      alt="Events"
      className="w-16 h-16 mb-4"
    />
    <h2 className="text-2xl font-bold text-pink-600 mb-2">📅 Explore Events</h2>
    <p className="text-base text-gray-600">Discover exciting activities and games.</p>
  </motion.div>

  {/* Box 3 - Guest Speakers */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7, duration: 0.8 }}
    className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 w-80 h-60 text-center flex flex-col items-center"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="Speakers"
      className="w-16 h-16 mb-4"
    />
    <h2 className="text-2xl font-bold text-blue-600 mb-2">🎤 Guest Speakers</h2>
    <p className="text-base text-gray-600">Meet inspiring personalities on stage.</p>
  </motion.div>

  {/* Box 4 - Game Zone */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9, duration: 0.8 }}
    className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 w-80 h-60 text-center flex flex-col items-center"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
      alt="Games"
      className="w-16 h-16 mb-4"
    />
    <h2 className="text-2xl font-bold text-green-600 mb-2">🎮 Game Zone</h2>
    <p className="text-base text-gray-600">Play & compete in fun games and challenges.</p>
  </motion.div>
</div>

</div>




  );
};

export default LandingPage;
