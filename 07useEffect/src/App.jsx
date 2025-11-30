import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import SearchUsers from "./components/SearchUsers";
import UpdateCount from "./components/UpdateCount";
import Twoeffects from "./components/Twoeffects";
import Counteven from "./components/Counteven";
import MutipleDependencies from "./components/MutipleDependencies";
import PreventEffect from "./components/PreventEffect";
import BackgroundEffect from "./components/BackgroundEffect";
import FiveCharEffect from "./components/FiveCharEffect";
import AutoCounter from "./components/AutoCounter";
import PropsChange from "./components/PropsChange";
import SelectEffect from "./components/SelectEffect";
import AgeSalaryEffect from "./components/AgeSalaryEffect";
import FetchSearchInput from "./components/FetchSearchInput";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("effect called!");
  }, [count]);

 useEffect(() => {
  console.log("Rendered!");
 },[])

  useEffect(() => {
  console.log("App Loaded");
 })

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <button onClick={() => setCount(count + 1)}> Count: {count}</button>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>

        <h2>Users</h2>
        <Users/>

        <SearchUsers/><br /><br />

         <h2>Assignment 1 — Log “Component Rendered” on every render</h2>
        
         <h1>Hello</h1>

         <h2>Assignment 2 — Log message only on first render</h2>
         <h1>Hello</h1>

         <UpdateCount/>
         <Twoeffects/>
         <Counteven/>
         <MutipleDependencies/>
         <PreventEffect/>
         <BackgroundEffect/>
         <FiveCharEffect/>
         <SelectEffect/>
         <AgeSalaryEffect/>
         <FetchSearchInput/>
         <AutoCounter/>
         <PropsChange/>
      </div>
    </div>
  );
}

export default App;
