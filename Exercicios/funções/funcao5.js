//RECURSIVIDADE

function fatorial(n){
    if (n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))




/*
n! = fatorial do ' n ' 
Fatorial
5! = 5 x 4!
então
n! = n x (n-1)!

1! = 1

*/