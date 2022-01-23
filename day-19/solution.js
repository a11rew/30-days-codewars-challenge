function revrot(_str, sz) {
  let str = [..._str],
    chars = [],
    strs = [];
  if (sz < 1 || str.length < 1 || sz > str.length) return "";

  while (str.length >= sz) chars.push(str.splice(0, sz));

  chars.forEach((char) => {
    if (char.reduce((prev, curr) => prev + curr ** 3, 0) % 2 == 0) {
      strs.push(char.reverse().join(""));
    } else {
      let a = char.shift();
      strs.push(char.join("").concat(a));
    }
  });

  return strs.join("");
}
