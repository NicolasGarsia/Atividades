function Fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        var fatorial = 1;
        for (var i = 2; i <= n; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

console.log(Fatorial(5));  
console.log(Fatorial(0));   

