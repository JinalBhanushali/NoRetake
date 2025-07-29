import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

const myths = [
  { myth: "Too expensive.", truth: "Planners save you more — fewer mistakes, better deals." },
  { myth: "Pinterest is enough.", truth: "Pinterest doesn’t handle vendors or chaos — we do." },
  { myth: "Only for weddings.", truth: "Birthdays, showers, housewarmings — we do it all." },
  { myth: "I’ll lose control.", truth: "It’s your vision, we just bring it to life." },
  { myth: "My decorator / venue team will manage.", truth: "They do their part — we handle everything else." },
  { myth: "It’s a small event.", truth: "Small doesn’t mean stress-free — structure matters." },
  { myth: "I’m just busy — that’s why I’d hire one.", truth: "It’s for anyone who wants peace of mind." },
  { myth: "My fam can handle it.", truth: "Let them be guests, not your crew." },
  { myth: "It’s all about decor.", truth: "Behind the pretty — timelines, vendors, backups." },
  { myth: "Planners take over everything.", truth: "You decide. We execute. You enjoy." },
];

const FormB = () => {
  const navigate = useNavigate();
  const [poppedIndexes, setPoppedIndexes] = useState([]);

  const handleBalloonClick = (index) => {
    if (!poppedIndexes.includes(index)) {
      setPoppedIndexes([...poppedIndexes, index]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex flex-col items-center justify-center text-center px-4 relative overflow-x-hidden">
      {/* Navigation Buttons */}
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

      {/* Titles */}
      <div className="">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
          Bust the Myths! 🎈
        </h2>
        <h2 className="text-md sm:text-xl font-medium text-purple-800 mt-2">
          Click a balloon to know the truth!
        </h2>
      </div>

      {/* Balloon Grid */}
      <div className="mt-20 flex flex-col items-center gap-12 px-4">
        {[0, 1].map((row) => (
          <div key={row} className="flex flex-wrap justify-center gap-12">
            {myths.slice(row * 5, row * 5 + 5).map((myth, index) => {
              const actualIndex = row * 5 + index;
              const color = colors[actualIndex % colors.length];
              const size = 120;
              const isPopped = poppedIndexes.includes(actualIndex);

              return (
                <motion.div
                  key={actualIndex}
                  initial={{ y: 0, opacity: 1 }}
                  animate={isPopped ? { scale: 1 } : { y: [0, -30, 0] }}
                  transition={{
                    repeat: isPopped ? 0 : Infinity,
                    repeatType: "loop",
                    duration: 6,
                    delay: actualIndex * 0.5,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center cursor-pointer"
                  style={{ width: `${size}px` }}
                  onClick={() => handleBalloonClick(actualIndex)}
                >
                  {!isPopped ? (
                    <div
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
                          borderTop: `10px solid ${getTailwindColor(color)}`,
                        }}
                      ></div>
                      <span className="text-white text-sm sm:text-base font-semibold leading-tight text-center px-2 z-10">
                        {myth.myth}
                      </span>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white text-sm text-purple-700 p-3 rounded-xl shadow-md text-center max-w-[150px]"
                    >
                      ✅ {myth.truth}
                    </motion.div>
                  )}
                  <div className="w-0.5 h-12 bg-gray-500 mt-1 opacity-100"></div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormB;
