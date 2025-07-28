import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

const questions = [
  {
    question: "1. Decor Style",
    options: [
      { label: "Florals 🌸", value: "Glamorous" },
      { label: "Balloon 🎈", value: "Filmy" },
      { label: "Minimal 🕯", value: "Minimalistic" },
      { label: "Quirky 🎭", value: "Experimental" },
    ],
  },
  {
    question: "2. Cake Choice",
    options: [
      { label: "Classic 🍰", value: "Minimalistic" },
      { label: "Designer 👑", value: "Glamorous" },
      { label: "Funky 🎨", value: "Experimental" },
      { label: "Theme 🎂", value: "Filmy" },
    ],
  },
  {
    question: "3. Entertainment",
    options: [
      { label: "Games 🎯", value: "Experimental" },
      { label: "Live Music 🎤", value: "Glamorous" },
      { label: "DJ 💃", value: "Filmy" },
      { label: "None ☕", value: "Minimalistic" },
    ],
  },
  {
    question: "4. Entry Style",
    options: [
      { label: "Flower Shower 🌼", value: "Minimalistic" },
      { label: "Spotlight ✨", value: "Glamorous" },
      { label: "Dance 🕺", value: "Filmy" },
      { label: "Surprise 🎁", value: "Experimental" },
    ],
  },
  {
    question: "5. Colour Palette",
    options: [
      { label: "Pastels 🎨", value: "Glamorous" },
      { label: "Brights 🌈", value: "Filmy" },
      { label: "Neutrals 🤍", value: "Minimalistic" },
      { label: "Mismatch 🔶🔷", value: "Experimental" },
    ],
  },
  {
    question: "6. Venue Vibe",
    options: [
      { label: "Home 🏠", value: "Minimalistic" },
      { label: "Banquet 🏛", value: "Glamorous" },
      { label: "Lawn 🌿", value: "Filmy" },
      { label: "Studio 🧪", value: "Experimental" },
    ],
  },
];

const personalities = {
  Minimalistic: "🕯 You love elegance in simplicity. Less is more, and meaningful details speak louder than extravagance.",
  Experimental: "🎭 Unconventional is your middle name! You love to break the mold and surprise your guests with something fresh.",
  Glamorous: "👑 You’re all about wow-factor, luxe finishes, and Insta-worthy moments. A grand celebration is your signature.",
  Filmy: "🎬 You bring the drama, energy, and entertainment to any event. Your celebrations are straight out of a Bollywood script!",
};



const FormA = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showFormPopup, setShowFormPopup] = useState(false);

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFormPopup(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-300 p-6 flex items-center justify-center relative">
  
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

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full text-center">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{questions[currentQuestion].question}</h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 mt-6">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button key={index} whileHover={{ scale: 1.08 }} className={`w-56 h-28 bg-white rounded-xl shadow-lg text-lg font-semibold text-gray-700 transition-all duration-200 flex items-center justify-center text-center p-3 mx-4 ${answers[currentQuestion] === option.value ? "border-4 border-purple-400" : "hover:shadow-none"}`} onClick={() => handleAnswer(option.value)}>
                  {option.label}
                </motion.button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={handlePrevious} disabled={currentQuestion === 0} className="bg-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-400 disabled:opacity-50">
                ⬅️ Previous
              </button>
              <button onClick={handleNext} disabled={!answers[currentQuestion]} className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50">
                {currentQuestion === questions.length - 1 ? "Finish" : "Next ➡️"}
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4">🪪 Your Personality Type</h2>
            <p className="text-xl text-purple-700 font-semibold">{result}</p>
            <p className="mt-4 text-gray-600">{personalities[result]}</p>
          </div>
        )}
      </motion.div>

      {showFormPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl">
            <button onClick={() => setShowFormPopup(false)} className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl font-bold">✕</button>
            <UserForm onClose={() => {
              const counts = {
                Glamorous: 0,
                Filmy: 0,
                Minimalistic: 0,
                Experimental: 0,
              };
              Object.values(answers).forEach((val) => {
                counts[val]++;
              });
              const maxType = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
              setResult(maxType);
              setShowFormPopup(false);
            }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormA;
