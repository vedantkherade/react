import React from "react";

export default function User({ info }) {
  return (
    <div>
      <h2>Assignment 7 — Pass an object as a prop</h2>
      <p>
        Name: {info.name} Age: {info.age} Email: {info.email}
      </p>
    </div>
  );
}
