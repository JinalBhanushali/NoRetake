import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const colors = [
  "bg-pink-400",
  "bg-yellow-300",
  "bg-blue-400",
  "bg-green-300",
  "bg-red-400",
  "bg-purple-400",
  "bg-orange-400",
  "bg-teal-300",
  "bg-indigo-400",
  "bg-lime-300",
];

const getTailwindColor = (className) => {
  switch (className) {
    case "bg-pink-400": return "#f472b6";
    case "bg-blue-400": return "#60a5fa";
    case "bg-yellow-300": return "#fde68a";
    case "bg-green-300": return "#86efac";
    case "bg-red-400": return "#f87171";
    case "bg-purple-400": return "#c084fc";
    case "bg-orange-400": return "#fb923c";
    case "bg-teal-300": return "#5eead4";
    case "bg-indigo-400": return "#818cf8";
    case "bg-lime-300": return "#bef264";
    default: return "#999";
  }
};

const myths = [
  { myth: "Too expensive.", truth: "Planners save you more — fewer mistakes, better deals.", top: 0, left: 12 },
  { myth: "Pinterest is enough.", truth: "Pinterest doesn’t handle vendors or chaos — we do.", top: 0, left: 50 },
  { myth: "Only for weddings.", truth: "Birthdays, showers, housewarmings — we do it all.", top: 55, left: 58 },
  { myth: "I’ll lose control.", truth: "It’s your vision, we just bring it to life.", top: 30, left: 70 },
  { myth: "My decorator / venue team will manage.", truth: "They do their part — we handle everything else.", top: 45, left: 5 },
  { myth: "It’s a small event.", truth: "Small doesn’t mean stress-free — structure matters.", top: 0, left: 80 },
  { myth: "I’m just busy — that’s why I’d hire one.", truth: "It’s for anyone who wants peace of mind.", top: 10, left: 30 },
  { myth: "My fam can handle it.", truth: "Let them be guests, not your crew.", top: 50, left: 87 },
  { myth: "It’s all about decor.", truth: "Behind the pretty — timelines, vendors, backups.", top: 45, left: 42 },
  { myth: "Planners take over everything.", truth: "You decide. We execute. You enjoy.", top: 58, left: 22 },
];

const popSound = new Audio(`${process.env.REACT_APP_API_URL}/sounds/balloonblast.mp3`);

const FormB = () => {
  const navigate = useNavigate();
  const [poppedIndexes, setPoppedIndexes] = useState([]);

  const handleBalloonClick = (index) => {
    if (!poppedIndexes.includes(index)) {
      popSound.currentTime = 0;
      popSound.play();
      setPoppedIndexes([...poppedIndexes, index]);
    }
  };

  useEffect(() => {
    const clickSound = new Audio(`${process.env.REACT_APP_API_URL}/sounds/click.mp3`);
    const handleClick = (e) => {
      if (e.target.tagName.toLowerCase() === "button" || e.target.closest("button")) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => { });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex flex-col items-center justify-center text-center px-4 relative overflow-x-hidden">
      <motion.button
        whileHover={{ scale: 1.05, rotate: 2 }}
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
      >
        🏠 Home
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, rotate: -2 }}
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
      >
        ⬅️ Back
      </motion.button>

      <div className="mt-7">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">Bust the Myths! 🎈</h2>
        <div className="text-md font-serif sm:text-xl font-medium text-purple-800 mt-2">
          Click a balloon to know the truth!
        </div>
      </div>

      <div className="mt-7 relative w-full h-[80vh]">
        {myths.map((myth, index) => {
          const color = colors[index % colors.length];
          const isPopped = poppedIndexes.includes(index);
          const balloonColor = getTailwindColor(color);
          const size = 120;
          const pos = { top: myth.top, left: myth.left };

          return (
            <div
              key={index}
              className="absolute cursor-pointer"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
                width: `${size}px`,
              }}
              onClick={() => handleBalloonClick(index)}
            >
              <AnimatePresence>
                {!isPopped ? (
                  <motion.div
  initial={{ y: 300, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ scale: 0, opacity: 0, rotate: 90 }}
  transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
  className={`w-full ${color} relative flex items-center justify-center px-2 text-center`}
  style={{
    height: `${size * 1.3}px`,
    borderRadius: "50% 50% 45% 45%",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
  }}
>

                    <div className="absolute top-3 left-3 w-3 h-5 bg-white opacity-40 rounded-full rotate-12"></div>
                    <div
                      className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-0"
                      style={{
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: `10px solid ${balloonColor}`,
                      }}
                    ></div>
                    <span className="text-white text-sm sm:text-base font-semibold leading-tight text-center px-2 z-10">
                      {myth.myth}
                    </span>
                    <svg
                      width="12"
                      height="80"
                      viewBox="0 0 12 80"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 z-0"
                    >
                      <path
                        d="M6 0 
                          C 12 10, 0 20, 6 30 
                          C 12 40, 0 50, 6 60 
                          C 12 70, 0 80, 6 90"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <div
                    className="relative w-full"
                    style={{
                      height: `${size * 1.3}px`,
                      borderRadius: "50% 50% 45% 45%",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.6, 0] }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-1/2 left-1/2 w-[80px] h-[80px] bg-white rounded-full blur-2xl z-10"
                      style={{ transform: "translate(-50%, -50%)" }}
                    />
                    {[...Array(10)].map((_, i) => {
                      const angle = (i * 360) / 10 + Math.random() * 15;
                      const distance = 50 + Math.random() * 20;
                      const x = distance * Math.cos((angle * Math.PI) / 180);
                      const y = distance * Math.sin((angle * Math.PI) / 180);
                      const rotate = Math.random() * 360;
                      const shardColor = ["bg-yellow-300", "bg-yellow-400", "bg-yellow-500"][i % 3];

                      return (
                        <motion.div
                          key={i}
                          initial={{ scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }}
                          animate={{ scale: 0.3, opacity: 0, x, y, rotate }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className={`absolute top-1/2 left-1/2 w-2.5 h-1 ${shardColor} rounded-sm shadow-md blur-[1px] z-20`}
                          style={{ transform: "translate(-50%, -50%)" }}
                        />
                      );
                    })}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="absolute top-0/2 left-0/2 transform -translate-x-1/2 -translate-y-1/2 
             bg-white text-purple-700 text-base sm:text-lg font-medium 
             p-4 sm:p-5 rounded-xl shadow-lg text-center w-[200px] z-30"
                    >
                      ✅ {myth.truth}
                    </motion.div>

                  </div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormB;
