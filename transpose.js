/*
Problem description (see instructions for how to de-obfuscate).

Lbh jvyy or tvira na neenl gung pbagnvaf gjb fgevatf. Lbhe wbo vf gb perngr n shapgvba gung jvyy gnxr gubfr gjb fgevatf naq genafcbfr gurz, fb gung gur fgevatf tb sebz gbc gb obggbz vafgrnq bs yrsg gb evtug.

r.t. genafcbfrGjbFgevatf(['Uryyb','Jbeyq']);

fubhyq erghea:
U J
r b
y e
y y
b q

You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);
*/

function addPadding(array, totalLength){
    while(array.length != totalLength){
        array.push(" ");
    }
    return array;
}


function transposeTwoStrings(array){

   var arr1 = array[0].split("");
   var arr2 = array[1].split("");
   var maxlength;

   if(arr1.length > arr2.length){
       maxlength = arr1.length;
       arr2 = addPadding(arr2, maxlength);
   } else{
       maxlength = arr2.length;
       arr1 = addPadding(arr1, maxlength);
   }

   for(var i = 0 ; i < maxlength; i++){

       console.log(arr1[i] + " " + arr2[i] + "\n");

   }

}



transposeTwoStrings(['Hello','Worldeee']);