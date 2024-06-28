import logo from './logo.svg';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./Home";
import { About } from "./About";
import { Photo } from "./Photo";
import { Contact } from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="nav-container">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/photo" className="nav-link">Photo</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
