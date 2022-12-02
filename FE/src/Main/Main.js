import React, { useContext } from "react";
import DLineChart from "../Charts/DLineChart";
import MenuBarChart from "../Charts/MenuBarChart";
import MonthlySales from "../Charts/MonthlySales";
import UserCalendar from "../Charts/UserCalender";
import NavBar from "../NavBar/NavBar";
import Sales from "./Sales";
import { MainContext } from "./MainContext";

const Main = () => {
  const context = useContext(MainContext);
  const { handleModalClose, loading, kakaoData } = context;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-200 h-auto">
      <NavBar />
      <div onClick={handleModalClose}>
        <div className="p-7">
          <h1 className="text-3xl">
            <span className="font-bold">Maze </span>
            <span>Dashboard</span>
          </h1>
          <Sales />
        </div>
        <DLineChart />
        <MenuBarChart />
        <MonthlySales />
        <UserCalendar />
      </div>
    </div>
  );
};

export default Main;
