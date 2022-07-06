// normal factorial

function factorial(n){
    let sum =1;
    while(n > 0){
        sum = sum * n
        n--;
    }
    return sum;
}
console.log(factorial(0));

// recusrive factorial o(n)

function recusrivefactorial(n){
    if(n == 0){
        return 1;
    }
    return n * recusrivefactorial(n-1);
}
console.log(recusrivefactorial(5))