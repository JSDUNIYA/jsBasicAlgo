function isPrime(n) {
    let p = true;   
   for(let i=0; i <= n; i++){
       
       if(n%2 === 0 ){
           p = false;
       }
   }
   return p;
   }
   
   console.log(isPrime(4))