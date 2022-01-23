const isUppercase = (char) => char === char.toUpperCase();

function countAndSort(target) {
  let maxPoints = Math.ceil(target.length / 2),
    center = Math.floor(target.length / 2);
  let shots = new Map();

  for (let a = 0; a < target.length; a++) {
    let row = [...target[a]];
    for (let i = 0; i < row.length; i++) {
      if (row[i] == "*") continue;
      let dX = Math.abs(i - center),
        dY = Math.abs(a - center);
      let maxD = dX > dY ? dX : dY;
      let char = row[i],
        score = maxPoints - maxD,
        reps = 1;
      if (isUppercase(char)) {
        score *= 2;
        char = char.toLowerCase();
        reps = 2;
      }
      shots.set(char, {
        reps: (shots.get(char)?.reps || 0) + reps,
        score: (shots.get(char)?.score || 0) + score,
      });
    }
  }

  let unsorted = [];
  for (let i of shots.entries()) unsorted.push(i);

  let sorted = unsorted.sort((a, b) => {
    if (a[1]["score"] != b[1]["score"]) {
      return a[1]["score"] < b[1]["score"] ? -1 : 1;
    } else {
      if (a[1]["reps"] != b[1]["reps"]) {
        return a[1]["reps"] > b[1]["reps"] ? -1 : 1;
      } else return a < b ? -1 : 1;
    }
  });
  return sorted.map((e) => e[0]);
}
