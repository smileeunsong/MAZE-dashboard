import React, { useState } from "react";
import Calendar from "react-calendar";
import "./UserCalendar.css";

function UserCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex justify-center my-5">
      <div className="app">
        <h1 className="header text-xl font-bold flex justify-center">
          Calendar
        </h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    </div>
  );
}

export default UserCalendar;