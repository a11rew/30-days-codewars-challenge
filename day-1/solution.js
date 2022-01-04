function guysAloneFromGroup(men, women) {
  if (!men || !women) return [];

  let menList = men.sort((a, b) => b - a);
  let womenList = women.sort((a, b) => b - a);

  let menDateCount = {};
  let menListSize = men.length;

  for (let i = 0; i < menListSize; i++) {
    menDateCount[i] = 0;
  }

  for (let woman of womenList) {
    let possibleDates = [];
    for (let i = 0; i < menListSize; i++) {
      if (menList[i] >= woman) {
        if (menDateCount[i] !== 2) {
          if (menList[i] >= 8) {
            let manData = { index: i, value: menList[i] };
            possibleDates.push(manData);
          } else {
            if (menDateCount[i] !== 1 && menList[i] - woman >= 2) {
              let manData = { index: i, value: menList[i] };
              possibleDates.push(manData);
            }
          }
        }
      }
    }

    possibleDates = possibleDates.sort(
      (a, b) => menDateCount[b.index] - menDateCount[a.index]
    );

    if (possibleDates.length === 0) continue;
    else {
      let bestMan = possibleDates[0];
      for (let i = 1; i < possibleDates.length; i++) {
        let nextMan = possibleDates[i];
        if (bestMan.value < nextMan.value) {
          bestMan = nextMan;
        } else if (bestMan.value > nextMan.value) {
          continue;
        } else if (
          bestMan.value === nextMan.value &&
          menDateCount[nextMan.index] === 0
        ) {
          bestMan = nextMan;
        }
      }
      menDateCount[bestMan.index] = menDateCount[bestMan.index] + 1;
    }
  }

  let guysAlone = [];
  for (let man of Object.keys(menDateCount)) {
    if (menDateCount[man] === 0) guysAlone.push(menList[man]);
  }
  return guysAlone.sort((a, b) => a - b);
}
