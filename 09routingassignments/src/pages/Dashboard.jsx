import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
        <Link to="billing">Billing</Link>
      </nav>

      <hr />

      {/* Children will render here */}
      <Outlet />
    </div>
  )
}
