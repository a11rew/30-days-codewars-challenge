function alphabetPosition(text) {
  let alphabets = Array.from(Array(26))
    .map((_, i) => i + 65)
    .map((x) => String.fromCharCode(x));
  let positions = [];

  [...text].forEach((e) => {
    if (alphabets.includes(e.toUpperCase()))
      positions.push(alphabets.indexOf(e.toUpperCase()) + 1);
  });
  return positions.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.");
