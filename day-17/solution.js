Array.prototype.sameStructureAs = function (other) {
  let a = [],
    b = [];
  if (this.length != other.length) return false;

  for (let i = 0; i < this.length; i++) {
    let _a = this[i],
      _b = other[i];
    if (isArray(_a) != isArray(_b)) return false;
    if (isArray(_a)) {
      a.push(..._a);
      b.push(..._b);
    }
  }

  if (a.length > 0) return a.sameStructureAs(b);
  return true;
};
