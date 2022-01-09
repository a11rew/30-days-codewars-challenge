function createQrCode(string) {
  let bits = "0100";
  let toBits = (e) => {
    let len = e.toString(2);
    // Pad to 8 bits
    while (len.length < 8) len = "0" + len;
    return len;
  };
  bits = bits.concat(toBits(string.length));
  // Append 8 bit binary of ASCII values of each char
  [...string].forEach((e) => (bits = bits.concat(toBits(e.charCodeAt()))));
  // Append terminator
  if (bits.length < 68) {
    bits = bits.concat("0000");
  } else {
    while (bits.length < 72) bits = bits.concat("0");
  }
  // alternately append 11101100 and 00010001
  let alternator = 1;
  while (bits.length < 72) {
    if (alternator % 2 === 0) {
      bits = bits.concat("00010001");
    } else {
      bits = bits.concat("11101100");
    }
    alternator++;
  }
  let _bits = [...bits];
  let vars = [];
  // Split into groups of 8 and cast to decimal
  while (_bits.length > 0) {
    vars.push(parseInt(_bits.splice(0, 8).join(""), 2));
  }

  let leadAlphaExponent = alphaTable[vars[0]];
  let alphaExponents = [
    0, 43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163,
    136,
  ];
  let polynomialCoefficients = [];
  // Add alphas
  for (let i = 0; i < alphaExponents.length; i++) {
    alphaExponents[i] = (alphaExponents[i] + leadAlphaExponent) % 255;
  }
  let integers = [];
  // Exponents back to integers
  for (let i = 0; i < alphaExponents.length; i++) {
    alphaExponents[i] = alphaTable[alphaExponents[i]];
  }
  console.log(alphaExponents, vars);
}

createQrCode("hi");
