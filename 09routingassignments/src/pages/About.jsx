import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="team">Team</Link>
        <Link to="company">Company</Link>
      </nav>

      <hr />

      {/* Children will render here */}
      <Outlet />
    </div>
  );
}
