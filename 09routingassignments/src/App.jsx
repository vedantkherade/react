import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import MovieDetails from "./components/MovieDetails";
import Team from "./pages/Team";
import Company from "./pages/Company";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Billing from "./pages/Billing";

function App() {
  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          Assignment 1 — Basic React Router Setup (3 Pages)
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
          <nav>
            <Link to="/movies">Movies</Link>
          </nav>
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
          {/* nested routing */}
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Parent Route */}
            <Route path="/about" element={<About />}>
              {/* Child Routes */}
              <Route path="team" element={<Team />} />
              <Route path="company" element={<Company />} />
            </Route>
          </Routes>

          
          <Routes>
            {/* ✅ DASHBOARD WITH NESTED ROUTES */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="settings" element={<Settings />} />
              <Route path="billing" element={<Billing />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
