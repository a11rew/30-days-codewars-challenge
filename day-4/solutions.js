class UrlShortener {
  urls = new Map();

  shorten(longURL) {
    let short = [...longURL]
      .filter((char) => char.toUpperCase() != char.toLowerCase())
      .reverse()
      .slice(0, 4)
      .join("")
      .toLowerCase();
    let url = `short.ly/${short}`;
    if (this.urls.has(url)) {
      if (this.urls.get(url) === longURL) return url;
      let updated = `${url.slice(0, 2)}${
        longURL[this.urls.size % longURL.length]
      }${longURL[(this.urls.size % longURL.length) + 1]}`;
      this.urls.set(updated, longURL);
      return updated;
    } else {
      this.urls.set(url, longURL);
      return url;
    }
  }

  redirect(shortURL) {
    return this.urls.get(shortURL);
  }
}

const urlShortener = new UrlShortener();
let shortUrl1 = urlShortener.shorten(
  "https://www.codewars.com/kata/ef9cab76be6d001de1"
);
