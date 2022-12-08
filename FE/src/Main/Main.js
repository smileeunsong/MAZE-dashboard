import React, { useContext } from "react";
import DLineChart from "../Charts/DLineChart";
import MenuBarChart from "../Charts/MenuBarChart";
import MonthlySales from "../Charts/MonthlySales";
import UserCalendar from "../Charts/UserCalender";
import NavBar from "../NavBar/NavBar";
import Sales from "./Sales";
import { MainContext } from "./MainContext";
import HeatMap from "../Charts/HeatMap";
import { ImCross } from "react-icons/im";

const Main = () => {
  const context = useContext(MainContext);
  const {
    handleModalClose,
    loading,
    openCModal,
    onClickCloseCModal,
    date,
    dailySalesData,
  } = context;

  const dayOfWeek = date.toString().slice(0, 3);
  const month = date.toString().slice(4, 7);
  const day = date.toString().slice(8, 10);

  if (loading) return <div> Loading....</div>;

  return (
    <div className="relative">
      <div className="bg-gray-200 h-auto">
        <NavBar />
        <div
          onClick={() => {
            handleModalClose();
            onClickCloseCModal();
          }}
        >
          <div>
            <h1 className="m-auto text-3xl mt-7 w-11/12">
              <span className="font-bold">Maze </span>
              <span>Dashboard</span>
            </h1>
            <Sales />
          </div>
          <HeatMap />
        </div>
        <UserCalendar />
        <div onClick={onClickCloseCModal}>
          {/* <LinearGraph /> */}
          <DLineChart />
          <MenuBarChart />
          <MonthlySales />
        </div>
      </div>
      {openCModal && (
        <div
          className="flex relative w-full h-auto "
          onClick={onClickCloseCModal}
        >
          <div className="flex flex-col fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-lg z-10 bg-white w-80 h-96 mt-10">
            <button
              className="absolute right-3 top-3"
              onClick={onClickCloseCModal}
            >
              <ImCross />
            </button>
            <div className="flex flex-col items-center mt-3 text-xl font-bold w-full">
              <div className="mt-8">일별 매출</div>
              <div className="mt-10">
                {month} {day} {dayOfWeek}
              </div>
            </div>
            <div className="mt-20 text-2xl">
              <span className="ml-10">매출액 : </span>
              <span className="font-bold">
                {dailySalesData?.[0]?.salesAmount
                  ? dailySalesData?.[0]?.salesAmount
                  : "0"}{" "}
                원
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
