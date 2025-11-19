import { useState } from "react";

function DoubleTriple() {

  const [num, setnum] = useState(1);
  const doublenum = () => setnum(num * 2);
  const Triplenum = () => setnum(num * 3);

  return (
    <>
      <h2>Assignment 2 - Double/Triple Number</h2>
      <p>Number : {num}</p>
      <button onClick={doublenum}>Double</button>
      <button onClick={Triplenum}>Triple</button>
      
    </>
  );
}

export default DoubleTriple;
