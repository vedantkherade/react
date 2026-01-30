import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './components/cakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer'
import BuyCombo from './components/BuyCombo'
import Users from './components/Users'


function App() {
  

  return (

      <div>
        <Provider store = {store}>
             <CakeContainer />
             <IceCreamContainer/>
             <BuyCombo/>
             <Users/>
        </Provider>
        
      </div>

  )
}

export default App
