import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import Confetti from "react-confetti";


const questions = [
  {
    question: "Planning your event means...",
    options: [
      { label: "Googling 'party ideas' at 1 a.m.", points: 1 },
      { label: "Texting a friend: 'What should I do?'", points: 0 },
      { label: "Pinterest boards, Excel sheets, and vendor calls.", points: 3 },
    ],
  },
  {
    question: "How do you feel about handling 8 vendors in one day?",
    options: [
      { label: "Wait—eight vendors?", points: 0 },
      { label: "Love the coordination challenge!", points: 3 },
      { label: "I'll try, but I might cry.", points: 1 },
    ],
  },
  {
    question: "What’s your plan if your decorator bails a day before the event?",
    options: [
      { label: "I’ll ask Instagram for help.", points: 1 },
      { label: "Cancel the event, obviously.", points: 0 },
      { label: "I’ll have backups on speed dial.", points: 3 },
    ],
  },
  {
    question: "What’s your event budgeting style?",
    options: [
      { label: "I think I have a rough idea.", points: 1 },
      { label: "We’ll just figure it out later.", points: 0 },
      { label: "Every rupee accounted for in a spreadsheet.", points: 3 },
    ],
  },
  {
    question: "How early do you lock down your venue?",
    options: [
      { label: "3–6 months before.", points: 3 },
      { label: "Wait, we need a venue?", points: 0 },
      { label: "When I remember.", points: 1 },
    ],
  },
  {
    question: "How do you usually invite people?",
    options: [
      { label: "I'll just call whoever I remember.", points: 0 },
      { label: "Custom invites with RSVP tracking.", points: 3 },
      { label: "WhatsApp forwards and maybe a Google form.", points: 1 },
    ],
  },
  {
    question: "On event day, your role is…",
    options: [
      { label: "Behind the scenes, making it all run like magic.", points: 3 },
      { label: "Screaming, crying, and asking for wine.", points: 0 },
      { label: "Serving food, guiding guests, and sweating through it all.", points: 1 },
    ],
  },
  {
    question: "You love events that are…",
    options: [
      { label: "Seamless and stylish.", points: 3 },
      { label: "Fun but chaotic.", points: 1 },
      { label: "Over as soon as possible.", points: 0 },
    ],
  },
];

const FormD = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });


  const handleAnswer = (points) => {
    const updated = [...answers];
    updated[current] = points;
    setAnswers(updated);

  };

  const handleNext = () => {
    setScore(score + answers[current]);
    console.log(" score " + score + " ans" + answers)
    //calculateScore();
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowForm(true);
    }
  };

  const handlePrevious = () => {
    //console.log(answers.reduce((a, b) => a + (b || 0), 0))
    setScore(score - answers[current - 1]);
    if (current > 0) setCurrent(current - 1);
    //calculateScore();
  };

  // const calculateScore = () => {
  //   const total = answers.reduce((a, b) => a + (b || 0), 0);
  //   setScore(total);
  // };

  useEffect(() => {
    if (score !== null) {
      if (score >= 20) {
        setResult("🧠 The Closet Planner");
      } else if (score >= 10) {
        setResult("🤹 The Struggler");
      } else {
        setResult("🧨 The Chaos Magnet");
      }
    }
  }, [score]);
  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    setShowForm(false);
  };
  const formClose = () => {
    setScore(score - answers[current]);
    setShowForm(false);
    setFormSubmitted(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex flex-col items-center justify-center p-4 relative">
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

      {/* Header outside box */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-5">
          🧪 Take this 2-minute reality check before you DIY your big day!
        </h2>
        <p className="text-xl text-gray-600 text-center mb-4">
          ✅ Pick the option that sounds most like you !
        </p>
      </div>


      <div className="flex flex-col items-center gap-6 max-w-xl w-full">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full">
          {!formSubmitted ? (
            <div>
              <h2 className="text-xl font-semibold text-purple-700 text-center mb-4">
                {questions[current].question}
              </h2>
              <div className="flex flex-col gap-3 mb-6">
                {questions[current].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt.points)}
                    className={`py-2 px-4 rounded shadow font-medium text-purple-800 ${answers[current] === opt.points
                        ? "bg-purple-300"
                        : "bg-purple-100 hover:bg-purple-200"
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={current === 0}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
                >
                  ⬅️ Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={answers[current] === null}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                  {current === questions.length - 1 ? "Finish" : "Next ➡️"}
                </button>
              </div>
            </div>
          ) : formSubmitted ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <Confetti
                width={windowDimension.width}
                height={windowDimension.height}
                numberOfPieces={300}
                recycle={false}
                gravity={0.3}
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative"
              >
                <button
                  onClick={() => navigate('/options')}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                >
                  ×
                </button>
                <h3 className="text-2xl font-bold mb-2 text-purple-700">Your Result: </h3>
                <p className="text-xl mb-4">{result}</p>
                <p className="text-gray-600">
                  {score >= 20 &&
                    "You’ve got the brain of a planner—even if you don’t do it professionally. Hire someone to execute your vision perfectly!"}
                  {score >= 10 && score < 20 &&
                    "You try your best, but the details wear you down. You need a planner so you can actually enjoy your own event."}
                  {score < 10 &&
                    "You're the vibe—not the execution. Please, for everyone’s sake (including yours), hire a planner."}
                </p>

              </motion.div>
            </div>

          ) : null}
        </div>
      </div>

      {/* Modal for UserForm */}
      {showForm && !formSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative"
          >
            <button
              onClick={formClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-purple-700 text-center">🎉 One Last Step</h3>
            <UserForm onClose={handleFormSubmit} />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FormD;



