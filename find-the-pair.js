/*
Problem description (de-obfuscate with ROT-13 as usual).

Tvira n yvfg bs aba-artngvir vagrtref naq n gnetrg fhz, svaq n cnve bs ahzoref gung fhzf gb gur gnetrg fhz.

Rknzcyr:

ine cnve = svaqCnveSbeFhz([3, 34, 4, 12, 5, 2], 9);
pbafbyr.ybt(cnve); // --> [4, 5]
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(array, total){

   var current;

   for(var i = 0 ; i < array.length ; i++){
       current = array.pop();
       for(var j = 0 ; j < array.length ; j++){
           if(current + array[j] == total){
               return [current, array[j]];
           }
       }
       array.unshift(current);
   }

}


var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);