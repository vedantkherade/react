import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';


// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Settings from "./pages/Settings";
// import Dashboard from "./pages/Dashboard";

// const Home = React.lazy(() => import("./pages/Home"));
// const Login = React.lazy(() => import("./pages/Login"));
// const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const Landing = React.lazy(() => import("./pages/Landing"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));


// const Dashboard = React.lazy(() => import("./Dashboard"));
// const Profile = React.lazy(() => import("./Profile"));

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      <h2>Welcome to my App</h2>

      {/* <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("profile")}>Profile</button> */}

      {/* <Suspense fallback={<h2>Loading...</h2>}>
        {page === "dashboard" && <Dashboard />}
        {page === "profile" && <Profile />}
      </Suspense>

      <Suspense fallback={<h2>Loading...</h2>}>
       <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/login' element = {<Login/>}/>
       </Routes>
      </Suspense> */}

       <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link>
      </nav>

       <Suspense fallback={<h2>Loading...</h2>}>
       <Routes>
        <Route path='/' element = {<Landing/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
       </Routes>
       
      </Suspense>
    </>
  );
}

export default App
