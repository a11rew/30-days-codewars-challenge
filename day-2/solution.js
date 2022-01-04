function hexStringToRGB(_hexString) {
  let hexString = _hexString.slice(1);
  let rgb = { r: 0, g: 0, b: 0 };

  for (let i = 0; i < hexString.length; i += 2) {
    rgb[Object.keys(rgb)[i / 2]] = parseInt(hexString.slice(i, i + 2), 16);
  }

  return rgb;
}
