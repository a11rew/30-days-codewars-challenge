snail = function (array) {
  let path = [],
    pastMoves = [];
  let current = [0, 0],
    _current = [0, 0];
  let maxMoves = array.length ** 2 - 1;
  let moveCount = 0;

  const compare = ([a, b], [c, d]) => a === c && b === d;
  const changeDir = () => (lateralIter = ++lateralIter % 4);

  // Clockwise motion
  const moves = {
    RIGHT: ([y, x]) => [y, x + 1],
    DOWN: ([y, x]) => [y + 1, x],
    LEFT: ([y, x]) => [y, x - 1],
    UP: ([y, x]) => [y - 1, x],
  };

  // Traversal
  let lateralIter = 0,
    lateralMoves = 0;

  if (array[current[0]][current[1]]) {
    path.push(array[current[0]][current[1]]);
    pastMoves.push(current);
  }

  while (moveCount < maxMoves) {
    // Move in one direction until end of row (n-1)
    while (lateralMoves < array.length - 1) {
      // Check if cell's already been traversed
      _current = moves[Object.keys(moves)[lateralIter]](current);
      if (pastMoves.find((move) => compare(move, _current))) {
        lateralMoves++;
        continue;
      }
      current = _current;
      path.push(array[current[0]][current[1]]);
      pastMoves.push(current);
      lateralMoves++;
      moveCount++;
    }
    lateralMoves = 0;
    changeDir();
  }

  return path;
};
