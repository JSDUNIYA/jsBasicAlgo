function isPrime(n) {
  let p = true;
  if (n < 2) {
    return p;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      p = false;
    }
  }
  return p;
}

console.log(isPrime(5));
