import React from "react";
import { Link, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Vedant" },
  { id: 2, name: "Akash" },
  { id: 3, name: "Sourabh" },
];
export default function Home() {

  let navigate = useNavigate();

  function goToDashboard(){
    navigate("/about");
  }

  return (
    <div>
      <h2>Home Page!</h2>

      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}

      <button onClick={goToDashboard}>Login</button>
    </div>
  );
}
