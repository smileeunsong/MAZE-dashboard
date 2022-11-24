import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "아메리카노",
    판매량: 71,
  },
  {
    name: "카페라떼",
    판매량: 41,
  },
  {
    name: "콜드브루",
    판매량: 38,
  },
  {
    name: "카모마일",
    판매량: 32,
  },
  {
    name: "카페모카",
    판매량: 31,
  },
  {
    name: "핫초코",
    판매량: 21,
  },
  {
    name: "아인슈페너",
    판매량: 20,
  },
  {
    name: "요거트스무디",
    판매량: 19,
  },
  {
    name: "아이스티",
    판매량: 16,
  },
  {
    name: "딸기라떼",
    판매량: 16,
  },
];

const MenuBarChart = () => {
  return (
    <div className="flex items-center flex-col w-11/12 h-1/4 font-bold bg-white mx-auto mt-3">
      <div className="text-lg my-3">메뉴별 판매량</div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="판매량" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MenuBarChart;
