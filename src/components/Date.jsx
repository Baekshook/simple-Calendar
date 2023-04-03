import React from "react";

export default function Date(props) {
  return (
    <li className="inline-block bg-white rounded-lg shadow-md">
      <div
        className={`${
          props.day === "SUN" ? "bg-red-400" : props.day === "SAT" ? "bg-orange-400" : "bg-blue-400"
        } rounded-t-xl px-2 py-1 text-xl text-white`}
      >
        {props.date}
      </div>
      <ul className="p-2 text-lg h-20">
        {props.todos.map((v, i) => {
          return <li>{v}</li>;
        })}
      </ul>
    </li>
  );
}
