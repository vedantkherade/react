import { useState } from "react";

export default function ExpenseTracker() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense(e) {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const numAmount = Number(amount);

    if (!trimmedTitle || !numAmount || numAmount <= 0) return;

    const newExpense = {
      id: Date.now(),
      title: trimmedTitle,
      amount: numAmount,
    };

    setExpenses(prev => [...prev, newExpense]);
    setTitle("");
    setAmount("");
  }

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div>
      <h2>Assignment 10: Expense Tracker</h2>

      <form onSubmit={addExpense}>
        <input
          placeholder="Expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>

      <h3>Expenses</h3>
      {expenses.length === 0 && <p>No expenses added yet.</p>}

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp.id}>
              <td>{exp.title}</td>
              <td>{exp.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
