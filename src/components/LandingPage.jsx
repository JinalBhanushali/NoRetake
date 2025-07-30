import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { Link,useLocation } from "react-router-dom";

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
    case "bg-pink-400":
      return "#f472b6";
    case "bg-blue-400":
      return "#60a5fa";
    case "bg-yellow-300":
      return "#fde68a";
    case "bg-green-300":
      return "#86efac";
    case "bg-red-400":
      return "#f87171";
    case "bg-purple-400":
      return "#c084fc";
    default:
      return "#999";
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
      <div
        className={`w-full ${color} rounded-full relative`}
        style={{
          height: `${size * 1.3}px`,
          borderRadius: "50% 50% 45% 45%",
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        }}
      >
        <div className="absolute top-3 left-3 w-3 h-5 bg-white opacity-40 rounded-full rotate-12"></div>
        <div
          className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: `10px solid ${getTailwindColor(color)}`,
          }}
        ></div>
      </div>
      <div className="w-0.5 h-16 bg-gray-500 mt-1 opacity-100"></div>
    </motion.div>
  );
};

const LandingPage = () => {
  const imagePath = process.env.REACT_APP_IMAGE_PATH || "/images";
 useEffect(() => {
    const clickSound = new Audio(`${process.env.REACT_APP_API_URL}/sounds/click.mp3`);

    const handleClick = (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (tag === "button" || e.target.closest("button")) {
        // Play from start every time
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {}); // avoid uncaught promise
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="min-h-screen pt-16 pb-12 px-6 bg-gradient-to-br from-purple-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
      {/* 🎈 Balloons */}
      {Array.from({ length: 100 }).map((_, i) => generateBalloon(i))}

      {/* 💫 Blur Overlay */}
      <div className="absolute inset-0 bg-purple-100/60 backdrop-blur-sm z-0"></div>

      {/* 💎 Content */}
      <div className="z-10 flex flex-col items-center max-w-6xl w-full mx-auto">
        <div className="mb-10 text-center">
  <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-2">🎉 The Big Bash 2025</h1>
  <p className="text-lg sm:text-xl text-gray-600 font-medium">Celebrate Moments, Create Memories</p>
</div>

        {/* 🖼️ Grid Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-x-16 sm:gap-y-14 mb-16">
          {/* Box 1 */}
          {/* Box 1 */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="relative w-[500px] h-[280px] rounded-3xl overflow-hidden shadow-2xl"
>
  <img
    src={`${imagePath}/wedding.jpeg`}
    alt="Wedding"
    className="w-full h-full object-container"
  />
</motion.div>

{/* Box 2 */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="relative w-[500px] h-[280px] rounded-3xl overflow-hidden shadow-2xl"
>
  <img
    src={`${imagePath}/noretakes.jpeg`}
    alt="NoRetakes"
    className="w-full h-full object-container"
  />
</motion.div>

        </div>

        {/* 🚀 Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/options">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.8)",
                rotate: [0, 2, -2, 2, 0],
              }}
              transition={{ duration: 0.25 }}
              className="relative px-12 py-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-extrabold text-2xl tracking-wider shadow-xl overflow-hidden"
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
