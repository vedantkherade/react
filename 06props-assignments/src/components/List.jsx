import React from "react";

export default function List({ items, children }) {
  return (
    <div>
      <h2>Assignment 16 — Pass Array + children + Conditional Rendering</h2>
      {children}

      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
