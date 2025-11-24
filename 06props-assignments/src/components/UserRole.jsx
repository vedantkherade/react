import React from 'react'

export default function UserRole({name, role}) {
  return (
    <div>
      <h2>Assignment 13 — Conditional Rendering + Props (Show user role)</h2>
      <h3>Name: {name}</h3>
       <h3>
        ({role == "admin" ? "Admin Access" : "User Access"})
       </h3>
    </div>
  )
}
