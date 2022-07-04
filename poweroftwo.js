// for loop Bog(o) - o(n)
function power(n) {
  if (n == 0 || n == 1) {
    return true;
  }
  for (let i = 0; i < n; i++) {
    if (n === 2 * i) {
      return true;
    }
  }
  return false;
}

console.log(power(6));

// while loop o(logn)

function power(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 != 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(power(5));

//Bitwise operator Big o - o(1) 

function power(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(power(4));
