import React, { useEffect, useState } from 'react'

export default function Child() {
    const [userName, setUserName] = useState({firstName: "", lastName: ""});
    const [items, setItems] = useState([]);

    const [count, setCount] = useState(0);

    const [timer, setTimer] = useState(0);
    const [startTimer, setStartTimer] = useState(false);


    function addItem(){
        const newItem = {
            id: items.length + 1,
            value: Math.floor(Math.random() * 10) + 1
        }
    
    setItems(prev => [...prev, newItem])
    console.log(items);
    }


    // useEffect(() => {
    //     console.log("hello");
    // })

    useEffect(() => {
        if(!startTimer) return;
    
        let timer =setInterval(() => {
            setTimer(t => t + 1)
        }, 1000);

        return() => clearInterval(timer);
    }, [startTimer])

  return (
    <div>
        <h1>Child</h1>
      <input
        type="text"
        value={userName.firstName}
        placeholder="enter first name"
        onChange={(e) => {
          setUserName({ ...userName, firstName: e.target.value });
        }}
      />

      <input
        type="text"
        value={userName.lastName}
        placeholder="enter last name"
        onChange={(e) => {
          setUserName({ ...userName, lastName: e.target.value });
        }}
      />

      <h1>First Name: {userName.firstName}</h1> 
      <h1>Last Name: {userName.lastName}  </h1>

      <br /><br /><hr />


      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
            <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <br /><br /><hr />

      <button onClick={() => setStartTimer(prev =>!prev)}>Start</button> 
      
      <h1>{timer}</h1>
    </div>
  );
}
