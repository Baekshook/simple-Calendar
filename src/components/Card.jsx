import React, { useState } from "react";
import { fakeUseState } from "../fakeHooks";

export default function CardA({ color, cardName }) {
  const [count, setCount] = useState();
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const { setValue, value } = fakeUseState(); // 객체인 경우 이렇게 받아오기
  const { setValue: setNum3, value: num3 } = fakeUseState();
  const { setValue: setNum4, value: num4 } = fakeUseState();

  return <div className={`${color} w-40 h-60`}>{cardName}</div>;
}
