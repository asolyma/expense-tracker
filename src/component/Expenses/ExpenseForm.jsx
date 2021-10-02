import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = ({ onFormSubmit, OnCancel }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("2021-10-01");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit({ title, date: new Date(date), amount: `$ ${amount}` });
    resetForm();
  }
  function resetForm() {
    setAmount("");
    setDate("");
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="Date"
              min="2019-01-01"
              max="2022-01-01"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={OnCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
