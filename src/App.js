
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import FormA from './components/FormA';
import FormB  from './components/FormB';
import UserForm from './components/UserForm'

function App() {
  return (
    //  <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/FormA" element={<FormA />} />
        <Route path="/FormB" element={<FormB />} />
        <Route path="/UserForm" element={<UserForm />} />
      </Routes>
    // </Router>
  );
}

export default App;
