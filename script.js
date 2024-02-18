let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function placeMarker(index) {
  if (!board[index]) {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;
    if (checkWinner()) {
      alert(currentPlayer + ' ganhou!');
      resetBoard();
    } else if (checkDraw()) {
      alert('Empate!');
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  return winningCombos.some(combo => {
    return combo.every(index => {
      return board[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetBoard() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('board').querySelectorAll('.cell').forEach(cell => {
    cell.innerText = '';
  });
}
