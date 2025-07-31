import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import toast from 'react-hot-toast';

const UserForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // clear error
  };

  const validate = () => {
    const newErrors = {};
    if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact number must be 10 digits only";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await addDoc(collection(db, "users"), formData);
      toast.success("Thanks for the information!");
    } catch (err) {
      toast.error("Data is not stored");
      console.error("Error saving data:", err);
    }  finally{
        onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">
        🎫 Register to See Result
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl"
      />

      <div>
        <input
          type="text"
          name="contact"
          placeholder="Contact No."
          required
          value={formData.contact}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-xl ${
            errors.contact ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.contact && (
          <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
        )}
      </div>

      <input
        type="text"
        name="location"
        placeholder="Location"
        required
        value={formData.location}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl"
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        required
        value={formData.age}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        type="submit"
        className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
      >
        🚀 Submit
      </motion.button>
    </form>
  );
};

export default UserForm;
