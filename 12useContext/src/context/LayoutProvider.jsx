import React, { useState } from "react";
import LayoutContext from "./LayoutContext";

const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState("grid");

  const toggleLayout = () => {
    setLayout(prev => (prev === "grid" ? "list" : "grid"));
  };

  return (
    <LayoutContext.Provider value={{ layout, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
