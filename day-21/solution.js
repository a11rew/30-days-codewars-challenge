function order(_words) {
  if (!_words) return "";
  let words = _words.split(" ");
  let ret = Array(words.length).fill("");

  words.forEach((word) => {
    let pos = word.match(/([1-9])/)[0] - 1;
    ret.splice(pos, 1, word);
  });

  return ret.join(" ");
}
