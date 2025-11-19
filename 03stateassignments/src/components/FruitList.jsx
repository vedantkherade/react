import React, { useState } from "react";

const FruitList = () => {
  const [fruits, setfruits] = useState([]);
  const [input, setInput] = useState("");

  function addfruit() {
    let trimmed = input.trim();
    setfruits((prev) => [...prev, trimmed]);
    setInput("");
  }

  function removefruit() {
    setfruits((prev) => prev.slice(0, -1));
  }

  return (
    <>
      <h2>Assignment 7 — Fruits List (Add + Remove)</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter Fruit Name"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addfruit}>Add Fruit</button>
      <button onClick={removefruit} disabled={fruits.length == 0}>Remove Last Fruit</button>

      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </>
  );
};

export default FruitList;
