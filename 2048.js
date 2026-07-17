const boardElement = document.getElementById('board');
const scoreElement = document.getElementById('score');
const bestScoreElement = document.getElementById('best-score');
const messageElement = document.getElementById('message');
const messageText = document.getElementById('message-text');
const messageButton = document.getElementById('message-button');
const newGameButton = document.getElementById('new-game');
const undoButton = document.getElementById('undo');

const GRID_SIZE = 4;
let grid = [];
let score = 0;
let bestScore = Number(localStorage.getItem('bestScore') || 0);
let gameOver = false;
let history = [];
let touchStartX = 0;
let touchStartY = 0;
let touchMoved = false;

function createEmptyGrid() {
  return Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
}

function getEmptyCells() {
  const emptyCells = [];
  grid.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value === 0) emptyCells.push({ row: rowIndex, col: colIndex });
    });
  });
  return emptyCells;
}

function spawnTile() {
  const emptyCells = getEmptyCells();
  if (emptyCells.length === 0) return;
  const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  grid[row][col] = Math.random() < 0.9 ? 2 : 4;
}

function updateScore() {
  scoreElement.textContent = score;
  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem('bestScore', bestScore);
  }
  bestScoreElement.textContent = bestScore;
}

function updateUndoButton() {
  undoButton.disabled = history.length === 0 || gameOver;
}

function render() {
  boardElement.innerHTML = '';
  grid.forEach(row => {
    row.forEach(value => {
      const cell = document.createElement('div');
      cell.className = `tile ${value === 0 ? 'empty' : 'new'}`;
      if (value !== 0) {
        cell.dataset.value = value;
        cell.textContent = value;
      }
      boardElement.appendChild(cell);
    });
  });
  updateUndoButton();
}

function saveState() {
  history.push({
    grid: grid.map(row => [...row]),
    score,
  });
  if (history.length > 20) history.shift();
}

function showMessage(text) {
  messageText.textContent = text;
  messageElement.classList.add('show');
}

function hideMessage() {
  messageElement.classList.remove('show');
}

function hasMovesLeft() {
  if (getEmptyCells().length > 0) return true;
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      const value = grid[row][col];
      if (col < GRID_SIZE - 1 && value === grid[row][col + 1]) return true;
      if (row < GRID_SIZE - 1 && value === grid[row + 1][col]) return true;
    }
  }
  return false;
}

function moveRowLeft(row) {
  const filtered = row.filter(value => value !== 0);
  const merged = [];
  let skip = false;

  for (let i = 0; i < filtered.length; i++) {
    if (skip) {
      skip = false;
      continue;
    }

    if (filtered[i] === filtered[i + 1]) {
      const newValue = filtered[i] * 2;
      score += newValue;
      merged.push(newValue);
      skip = true;
    } else {
      merged.push(filtered[i]);
    }
  }

  while (merged.length < GRID_SIZE) {
    merged.push(0);
  }

  return merged;
}

function rotateGridClockwise(matrix) {
  const rotated = createEmptyGrid();
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      rotated[col][GRID_SIZE - 1 - row] = matrix[row][col];
    }
  }
  return rotated;
}

function move(direction) {
  if (gameOver) return;

  let moved = false;
  let newGrid = grid.map(row => [...row]);

  if (direction === 'left') {
    newGrid = newGrid.map(moveRowLeft);
  } else if (direction === 'right') {
    newGrid = newGrid.map(row => moveRowLeft([...row].reverse()).reverse());
  } else if (direction === 'up') {
    newGrid = rotateGridClockwise(newGrid);
    newGrid = newGrid.map(moveRowLeft);
    newGrid = rotateGridClockwise(rotateGridClockwise(rotateGridClockwise(newGrid)));
  } else if (direction === 'down') {
    newGrid = rotateGridClockwise(newGrid);
    newGrid = newGrid.map(row => moveRowLeft([...row].reverse()).reverse());
    newGrid = rotateGridClockwise(rotateGridClockwise(rotateGridClockwise(newGrid)));
  }

  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] !== newGrid[row][col]) {
        moved = true;
        break;
      }
    }
    if (moved) break;
  }

  if (!moved) return;

  saveState();
  grid = newGrid;
  spawnTile();
  updateScore();
  render();

  if (!hasMovesLeft()) {
    gameOver = true;
    showMessage('게임 오버! 새 게임을 눌러 다시 시작하세요.');
  }
}

function undo() {
  if (history.length === 0 || gameOver) return;
  const lastState = history.pop();
  grid = lastState.grid.map(row => [...row]);
  score = lastState.score;
  gameOver = false;
  hideMessage();
  updateScore();
  render();
}

function startGame() {
  grid = createEmptyGrid();
  score = 0;
  gameOver = false;
  history = [];
  hideMessage();
  spawnTile();
  spawnTile();
  updateScore();
  render();
}

function getSwipeDirection(dx, dy) {
  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? 'right' : 'left';
  }
  return dy > 0 ? 'down' : 'up';
}

boardElement.addEventListener('touchstart', event => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
  touchMoved = false;
});

boardElement.addEventListener('touchmove', event => {
  touchMoved = true;
});

boardElement.addEventListener('touchend', event => {
  if (!touchMoved) return;
  const touch = event.changedTouches[0];
  const dx = touch.clientX - touchStartX;
  const dy = touch.clientY - touchStartY;
  if (Math.sqrt(dx * dx + dy * dy) < 30) return;
  const direction = getSwipeDirection(dx, dy);
  move(direction);
});

window.addEventListener('keydown', event => {
  const keyName = event.key;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(keyName)) {
    event.preventDefault();
    if (keyName === 'ArrowUp' || keyName === 'w' || keyName === 'W') move('up');
    if (keyName === 'ArrowDown' || keyName === 's' || keyName === 'S') move('down');
    if (keyName === 'ArrowLeft' || keyName === 'a' || keyName === 'A') move('left');
    if (keyName === 'ArrowRight' || keyName === 'd' || keyName === 'D') move('right');
  }
});

newGameButton.addEventListener('click', startGame);
undoButton.addEventListener('click', undo);
messageButton.addEventListener('click', startGame);

updateScore();
startGame();
