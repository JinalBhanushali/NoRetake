import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate,Link } from "react-router-dom";
const UserForm = () => {
    
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    event: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Convert form data to worksheet
//     const worksheet = XLSX.utils.json_to_sheet([formData]);

//     // Create a new workbook and append the worksheet
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "EventData");

//     // Generate buffer and save
//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const data = new Blob([excelBuffer], { type: "application/octet-stream" });
//     saveAs(data, "EventData.xlsx");

//     alert("🎉 Excel file downloaded!");
//   };
const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("https://script.google.com/macros/s/AKfycbyjm1b_Dpzv_04Cy9PTG_KtHLJhV7LVVumK9BIHPRnOGBVOMbQKN3RhIpzqjV_ufBko/exec", {
            method: "POST",
            body: JSON.stringify({
                name: "John Doe",
                contact: "9876543210",
                event: "TechFest",
                date: "2025-08-01"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => console.log("Success:", data))
        .catch(err => console.error("Error:    ", err));
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              onClick={() => navigate(-1)}
              className="absolute top-6 left-6 bg-white text-purple-600 border-2 border-purple-300 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-purple-100 hover:border-purple-500 transition"
            >
              ⬅️ Back
        </motion.button>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl p-10 rounded-3xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700">🎫 Event Registration</h2>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Contact</label>
          <input
            type="text"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Event</label>
          <input
            type="text"
            name="event"
            required
            value={formData.event}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Date</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-purple-700 transition"
        >
          🚀 Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default UserForm;
