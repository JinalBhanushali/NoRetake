import React, { useState } from "react";
import { motion } from "framer-motion";
import UserForm from "./UserForm";
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
const [formVisible, setFormVisible] = useState(false);
const [poppedIndexes, setPoppedIndexes] = useState([]);
const [formSubmitted, setFormSubmitted] = useState(false); // ← This line was missing
const [formTriggerIndex, setFormTriggerIndex] = useState(null);


 const handleBalloonClick = (index) => {
  if (!formSubmitted) {
    setFormTriggerIndex(index); // store the index of the balloon that opened form
    setFormVisible(true);
  } else {
    // if form already submitted, blast any other unpopped balloons
    if (!poppedIndexes.includes(index)) {
      setPoppedIndexes([...poppedIndexes, index]);
    }
  }
};


const handleFormClose = () => {
  setFormVisible(false);
  setFormSubmitted(true);

  if (formTriggerIndex !== null && !poppedIndexes.includes(formTriggerIndex)) {
    setPoppedIndexes((prev) => [...prev, formTriggerIndex]);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex items-center justify-center overflow-hidden relative">
      {/* Home Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 2 }}
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
      >
        🏠 Home
      </motion.button>

      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: -2 }}
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
      >
        ⬅️ Back
      </motion.button>

      {/* Titles */}
      <h2 className="absolute top-24 w-full text-center text-3xl font-bold text-purple-700 z-10">
        Bust the Myths! 🎈
      </h2>
      <h2 className="absolute top-36 w-full text-center text-xl font-medium text-purple-800 z-10">
        Click a balloon to know the truth!
      </h2>

      {/* Balloons */}
      {myths.map((myth, index) => {
        const color = colors[index % colors.length];
        const size = 125;
        const delay = index * 0.7;
        const isPopped = poppedIndexes.includes(index);

        return (
          <motion.div
            key={index}
            initial={{ y: 0, opacity: 1 }}
            animate={
              isPopped
                ? { scale: 1, opacity: 1 }
                : { y: [0, -30, 0], opacity: 1 }
            }
            transition={{
              repeat: isPopped ? 0 : Infinity,
              repeatType: "loop",
              duration: 6,
              delay,
              ease: "easeInOut",
            }}
            className="absolute flex flex-col items-center cursor-pointer"
            style={{
              left: `${(index + 1) * 8.7}%`,
              bottom: "25%", // ← adjusted spacing here
              width: `${size}px`,
            }}
            onClick={() => handleBalloonClick(index)}
          >
           {!isPopped ? (
              <div
                className={`w-full ${color} rounded-full relative flex items-center justify-center px-2 text-center`}
                style={{
                  height: `${size * 1.3}px`,
                  borderRadius: "50% 50% 45% 45%",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                }}
              >
                {/* Shine effect */}
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

                {/* Myth Text */}
                <span className="text-white text-[18px] font-medium leading-tight text-center px-2 z-10">
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

            <div className="w-0.5 h-16 bg-gray-500 mt-1 opacity-100"></div>
          </motion.div>
        );
      })}

      {/* Form Modal */}
      {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setFormVisible(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl font-bold"
            >
              ✕
            </button>
            <UserForm onClose={handleFormClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormB;
