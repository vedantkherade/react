import React from "react";

export default function CustomCard({ title, children }) {
  return (
    <div>
      <h2>Assignment 14 — children Prop + Condition (Custom Card)</h2>
      <h3>{title ? title : "No Title Provided"}</h3>
      <div>{children}</div>
    </div>
  );
}
