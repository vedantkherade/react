import React, { useEffect, useState } from "react";

export default function SelectEffect() {
      const [selected, setSelected] = useState("");

      useEffect(() => {
          if(selected !== ""){
            console.log(`Selected : ${selected}`);
          }
      },[selected])

  return (
    <div>
      <h2>Assignment 10 — Effect runs when the selected option changes</h2>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="">-- Select Option --</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
      </select>
    </div>
  );
}
