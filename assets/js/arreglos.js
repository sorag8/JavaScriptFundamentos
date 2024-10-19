
//? Son un objeto muy parecido a una lista de información, que contiene un grupo de elementos

//? Usualmente, esa información dentro del arreglo es del mismo tipo de dato

//? [] Siempre que se vean llaves cuadradas, es un arreglo


// const arr = new Array(10);
// const arr = [];
// console.log( arr );


let videoJuegos = [ 'Mario 3','Megaman','Zelda' ];
console.log( videoJuegos );
console.log( { videoJuegos } );
console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Armando',
    1 + 4,
    function(){},
    ()=>{},
    { a: 1 },
    [ 'Megaman','x','Zero','Dr. Light',['Dr. Willy','Wooman'] ],
]
console.log( arregloCosas );

console.log( arregloCosas[0] );
console.log( arregloCosas[2] );
console.log( arregloCosas[7] );
console.log( arregloCosas[7][3] );
console.log( arregloCosas[7][4] );
console.log( arregloCosas[7][4][1] );

