function sc(_screws) {
  let screws = [..._screws],
    time = 0,
    screwDriver = screws[0];

  const change = () => {
    screwDriver = screwDriver === "-" ? "+" : "-";
    time += 6;
  };

  while (screws.length) {
    if (screws.shift() != screwDriver) {
      change();
    } else {
      time++;
    }
    if (screws.length > 0) time++;
  }
  return time;
}
