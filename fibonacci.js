function fib(n) {
  let z = [0, 1];
  while (n > 2) {
    z.push(z[z.length - 2] + z[z.length - 1]);
    n--;
  }
  return n == 0 || n == 1 ? [0] : z;
}

console.log(fib(7));
