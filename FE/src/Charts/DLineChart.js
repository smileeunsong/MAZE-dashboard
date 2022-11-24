import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "10:00",
    women: 20,
    men: 3,
  },
  {
    name: "11:00",
    women: 32,
    men: 2,
  },
  {
    name: "12:00",
    women: 41,
    men: 31,
  },
  {
    name: "13:00",
    women: 45,
    men: 28,
  },
  {
    name: "14:00",
    women: 52,
    men: 30,
  },
  {
    name: "15:00",
    women: 32,
    men: 11,
  },
  {
    name: "16:00",
    women: 30,
    men: 5,
  },
  {
    name: "17:00",
    women: 33,
    men: 9,
  },
  {
    name: "18:00",
    women: 40,
    men: 10,
  },
  {
    name: "19:00",
    women: 45,
    men: 11,
  },
  {
    name: "20:00",
    women: 50,
    men: 20,
  },
  {
    name: "21:00",
    women: 32,
    men: 10,
  },
  {
    name: "22:00",
    women: 21,
    men: 12,
  },
];

const DLineChart = () => {
  return (
    <div className="flex items-center flex-col w-11/12 h-1/4 font-bold bg-white mx-auto mt-3">
      <div className="text-lg my-3">시간별 판매량</div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          width={300}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="men"
            stroke="#26A69A"
            activeDot={{ r: 8 }}
            strokeWidth="2px"
          />
          <Line
            type="monotone"
            dataKey="women"
            stroke="#5C6BC0"
            strokeWidth="2px"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DLineChart;
