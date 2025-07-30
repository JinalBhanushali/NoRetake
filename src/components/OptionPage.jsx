// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate, Link } from "react-router-dom";

// const options = [
//   {
//     title: "🎉 Discover Your Party Personality",
//     description: "Uncover your unique vibe and style.",
//     icon: "https://cdn-icons-png.flaticon.com/512/3829/3829186.png",
//     link: "/personality",
//     color: "text-purple-700",
//   },
//   {
//     title: "💥 Burst Event Planning Myths",
//     description: "Debunk the most common event myths.",
//     icon: "https://cdn-icons-png.flaticon.com/512/2345/2345337.png",
//     link: "/event",
//     color: "text-pink-600",
//   },
//   {
//     title: "📘 Go-To Guide for Effortless Events",
//     description: "Plan events like a pro with our quick guide.",
//    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     link: "/guide",
//     color: "text-blue-600",
//   },
//   {
//     title: "🧑‍💼 Go Pro or Go Solo?",
//     description: "Decide if you need an event planner.",
//     icon: "https://cdn-icons-png.flaticon.com/512/2936/2936885.png",
//     link: "/gopro",
//     color: "text-green-600",
//   },
//   {
//     title: "🤝 Connect With Us",
//     description: "Reach out for personalized event help and ideas!",
//     icon: "https://cdn-icons-png.flaticon.com/512/6460/6460615.png",
//     link: "/contact",
//     color: "text-indigo-600",
//   },
// ];

// const OptionPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-6 flex items-center justify-center relative overflow-hidden">
//       {/* Back Button */}
//       <motion.button
//         whileHover={{ scale: 1.05, rotate: -2 }}
//         onClick={() => navigate(-1)}
//         className="absolute top-6 left-6 z-20 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
//       >
//         ⬅️ Back
//       </motion.button>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-purple-100/60 backdrop-blur-sm z-0"></div>

//       {/* Boxes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
//         {options.map((option, index) => (
//           <Link to={option.link} key={index}>
//             <motion.div
//               whileHover={{ scale: 1.07 }}
//               transition={{ duration: 0.2 }}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 w-80 h-64 text-center flex flex-col items-center transition-transform hover:shadow-none`}
//             >
//               <img
//                 src={option.icon}
//                 alt={option.title}
//                 className="w-16 h-16 mb-4"
//               />
//               <h2 className={`text-xl font-bold mb-2 ${option.color}`}>
//                 {option.title}
//               </h2>
//               <p className="text-base text-gray-600">{option.description}</p>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OptionPage;


// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate, Link } from "react-router-dom";

// const options = [
//   {
//     title: "🎉 Discover Your Party Personality",
//     description: "Uncover your unique vibe and style.",
//     icon: "https://cdn-icons-png.flaticon.com/512/3829/3829186.png",
//     link: "/personality",
//     color: "text-purple-700",
//   },
//   {
//     title: "💥 Burst Event Planning Myths",
//     description: "Debunk the most common event myths.",
//     icon: "https://cdn-icons-png.flaticon.com/512/2345/2345337.png",
//     link: "/event",
//     color: "text-pink-600",
//   },
//   {
//     title: "📘 Go-To Guide for Effortless Events",
//     description: "Plan events like a pro with our quick guide.",
//     icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     link: "/guide",
//     color: "text-blue-600",
//   },
//   {
//     title: "🧑‍💼 Go Pro or Go Solo?",
//     description: "Decide if you need an event planner.",
//     icon: "https://cdn-icons-png.flaticon.com/512/2936/2936885.png",
//     link: "/gopro",
//     color: "text-green-600",
//   },
//   {
//     title: "🤝 Connect With Us",
//     description: "Reach out for personalized event help and ideas!",
//     icon: "https://cdn-icons-png.flaticon.com/512/6460/6460615.png",
//     link: "/contact",
//     color: "text-indigo-600",
//   },
// ];

