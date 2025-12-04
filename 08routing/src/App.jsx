import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import Product from './pages/Product'
import UserDetails from './components/UserDetails'
import PostDetails from './components/PostDetails'

function App() {


  return (
    <>
      <div className="app-shell">
      <div className="assignment-card">
       <h1>Routing</h1>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

          <Route path='/Product/:id' element={<Product/>}/>
       </Routes>


       <Routes>
         <Route path='/users/:userid' element={<UserDetails/>}/>
         <Route path='/posts/:postId' element={<PostDetails/>}/>
       </Routes>
        
      </div>
    </div>
      
    </>
  )
}

export default App
