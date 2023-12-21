import React, { useState } from "react";
import Square from "./Square";
import "./style.css";

const TicTacToe = () => {
  const initialState = Array(9).fill({ value: "", color: "" });
  const [resArr, setResarr] = useState(initialState);
  const [isXturn, setIsxturn] = useState(false);
  // const [color, setColor] = useState("");


  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        resArr[a].value !== "" &&
        resArr[a].value === resArr[b].value &&
        resArr[a].value === resArr[c].value
      ) {
        return resArr[a].value;
      }
    }

    return false;
  };

  const winner = checkWinner();

  const handleinputValue = (index) => {
    const copy = [...resArr];

    if (copy[index].value) return;
    // console.log(copy);
    // copy[index].value = isXturn ? "O" : "X";
    // copy[index].color = isXturn ?"#27b139" : "#d90a0a" ;
    // item.value = isXturn ? "O" : "X" : ""
    const newArr = copy.map((item, indx) =>
      indx === index
        ? {
            ...item,
            value: isXturn ? "O" : "X",
            color: isXturn ? "#27b139" : "#d90a0a",
          }
        : item
    );
    // setColor( isXturn ?"#27b139" : "#d90a0a");

    setIsxturn(!isXturn);
    setResarr(newArr);
  };
  return (
    <>
      <div className="board-container">
        <h2>
          Player
          <span style={{ color: isXturn ? "#27b139" : "#d90a0a" }}>
            &nbsp;{isXturn ? "O" : "X"}
          </span>{" "}
          please move
        </h2>
        <div className="sam">
          <div className="board-row">
            <Square
              value={resArr[0].value}
              onClick={() => handleinputValue(0)}
              color={resArr[0].color}
            />
            <Square
              value={resArr[1].value}
              onClick={() => handleinputValue(1)}
              color={resArr[1].color}
            />
            <Square
              value={resArr[2].value}
              onClick={() => handleinputValue(2)}
              color={resArr[2].color}
            />
          </div>
          <div className="board-row">
            <Square
              value={resArr[3].value}
              onClick={() => handleinputValue(3)}
              color={resArr[3].color}
            />
            <Square
              value={resArr[4].value}
              onClick={() => handleinputValue(4)}
              color={resArr[4].color}
            />
            <Square
              value={resArr[5].value}
              onClick={() => handleinputValue(5)}
              color={resArr[5].color}
            />
          </div>
          <div className="board-row">
            <Square
              value={resArr[6].value}
              onClick={() => handleinputValue(6)}
              color={resArr[6].color}
            />
            <Square
              value={resArr[7].value}
              onClick={() => handleinputValue(7)}
              color={resArr[7].color}
            />
            <Square
              value={resArr[8].value}
              onClick={() => handleinputValue(8)}
              color={resArr[8].color}
            />
          </div>
        </div>
        {winner && (
          <>
            <h2>
              <span style={{ color: winner === "X" ? "#d90a0a" : "#27b139" }}>
                {winner}
              </span>{" "}
              has won
            </h2>
            <button
              className="btn"
              onClick={() => {
                setResarr(initialState);
              }}
            >
              Play again
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default TicTacToe;
