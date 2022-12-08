import React, { useContext } from "react";
import Calendar from "react-calendar";
import { MainContext } from "../Main/MainContext";
import "./UserCalendar.css";

function UserCalendar() {
  const context = useContext(MainContext);
  const { date, setDate, onClickOpenCModal, handleDayClick } = context;

  const doubleEvent = () => {
    onClickOpenCModal();
    handleDayClick();
  };

  return (
    <>
      <div className="flex justify-center relative">
        <div className="app my-5 flex flex-col justify-center ">
          <div className="w-full flex justify-center">
            <h1 className="header text-lg font-bold flex justify-center w-11/12 bg-white py-1">
              일별 매출확인
            </h1>
          </div>
          <div className="calendar-container">
            <Calendar
              onChange={setDate}
              value={date}
              onClickDay={doubleEvent}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCalendar;
