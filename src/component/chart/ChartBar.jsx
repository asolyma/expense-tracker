import "./ChartBar.css";
export default function ChartBar({ label, value, maxValue }) {
  let barHeight;
  if (!value) {
    barHeight = "0%";
  } else {
    barHeight = (value / maxValue) * 100 + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label"> {label}</div>
    </div>
  );
}
