import React, { useState } from 'react'
import { LanguageContext } from './LanguageContext';

export default function LanguageProvider({ children }) {

    const [language, setLanguage] = useState("en");

    function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  }

  return (

      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
      </LanguageContext.Provider>
 
  )
}
