import { useState } from "react";
import "./App.css";
import Task1 from "./components/Task1";
import Parent from "./components/Parent";

export default function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Greeting name = "Vedant" age = {22}/>
        <UserCard name="Aayush" age={30} place="Pune" />
        <Active isActive={false} />
        <Numbers nums={[10, 20, 30, 40]} />
        <User info={{name: "Jay", age: 26, place: "Pune"}} />

        <Button text="Login" color = "green"/>
        <Button text="Signup" color = "blue"/>
        <Button text="Logout" color = "red"/>

        <Product name = "iPhone 15" price="$799" availablity="In Stock" color="green"/>
        <Product name = "Headphones" price="$1699" availablity="Out of Stock" color="red"/>

        <UserProfile user={{
            name: "Aarav",
            age: 21,
            email: "aarav@mail.com",
            skills: ["HTML", "CSS", "React"]
          }} />
        <UserProfile user={{
            name: "Aarav",
            age: 21,
            email: "aarav@mail.com",
            skills: ["HTML", "CSS", "React"]
          }}/>

          <Counter/>
          <CounterVar/>
          <CountStep/>
          <CounterBound/>
          <Scoreboard/>
          <Parent/>
      </div>
    </div>
  )
}


function Greeting(props){
    return(
      <div>
        <h2>Hello {props.name} Age: {props.age}</h2>
      </div>
    )
}

function UserCard(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Place: {props.place}</p>
    </div>
  )
}


function Active(props) {
  return (
    <div>
      {props.isActive ? <h2>You are active</h2> : <h2>You are not active</h2>}
    </div>
  )
}


function Numbers(props) {
  return (
    <div>
      {props.nums.map((n, i) => (
        <li id={i}>{n}</li>
      ))}
    </div>
  )
}

function User(props) {
  return (
    <div>
      <p>{props.info.name}</p>
      <p>{props.info.age}</p>
      <p>{props.info.place}</p>
    </div>
  )
}


function Button({text, color}){
  return(
    <div>
      <button style={{backgroundColor: color, padding: "10px"}}>{text}</button>
    </div>
  )
}


function Product({name, price, availablity, color}){
  return(
     <div>
      <h1>Task 1</h1>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <h2 style={{color}}>{availablity}</h2>
     </div>
  )
}

function UserProfile({ user }) {
  return (
    <div>
       <h1>Task 2</h1>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <h3>Skills:</h3>
      <ul>
        {user.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}



function Counter(){
  const [num, setNum] = useState(0);

  function increase(){
    setNum(num + 1);
  }
  return(
    <div>
       <h1>Task 4</h1>
       <h1>{num}</h1>
    <button onClick={increase}>Increase</button>
    </div>
    
  )
}

function CounterVar(){
  const [num, setNum] = useState(0);

  function increase(){
    setNum(num + 1);
  }

 function decrease(){
  if(num == 0) return;
    setNum(num - 1);
  }  
  return(
    <div>
       <h1>Task 5</h1>
       <h1>{num}</h1>
    <button onClick={increase}>+1</button>
    <button onClick={decrease}>-1</button>
    </div>
    
  )
}


function CountStep() {
    let [count, setCount] = useState(0);
    let [step, setStep] = useState(1);

    function handleIncrease() {
        setCount(count + Number(step));
    }

    return (
        <div>
          <h1>Task - 6</h1>
        
            <input type="number" placeholder="Enter step value" value={step} onChange={(e) => setStep(e.target.value)} />

            <p>Count: {count}</p>

            <button onClick={handleIncrease}>Increase by step</button>
        </div>
    )
}


function CounterBound() {
  const [num, setNum] = useState(0);

  function increase() {
    setNum(num + 1);
  }

  function decrease() {
    setNum(num - 1);
  }
  return (
    <div>
      <h1>Task 7</h1>
      <h1>{num}</h1>
      <button onClick={increase} disabled={num >= 10}>
        +1
      </button>
      <button onClick={decrease} disabled={num <= 0}>
        -1
      </button>
      <button onClick={() => setNum(0)}>Reset</button>
    </div>
  );
}


function Scoreboard(){
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  function reset(){
    setScoreA(scoreA * 0);
    setScoreB(scoreB * 0);
  }

  return(
    <>
    <h1>Task - 8</h1>
     <h3>Team A: {scoreA}</h3>
     <h3>Team B: {scoreB}</h3>
    <button onClick={() => setScoreA(scoreA + 1)}>+1 Team A</button>
    <button onClick={() => setScoreB(scoreB + 1)}>+1 Team B</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

