import { HUMAN, COMPUTER } from "../components/game";

export const checkBlocks = (grid) => {
  let blockingIndex = -1;
  grid.forEach((cell, index) => {
    if (cell.value !== "" && cell.value !== COMPUTER) {
      if (index === 0) {
        if (
          grid[index + 1].value === cell.value &&
          grid[index + 2].value === ""
        ) {
          blockingIndex = index + 2;
        } else if (
          grid[index + 1].value === "" &&
          grid[index + 2].value === cell.value
        ) {
          blockingIndex = index + 1;
        } else if (
          grid[index + 3].value === "" &&
          grid[index + 6].value === cell.value
        ) {
          blockingIndex = index + 3;
        } else if (
          grid[index + 3].value === cell.value &&
          grid[index + 6].value === ""
        ) {
          blockingIndex = index + 6;
        } else if (
          grid[index + 4].value === cell.value &&
          grid[index + 8].value === ""
        ) {
          blockingIndex = index + 8;
        } else if (
          grid[index + 4].value === "" &&
          grid[index + 8].value === cell.value
        ) {
          blockingIndex = index + 4;
        }
      } else if (index === 1) {
        if (
          grid[index + 3].value === "" &&
          grid[index + 6].value === cell.value
        ) {
          blockingIndex = index + 3;
        } else if (
          grid[index + 3].value === cell.value &&
          grid[index + 6].value === ""
        ) {
          blockingIndex = index + 6;
        }
      } else if (index === 2) {
        if (
          grid[index - 2].value === "" &&
          grid[index - 1].value === cell.value
        ) {
          blockingIndex = index - 2;
        } else if (
          grid[index + 2].value === "" &&
          grid[index + 4].value === cell.value
        ) {
          blockingIndex = index + 2;
        } else if (
          grid[index + 2].value === cell.value &&
          grid[index + 4].value === ""
        ) {
          blockingIndex = index + 4;
        } else if (
          grid[index + 3].value === cell.value &&
          grid[index + 6].value === ""
        ) {
          blockingIndex = index + 6;
        } else if (
          grid[index + 3].value === "" &&
          grid[index + 6].value === cell.value
        ) {
          blockingIndex = index + 3;
        }
      } else if (index === 3) {
        if (
          grid[index - 3].value === "" &&
          grid[index + 3].value === cell.value
        ) {
          blockingIndex = index - 3;
        } else if (
          grid[index + 1].value === "" &&
          grid[index + 2].value === cell.value
        ) {
          blockingIndex = index + 1;
        } else if (
          grid[index + 1].value === cell.value &&
          grid[index + 2].value === ""
        ) {
          blockingIndex = index + 2;
        }
      } else if (index === 5) {
        if (
          grid[index - 2].value === "" &&
          grid[index - 1].value === cell.value
        ) {
          blockingIndex = index - 2;
        }
      } else if (index === 6) {
        if (
          grid[index + 1].value === cell.value &&
          grid[index + 2].value === ""
        ) {
          blockingIndex = index + 2;
        } else if (
          grid[index + 1].value === "" &&
          grid[index + 2].value === cell.value
        ) {
          blockingIndex = index + 1;
        } else if (
          grid[index - 2].value === cell.value &&
          grid[index - 4].value === ""
        ) {
          blockingIndex = index - 4;
        }
      } else if (index === 7) {
        if (
          grid[index - 6].value === "" &&
          grid[index - 3].value === cell.value
        ) {
          blockingIndex = index - 6;
        }
      } else if (index === 8) {
        if (
          grid[index - 2].value === "" &&
          grid[index - 1].value === cell.value
        ) {
          blockingIndex = index - 2;
        } else if (
          grid[index - 6].value === "" &&
          grid[index - 3].value === cell.value
        ) {
          blockingIndex = index - 6;
        } else if (
          grid[index - 8].value === "" &&
          grid[index - 4].value === cell.value
        ) {
          blockingIndex = index - 8;
        }
      }
    }
  });
  return blockingIndex;
};

