function race(v1, v2, g) {
  if (v1 >= v2) return null;

  //   g + t * v1 = t * v2;
  //   g + t(v1) = t (v2);
  //   g = t(v2 - v1)
  //   g / (v2 - v1) = t;

  let t = g / (v2 - v1);
  let time = new Date(t * 60 * 60 * 1000).toISOString().substring(11, 11 + 8);

  return time.split(":").map((e) => parseInt(e));
}
