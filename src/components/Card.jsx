import React from "react";

export default function CardA(props) {
  return (
    <div className={`bg-${props.color}-100 w-40 h-60`}>{props.cardName}</div>
  );
}
