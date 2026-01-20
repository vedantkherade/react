import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'
import ThemeProvider from './context/ThemeProvider'
import Hom from './components/Hom'

function App() {
  
  return (
    <>
      <Parent/>
      <ThemeProvider>
        <Hom/>
      </ThemeProvider>
    </>
  )
}

export default App
