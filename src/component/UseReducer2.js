import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const initialstate = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload,
        },
      ];
    case "DELETE_TASK":
      return state.filter((item) => item?.id !== action.payload);
    case "RESET_TASK":
      return init(action.payload);

    default:
      return state;
  }
};

function init(initialstate) {
  return initialstate;
}

const UseReducer2 = () => {
  const [todos, dispatch] = useReducer(reducer, initialstate, init);
  console.log(todos);
  return (
    <div
      className="w-100 d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "blue", height: "50vh" }}
    >
      <div className="d-flex align-items-center justify-content-center gap-3">
        <input
          type="text"
          onBlur={(e) =>
            dispatch({ type: "ADD_TASK", payload: e.target.value })
          }
        />
        <Button
          onClick={() =>
            dispatch({ type: "RESET_TASK", payload: initialstate })
          }
        >
          Reset
        </Button>
      </div>

      {todos?.length > 0 && (
        <div className="mt-2">
          {todos?.map((todo) => (
            <li key={todo?.id} className="text-white mb-1">
              {todo.title}
              <span>
                <Button
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: todo.id })
                  }
                >
                  Delete
                </Button>
              </span>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default UseReducer2;
