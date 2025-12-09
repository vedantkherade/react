import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav>
      <h2>My App</h2>

      {user ? (
        <div>
          <h3>Welcome {user.name}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <span>Not Logged In</span>
      )}
    </nav>
  );
}
