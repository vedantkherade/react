import { useMemo, useState } from "react";
import "./App.css";

function slowCalculation(num) {
  console.log("Slow calculation running...");
  let total = 0;

  for (let i = 0; i < 1_000_000_000; i++) {
    total += num;
  }

  return total;
}
// ------------------------------------------------

const users = Array.from({length: 10000}, (_, i) => ({
  id: i,
  name: `User ${i}`,
}))

function App() {
  const [count, setCount] = useState(0);
  // const [dark, setDark] = useState(false);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const [showInfo, setShowInfo] = useState(false);
  const sales = [120, 340, 560, 220];

  // let result = slowCalculation(count);
  let result = useMemo(() => {
    return slowCalculation(count);
  }, [count]);

  // const filteredUsers = users.filter(user => 
  //   user.name.toLowerCase().includes(search.toLowerCase())
  // );

  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search])

  const themeStyles = {
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  function expensiveValidation(username){
    console.log("expensive validation running....");

    let isValid = true;
    for(let i=0; i < 100_000_000; i++){
      if(username.length < 5){
        isValid = false;
      }
    }
     return isValid ? "Valid Username" : "Invalid Username";
  }


   const validationResult = useMemo(() => {
    return expensiveValidation(username);
  }, [username]);

   function generateReport(data) {
	  console.log("Generating report...");
	  let total = 0;
	  for (let i = 0; i < 400000000; i++) {}
		data.forEach(d => total += d);
	  return total;
}

//  const reportTotal = generateReport(sales);

const reportTotal = useMemo(() => {
  return generateReport(sales);
}, [sales])

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h1>useMemo</h1>
        <div style={themeStyles}>
          <h3>{result}</h3>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search user"
        />

        <button onClick={() => setDark(!dark)}>Toggle Theme</button>

        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

        <h2>Assisgnment 1</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>{validationResult}</p>
        <button onClick={() => setShowHelp((prev) => !prev)}>
          Toggle Help Text
        </button>
        {showHelp && <p> Username must be at least 5 characters long.</p>}

        <h2>Assisgnment 2</h2>
        <h2>Total Sales: {reportTotal}</h2>

        <button onClick={() => setShowInfo(!showInfo)}>Toggle Info</button>

        {showInfo && <p>Quarterly sales summary</p>}
      </div>
    </div>
  );
}

export default App;
