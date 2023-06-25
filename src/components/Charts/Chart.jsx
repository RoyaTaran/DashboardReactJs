import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./Chart.css";

export default function Chart({ title, data, dataKey, grid,aspect }) {
  return (
    <div className="MonthChart">
      <h3 className="chartTitle">{title}</h3>

      <ResponsiveContainer width="85%" aspect={aspect}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" style={{ fontSize: "1em" }} />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
