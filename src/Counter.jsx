import React from "react";

const Counter = () => {
    let count = 1;
  return (
    <button onClick={() =>++count}>
    count is {count}
  </button>
  );
};

export default Counter;
