

function loopyLighthouse(range, multiples, words){

  for(var i = range[0] ; i <= range[1] ; i++){

    var string = '';

    i % multiples[0] === 0 && (string += words[0]) ;
    i % multiples[1] === 0 && (string += words[1]) ; // neat trick

    console.log( string || i);

  }

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])