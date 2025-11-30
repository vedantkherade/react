import React, { useEffect, useState } from "react";

export default function FetchSearchInput() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (query.length < 3) {
      setResult([]);
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, [query]);

  return (
    <div>
      <h2>Assignment 12 — Fetch on Search Input (with Conditional Effect)</h2>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {query.length < 3 ? (
        <p>Please type at least 3 characters!</p>
      ) : (
        <ul>
          {result.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
