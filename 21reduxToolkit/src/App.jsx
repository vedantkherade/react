import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'

function App() {
 

  return (
    <>
    <div>
      <CakeContainer />
      <IceCreamContainer/>
    </div>
  
    </>
  )
}

export default App
