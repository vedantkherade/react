import React, {useEffect, useState } from "react";

export default function SearchUsers() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if(!query) return;
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <ul>
        {result.map((u) => (
          <li key={u.id}>
            {u.name} {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
