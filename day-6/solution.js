function SnakesLadders() {
  let snakes = new Map([
    [16, -6],
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

  console.log(this.board);

  this.p1 = 1;
  this.p2 = 1;
  this.playing = 0;
  this.changePlayer = () => (this.playing = (this.playing + 1) % 2);
}

SnakesLadders.prototype.play = function (die1, die2) {
  let dieValue = die1 === die2 ? die1 : die1 + die2;
  if (this.playing === 0) {
    this.p1 = this.p1 + dieValue;
    let action = this.board.get(this.p1);
    this.p1 = this.p1 + action;
    if (this.board.get(this.p1) !== 0) this.play(0, 0);
    if (!(die1 == die2)) this.changePlayer();
    return `Player 1 is on square ${this.p1}`;
  } else {
    this.p2 = this.p2 + dieValue;
    let action = this.board.get(this.p2);
    this.p2 = this.p2 + action;
    if (this.board.get(this.p2) !== 0) this.play(0, 0);
    if (!(die1 == die2)) this.changePlayer();
    return `Player 2 is on square ${this.p2}`;
  }
};

let game = new SnakesLadders();
console.log(game.play(1, 1));
console.log(game.play(1, 5));
console.log(game.play(6, 2));
