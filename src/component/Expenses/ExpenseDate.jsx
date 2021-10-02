import "./ExpenseDate.css";
export default function ExpenseDate({ date }) {
  const value = {
    day: date.toLocaleString("en-US", { day: "2-digit" }),
    month: date.toLocaleString("en-US", { month: "long" }),
    year: date.toLocaleString("en-US", { year: "numeric" })
  };
  return (
    <div className="expense-date">
      <div className="expense-date__month">{value.month}</div>
      <div className="expense-date__day">{value.day}</div>
      <div className="expense-date__year">{value.year}</div>
    </div>
  );
}
