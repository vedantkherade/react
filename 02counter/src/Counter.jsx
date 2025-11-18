import { useState } from "react";

function Counter(){
     const [count, setCount] = useState(0);
      const [name, setName] = useState("Guest");
      const [show, setShow] = useState(false);
      const [text, setText] = useState("");
    
      const addValue = () => {
        setCount(count + 1);
      };
    
      const removeValue = () => {
        if (count == 0) return;
        setCount(count - 1);
      };
    
      return (
        <>
          <h1>Count: {count}</h1>
          <button onClick={addValue}>Increase</button>
          <button onClick={removeValue}>Decrease</button>
          
    
          <p>{name}</p>
          <button onClick={() => setName("Vedant")}>Change name</button>
          <br />
          <br />
    
          <input type={show ? "text" : "password"} />
          <button onClick={() => setShow(!show)}>{show ? "Hide" : "show"}</button>
          <br />
          <br />
    
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <p>You typed : {text}</p>
        </>
      )
}

export default Counter;