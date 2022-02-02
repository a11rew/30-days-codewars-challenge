function productFib(prod) {
  // Initial fib sequence numbers
  let a = 0,
    b = 1;

  // Iterate until product > max
  while (a * b < prod) {
    // F(n) = F(n-1) + F(n-2)
    b = b + a;
    a = b - a;
  }

  return [a, b, a * b === prod];
}
