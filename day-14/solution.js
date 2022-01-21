function catalog(s, article) {
  let tags = s.split("\n").filter((e) => new RegExp(article).test(e));
  let testArticles = tags.map((tag) => {
    let b = [],
      c = {};
    tag.split(">").forEach((e) => {
      if (e.match(/<\//)) b.push([...e.split("</")]);
    });
    b.forEach((e) => {
      c[e[1]] = e[0];
    });
    return `${c.name} > prx: $${c.prx} qty: ${c.qty}`;
  });
  return testArticles.length < 1
    ? "Nothing"
    : testArticles.length == 1
    ? testArticles[0]
    : testArticles.join("\r\n");
}
