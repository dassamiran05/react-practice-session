import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const initialstate = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state >= 0 ? state + 1 : 0;
    case "decrement":
      return state > 0 ? state - 1 : 0;

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div
      className="w-100 d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "blue", height: "50vh" }}
    >
      <h2 className="text-white mb-3">{state}</h2>
      <div className="d-flex align-items-center justify-content-center gap-3">
        <Button onClick={() => dispatch({ type: "increment" })}>Inc</Button>
        <Button onClick={() => dispatch({ type: "decrement" })}>Dec</Button>
      </div>
    </div>
  );
};

export default UseReducer;