// const OptionPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-6 flex items-center justify-center relative overflow-hidden">
//       {/* Back Button */}
//       <motion.button
//         whileHover={{ scale: 1.05, rotate: -2 }}
//         onClick={() => navigate(-1)}
//         className="absolute top-6 left-6 z-20 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
//       >
//         ⬅️ Back
//       </motion.button>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-purple-100/60 backdrop-blur-sm z-0"></div>

//       {/* Custom Layout */}
//       <div className="flex flex-col items-center gap-10 z-10">
//         {/* Row 1 */}
//         <div className="flex gap-10">
//           {options.slice(0, 2).map((option, index) => (
//             <Link to={option.link} key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.07 }}
//                 transition={{ duration: 0.2 }}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className={`bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 w-80 h-64 text-center flex flex-col items-center transition-transform hover:shadow-none`}
//               >
//                 <img src={option.icon} alt={option.title} className="w-16 h-16 mb-4" />
//                 <h2 className={`text-xl font-bold mb-2 ${option.color}`}>
//                   {option.title}
//                 </h2>
//                 <p className="text-base text-gray-600">{option.description}</p>
//               </motion.div>
//             </Link>
//           ))}
//         </div>

//         {/* Row 2 - Centered Box 5 */}
//         <div>
//           <Link to={options[4].link}>
//             <motion.div
//               whileHover={{ scale: 1.07 }}
//               transition={{ duration: 0.2 }}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 w-80 h-64 text-center flex flex-col items-center transition-transform hover:shadow-none`}
//             >
//               <img src={options[4].icon} alt={options[4].title} className="w-16 h-16 mb-4" />
//               <h2 className={`text-xl font-bold mb-2 ${options[4].color}`}>
//                 {options[4].title}
//               </h2>
//               <p className="text-base text-gray-600">{options[4].description}</p>
//             </motion.div>
//           </Link>
//         </div>

//         {/* Row 3 */}
//         <div className="flex gap-10">
//           {options.slice(2, 4).map((option, index) => (
//             <Link to={option.link} key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.07 }}
//                 transition={{ duration: 0.2 }}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className={`bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 w-80 h-64 text-center flex flex-col items-center transition-transform hover:shadow-none`}
//               >
//                 <img src={option.icon} alt={option.title} className="w-16 h-16 mb-4" />
//                 <h2 className={`text-xl font-bold mb-2 ${option.color}`}>
//                   {option.title}
//                 </h2>
//                 <p className="text-base text-gray-600">{option.description}</p>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OptionPage;

// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate, Link } from "react-router-dom";

// const options = [
//   {
//     title: "🎉 Discover Your Party Personality",
//     description: "Uncover your unique vibe and style.",
//     icon: "https://cdn-icons-png.flaticon.com/512/3829/3829186.png",
//     link: "/personality",
//     color: "text-purple-700",
//   },
//   {
//     title: "💥 Burst Event Planning Myths",
//     description: "Debunk the most common event myths.",
//     icon: "https://cdn-icons-png.flaticon.com/512/2345/2345337.png",
//     link: "/event",
//     color: "text-pink-600",
//   },
//   {
//     title: "📘 Go-To Guide for Effortless Events",
//     description: "Plan events like a pro with our quick guide.",
//     icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     link: "/guide",
//     color: "text-blue-600",
//   },
//   {
//     title: "🧑‍💼 Go Pro or Go Solo?",
//     description: "Decide if you need an event planner.",
//     icon: "https://cdn-icons-png.flaticon.com/512/2936/2936885.png",
//     link: "/gopro",
//     color: "text-green-600",
//   },
//   {
//     title: "🤝 Connect With Us",
//     description: "Reach out for personalized event help and ideas!",
//     icon: "https://cdn-icons-png.flaticon.com/512/6460/6460615.png",
//     link: "/contact",
//     color: "text-white",
//   },
// ];

