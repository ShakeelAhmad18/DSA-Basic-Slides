


function factorial(n){

    let fact;

    if(n >=1){

        fact=factorial(n-1) * n
    }
    else{
        fact=1
    }

    return fact;

}


console.log(factorial(3))

function Fabonaaci(n){
    let fib=0;

    if (n > 2){
      fib = Fabonaaci(n-1) + Fabonaaci(n-2);
      //console.log(fib)
    }
    else if (n == 2){
      fib = 1;
       //console.log(fib)
    } 
     else {
      fib = 0;
      //console.log(fib)
    }
    
   return console.log(fib);


}

Fabonaaci(6)

