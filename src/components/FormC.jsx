import React,{ useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FormC = () => {
  const navigate = useNavigate();
  const [activeEvent, setActiveEvent] = useState(null);
  const events = [
    {
      title: "🎉 Birthdays",
      details: [
        ["Theme? Go All-In!","Pick 1 vibe (dino disco, fairy forest, mini chef)"],
        ["Keep It Playful!","Puppet shows, craft corners, bubble races"],
        ["Snacks, But Make It Cute:","Fruit cups, mini sliders, smoothie shots"],
      ],
    },
    {
      title: "👶 Baby Shower",
      details: [
        ["Mood: Cozy & Classy","Terracotta, sage, warm lighting (no pastels)"],
        ["Make Memories:","Keep It Playful!","Polaroid wall, “Dear Baby” notes, cute games"],
        ["Chill Vibes Only:","Snacks, But Make It Cute:","Lo-fi tunes, soft chats, candle-lit calm"],
      ],
    },
    {
      title: "💑 Anniversary",
      details: [
        ["Skip the Stage, Tell a Story:","Mini video, photo lane, or audio QR codes"],
        ["Custom Couple Entry:","Couple entry: slow dance or scooter ride"],
        ["Romantic Feels:","Warm lights, music, and scent diffusers"],
      ],
    },
    {
      title: "💍 Wedding",
      details: [
        ["Aesthetic = Elevated Earthy","Rust, olive, ivory — no glitter, just glow"],
        ["Tech it Up:","QR invites, guest groups, moodboard polls"],
        ["Guest Love Zones:","Chai bars, foot spas, live sketch artists"],
      ],
    },
  ];

  return (
     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-10 flex flex-wrap justify-center gap-10 items-center relative">
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
     <div className="flex flex-col items-center gap-12">
  {/* Top 2 boxes */}
  <div className="flex gap-x-24">
    <motion.div
      whileHover={{ scale: 1.08, rotate: 1 }}
      onClick={() => setActiveEvent(events[0])}
      className="w-80 h-52 rounded-3xl bg-gradient-to-br from-yellow-100 to-orange-200 shadow-lg hover:shadow-yellow-400 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center px-4"
    >
      <h3 className="text-xl font-bold text-orange-700">{events[0]?.title}</h3>
      <p className="text-sm text-gray-700 mt-2">{events[0]?.shortDesc || "Click to explore!"}</p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.08, rotate: -1 }}
      onClick={() => setActiveEvent(events[1])}
      className="w-80 h-52 rounded-3xl bg-gradient-to-br from-pink-100 to-red-200 shadow-lg hover:shadow-pink-400 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center px-4"
    >
      <h3 className="text-xl font-bold text-pink-700">{events[1]?.title}</h3>
      <p className="text-sm text-gray-700 mt-2">{events[1]?.shortDesc || "Tap to discover!"}</p>
    </motion.div>
  </div>

  {/* Center Unique Box */}
  <div>
    {events[4] && (
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() => setActiveEvent(events[4])}
        className="w-72 h-44 bg-gradient-to-br from-purple-600 to-indigo-500 text-white rounded-full shadow-xl hover:shadow-indigo-400 transition-all duration-300 flex flex-col items-center justify-center text-center px-4"
      >
        <h3 className="text-xl font-semibold">{events[4].title}</h3>
        <p className="text-sm mt-1 italic opacity-90">{events[4].shortDesc || "Connect with us!"}</p>
      </motion.div>
    )}
  </div>

  {/* Bottom 2 boxes */}
  <div className="flex gap-x-24">
    <motion.div
      whileHover={{ scale: 1.08, rotate: 1 }}
      onClick={() => setActiveEvent(events[2])}
      className="w-80 h-52 rounded-3xl bg-gradient-to-br from-teal-100 to-green-200 shadow-lg hover:shadow-green-400 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center px-4"
    >
      <h3 className="text-xl font-bold text-green-700">{events[2]?.title}</h3>
      <p className="text-sm text-gray-700 mt-2">{events[2]?.shortDesc || "Explore more!"}</p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.08, rotate: -1 }}
      onClick={() => setActiveEvent(events[3])}
      className="w-80 h-52 rounded-3xl bg-gradient-to-br from-blue-100 to-sky-200 shadow-lg hover:shadow-blue-400 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center px-4"
    >
      <h3 className="text-xl font-bold text-blue-700">{events[3]?.title}</h3>
      <p className="text-sm text-gray-700 mt-2">{events[3]?.shortDesc || "Click to explore!"}</p>
    </motion.div>
  </div>
</div>





      {/* Modal */}
      {activeEvent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm px-4"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg p-6 md:p-8">
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-5 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="text-center mb-4">
              {/* <div className="text-3xl mb-2">🎉</div> */}
              <h2 className="text-xl font-bold text-purple-700">{activeEvent.title}</h2>
            </div>

            <hr className="my-4 border-t border-gray-200" />

            <div className="text-sm text-gray-700 space-y-3 max-h-72 overflow-y-auto px-1">
              {activeEvent.details.map((item, i) => (
                <div
                  key={i}
                  className="p-3 bg-purple-50 rounded-lg shadow-sm border border-purple-100"
                >
                  {item[0]} <br></br>{item[1]}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setActiveEvent(null)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm shadow-md transition"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default FormC;
