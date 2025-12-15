import React, { useState } from "react";
import FontContext from "./FontContext";

const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(14);

  const increaseFont = () => {
    setFontSize(prev => prev + 2);
  };

  return (
    <FontContext.Provider value={{ fontSize, increaseFont }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontProvider;
