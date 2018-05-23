// (find Average) Given an array with multiple values,
//  write a program that prints the average of the values in the array.

 x = [1,3,5,7,20];
 var sum = 0;
 for(var i = 0; i < x.length; i++)
{
    sum = sum +x[i];
}
var average = sum /x.length;
console.log (average); 