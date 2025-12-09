import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { user, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");

function handleLogin(){
    if(username.trim() === "") return;
    login(username);
    setUsername("");
}

if(user){
    return;
}

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
