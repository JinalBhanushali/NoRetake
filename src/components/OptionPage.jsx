import React,{useEffect} from "react";
import { motion } from "framer-motion";
import { useNavigate, Link ,useLocation} from "react-router-dom";

const imagePath = process.env.REACT_APP_IMAGE_PATH || "/images";
const options = [
  {
    title: "Discover Your Party Personality",
    description: "Uncover your unique vibe and style.",
    icon: `${imagePath}/fun1.jpeg`,
    link: "/personality",
    color: "text-purple-700",
  },
  {
    title: "Burst Event Planning Myths",
    description: "Debunk the most common event myths.",
    icon: `${imagePath}/blast2.png`,
    link: "/event",
    color: "text-pink-600",
  },
  {
    title: "Go-To Guide for Effortless Events",
    description: "Plan events like a pro with our quick guide.",
    icon: `${imagePath}/book3.png`,
    link: "/guide",
    color: "text-blue-600",
  },
  {
    title: "Go Pro or Go Solo?",
    description: "Decide if you need an event planner.",
    icon: `${imagePath}/person4.jpeg`,
    link: "/gopro",
    color: "text-green-600",
  },
  {
    title: "Connect With Us",
    description: "Reach out for personalized event help and ideas!",
    icon: "https://static.thenounproject.com/png/handshake-icon-2059119-512.png",
    link: "/contact",
    color: "text-white",
  },
];

const OptionPage = () => {
  const navigate = useNavigate();
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
  const renderBox = (option, customStyle = "", isCenter = false) => (
    
    <Link to={option.link}>
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3 }}
        className={`${isCenter
            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white ring-2 ring-purple-300 border-4 border-white"
            : "bg-white text-gray-800"
          } shadow-xl rounded-2xl p-6 w-80 h-[13rem] text-center flex flex-col items-center justify-center transition-transform hover:shadow-md ${customStyle}`}
      >

        <img
          src={option.icon}
          alt={option.title}
          className="w-14 h-14 mb-3"
        />
        <h2
          className={`text-lg font-bold mb-2 ${isCenter ? "text-white" : option.color
            }`}
        >
          {option.title}
        </h2>
        <p className="text-sm">{option.description}</p>
      </motion.div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Back Button */}
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
        className="absolute top-6 left-6 z-20 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
      >
        ⬅️ Back
      </motion.button>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-purple-700 mb-4 z-10">
        Choose Your Path 🎯
      </h1>

      {/* Top Row */}
      <motion.button className="flex justify-between w-full max-w-5xl">
        {renderBox(options[0], "m-0")}
        {renderBox(options[1], "m-0")}
      </motion.button>

      {/* Center Box */}
      <motion.button className="flex justify-center w-full">
        {renderBox(options[4], "m-0", true)}
      </motion.button>

      {/* Bottom Row */}
      <motion.button className="flex justify-between w-full max-w-5xl">
        {renderBox(options[2], "m-0")}
        {renderBox(options[3], "m-0")}
      </motion.button>
    </div>
  );
};

export default OptionPage;
