//fib(1) => 1
//fib(2) => 1
//fib(3) => 2
//fib(4) => 3
//fib(5) => 5

function iterativeFibonacci(n) {
    var fibs = [0,1];

    for (i=0; i< n; i++) {
        fibs.push(fibs[0] + fibs[1]);
        fibs.shift();
    }
    return fibs[0];
}