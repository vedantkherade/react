import React, { useEffect, useState } from "react";

export default function PropsChange() {
  const [country, setCountry] = useState("India");

  return (
    <div>
      <h2> Assignment 14 — Props Change → UseEffect Trigger</h2>
      <label htmlFor="">Select Country:</label>
      <select
        name=""
        id=""
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select>

        <Child country={country}/>
    </div>
  );
}

function Child({country}){
    useEffect(() => {
        console.log("Fetching data for", country);
    },[country])

    return <p>Country seleted : {country}</p>
}