// const OptionPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-6 flex flex-col items-center justify-center relative overflow-hidden">
//       {/* Back Button */}
//       <motion.button
//         whileHover={{ scale: 1.05, rotate: -2 }}
//         onClick={() => navigate(-1)}
//         className="absolute top-6 left-6 z-20 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
//       >
//         ⬅️ Back
//       </motion.button>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-purple-100/60 backdrop-blur-sm z-0"></div>

//       {/* Title */}
//       <h1 className="text-4xl font-extrabold text-purple-700 mb-12 z-10">Choose Your Path 🎯</h1>

//       {/* Grid for First 4 Boxes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 z-10">
//         {options.slice(0, 4).map((option, index) => (
//           <Link to={option.link} key={index}>
//             <motion.div
//               whileHover={{ scale: 1.07 }}
//               transition={{ duration: 0.2 }}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`bg-white bg-opacity-90 shadow-xl rounded-3xl p-8 w-80 h-64 text-center flex flex-col items-center transition-transform hover:shadow-lg`}
//             >
//               <img src={option.icon} alt={option.title} className="w-16 h-16 mb-4" />
//               <h2 className={`text-xl font-bold mb-2 ${option.color}`}>
//                 {option.title}
//               </h2>
//               <p className="text-base text-gray-600">{option.description}</p>
//             </motion.div>
//           </Link>
//         ))}
//       </div>

//       {/* Unique "Connect With Us" Box */}
//       <div className="mt-16 z-10">
//         <Link to={options[4].link}>
//           <motion.div
//             whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(147, 51, 234, 0.6)" }}
//             transition={{ duration: 0.3 }}
//             className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl rounded-3xl p-10 w-96 text-center flex flex-col items-center border-4 border-white ring-4 ring-purple-300"
//           >
//             <img
//               src={options[4].icon}
//               alt={options[4].title}
//               className="w-20 h-20 mb-4"
//             />
//             <h2 className="text-2xl font-extrabold mb-3">
//               {options[4].title}
//             </h2>
//             <p className="text-base text-white/90">{options[4].description}</p>
//           </motion.div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default OptionPage;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const options = [
  {
    title: "🎉 Discover Your Party Personality",
    description: "Uncover your unique vibe and style.",
    icon: "https://cdn-icons-png.flaticon.com/512/3829/3829186.png",
    link: "/personality",
    color: "text-purple-700",
  },
  {
    title: "💥 Burst Event Planning Myths",
    description: "Debunk the most common event myths.",
    icon: "https://cdn-icons-png.flaticon.com/512/2345/2345337.png",
    link: "/event",
    color: "text-pink-600",
  },
  {
    title: "📘 Go-To Guide for Effortless Events",
    description: "Plan events like a pro with our quick guide.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    link: "/guide",
    color: "text-blue-600",
  },
  {
    title: "🧑‍💼 Go Pro or Go Solo?",
    description: "Decide if you need an event planner.",
    icon: "https://cdn-icons-png.flaticon.com/512/2936/2936885.png",
    link: "/gopro",
    color: "text-green-600",
  },
  {
    title: "🤝 Connect With Us",
    description: "Reach out for personalized event help and ideas!",
    icon: "https://cdn-icons-png.flaticon.com/512/6460/6460615.png",
    link: "/contact",
    color: "text-white",
  },
];

const OptionPage = () => {
  const navigate = useNavigate();

  const renderBox = (option, customStyle = "", isCenter = false) => (
    <Link to={option.link}>
      <motion.div
  whileHover={{ scale: 1.08 }}
  transition={{ duration: 0.3 }}
  className={`${
    isCenter
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
          className={`text-lg font-bold mb-2 ${
            isCenter ? "text-white" : option.color
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
      <div className="flex justify-between w-full max-w-5xl">
        {renderBox(options[0], "m-0")}
        {renderBox(options[1], "m-0")}
      </div>

      {/* Center Box */}
      <div className="flex justify-center w-full">
        {renderBox(options[4], "m-0", true)}
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between w-full max-w-5xl">
        {renderBox(options[2], "m-0")}
        {renderBox(options[3], "m-0")}
      </div>
    </div>
  );
};

export default OptionPage;
