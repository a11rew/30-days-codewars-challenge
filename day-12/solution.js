function scoreTest(str, right, omit, wrong) {
  return str.reduce(
    (prev, next) =>
      next < 1 ? prev + right : next % 2 == 0 ? prev + wrong : prev + omit,
    0
  );
}

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1));
