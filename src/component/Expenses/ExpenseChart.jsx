import ChartBar from "../chart/ChartBar";
const ExpenseChart = ({ data }) => {
  const months = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  data.forEach((e) => {
    months[e.date.getMonth()].value += e.amount;
  });
  const values = months.map((e) => e.value);

  return (
    <div className="chart">
      {months.map((month, index) => {
        return (
          <ChartBar
            key={month.label}
            label={month.label}
            value={month.value}
            maxValue={Math.max(...values)}
          />
        );
      })}
    </div>
  );
};

export default ExpenseChart;
