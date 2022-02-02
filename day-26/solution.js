function dataReverse(data) {
  let arr = [];

  while (data.length) {
    // Splice 8 bits and append to index 0 of array
    arr.unshift(data.splice(0, 8));
  }
  // Flatten array of arrays from splice
  return arr.flat();
}
