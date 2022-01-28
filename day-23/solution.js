function prime(num) {
  let arr = [];
  if (num <= 1) return arr;

  l1loop: for (let i = 2; i <= num; i++) {
    for (let j = 2; j < Math.sqrt(num); j++) {
      if (i % j == 0 && j != i) {
        continue l1loop;
      }
    }
    arr.push(i);
  }

  return arr;
}
