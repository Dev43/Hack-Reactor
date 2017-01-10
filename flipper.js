/*
Problem description (see instructions for how to de-obfuscate).

Syvc rirel cnve bs punenpgref va n fgevat.

Rknzcyr:
ine vachg = 'purpx bhg ubj vagrerfgvat guvf ceboyrz vf, vg\'f vafnaryl vagrerfgvat!';
ine bhgchg = syvcCnvef(vachg);
pbafbyr.ybt(bhgchg); // --> uppr xhb gbu javrgregfav tugfvc beyozrv ,fv 'g favnfralyv gaerfrvgta!
Flip every pair of characters in a string.

Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/

//

function flipPairs(input){

 var stringToArray = input.split("");

 // for each element in the string exhange with the next characters

for(var  i = 0 ; i < stringToArray.length-1 ; i+=2){

    var tmp = stringToArray[i+1];
    stringToArray[i+1] = stringToArray[i];
    stringToArray[i] = tmp;

}

return stringToArray.join("");
}

var input = "check out how interesting this problem is, it's insanely interesting!";
flipPairs(input);


