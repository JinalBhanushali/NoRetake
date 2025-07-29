import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate,Link } from "react-router-dom";
import { db } from "../firebase"; // correct relative path from /components
import { collection, addDoc } from "firebase/firestore";
import toast from 'react-hot-toast';
const UserForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // await fetch("https://script.google.com/macros/s/AKfycbyjm1b_Dpzv_04Cy9PTG_KtHLJhV7LVVumK9BIHPRnOGBVOMbQKN3RhIpzqjV_ufBko/exec", {
  //     //   method: "POST",
  //     //   body: JSON.stringify(formData),
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     // });
  //     onClose();
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), formData);  
      //alert("Data saved!");
      toast.success("Thanks for the information!");
      onClose()
    } catch (err) {
      console.error("Error saving data:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">🎫 Register to See Result</h2>
      <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      <input type="text" name="contact" placeholder="Contact No." required value={formData.contact} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      <input type="text" name="location" placeholder="Location" required value={formData.location} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      <input type="number" name="age" placeholder="Age" required value={formData.age} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      <motion.button whileHover={{ scale: 1.05 }} type="submit" className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">🚀 Submit</motion.button>
    </form>
  );
};
export default UserForm;
