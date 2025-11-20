import React, { useState } from 'react'

const RandomNumberList = () => {
    const [numbers, setnumbers] = useState([])

    function addrandomnum(){
       const randomNum = Math.floor(Math.random() * 100) + 1;
       setnumbers(prev => [...prev, randomNum]);
    };
  return (
    <>
      <h2>Assignment 13 — Add a Random Number</h2>
      <button onClick={addrandomnum}>Add Random Number</button>
      <ul>
        {numbers.map((num, index) => (
            <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  )
}

export default RandomNumberList
