import React, { useState, useMemo } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);
  const [counter, setCounter] = useState(0);

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  };

  // function to square the value
  function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
  }

  return (
    <div className="App">
      <h1>Welcome to Geeksforgeeks</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>

      <div>SQUARE OUTPUT: {squaredNum}</div>
      <button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  );
};

export default Memo;
