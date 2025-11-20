import React, { useState } from "react";

const FontSizeSlider = () => {
  const [size, setSize] = useState(16);
  return (
    <>
      <h2>Assignment 12 — Font Size Slider (Dynamic Text Size)</h2>
      <p style={{fontSize: `${size}px`}}>Live Preview Text (size: {size}px)</p>

      <input
        type="range"
        min={10}
        max={48}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
    </>
  );
};

export default FontSizeSlider;
