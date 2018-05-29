// Write a program that takes an array of numbers and 
// replaces any number that 's negative to a string called '
// Dojo '. For example if array = [-1, -3, 2] after your program
// is done array should be ['Dojo ', 'Dojo ', 2].

var x = [-1,-3,2];

for(var i=0; i < x.length; i++)
    {
        if (x[i]<0)
        {
            x[i] = "Dojo";
        }
    }
console.log(x);    