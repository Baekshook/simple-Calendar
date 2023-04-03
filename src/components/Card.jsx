import React from "react";

export default function CardA({color, cardName}) {
  return (
    <div className={`${color} w-40 h-60`}>{cardName}</div>
  );
}
