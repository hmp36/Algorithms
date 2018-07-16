// rFactorial(1) = 1 => 1
// rFactorial(2) = 2 * 1 => 2
// rFactorial(3) = 3 * 2 * 1 => 6
// rFactorial(4) = 4 * 3 * 2 * 1 => 24
// rFactorial(5) = 5 * 4 * 3 * 2 * 1 => 120

function recursiveFactorial(n) {
    if(n===1) {
        return 1;
    }else{
        return n * recursiveFactorial(n-1);
    }
}

// 4 * 6 = 24






function iterativeFactorial(n){
    var multiplier =1;

    for (var i=1;i<=n; i++){
        multiplier *= i
    }
    return multiplier
}
