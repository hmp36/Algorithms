// Given an array x(e.g.[1, 5, 10, -2]), create an 
// algorithm(sets of instructions) that prints the 
// maximum number in the array, minimum value in the
//  array as well as the average values in the array.

var x = [1,5,10,-2]
var max = x[0];
var min = x[0];
var sum = 0;
sum = sum+x[0];

for (var i=1; i<x.length; i++)
{
    if(x[i]>max)
    {
        max = x[i];
    }
    if(x[i]<min) 
    {
        min = x[i];
    }
    sum = sum + x[i]; 
}

console.log ('Max is', max);
console.log('Min is', min);
console.log('Average is', sum/x.length);






