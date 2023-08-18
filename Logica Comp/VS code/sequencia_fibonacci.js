function Fibonacci(nt) {
    var fibonacciSeq = [0, 1];

    for (var i = 2; i < nt; i++) {
        var proximoTermo = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
        fibonacciSeq.push(proximoTermo);
    }

    return fibonacciSeq;
}

const sequenciaFibonacci = Fibonacci(10);
console.log(sequenciaFibonacci);  