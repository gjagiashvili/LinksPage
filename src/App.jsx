import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Logo from "./assets/react.svg";

import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Router>
        <header className="header">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} className="logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile/:name" element={<Profile />} />
          <Route path="/Profile/" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
