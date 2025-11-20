import React, { useState } from 'react'

const LightDarkTheme = () => {
  const [isDark, setIsDark] = useState(false)
  
  function toggleTheme(){
    setIsDark(prev => !prev);
  }

  const styles = {
    padding: 20,
    minHeight: "100vh",
    backgroundColor: isDark ? "#111" : "#f5f5f5",
    color: isDark ? "#fff" : "#000"
  };

  return (
    <div style={styles}>
      <h2>Assignment 9 — Light/Dark Theme</h2>
      <p>Current Mode: {isDark ? "Dark" : "Light"}</p>
      <button onClick={toggleTheme}>{isDark ? "Switch to Light" : "Switch to Dark"}</button>

      
    </div>
  )
}

export default LightDarkTheme
