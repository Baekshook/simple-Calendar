// export const fakeUseState = () => {
//   let value;
//   const setValue = () => {};
//   return [value, setValue];
// }; // 배열인 경우

export const fakeUseState = () => {
  let value;
  const setValue = () => {};
  return {value, setValue};
}; // 객체인 경우
