import ExpensForm from "./ExpenseForm";
import { useState } from "react";
import { v4 } from "uuid";
import "./NewExpense.css";
export default function NewExpense({ onAddNewExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  const getFormInput = (userInput) => {
    onAddNewExpense({ ...userInput, id: v4() });
  };
  function startEditing() {
    setIsEditing(!isEditing);
  }
  function handleCancel() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add new Item</button>}
      {isEditing && (
        <ExpensForm onFormSubmit={getFormInput} OnCancel={handleCancel} />
      )}
    </div>
  );
}
