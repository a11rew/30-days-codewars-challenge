function jumpTo(_n) {
  let current = 0,
    moves = 0,
    n = Math.abs(_n);

  while (current < n || (current - n) % 2) {
    moves++;
    current += moves;
    console.log(current, moves);
  }
  return moves;
}

console.log(jumpTo(100));
