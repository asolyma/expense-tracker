import "./Expenses.css";
import Card from "../Card";
import ExpenseFilter from "./Expensefilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import Chart from "../chart/Chart";
export default function Expenses({ expenses }) {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  function renderFilteredList(f) {
    return expenses.filter((e) => {
      return e.date.toLocaleDateString("en-US", { year: "numeric" }) === f;
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Chart data={renderFilteredList(filteredYear)} />

      <ExpenseList renderFilter={renderFilteredList} filter={filteredYear} />
    </Card>
  );
}
