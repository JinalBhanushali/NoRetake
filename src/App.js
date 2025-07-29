
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

function App() {
  return (
    //  <Router>
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
    // </Router>
  );
}

export default App;
