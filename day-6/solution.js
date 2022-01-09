function SnakesLadders() {
  let snakes = new Map([
    [16, -10],
    [49, -38],
    [46, -21],
    [64, -4],
    [62, -43],
    [74, -21],
    [89, -21],
    [92, -4],
    [95, -20],
    [99, -19],
  ]);
  let ladders = new Map([
    [2, 36],
    [7, 7],
    [8, 23],
    [15, 11],
    [21, 21],
    [28, 56],
    [36, 8],
    [51, 16],
    [71, 20],
    [78, 20],
    [87, 7],
  ]);
  let board = new Map();
  for (let a = 1; a < 101; a++) board.set(a, 0);
  this.board = new Map([...board, ...snakes, ...ladders]);
  this.p1 = 0;
  this.p2 = 0;
  this.playing = 0;
  this.changePlayer = () => (this.playing = (this.playing + 1) % 2);
  this.ended = false;
}

SnakesLadders.prototype.play = function (die1, die2) {
  if (this.ended) return `Game over!`;
  let dieValue = die1 + die2;
  let player = this.playing == 0 ? "p1" : "p2";
  this[player] = this[player] + dieValue;
  if (this[player] > 100) this[player] = 100 - (this[player] % 100);
  let action = this.board.get(this[player]);
  this[player] = this[player] + action;
  if (this.board.get(this[player]) !== 0) this.play(0, 0);
  if (die1 !== die2) this.changePlayer();
  if (this[player] === 100) {
    this.ended = true;
    return `Player ${player[1]} Wins!`;
  }
  return `Player ${player[1]} is on square ${this[player]}`;
};
