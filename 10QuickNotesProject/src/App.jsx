import { useState } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");

  // TODO: addQuote function
  function addQuote() {
    if (!quote) {
      setError("Please enter a quote");
      return;
    }
    setQuotes([...quotes, quote]);
    setQuote("");
    setError("");
  }
  // TODO: deleteQuote function
  function deleteQuote(index) {
    setQuotes(quotes.filter((quote, i) => i !== index));
  }

  return (
    <div id="app-container">
      <h1 id="title">MiniQuotes</h1>

      {/* Input Section */}
      <div id="input-section">
        <input
          id="quote-input"
          type="text"
          placeholder="Write a quote..."
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button id="add-btn" onClick={addQuote}>
          Add
        </button>
      </div>

      {/* Error Message */}
      <p id="error-msg">{error && <span>{error}</span>}</p>

      {/* Quotes List */}
      <div id="quotes-list">
        {/* TODO: show empty state */}
        {quotes.length === 0 && <p>No quotes added yet.</p>}
        {/* TODO: list of quotes */}
        {quotes.map((quote, index) => (
          <div className="quote-card" key={index}>
            <p className="quote-text">{quote}</p>
            <button className="delete-btn" onClick={() => deleteQuote(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
