import { useRef, useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {

  const countRef = useRef(0);
  const [countState, setCountState] = useState(0);

  const inpRef = useRef(null);
  const targetSection = useRef(null);
  const videoRef = useRef(null);

  console.log("component rendered");

  function handleClickRef(){
    countRef.current = countRef.current + 1;
    console.log(countRef);
    console.log("Count Ref:", countRef.current);
  }

  function handleClickState(){
    setCountState(prev => prev + 1);
    console.log("Count State:", countState);
  }

  // function handleFocus(){
  //   inpRef.current.focus();
  // }

  useEffect(() => {
    inpRef.current.focus();
  }, [])
  
  function scrollToSection(){
    targetSection.current.scrollIntoView();
  }
 
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const lastClickTime = useRef(null);

  const visitCount = useRef(0);
  const startTime = useRef(null);

  renderCount.current++;

  function handleClick(){
    setCount(count + 1);
    lastClickTime.current = new Date().toLocaleTimeString();
    console.log("Last Click Time:", lastClickTime.current);
  }
 
  console.log("Rendered Count:",renderCount.current);

  useEffect(() => {
     visitCount.current++;
     startTime.current = Date.now();

     console.log("Page Visited");

     return() => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime.current) / 1000);

      console.log("Visit Count:", visitCount.current);
      console.log("Time Spent:",timeSpent, "sec");
     }
  
  }, [])

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h1>useRef</h1>
        <button onClick={handleClickRef}>Increment Ref</button>
        <button onClick={handleClickState}>Increment State</button>

        <input ref={inpRef} type="text" placeholder="Type Something..." />
        <br />
        <button>Focus Input</button>
        <br />

        <button onClick={scrollToSection}>Scroll to Section</button>
        <div style={{ height: "1000px" }}></div>
        <div
          ref={targetSection}
          style={{ height: "300px", background: "green" }}
        >
          Target Section
        </div>

        <video
          ref={videoRef}
          width="300"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <br />

        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>

        <h1>Assignment 1</h1>
        <button onClick={handleClick}>Click Me</button>
        <h2>Total Clicks {count}</h2>

        <h1>Assignment 2</h1>
        <h2>Welcome</h2>
      </div>
    </div>
  );
}

export default App;