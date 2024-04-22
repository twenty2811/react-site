import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Profile from "./routes/Profile";
import Home from "./routes/Home";
import Navbar from './Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" elment={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
