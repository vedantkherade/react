import React, { useEffect, useState } from 'react'

export default function FiveCharEffect() {
    const [text, seText] = useState("");

    useEffect(() => {
     if(text.length > 5){
        console.log("Long Text!")
     }
    },[text])
  return (
    <div>
      <h2>Assignment 9 — Run effect when user types more than 5 characters</h2>
       <input type="text" 
       value={text}
       placeholder='Type here'
       onChange={(e) => seText(e.target.value)}/>
    </div>
  )
}
