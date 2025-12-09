import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          <ThemeProvider>
            <Home />
          </ThemeProvider>

          <AuthProvider>
            <Navbar />
            <Login />
            <Dashboard />
          </AuthProvider>
        </div>
      </div>
    </>
  );
}

export default App;
