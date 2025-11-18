import { useState } from "react";

function Randomnum() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div>
      <h1>Random Number Generator</h1>
      <h2>{number !== null ? number : "Click the button!"}</h2>
      <button onClick={generateNumber}>Generate Number</button>
    </div>
  );
}

export default Randomnum;