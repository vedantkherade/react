import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Operators from './components/Operators'

function App() {


  return (
    <div className="app-shell">
      <div className="assignment-card">
       <Operators/>
      </div>
    </div>
  )
}

export default App
