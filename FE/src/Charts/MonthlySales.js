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
    month: "January",
    sales: 870,
  },
  {
    month: "Febuary",
    sales: 1000,
  },
  {
    month: "March",
    sales: 1200,
  },
  {
    month: "April",
    sales: 960,
  },
  {
    month: "May",
    sales: 980,
  },
  {
    month: "June",
    sales: 1130,
  },
  {
    month: "July",
    sales: 1200,
  },
  {
    month: "August",
    sales: 1300,
  },
  {
    month: "September",
    sales: 1090,
  },
  {
    month: "October",
    sales: 1040,
  },
  {
    month: "November",
    sales: 960,
  },
  {
    month: "December",
    sales: 880,
  },
];

const MonthlySales = () => {
  return (
    <div className="flex items-center flex-col w-11/12 h-1/4 font-bold bg-white mx-auto mt-3">
      <div className="text-lg my-3"> 월별 판매량</div>
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
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#26A69A"
            activeDot={{ r: 8 }}
            strokeWidth="2px"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlySales;
