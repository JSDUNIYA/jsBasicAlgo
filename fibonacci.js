// Big 0 - o(n)
function fib(n) {
  let z = [0, 1];
  while (n > 2) {
    z.push(z[z.length - 2] + z[z.length - 1]);
    n--;
  }
  return n == 0 || n == 1 ? [0] : z;
}

console.log(fib(7));


//recurisive fibonaci solution 1st try 

var  x = [0,1];
function recfibonaci(n){
    if(n == 1){
        return x[x.length-1];
    } else if (n == 0){
        return x[x.length-2] 
    } else {
        x.push(x[x.length-1] + x[x.length-2])
    }
    return recfibonaci(n-1);
}

console.log(recfibonaci(6))

// Best recursive solution 0(2N) this is not good solution

function recusriveFibonaci(n){
    if(n < 2){
        return n;
    }
    return recusriveFibonaci(n-1) + recusriveFibonaci(n-2);
}
console.log(recusriveFibonaci(6))