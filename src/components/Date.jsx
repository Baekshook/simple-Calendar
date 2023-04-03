import React from "react";

export default function Date(props) {
  return (
    <li className="inline-block bg-white rounded-lg shadow-md">
      <div
        className={`${
          props.day === "SUN"
            ? "bg-red-400"
            : props.day === "SAT"
            ? "bg-orange-400"
            : "bg-blue-400"
        } rounded-t-lg px-2 py-1 text-sm text-white`}
      >
        {props.date}
      </div>
      <ul className="p-2 text-xs min-h-[80px] font-semibold">
        {props.todos.map((v, i) => {
          return <li className="truncate">{v}</li>;
        })}
      </ul>
    </li>
  );
}
