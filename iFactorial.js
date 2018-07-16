// iFactorial(1) = 1 => 1
// iFactorial(2) = 2 * 1 => 2
// iFactorial(3) = 3 * 2 * 1 => 6
// iFactorial(4) = 4 * 3 * 2 * 1 => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1 => 120




function iterativeFactorial(n) {
    var multiplier =1;

    for(var i = 1; i<= n; i++){
        multiplier *= i
    }
    return multiplier
}
console.log(multiplier);
