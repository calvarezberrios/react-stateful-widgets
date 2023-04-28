import React, { useEffect, useState } from "react";
import { checkBlocks, checkGameOver, checkPossibleWin } from "../helpers";

export const COMPUTER = "O";
export const HUMAN = "X";

const Game = () => {
  const [grid, setGrid] = useState([
    { id: "0,0", value: "" },
    { id: "0,1", value: "" },
    { id: "0,2", value: "" },
    { id: "1,0", value: "" },
    { id: "1,1", value: "" },
    { id: "1,2", value: "" },
    { id: "2,0", value: "" },
    { id: "2,1", value: "" },
    { id: "2,2", value: "" },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(HUMAN);
  const [rounds, setRounds] = useState(0);
  const [game, setGame] = useState({ isOver: false, winner: null });
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    if (game.isOver) announceWinner();
    else if (currentPlayer === COMPUTER) computerPlay();
  }, [currentPlayer, announcement, rounds, grid]);

  const makeMove = (cell) => {
    if (!game.isOver) {
      if (currentPlayer === HUMAN && cell.value === "") {
        updateGrid(cell);
        setCurrentPlayer(COMPUTER);
        setRounds(rounds + 1);
      } else if (currentPlayer === COMPUTER && cell.value === "") {
        updateGrid(cell);
        setCurrentPlayer(HUMAN);
      }
      checkGameOver(grid, setGame);
    }
  };

  const updateGrid = (cell) => {
    setGrid(
      grid.map((c) => {
        if (c.id === cell.id) {
          c.value = currentPlayer;
        }
        return c;
      })
    );
  };

  const computerPlay = async () => {
    const blockIndex = checkBlocks(grid);
    const possWinIndex = checkPossibleWin(grid);
    if (possWinIndex !== -1) {
      await makeMove(grid[possWinIndex]);
    } else if (blockIndex !== -1) {
      await makeMove(grid[blockIndex]);
    } else {
      let randIndex = Math.floor(Math.random() * 9);
      while (grid[randIndex].value !== "") {
        randIndex = Math.floor(Math.random() * 9);
      }
      await makeMove(grid[randIndex]);
    }
  };

  const announceWinner = () => {
    setAnnouncement(
      game.winner
        ? `Winner is ${game.winner}! Finished in ${rounds} rounds.`
        : "It's a Tie!"
    );
  };

  return (
    <div className="widget-game container">
      <h2>Tic Tac Toe</h2>
      <h4 className={announcement && "winner"}>
        {announcement ||
          (rounds === 0 && currentPlayer === HUMAN
            ? "Click a spot to start game!"
            : currentPlayer === HUMAN
            ? "Your Turn!"
            : "Computer's Turn")}
      </h4>

      <div className="game">
        {grid.map((cell) => (
          <div
            id={cell.id}
            key={cell.id}
            className="cell"
            style={{
              borderRight:
                (cell.id === "0,0" || cell.id === "2,0" || cell.id === "1,0") &&
                "2px solid black",
              borderBottom:
                (cell.id === "0,0" || cell.id === "0,2" || cell.id === "0,1") &&
                "2px solid black",
              borderLeft:
                (cell.id === "0,2" || cell.id === "2,2" || cell.id === "1,2") &&
                "2px solid black",
              borderTop:
                (cell.id === "2,0" || cell.id === "2,2" || cell.id === "2,1") &&
                "2px solid black",
            }}
            onClick={() => currentPlayer === HUMAN && makeMove(cell)}
          >
            <h3>{cell.value}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setRounds(0);
          setCurrentPlayer(HUMAN);
          setGrid([
            { id: "0,0", value: "" },
            { id: "0,1", value: "" },
            { id: "0,2", value: "" },
            { id: "1,0", value: "" },
            { id: "1,1", value: "" },
            { id: "1,2", value: "" },
            { id: "2,0", value: "" },
            { id: "2,1", value: "" },
            { id: "2,2", value: "" },
          ]);
          setGame({ isOver: false, winner: true });
          setAnnouncement(null);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Game;
