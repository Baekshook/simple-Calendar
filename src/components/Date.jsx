import React from "react";

export default function Date(props) {
  return (
    <li className="inline-block bg-white rounded-lg shadow-md">
      <div className={`bg-red-400 rounded-t-xl px-2 py-1 text-xl text-white`}>
        {props.date}
      </div>
      <ul className="p-2 text-lg">
        {props.todos.map((v, i) => {
          return <li>{v}</li>;
        })}
      </ul>
    </li>
  );
}
