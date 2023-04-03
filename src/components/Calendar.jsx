import React from "react";
import Date from "./Date";
import calendarData from "../calendarData.json";

export default function Calender() {
  return (
    <div className="bg-white w-1/2 rounded-lg shadow-2xl p-8">
      <div className="pb-8 text-4xl font-bold">2023, 04</div>
      <ul className="grid grid-cols-7 gap-4">
        {calendarData.map((v, i) => {
          return <Date key={i} date={v.date} day={v.day} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
}
