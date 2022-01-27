function wave(str) {
  let arr = [];

  for (let i in str) {
    if (str[i] === " ") continue;
    let char = str[i].toUpperCase(),
      copy = [...str];
    copy.splice(i, 1, str[i].toUpperCase());
    arr.push(copy.join(""));
  }

  return arr;
}
