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

const users = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
}));

function App() {
  const [count, setCount] = useState(0);
  // const [dark, setDark] = useState(false);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const [showInfo, setShowInfo] = useState(false);
  const sales = [120, 340, 560, 220];

  const marks = [77, 85, 68, 56, 91];
  const [showDetails, setShowDetails] = useState(false);

 const products = [
  { id: 1, name: "MacBook Pro" },
  { id: 2, name: "iPhone 15" },
  { id: 3, name: "AirPods Pro" },
  { id: 4, name: "Apple Watch" },
  { id: 5, name: "iPad Air" },
  { id: 6, name: "Dell XPS" },
  { id: 7, name: "Samsung Galaxy" },
  { id: 8, name: "Sony Headphones" },
];

const [searchText, setSearchText] = useState("");
const [previewMode, setPreviewMode] = useState(false);

const LOG_TEXT = `
INFO App started
WARN Disk usage high
INFO User logged in
ERROR Database connection failed
INFO Retrying connection
WARN Memory usage high
ERROR Timeout while fetching data
INFO Operation successful
`;

const [logText, setLogText] = useState(LOG_TEXT);
const [showTips, setShowTips] = useState(false);

  // let result = slowCalculation(count);
  let result = useMemo(() => {
    return slowCalculation(count);
  }, [count]);

  // const filteredUsers = users.filter(user =>
  //   user.name.toLowerCase().includes(search.toLowerCase())
  // );

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const themeStyles = {
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  function expensiveValidation(username) {
    console.log("expensive validation running....");

    let isValid = true;
    for (let i = 0; i < 100_000_000; i++) {
      if (username.length < 5) {
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
    data.forEach((d) => (total += d));
    return total;
  }

  //  const reportTotal = generateReport(sales);

  const reportTotal = useMemo(() => {
    return generateReport(sales);
  }, [sales]);

  const avgScore = useMemo(() => {
    console.log("calculating average score...");

    let total = 0;
    for (let i = 0; i < marks.length; i++) {
      total += marks[i];
    }
    return (total / marks.length).toFixed(2);
  }, [marks]);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText])


    const logStats = useMemo(() => {
    console.log("Parsing logs...");

    let errorCount = 0;
    let warnCount = 0;

    for (let i = 0; i < 50_000_000; i++) {}

    const lines = logText.split("\n");

    lines.forEach((line) => {
      if (line.includes("ERROR")) errorCount++;
      if (line.includes("WARN")) warnCount++;
    });

    return { errorCount, warnCount };
  }, [logText]);

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

        <h1>Assisgnment 1</h1>
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

        <h1>Assisgnment 2</h1>
        <h2>Total Sales: {reportTotal}</h2>

        <button onClick={() => setShowInfo(!showInfo)}>Toggle Info</button>

        {showInfo && <p>Quarterly sales summary</p>}

        <h1>Assignment 3</h1>
        <p>Avg Score: {avgScore}</p>

        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <ul>
            {marks.map((mark, index) => (
              <li key={index}>
                Student {index + 1}: {mark}
              </li>
            ))}
          </ul>
        )}

        <h1>Assignment 3</h1>

        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="search name..."
        />

        <button onClick={() => setPreviewMode((prev) => !prev)}>
          Toggle Preview Mode: {previewMode ? "ON" : "OFF"}
        </button>

        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>

        <h1>Assignment 4</h1>
        <textarea
          rows={8}
          value={logText}
          onChange={(e) => setLogText(e.target.value)}
        />

        <p>Errors: {logStats.errorCount}</p>
        <p>Warnings: {logStats.warnCount}</p>

        <button onClick={() => setShowTips((prev) => !prev)}>
          Toggle Tips
        </button>

        {showTips && (
          <p>Tip: Reduce WARN and ERROR logs for better performance.</p>
        )}
      </div>
    </div>
  );
}

export default App;
