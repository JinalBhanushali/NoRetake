
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import FormA from './components/FormA';
import FormB  from './components/FormB';
import FormC  from './components/FormC';
import FormD  from './components/FormD';
import FormE  from './components/FormE';
import UserForm from './components/UserForm'
import OptionPage from './components/OptionPage'; 
import React, { useEffect, useRef } from "react";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt autoplay after user interaction
    const tryPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener("click", tryPlay);
    };
    document.addEventListener("click", tryPlay);
  }, []);
  return (
      <>
       <audio
        ref={audioRef}
        src={`${process.env.REACT_APP_API_URL}/sounds/bg.mp3`}
        loop
        autoPlay
        volume="0.3"
        style={{ display: "none" }}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/options" element={<OptionPage />} />
        <Route path="/personality" element={<FormA />} />
        <Route path="/event" element={<FormB />} />
        <Route path="/guide" element={<FormC />} />
        <Route path="/gopro" element={<FormD />} />
        <Route path="/contact" element={<FormE />} />
        <Route path="/UserForm" element={<UserForm />} />
      </Routes>
    </>
  );
}

export default App;
