import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Child from "./components/Child";
import Toolbar from "./components/Toolbar";
import UserCard from "./components/UserCard";
import ReportPanel from "./components/ReportPanel";

function App() {

const [count, setCount] = useState(0);

let files = [10, 30, 20, 90, 60, 50];
const [showGuidelines, setShowGuidelines] = useState(false);

const messages = [
  "How are you?",
  "ANN: Tommorrow is holiday",
  "Hello team",
  "Is this feature ready?",
  "ANN: Meeting at 5 PM",
];

const [compact, setCompact] = useState(false);

const [darkMode, setDarkMode] = useState(false);


  const handleSave = useCallback(() => {
    console.log("Save clicked");
  }, []);

   const handleExport = useCallback(() => {
    console.log("Export clicked");
  }, []);

  const handlePrint = useCallback(() => {
    console.log("Print clicked");
  }, []);


// const handleClick = () => {
//   console.log("Hello");
// }

const handleClick = useCallback(() => {
  console.log("Hello");
})


  const userData = useMemo(() => {
    return {
      name: "Vedant",
      age: 22,
    };
  }, []);


  const [users] = useState([
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: true },
  ]);

  const summary = useMemo(() => {
    console.log("Calculating summary");

    return {
      totalUsers: users.length,
      activeUsers: users.filter((u) => u.active).length,
    };
  }, [users]);

  const handleRefresh = useCallback(() => {
    console.log("Refresh clicked");
  }, []);


const {totalSize, largestFile} = useMemo(() => {
  console.log("calculating file stats....");

  const total = files.reduce((sum, size) => sum + size, 0);
  const max = Math.max(...files);

  return{
    totalSize: total,
    largestFile: max,
  }
}, [files])

const categorized = useMemo(() => {
  const questions = [];
  const announcements = [];
  const general = []

  messages.forEach((msg) => {
     if(msg.includes("?")){
      questions.push(msg);
     }else if(msg.startsWith("ANN")){
      announcements.push(msg);
     }else{
      general.push(msg);
     }
  })

  return {
    questions, announcements, general
  }
}, [messages])

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h1>useCallback</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <Child onClick={handleClick} />

        <h1>Assignment 1 - File Size Statistics</h1>
        <h3>Total Size: {totalSize} MB</h3>
        <h3>Largest File: {largestFile} MB</h3>

        <button onClick={() => setShowGuidelines((prev) => !prev)}>
          Toggle File Guidelines
        </button>

        {showGuidelines && <p>Recommened file size is upto 500 MB</p>}

        <h1>Assignment 2 - Message Categorizer</h1>

        <button onClick={() => setCompact(!compact)}>
          Toggle Compact View
        </button>

        <h3>Questions</h3>
        {categorized.questions.map((m, i) => (
          <p key={i}>{m}</p>
        ))}

        <h3>Announcements</h3>
        {categorized.announcements.map((m, i) => (
          <p key={i}>{m}</p>
        ))}

        {!compact && (
          <>
            <h3>General</h3>
            {categorized.general.map((m, i) => (
              <p key={i}>{m}</p>
            ))}
          </>
        )}

        <h1>Assignment 3 - Memoized Toolbar with Action Buttons </h1>

        <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>

        <p>Dark mode: {darkMode ? "ON" : "OFF"}</p>

        <Toolbar
          onSave={handleSave}
          onExport={handleExport}
          onPrint={handlePrint}
        />

        <h1>Assignment 4 - Memoized User Card with Object Props</h1>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>

        <p>Dark mode: {darkMode ? "ON" : "OFF"}</p>

        <UserCard user={userData} />

        <h1>
          Assignment 5 - Combined Case (useMemo + useCallback + React.memo)
        </h1>

        <h2>Report Dashboard</h2>

        <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>

        <p>Dark mode: {darkMode ? "ON" : "OFF"}</p>

        <ReportPanel summary={summary} onRefresh={handleRefresh} />
      </div>
    </div>
  );
}

export default App;