import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center flex-column gap-2">
      <h2 className="fs-3 fw-bold">{counter}</h2>
      <div className="d-flex gap-2 align-items-center">
        {/* <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button> */}
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter === 0 ? 0 : counter - 1)}
        >
          Decrement
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 5)}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
