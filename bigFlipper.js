

// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'
// */


    function swap(array){

        for(var i = 0 ; i < array.length/2 ; i++){
            var tmp = array[array.length - 1 - i];
            array[array.length -1 - i] = array[i];
            array[i] = tmp;
        }
        return array.join("");

    }


    function flipEveryNChars(input, n){
       var string = "";
       input = input.split("");

       for(var i = 0 ; i < input.length ; i += n ){

           string += swap(input.slice(i, i + n));

        }

       return string;
    }

 var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output);





// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'
// */


    function swap(array){

        for(var i = 0 ; i < array.length/2 ; i++){
            var tmp = array[array.length - 1 - i];
            array[array.length -1 - i] = array[i];
            array[i] = tmp;
        }
        return array.join("");

    }


    function flipEveryNChars(input, n){
       var string = "";
       input = input.split("");

       for(var i = 0 ; i < input.length ; i += n ){

           string += swap(input.slice(i, i + n));

        }

       return string;
    }

 var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output);



