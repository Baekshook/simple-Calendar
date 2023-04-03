import React from "react";

export default function CardA(props) {
  return (
    <div className={`${props.color} w-40 h-60`}>{props.cardName}</div>
  );
}
