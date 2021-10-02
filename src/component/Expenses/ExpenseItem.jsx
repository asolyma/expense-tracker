import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";
export default function ExpenseItem({ expenseItem }) {
  const [title, setTitle] = useState(expenseItem.title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItem.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expenseItem.amount}</div>
      </div>
    </Card>
  );
}
