import React, { useContext } from "react";
import FontContext from "../context/FontContext";
import LayoutContext from "../context/LayoutContext";

const SettingsPanel = () => {
  const { fontSize, increaseFont } = useContext(FontContext);
  const { layout, toggleLayout } = useContext(LayoutContext);

  return (
    <div>
      <h2>Application Settings</h2>

      <p>Font Size: {fontSize}px</p>
      <button onClick={increaseFont}>Increase Font</button>

      <p>Layout Mode: {layout}</p>
      <button onClick={toggleLayout}>Toggle Layout</button>
    </div>
  );
};

export default SettingsPanel;
