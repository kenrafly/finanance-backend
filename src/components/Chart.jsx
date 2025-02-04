import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useContext, useEffect, useState } from "react";
import { financialContext } from "../contexts/FinancialContext";

export default function Chart() {
  const { records } = useContext(financialContext);
  const [chartData, setChartData] = useState([]);

  const [filterType, setFilterType] = useState("month"); // "day", "month", "year"

  useEffect(() => {
    formatChartData(records, filterType);
  }, [records, filterType]); // Re-run when records or filterType changes

  const formatChartData = (records, filter) => {
    const groupedData = {};

    records.forEach((record) => {
      const date = new Date(record.date);
      let key = "";

      // Group data based on selected filter
      if (filter === "day") {
        key = date.toISOString().split("T")[0]; // YYYY-MM-DD
      } else if (filter === "month") {
        key = date.toLocaleString("default", { month: "short" }); // "Jan", "Feb", etc.
      } else if (filter === "year") {
        key = date.getFullYear().toString(); // "2024"
      }

      if (!groupedData[key]) {
        groupedData[key] = { name: key, amt: 0 };
      }
      groupedData[key].amt += Number(record.amount);
    });

    let sortedData = Object.values(groupedData);

    if (filter === "month") {
      // Sort by month order
      const monthOrder = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      sortedData.sort(
        (a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name)
      );
    } else if (filter === "year") {
      // Sort by year (ascending order)
      sortedData.sort((a, b) => parseInt(a.name) - parseInt(b.name));
    } else {
      // Sort by date (ascending for daily filter)
      sortedData.sort((a, b) => new Date(a.name) - new Date(b.name));
    }

    setChartData(sortedData);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <select name="" id="" onChange={(e) => setFilterType(e.target.value)}>
        <option value="month" className="text-black">
          Monthly
        </option>
        <option value="day" className="text-black">
          Day
        </option>
        <option value="year" className="text-black">
          Year
        </option>
      </select>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis stroke="#fff" dataKey="name" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar radius={[30, 30, 0, 0]} dataKey="amt">
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.amt < 0 ? "red" : "#8884d8"}
            />
          ))}
        </Bar>
        {/* <Bar radius={[30, 30, 0, 0]} dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
