/*
Problem description (de-obfuscate with ROT-13 as usual).
There's an extra hint in there, too, if you need it!

Focus on getting a working solution with the tools you know well.
Practice the interactive/collaborative interview style that's described in the documentation.

Vf bar fgevat n ebgngrq irefvba bs nabgure?

Sbe rknzcyr:
Fgevat 1: 'uryyb jbeyq'
Fgevat 2: 'beyquryyb j'

Rkgen uvag: (qr-boshfpngr jvgu EBG-20, gurer'f n qebcqbja ba uggc://ebg13.pbz gb fryrpg gung)
By rhn whnuex max lmkbgz, rhn'ee ux mh mkbobteer ybgw tghmaxk lmkbgz bglbwx bm nlbgz kxznetk Lmkbgz fxmahwl.

Whnuexw lmkbgz: 'axeeh phkewaxeeh phkew'
Lxtkva p/bg bm: '       hkewaxeeh p    '

String 1: 'hello world'
String 2: 'orldhello w'
*/

function isRotated(str1, str2) {

    var newString = str1 + str1;
    console.log(newString);
    console.log(str2);

    if(newString.includes(str2)){
        return true;
    }

    return false;

}

isRotated('orld hihello w', 'hello world hi');
