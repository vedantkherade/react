import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Dashboard() {
    const {user} = useContext(AuthContext);

  return (
    <div>
      {user ? (<p>Welcome to dashboard, {user.name}!</p>) : (<h2>Please login to view dashboard.</h2>)}
    </div>
  )
}
