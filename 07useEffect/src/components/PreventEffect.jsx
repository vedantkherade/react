import React, { useEffect, useState } from "react";

export default function PreventEffect() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text !== "") {
      console.log("Input value:", text);
    }
  }, [text]);

  return (
    <div>
      <h2>Assignment 8 — Prevent effect from running when input is empty</h2>

      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
