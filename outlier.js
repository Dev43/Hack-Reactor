/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

function isEven(number){
    return number % 2 === 0;
}

function detectOutlierValue(string){
var odd;
var even;
var count = 0;
string.split(" ").forEach(function(element, index){
   if(element % 2 === 0){
       even = index;
       count++;
   } else {
       odd = index;
   }

});

if(count > 1){
    return odd+1;
}
return even + 1 ;
}

console.log(detectOutlierValue("2 4 7 8 10"));
console.log(detectOutlierValue("1 10 1 1"));