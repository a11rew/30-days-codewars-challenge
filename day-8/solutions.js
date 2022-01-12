const InterlacedSpiralCipher = {};

InterlacedSpiralCipher.encode = function (_str) {
  let arr = [];
  let str = [..._str];
  // Generate max length square matrix that would fit string
  let max = Math.ceil(Math.sqrt(str.length));
  let end = max - 1;
  // Generate matrix
  for (let i = 0; i < max; i++) {
    arr.push([]);
    for (let j = 0; j < max; j++) arr[i][j] = null;
  }
  // Populate corners
  arr[0][0] = str.shift();
  arr[0][end] = str.shift();
  arr[end][end] = str.shift();
  arr[end][0] = str.shift();

  let level = 0;

  function fill() {
    for (let a = 0; a < max - 2; a++) {
      // Right
      for (let i = 0; i < end; i++) {
        if (!arr[level][i]) {
          arr[level][i] = str.shift();
          break;
        }
      }
      // Down
      for (let i = 0; i < end; i++) {
        if (!arr[i][end - level]) {
          arr[i][end - level] = str.shift();
          break;
        }
      }
      // Left
      for (let i = 0; i < end; i++) {
        if (!arr[end - level][end - i]) {
          arr[end - level][end - i] = str.shift();
          break;
        }
      }
      // Up
      for (let i = 0; i < end; i++) {
        if (!arr[end - i][level]) {
          arr[end - i][level] = str.shift();
          break;
        }
      }
    }

    if (max - 2 * level > 0) {
      level++;
      fill();
    }
  }

  fill();
  console.log(arr);
  let output = "";
  arr.map((row) => {
    row.forEach((char) => {
      if (char) {
        output = output.concat(char);
      } else {
        output = output.concat(" ");
      }
    });
  });
  console.log(output);
};

InterlacedSpiralCipher.decode = function (_str) {
  let arr = [];
  let str = [..._str];
  // Generate max length square matrix that would fit string
  let max = Math.ceil(Math.sqrt(str.length));
  let end = max - 1;
  // Generate matrix
  for (let i = 0; i < max; i++) {
    arr.push([]);
    for (let j = 0; j < max; j++) arr[i][j] = str.shift();
  }
  let output = "";

  // Corners
  output += arr[0][0];
  output += arr[0][end];
  output += arr[end][end];
  output += arr[end][0];

  function unwind() {
    for (let a = 0; a < max - 2; a++) {
      // Right
      for (let i = 0; i < end; i++) {
        if (arr[level][i]) {
          output = arr[level][i];
          arr[level][i] = null;
          break;
        }
      }
      // Down
      for (let i = 0; i < end; i++) {
        if (!arr[i][end - level]) {
          arr[i][end - level] = str.shift();
          break;
        }
      }
      // Left
      for (let i = 0; i < end; i++) {
        if (!arr[end - level][end - i]) {
          arr[end - level][end - i] = str.shift();
          break;
        }
      }
      // Up
      for (let i = 0; i < end; i++) {
        if (!arr[end - i][level]) {
          arr[end - i][level] = str.shift();
          break;
        }
      }
    }

    if (max - 2 * level > 0) {
      level++;
      unwind();
    }
  }
  unwind();

  console.log(output);
};

let phrase1A = `Romani ite domum`;
let phrase1B = `Rntodomiimuea  m`;

console.log(
  // InterlacedSpiralCipher.encode(phrase1A) ===
  InterlacedSpiralCipher.decode(phrase1B)
);