export const checkPossibleWin = (grid) => {
  let winIndex = -1;
  grid.forEach((cell, index) => {
    if (cell.value !== "" && cell.value !== HUMAN) {
      if (index === 0) {
        if (
          grid[index + 1].value === cell.value &&
          grid[index + 2].value === ""
        ) {
          winIndex = index + 2;
        } else if (
          grid[index + 1].value === "" &&
          grid[index + 2].value === cell.value
        ) {
          winIndex = index + 1;
        } else if (
          grid[index + 3].value === "" &&
          grid[index + 6].value === cell.value
        ) {
          winIndex = index + 3;
        } else if (
          grid[index + 3].value === cell.value &&
          grid[index + 6].value === ""
        ) {
          winIndex = index + 6;
        } else if (
          grid[index + 4].value === cell.value &&
          grid[index + 8].value === ""
        ) {
          winIndex = index + 8;
        } else if (
          grid[index + 4].value === "" &&
          grid[index + 8].value === cell.value
        ) {
          winIndex = index + 4;
        }
      } else if (index === 1) {
        if (
          grid[index + 3].value === "" &&
          grid[index + 6].value === cell.value
        ) {
          winIndex = index + 3;
        } else if (
          grid[index + 3].value === cell.value &&
          grid[index + 6].value === ""
        ) {
          winIndex = index + 6;
        }
      } else if (index === 2) {
        if (
          grid[index - 2].value === "" &&
          grid[index - 1].value === cell.value
        ) {
          winIndex = index - 2;
        } else if (
          grid[index + 2].value === "" &&
          grid[index + 4].value === cell.value
        ) {
          winIndex = index + 2;
        } else if (
          grid[index + 2].value === cell.value &&
          grid[index + 4].value === ""
        ) {
          winIndex = index + 4;
        } else if (
          grid[index + 3].value === cell.value &&
          grid[index + 6].value === ""
        ) {
          winIndex = index + 6;
        } else if (
          grid[index + 3].value === "" &&
          grid[index + 6].value === cell.value
        ) {
          winIndex = index + 3;
        }
      } else if (index === 3) {
        if (
          grid[index - 3].value === "" &&
          grid[index + 3].value === cell.value
        ) {
          winIndex = index - 3;
        } else if (
          grid[index + 1].value === "" &&
          grid[index + 2].value === cell.value
        ) {
          winIndex = index + 1;
        } else if (
          grid[index + 1].value === cell.value &&
          grid[index + 2].value === ""
        ) {
          winIndex = index + 2;
        }
      } else if (index === 5) {
        if (
          grid[index - 2].value === "" &&
          grid[index - 1].value === cell.value
        ) {
          winIndex = index - 2;
        }
      } else if (index === 6) {
        if (
          grid[index + 1].value === cell.value &&
          grid[index + 2].value === ""
        ) {
          winIndex = index + 2;
        } else if (
          grid[index + 1].value === "" &&
          grid[index + 2].value === cell.value
        ) {
          winIndex = index + 1;
        } else if (
          grid[index - 2].value === cell.value &&
          grid[index - 4].value === ""
        ) {
          winIndex = index - 4;
        }
      } else if (index === 7) {
        if (
          grid[index - 6].value === "" &&
          grid[index - 3].value === cell.value
        ) {
          winIndex = index - 6;
        }
      } else if (index === 8) {
        if (
          grid[index - 2].value === "" &&
          grid[index - 1].value === cell.value
        ) {
          winIndex = index - 2;
        } else if (
          grid[index - 6].value === "" &&
          grid[index - 3].value === cell.value
        ) {
          winIndex = index - 6;
        } else if (
          grid[index - 8].value === "" &&
          grid[index - 4].value === cell.value
        ) {
          winIndex = index - 8;
        }
      }
    }
  });
  return winIndex;
};

export const checkGameOver = (grid, setGame) => {
  let isOver = true;
  let winner = null;

  grid.forEach((cell, i) => {
    if (cell.value === "") {
      isOver = false;
    }
  });

  if (
    grid[0].value !== "" &&
    grid[0].value === grid[1].value &&
    grid[0].value === grid[2].value
  ) {
    winner = grid[0].value;
    isOver = true;
  }
  if (
    grid[3].value !== "" &&
    grid[3].value === grid[4].value &&
    grid[3].value === grid[5].value
  ) {
    winner = grid[3].value;
    isOver = true;
  }
  if (
    grid[6].value !== "" &&
    grid[6].value === grid[7].value &&
    grid[6].value === grid[8].value
  ) {
    winner = grid[6].value;
    isOver = true;
  }

  if (
    grid[0].value !== "" &&
    grid[0].value === grid[4].value &&
    grid[0].value === grid[8].value
  ) {
    winner = grid[0].value;
    isOver = true;
  }
  if (
    grid[6].value !== "" &&
    grid[6].value === grid[4].value &&
    grid[6].value === grid[2].value
  ) {
    winner = grid[6].value;
    isOver = true;
  }
  if (
    grid[0].value !== "" &&
    grid[0].value === grid[3].value &&
    grid[0].value === grid[6].value
  ) {
    winner = grid[0].value;
    isOver = true;
  }
  if (
    grid[1].value !== "" &&
    grid[1].value === grid[4].value &&
    grid[1].value === grid[7].value
  ) {
    winner = grid[1].value;
    isOver = true;
  }
  if (
    grid[2].value !== "" &&
    grid[2].value === grid[5].value &&
    grid[2].value === grid[8].value
  ) {
    winner = grid[2].value;
    isOver = true;
  }
  setGame({ isOver: isOver, winner: winner });
};
