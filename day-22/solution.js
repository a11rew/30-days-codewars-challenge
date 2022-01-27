function mean(town, strng) {
  let data = strng.split("\n").find((e) => e.match(new RegExp(town)));
  if (!data) return -1;
  let [_town, rainfall] = data.split(":");
  if (town != _town) return -1;
  let months = rainfall.split(",");

  return (
    months.reduce((prev, curr) => {
      let [, rain] = curr.split(" ");
      return prev + parseFloat(rain);
    }, 0) / months.length
  );
}

function variance(town, strng) {
  let _mean = mean(town, strng);
  let data = strng.split("\n").find((e) => e.match(new RegExp(town)));
  if (!data) return -1;
  let [_town, rainfall] = data.split(":");
  if (town != _town) return -1;
  let months = rainfall.split(",");

  return (
    months.reduce((prev, curr) => {
      let [, rain] = curr.split(" ");
      return prev + (_mean - parseFloat(rain)) ** 2;
    }, 0) / months.length
  );
}
