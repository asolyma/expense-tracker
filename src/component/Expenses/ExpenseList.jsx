import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
export default function ExpenseList({ renderFilter, filter }) {
  if (renderFilter(filter).length === 0) {
    return (
      <h2 className="expenses-list__fallback"> No expenses Found &#128591;</h2>
    );
  }
  return (
    <ul className="expenses-list">
      {renderFilter(filter).map((expense) => {
        return <ExpenseItem key={expense.id} expenseItem={expense} />;
      })}
    </ul>
  );
}
