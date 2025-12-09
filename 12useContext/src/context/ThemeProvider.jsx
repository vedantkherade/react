import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext';

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    function toggle(){
        setTheme(theme === "light" ? "dark" : "light");
    }
    
  return (
    <div>
      <ThemeContext.Provider value={{theme, toggle}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}
